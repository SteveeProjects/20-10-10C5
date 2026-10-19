/* =========================================================
   10C5 — Women's Day
   Logic điều hướng & tương tác.
   Không dùng innerHTML với dữ liệu người dùng.
   ========================================================= */

'use strict';

(function () {

  /* ---------------- Utilities ---------------- */

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const prefersReducedMotion = () =>
    !!(window.matchMedia &&
       window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /** Chuẩn hoá: bỏ dấu tiếng Việt, hạ chữ, gom khoảng trắng. */
  function normalize(str) {
    if (typeof str !== 'string') return '';
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, ' ');
  }

  /* ---------------- State ---------------- */

  const state = {
    screen: 'intro',
    recipient: null,
    introTimers: [],
    introDone: false,
    videoFailed: false
  };

  /* ---------------- Navigation ---------------- */

  function showScreen(name) {
    const screens = $$('.screen');
    screens.forEach(s => {
      const isTarget = s.dataset.screen === name;
      s.classList.toggle('is-active', isTarget);
      if (isTarget) {
        s.classList.remove('screen--enter');
        void s.offsetWidth;
        s.classList.add('screen--enter');
      }
    });
    state.screen = name;
    try { window.scrollTo({ top: 0, behavior: 'auto' }); }
    catch (e) { window.scrollTo(0, 0); }
  }

  /* ---------------- INTRO ---------------- */

  const INTRO_TEXT = "HAPPY WOMEN'S DAY";

  function clearIntroTimers() {
    state.introTimers.forEach(clearTimeout);
    state.introTimers = [];
  }

  function revealFullIntro() {
    clearIntroTimers();
    state.introDone = true;
    const h = $('#introHeadline');
    h.textContent = INTRO_TEXT;
    h.dataset.done = '1';
    $('#introDate').hidden = false;
    $('#introSub').hidden  = false;
    $('#startBtn').hidden  = false;
    $('#skipBtn').hidden   = true;
  }

  function runIntro() {
    const headline = $('#introHeadline');
    const date     = $('#introDate');
    const sub      = $('#introSub');
    const startBtn = $('#startBtn');
    const skipBtn  = $('#skipBtn');

    headline.textContent = '';
    delete headline.dataset.done;
    date.hidden = true; date.classList.remove('fade-in');
    sub.hidden  = true; sub.classList.remove('fade-in');
    startBtn.hidden = true; startBtn.classList.remove('fade-in');
    skipBtn.hidden = false;

    state.introDone = false;
    clearIntroTimers();

    if (prefersReducedMotion()) { revealFullIntro(); return; }

    let i = 0;
    const STEP = 60;

    (function type() {
      if (state.introDone) return;
      if (i <= INTRO_TEXT.length) {
        headline.textContent = INTRO_TEXT.slice(0, i);
        i++;
        state.introTimers.push(setTimeout(type, STEP));
      } else {
        headline.dataset.done = '1';
        state.introTimers.push(setTimeout(() => {
          if (state.introDone) return;
          date.hidden = false; date.classList.add('fade-in');
          state.introTimers.push(setTimeout(() => {
            if (state.introDone) return;
            sub.hidden = false; sub.classList.add('fade-in');
            state.introTimers.push(setTimeout(() => {
              if (state.introDone) return;
              startBtn.hidden = false; startBtn.classList.add('fade-in');
              skipBtn.hidden = true;
            }, 420));
          }, 520));
        }, 420));
      }
    })();
  }

  /* ---------------- RECIPIENT ---------------- */

  /** Trả về TẤT CẢ recipient khớp CHÍNH XÁC sau chuẩn hoá. */
  function findRecipients(query) {
    const q = normalize(query);
    if (!q) return [];
    const list = Array.isArray(window.RECIPIENTS) ? window.RECIPIENTS : [];
    return list.filter(r => normalize(r.recipientName) === q);
  }

  function setRecipientError(message) {
    const errorEl = $('#recipientError');
    const retryBtn = $('#recipientRetryBtn');
    if (!errorEl) return;
    if (message) {
      errorEl.textContent = message;
      errorEl.hidden = false;
      if (retryBtn) retryBtn.hidden = false;
    } else {
      errorEl.textContent = '';
      errorEl.hidden = true;
      if (retryBtn) retryBtn.hidden = true;
    }
  }

  function hidePicker() {
    const picker = $('#recipientPicker');
    const list   = $('#recipientPickerList');
    if (picker) picker.hidden = true;
    if (list) list.innerHTML = '';
  }

  function showPicker(matches) {
    const picker = $('#recipientPicker');
    const list   = $('#recipientPickerList');
    if (!picker || !list) return;
    list.innerHTML = '';
    matches.forEach(r => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'picker__item';
      btn.textContent = r.recipientName;
      btn.addEventListener('click', () => {
        hidePicker();
        setRecipientError('');
        state.recipient = r;
        openLetter(r);
      });
      list.appendChild(btn);
    });
    picker.hidden = false;
  }

  function handleRecipientSubmit(e) {
    e.preventDefault();

    const input = $('#recipientInput');
    hidePicker();
    setRecipientError('');

    const value = (input.value || '').trim().replace(/\s+/g, ' ');
    if (!value) {
      setRecipientError('Không tìm thấy tên phù hợp. Bạn hãy kiểm tra lại họ và tên nhé!');
      input.focus();
      return;
    }

    const matches = findRecipients(value);

    if (matches.length === 0) {
      setRecipientError('Không tìm thấy tên phù hợp. Bạn hãy kiểm tra lại họ và tên nhé!');
      input.focus();
      return;
    }

    if (matches.length > 1) {
      showPicker(matches);
      return;
    }

    state.recipient = matches[0];
    openLetter(matches[0]);
  }

  /* ---------------- LETTER ---------------- */

  function fillTemplate(text, recipient) {
    return String(text)
      .replace(/\{name\}/g, recipient.recipientName)
      .replace(/\{greeting\}/g, recipient.greeting || '');
  }

  function openLetter(/* recipient */) {
    $('#envelopeView').hidden = false;
    $('#letterView').hidden   = true;
    $('#letterTitle').textContent = '';
    $('#letterBody').innerHTML = '';
    $('#letterSignature').textContent = '';
    $('#showAllBtn').hidden = true;
    $('#letterFooter').hidden = true;
    showScreen('letter');
  }

  function renderLetter(recipient) {
    const templates = window.LETTER_TEMPLATES || {};
    const template  = templates[recipient.letterTemplateId];

    const body      = $('#letterBody');
    const titleEl   = $('#letterTitle');
    const sigEl     = $('#letterSignature');
    const footer    = $('#letterFooter');
    const showAll   = $('#showAllBtn');

    body.innerHTML = '';

    if (!template) {
      titleEl.textContent = 'Thư';
      const p = document.createElement('p');
      p.textContent = 'Xin lỗi, mẫu thư cho người nhận này chưa được cấu hình. Vui lòng báo cho người phụ trách.';
      body.appendChild(p);
      sigEl.textContent = '';
      footer.hidden = false;
      showAll.hidden = true;
      return;
    }

    titleEl.textContent = template.title || 'Gửi bạn';
    sigEl.textContent   = template.signature || 'Tập thể lớp 10C5';

    const nodes = (template.paragraphs || []).map(text => {
      const p = document.createElement('p');
      p.className = 'letter__para';
      p.textContent = fillTemplate(text, recipient);
      body.appendChild(p);
      return p;
    });

    if (prefersReducedMotion()) {
      nodes.forEach(n => n.classList.add('is-visible'));
      footer.hidden = false;
      showAll.hidden = true;
      return;
    }

    showAll.hidden = false;
    nodes.forEach((n, idx) => {
      setTimeout(() => n.classList.add('is-visible'), 150 + idx * 320);
    });
    const total = 150 + nodes.length * 320 + 200;
    setTimeout(() => {
      footer.hidden = false;
      showAll.hidden = true;
    }, total);
  }

  function showAllLetter() {
    $$('#letterBody .letter__para').forEach(p => p.classList.add('is-visible'));
    $('#letterFooter').hidden = false;
    $('#showAllBtn').hidden = true;
  }

  /* ---------------- MUSIC PLAYER ---------------- */
  /* Một <audio> instance duy nhất (#bgMusic) dùng xuyên suốt mọi màn hình.
     Không tự động phát — chỉ phát khi người dùng bấm nút.
     Không lưu trạng thái âm thanh vào localStorage/sessionStorage. */

  let toastTimer = null;

  function showMusicToast(message) {
    const toast = $('#musicToast');
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.hidden = true; }, 3800);
  }

  function setMusicUI(state) {
    const btn = $('#musicToggle');
    const label = $('#musicLabel');
    const iconPlay = $('#musicIconPlay');
    const iconPause = $('#musicIconPause');
    if (!btn) return;
    btn.dataset.state = state;

    const map = {
      off:      { text: 'Bật nhạc',       aria: 'Bật nhạc nền',   pressed: 'false' },
      loading:  { text: 'Đang tải…',      aria: 'Đang tải nhạc',  pressed: 'false' },
      playing:  { text: 'Tạm dừng',       aria: 'Tạm dừng nhạc',  pressed: 'true'  },
      paused:   { text: 'Bật nhạc',       aria: 'Bật nhạc nền',   pressed: 'false' },
      error:    { text: 'Thử lại',        aria: 'Thử phát lại nhạc nền', pressed: 'false' }
    };
    const m = map[state] || map.off;
    if (label) label.textContent = m.text;
    btn.setAttribute('aria-label', m.aria);
    btn.setAttribute('aria-pressed', m.pressed);

    if (iconPlay && iconPause) {
      const showPause = state === 'playing';
      iconPlay.hidden = showPause;
      iconPause.hidden = !showPause;
    }
  }

  function bindMusicPlayer() {
    const audio = $('#bgMusic');
    const btn = $('#musicToggle');
    if (!audio || !btn) return;

    setMusicUI('off');

    audio.addEventListener('playing', () => setMusicUI('playing'));
    audio.addEventListener('pause', () => {
      // Chỉ hạ về 'off' nếu không đang trong trạng thái loading (play() chưa resolve)
      if (audio.dataset.loading !== '1') setMusicUI('off');
    });
    audio.addEventListener('error', () => {
      setMusicUI('error');
      showMusicToast('Chưa tìm thấy file nhạc nền. Xem assets/audio/README.md để thêm nhạc.');
    });
    $$('source', audio).forEach(s => {
      s.addEventListener('error', () => {
        setMusicUI('error');
        showMusicToast('Chưa tìm thấy file nhạc nền. Xem assets/audio/README.md để thêm nhạc.');
      });
    });

    btn.addEventListener('click', () => {
      if (audio.paused) {
        setMusicUI('loading');
        audio.dataset.loading = '1';
        const p = audio.play();
        if (p && typeof p.then === 'function') {
          p.then(() => {
            audio.dataset.loading = '0';
            setMusicUI('playing');
          }).catch(() => {
            audio.dataset.loading = '0';
            setMusicUI('error');
            showMusicToast('Trình duyệt chưa cho phát nhạc. Bấm lại nút nhạc một lần nữa nhé.');
          });
        } else {
          audio.dataset.loading = '0';
        }
      } else {
        audio.pause();
        setMusicUI('paused');
      }
    });
  }

  /** Tạm dừng nhạc nền khi video bắt đầu phát, không tự bật lại sau đó. */
  function pauseMusicForVideo() {
    const audio = $('#bgMusic');
    if (audio && !audio.paused) audio.pause();
  }

  /* ---------------- VIDEO ---------------- */

  function showVideoFallback() {
    if (state.videoFailed) return;
    state.videoFailed = true;
    const v  = $('#btsVideo');
    const fb = $('#videoFallback');
    if (v)  v.hidden  = true;
    if (fb) fb.hidden = false;
  }

  /* ---------------- Bind events ---------------- */

  function bind() {
    // INTRO
    $('#skipBtn').addEventListener('click', revealFullIntro);
    $('#startBtn').addEventListener('click', () => {
      showScreen('recipient');
      setTimeout(() => { const i = $('#recipientInput'); if (i) i.focus(); }, 320);
    });

    // RECIPIENT
    $('#recipientForm').addEventListener('submit', handleRecipientSubmit);

    $('#recipientRetryBtn').addEventListener('click', () => {
      const i = $('#recipientInput');
      if (i) { i.value = ''; i.focus(); }
      setRecipientError('');
      hidePicker();
    });

    $('#recipientPickerCancel').addEventListener('click', () => {
      hidePicker();
      const i = $('#recipientInput');
      if (i) i.focus();
    });

    // LETTER
    $('#openEnvelopeBtn').addEventListener('click', () => {
      if (!state.recipient) { showScreen('recipient'); return; }
      $('#envelopeView').hidden = true;
      $('#letterView').hidden   = false;
      renderLetter(state.recipient);
    });
    $('#showAllBtn').addEventListener('click', showAllLetter);

    $('#backToRecipientBtn').addEventListener('click', () => {
      state.recipient = null;
      const i = $('#recipientInput'); if (i) i.value = '';
      setRecipientError('');
      hidePicker();
      showScreen('recipient');
    });

    $('#toVideoIntroBtn').addEventListener('click', () => showScreen('video-intro'));

    // VIDEO INTRO
    $('#backFromVideoIntro').addEventListener('click', () => showScreen('letter'));
    $('#toVideoBtn').addEventListener('click', () => {
      showScreen('video');
      pauseMusicForVideo();
      const v = $('#btsVideo');
      if (v && !v.hidden) {
        try { v.pause(); v.currentTime = 0; } catch (e) { /* ignore */ }
      }
    });

    // VIDEO → FINAL
    $('#toFinalBtn').addEventListener('click', () => {
      const v = $('#btsVideo');
      if (v) { try { v.pause(); } catch (e) { /* ignore */ } }
      showScreen('final');
    });

    // FINAL
    $('#openAnotherBtn').addEventListener('click', () => {
      state.recipient = null;
      const i = $('#recipientInput'); if (i) i.value = '';
      setRecipientError('');
      hidePicker();
      showScreen('recipient');
      setTimeout(() => { const inp = $('#recipientInput'); if (inp) inp.focus(); }, 320);
    });

    $('#restartBtn').addEventListener('click', () => {
      state.recipient = null;
      const i = $('#recipientInput'); if (i) i.value = '';
      showScreen('intro');
      runIntro();
    });

    // VIDEO fallback
    const video = $('#btsVideo');
    if (video) {
      video.addEventListener('error', showVideoFallback);
      video.addEventListener('play', pauseMusicForVideo);
      video.querySelectorAll('source').forEach(s => {
        s.addEventListener('error', showVideoFallback);
      });
    }

    bindMusicPlayer();
  }

  /* ---------------- Boot ---------------- */

  document.addEventListener('DOMContentLoaded', () => {
    bind();
    showScreen('intro');
    runIntro();
  });

})();