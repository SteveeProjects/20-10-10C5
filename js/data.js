/* =========================================================
   DATA — 10C5 Women's Day
   ---------------------------------------------------------
   • Chỉ chứa tên hiển thị + template ID.
   • KHÔNG lưu ID học sinh, ngày sinh, trường THCS, SĐT, địa chỉ.
   • Mỗi bạn nữ có MỘT lá thư riêng (letterTemplateId trùng id),
     không bạn nào trùng nội dung với bạn khác hay với thư Cô.
   • Vì lớp mới gắn bó khoảng 3 tháng (từ đầu năm học), các thư
     KHÔNG dùng cụm kiểu "đã bên nhau/đồng hành suốt thời gian qua".
   • Để thêm/sửa: chỉnh mảng RECIPIENTS và LETTER_TEMPLATES tương ứng.
   • `{name}` trong template sẽ được thay bằng recipientName.
   • Không có backend → file này CÔNG KHAI với người xem source.
   ========================================================= */

window.RECIPIENTS = [
  /* ---------- Học sinh nữ 10C5 — mỗi bạn 1 letterTemplateId riêng ---------- */
  { id: 's01', recipientName: 'Phạm Thiên An',          recipientType: 'student', letterTemplateId: 's01' },
  { id: 's02', recipientName: 'Phạm Dương Mai Anh',     recipientType: 'student', letterTemplateId: 's02' },
  { id: 's03', recipientName: 'Nguyễn Thanh Chúc',      recipientType: 'student', letterTemplateId: 's03' },
  { id: 's04', recipientName: 'Lê Thị Ngọc Điệp',       recipientType: 'student', letterTemplateId: 's04' },
  { id: 's05', recipientName: 'Trần Nguyễn Mộc Điệp',   recipientType: 'student', letterTemplateId: 's05' },
  { id: 's06', recipientName: 'Nguyễn Thị Phương Diệu', recipientType: 'student', letterTemplateId: 's06' },
  { id: 's07', recipientName: 'Nguyễn Thị Thùy Dương',  recipientType: 'student', letterTemplateId: 's07' },
  { id: 's08', recipientName: 'Trần Ánh Dương',         recipientType: 'student', letterTemplateId: 's08' },
  { id: 's09', recipientName: 'Lương Bảo Hân',          recipientType: 'student', letterTemplateId: 's09' },
  { id: 's10', recipientName: 'Phạm Bảo Hân',           recipientType: 'student', letterTemplateId: 's10' },
  { id: 's11', recipientName: 'Bùi Thị Thúy Hường',     recipientType: 'student', letterTemplateId: 's11' },
  { id: 's12', recipientName: 'Phạm Thị Thúy Kiều',     recipientType: 'student', letterTemplateId: 's12' },
  { id: 's13', recipientName: 'Đào Khánh Lam',          recipientType: 'student', letterTemplateId: 's13' },
  { id: 's14', recipientName: 'Vũ Thanh Lam',           recipientType: 'student', letterTemplateId: 's14' },
  { id: 's15', recipientName: 'Dương Khánh Linh',       recipientType: 'student', letterTemplateId: 's15' },
  { id: 's16', recipientName: 'Vũ Khánh Linh',          recipientType: 'student', letterTemplateId: 's16' },
  { id: 's17', recipientName: 'Vũ Thị Khánh Ly',        recipientType: 'student', letterTemplateId: 's17' },
  { id: 's18', recipientName: 'Bùi Phương Mai',         recipientType: 'student', letterTemplateId: 's18' },
  { id: 's19', recipientName: 'Trương Hiền Mai',        recipientType: 'student', letterTemplateId: 's19' },
  { id: 's20', recipientName: 'Vũ Hà My',               recipientType: 'student', letterTemplateId: 's20' },
  { id: 's21', recipientName: 'Vũ Thị Trà My',          recipientType: 'student', letterTemplateId: 's21' },
  { id: 's22', recipientName: 'Hoàng Thị Kim Ngân',     recipientType: 'student', letterTemplateId: 's22' },
  { id: 's23', recipientName: 'Lê Nguyễn Bảo Ngọc',     recipientType: 'student', letterTemplateId: 's23' },
  { id: 's24', recipientName: 'Nguyễn Thị Bảo Ngọc',    recipientType: 'student', letterTemplateId: 's24' },
  { id: 's25', recipientName: 'Đoàn Thị Uyên Nhi',      recipientType: 'student', letterTemplateId: 's25' },
  { id: 's26', recipientName: 'Nguyễn Thị Yến Nhi',     recipientType: 'student', letterTemplateId: 's26' },
  { id: 's27', recipientName: 'Đinh Thùy Quỳnh',        recipientType: 'student', letterTemplateId: 's27' },
  { id: 's28', recipientName: 'Đỗ Thị Phương Thảo',     recipientType: 'student', letterTemplateId: 's28' },
  { id: 's29', recipientName: 'Lê Thị Thoa',            recipientType: 'student', letterTemplateId: 's29' },
  { id: 's30', recipientName: 'Trần Thị Thư',           recipientType: 'student', letterTemplateId: 's30' },
  { id: 's31', recipientName: 'Nguyễn Huyền Trang',     recipientType: 'student', letterTemplateId: 's31' },
  { id: 's32', recipientName: 'Phạm Thị Hiền Trang',    recipientType: 'student', letterTemplateId: 's32' },
  { id: 's33', recipientName: 'Vũ Ngọc Trâm',           recipientType: 'student', letterTemplateId: 's33' },
  { id: 's34', recipientName: 'Vũ Thị Thanh Trúc',      recipientType: 'student', letterTemplateId: 's34' },
  { id: 's35', recipientName: 'Lê Nhã Uyên',            recipientType: 'student', letterTemplateId: 's35' },
  { id: 's36', recipientName: 'Nguyễn Khánh Vân',       recipientType: 'student', letterTemplateId: 's36' },
  { id: 's37', recipientName: 'Đàm Thị Hà Vy',          recipientType: 'student', letterTemplateId: 's37' },

  /* ---------- Cô giáo (record riêng) ---------- */
  { id: 'teacher', recipientName: 'Nguyễn Thị Thu Hương', recipientType: 'teacher', letterTemplateId: 'teacher' }
];

/* =========================================================
   LETTER TEMPLATES
   Mỗi key là 1 lá thư DUY NHẤT — không đoạn nào lặp lại giữa
   các thư, và không thư nào dùng cụm gợi ý "đã quen lâu/bên
   nhau suốt thời gian qua" (lớp chỉ mới học cùng nhau ~3 tháng).
   ========================================================= */

window.LETTER_TEMPLATES = {

  's01': {
    title: 'Gửi An',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Gửi {name},',
      '20/10 rồi, lớp mình gửi An một lời chúc nho nhỏ nhưng thật lòng.',
      'Mong An luôn giữ được sự điềm tĩnh và nụ cười nhẹ nhàng mà mọi người hay thấy ở An mỗi giờ ra chơi. Chúc An học thật tốt và luôn thấy vui khi đến lớp.',
      'Chúc mừng ngày của An nhé!'
    ]
  },

  's02': {
    title: 'Gửi Mai Anh',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Mai Anh ơi,',
      'Nhân 20/10, cả lớp muốn gửi đến Mai Anh một lời chúc thật tươi, đúng như năng lượng Mai Anh mang vào lớp mỗi sáng.',
      'Chúc Mai Anh luôn tự tin thể hiện mình, học hành suôn sẻ và có thật nhiều khoảnh khắc đáng nhớ ở 10C5 trong năm học này.',
      'Happy Women’s Day, Mai Anh!'
    ]
  },

  's03': {
    title: 'Gửi Chúc',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Chào Chúc nhé,',
      'Ngày 20/10 là dịp để lớp mình nói với Chúc một điều đơn giản: cảm ơn vì đã là chính mình trong lớp.',
      'Chúc Chúc luôn vui vẻ, học giỏi và giữ vững sự chân thành của mình. Mong mọi điều tốt đẹp sẽ đến với Chúc trong năm học này.',
      'Chúc Chúc một ngày thật đẹp!'
    ]
  },

  's04': {
    title: 'Gửi Ngọc Điệp',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Gửi {name},',
      'Một lời chúc nhỏ nhân ngày 20/10 dành riêng cho Ngọc Điệp từ cả lớp.',
      'Chúc Ngọc Điệp luôn giữ được sự dịu dàng và kiên nhẫn của mình, học tập tiến bộ và có nhiều giờ học thật thoải mái ở 10C5.',
      'Chúc mừng ngày của Ngọc Điệp!'
    ]
  },

  's05': {
    title: 'Gửi Mộc Điệp',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Mộc Điệp thân mến,',
      '20/10 đến rồi, lớp mình gửi Mộc Điệp lời chúc ấm áp nhất.',
      'Chúc Mộc Điệp luôn năng động, nhiều năng lượng tích cực và tự tin theo đuổi những điều mình thích trong năm học mới này.',
      'Mong Mộc Điệp có một ngày thật vui!'
    ]
  },

  's06': {
    title: 'Gửi Phương Diệu',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Gửi {name},',
      'Nhân 20/10, lớp mình muốn Phương Diệu biết rằng sự có mặt của bạn trong lớp rất đáng quý.',
      'Chúc Phương Diệu luôn mạnh khỏe, học tập thuận lợi và giữ được sự cẩn thận, chu đáo vốn có của mình.',
      'Chúc Phương Diệu một 20/10 thật ý nghĩa!'
    ]
  },

  's07': {
    title: 'Gửi Thùy Dương',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Thùy Dương ơi,',
      '20/10 rồi, cả lớp có một lời chúc nhỏ muốn gửi riêng đến Thùy Dương.',
      'Chúc Thùy Dương luôn giữ được sự vui vẻ, hay cười mà lớp mình rất thích, học hành tiến bộ và có thêm nhiều kỷ niệm đẹp ở 10C5.',
      'Chúc mừng ngày của Thùy Dương!'
    ]
  },

  's08': {
    title: 'Gửi Ánh Dương',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Gửi {name},',
      'Một lời chúc 20/10 dành cho Ánh Dương, đúng như cái tên tràn đầy sức sống của bạn.',
      'Chúc Ánh Dương luôn rạng rỡ, tự tin và học tập đạt kết quả tốt. Mong Ánh Dương luôn cảm thấy thoải mái khi ở trong lớp 10C5.',
      'Happy Women’s Day, Ánh Dương!'
    ]
  },

  's09': {
    title: 'Gửi Bảo Hân',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Bảo Hân ơi,',
      'Nhân 20/10, lớp mình muốn nói với Bảo Hân một điều mà ít khi tụi mình nói thẳng ra: mọi người đều để ý thấy Bảo Hân luôn là người xắn tay vào trước khi ai kịp nhờ, từ những việc nhỏ nhất của lớp.',
      'Sự nhiệt tình đó không phải lúc nào cũng được cảm ơn đúng lúc, nên hôm nay lớp mình xin gửi lời cảm ơn ấy. Chúc Bảo Hân luôn giữ được năng lượng tích cực này, học tập thuận lợi và có thật nhiều ngày vui ở 10C5.',
      'Chúc mừng ngày của Bảo Hân!'
    ]
  },

  's10': {
    title: 'Gửi Bảo Hân',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Gửi {name},',
      '20/10 rồi, lớp mình muốn Bảo Hân biết là mọi người luôn nhớ sự hài hước của bạn trong các giờ học.',
      'Chúc Bảo Hân luôn giữ được sự dí dỏm, học hành suôn sẻ và có thêm nhiều người bạn thân thiết ở 10C5.',
      'Chúc Bảo Hân một ngày thật vui!'
    ]
  },

  's11': {
    title: 'Gửi Thúy Hường',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Thúy Hường ơi,',
      'Một lời chúc nhỏ nhân 20/10 dành cho Thúy Hường từ cả lớp 10C5.',
      'Chúc Thúy Hường luôn bình an, học tập tiến bộ và giữ được sự điềm đạm, chu đáo mà lớp mình đã nhận ra ở bạn.',
      'Chúc mừng ngày của Thúy Hường!'
    ]
  },

  's12': {
    title: 'Gửi Thúy Kiều',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Gửi {name},',
      'Nhân 20/10, lớp mình gửi Thúy Kiều lời chúc tốt đẹp nhất.',
      'Chúc Thúy Kiều luôn tự tin, mạnh mẽ vượt qua mọi áp lực học tập, và luôn tìm thấy niềm vui trong những điều nhỏ ở trường lớp.',
      'Happy Women’s Day, Thúy Kiều!'
    ]
  },

  's13': {
    title: 'Gửi Khánh Lam',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Khánh Lam thân mến,',
      '20/10 đến rồi, cả lớp có một lời chúc nhỏ dành riêng cho Khánh Lam.',
      'Chúc Khánh Lam luôn giữ được sự nhẹ nhàng, học tập tốt và có nhiều giờ ra chơi vui vẻ cùng các bạn trong lớp.',
      'Chúc mừng ngày của Khánh Lam!'
    ]
  },

  's14': {
    title: 'Gửi Thanh Lam',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Gửi {name},',
      'Lớp mình gửi Thanh Lam một lời chúc 20/10 thật ấm áp.',
      'Chúc Thanh Lam luôn vui tươi, năng nổ trong các hoạt động của lớp, học tập thuận lợi và giữ mãi nét riêng của mình.',
      'Chúc Thanh Lam một ngày thật đẹp!'
    ]
  },

  's15': {
    title: 'Gửi Khánh Linh',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Khánh Linh ơi,',
      'Nhân ngày 20/10, lớp mình muốn gửi đến Khánh Linh một lời chúc thật tốt đẹp.',
      'Chúc Khánh Linh luôn tự tin, kiên trì với mục tiêu của mình, và có một năm học thật nhiều niềm vui ở 10C5.',
      'Chúc mừng ngày của Khánh Linh!'
    ]
  },

  's16': {
    title: 'Gửi Khánh Linh',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Gửi {name},',
      '20/10 rồi, cả lớp gửi Khánh Linh một lời chúc nhỏ nhưng thật lòng.',
      'Chúc Khánh Linh luôn mạnh khỏe, học tập tiến bộ và giữ được sự chăm chỉ, cẩn thận mà lớp mình hay thấy ở bạn.',
      'Happy Women’s Day, Khánh Linh!'
    ]
  },

  's17': {
    title: 'Gửi Khánh Ly',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Khánh Ly thân mến,',
      'Một lời chúc 20/10 dành riêng cho Khánh Ly, từ tất cả các bạn trong lớp.',
      'Chúc Khánh Ly luôn giữ được nụ cười tươi, học hành suôn sẻ và có thêm nhiều kỷ niệm vui ở 10C5 trong năm học này.',
      'Chúc Khánh Ly một ngày thật rạng rỡ!'
    ]
  },

  's18': {
    title: 'Gửi Phương Mai',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Gửi {name},',
      'Nhân 20/10, lớp mình gửi Phương Mai lời chúc chân thành nhất.',
      'Chúc Phương Mai luôn bình tĩnh, tự tin trong học tập và luôn cảm thấy thoải mái, vui vẻ mỗi khi đến lớp.',
      'Chúc mừng ngày của Phương Mai!'
    ]
  },

  's19': {
    title: 'Gửi Hiền Mai',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Hiền Mai ơi,',
      '20/10 đến rồi, cả lớp có một lời chúc nhỏ dành cho Hiền Mai.',
      'Chúc Hiền Mai luôn giữ được sự hiền hòa, chịu khó trong học tập và có một năm học thật nhẹ nhàng, nhiều niềm vui.',
      'Chúc Hiền Mai một ngày thật ấm áp!'
    ]
  },

  's20': {
    title: 'Gửi Hà My',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Gửi {name},',
      'Lớp mình gửi Hà My một lời chúc thật tươi nhân ngày 20/10.',
      'Chúc Hà My luôn vui vẻ, năng động, học tập tiến bộ và giữ được sự lạc quan mà lớp mình rất quý ở bạn.',
      'Happy Women’s Day, Hà My!'
    ]
  },

  's21': {
    title: 'Gửi Trà My',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Trà My thân mến,',
      'Nhân 20/10, cả lớp gửi đến Trà My một lời chúc thật lòng.',
      'Chúc Trà My luôn tự tin thể hiện bản thân, học hành thuận lợi và có thêm nhiều người bạn thân thiết trong lớp.',
      'Chúc mừng ngày của Trà My!'
    ]
  },

  's22': {
    title: 'Gửi Kim Ngân',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Gửi {name},',
      '20/10 rồi, lớp mình gửi Kim Ngân lời chúc tốt đẹp nhất.',
      'Chúc Kim Ngân luôn chăm chỉ, kiên trì với việc học và giữ được sự điềm đạm, đáng tin cậy mà lớp mình nhận thấy ở bạn.',
      'Chúc Kim Ngân một ngày thật trọn vẹn!'
    ]
  },

  's23': {
    title: 'Gửi Bảo Ngọc',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Bảo Ngọc ơi,',
      'Nhân ngày 20/10, lớp mình muốn gửi đến Bảo Ngọc một lời chúc thật ấm.',
      'Chúc Bảo Ngọc luôn tự tin, học tập tiến bộ và có nhiều giờ học vui vẻ, thoải mái cùng cả lớp 10C5.',
      'Chúc mừng ngày của Bảo Ngọc!'
    ]
  },

  's24': {
    title: 'Gửi Bảo Ngọc',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Gửi {name},',
      'Một lời chúc nhỏ nhân 20/10 dành riêng cho Bảo Ngọc từ cả lớp.',
      'Chúc Bảo Ngọc luôn vui tươi, chăm học và giữ được sự nhiệt tình mà lớp mình hay thấy ở bạn trong các hoạt động chung.',
      'Happy Women’s Day, Bảo Ngọc!'
    ]
  },

  's25': {
    title: 'Gửi Uyên Nhi',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Uyên Nhi ơi,',
      'Nhân 20/10, lớp mình muốn gửi Uyên Nhi một lời cảm ơn nho nhỏ — vì những lần Uyên Nhi lặng lẽ lo việc chung mà chẳng cần ai nhắc, kể cả những việc ít người để ý.',
      'Sự chu đáo đó của Uyên Nhi khiến lớp mình thấy ấm hơn nhiều. Chúc Uyên Nhi luôn vui vẻ, học tập tiến bộ và có một năm học thật nhẹ nhàng ở 10C5.',
      'Chúc Uyên Nhi một ngày thật đẹp!'
    ]
  },

  's26': {
    title: 'Gửi Yến Nhi',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Gửi {name},',
      'Nhân 20/10, cả lớp gửi Yến Nhi lời chúc tốt đẹp nhất.',
      'Chúc Yến Nhi luôn vui vẻ, tự tin và học tập đạt kết quả như mong muốn. Mong Yến Nhi luôn cảm thấy vui khi ở cùng lớp 10C5.',
      'Chúc mừng ngày của Yến Nhi!'
    ]
  },

  's27': {
    title: 'Gửi Thùy Quỳnh',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Thùy Quỳnh ơi,',
      'Một lời chúc 20/10 dành riêng cho Thùy Quỳnh, từ tất cả các bạn trong lớp.',
      'Chúc Thùy Quỳnh luôn giữ được sự nhẹ nhàng, chu đáo và học hành thuận lợi trong năm học này.',
      'Chúc Thùy Quỳnh một ngày thật ấm áp!'
    ]
  },

  's28': {
    title: 'Gửi Phương Thảo',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Gửi {name},',
      '20/10 rồi, lớp mình gửi Phương Thảo một lời chúc thật lòng.',
      'Chúc Phương Thảo luôn tự tin, chăm chỉ và giữ được sự tỉ mỉ mà lớp mình hay thấy ở bạn mỗi giờ học.',
      'Chúc mừng ngày của Phương Thảo!'
    ]
  },

  's29': {
    title: 'Gửi Thoa',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Thoa ơi,',
      '20/10 rồi, lớp mình muốn Thoa biết là mọi người luôn nhận ra sự nhiệt tình của Thoa mỗi khi lớp cần người đứng ra lo liệu — dù việc to hay nhỏ.',
      'Không phải lúc nào sự cố gắng ấy cũng được nói thành lời, nên hôm nay lớp mình xin gửi một lời cảm ơn thật lòng. Chúc Thoa luôn mạnh khỏe, bình an và học tập tiến bộ.',
      'Chúc Thoa một ngày thật trọn vẹn!'
    ]
  },

  's30': {
    title: 'Gửi Thư',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Gửi {name},',
      '20/10 đến rồi, cả lớp gửi Thư một lời chúc thật chân thành.',
      'Chúc Thư luôn giữ được sự điềm tĩnh, học hành suôn sẻ và có thêm nhiều người bạn thân thiết ở 10C5.',
      'Happy Women’s Day, Thư!'
    ]
  },

  's31': {
    title: 'Gửi Huyền Trang',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Huyền Trang ơi,',
      'Một lời chúc nhỏ nhân 20/10 dành riêng cho Huyền Trang từ cả lớp.',
      'Chúc Huyền Trang luôn tự tin, năng động và giữ được sự nhiệt tình trong các hoạt động chung của lớp.',
      'Chúc mừng ngày của Huyền Trang!'
    ]
  },

  's32': {
    title: 'Gửi Hiền Trang',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Gửi {name},',
      'Nhân 20/10, lớp mình gửi Hiền Trang lời chúc tốt đẹp nhất.',
      'Chúc Hiền Trang luôn hiền hòa, chăm chỉ và có một năm học thật nhẹ nhàng, nhiều điều vui ở 10C5.',
      'Chúc Hiền Trang một ngày thật đẹp!'
    ]
  },

  's33': {
    title: 'Gửi Ngọc Trâm',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Ngọc Trâm thân mến,',
      '20/10 rồi, cả lớp có một lời chúc nhỏ dành riêng cho Ngọc Trâm.',
      'Chúc Ngọc Trâm luôn tự tin, học tập tiến bộ và giữ được sự dịu dàng, chu đáo mà lớp mình nhận thấy ở bạn.',
      'Chúc mừng ngày của Ngọc Trâm!'
    ]
  },

  's34': {
    title: 'Gửi Thanh Trúc',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Gửi {name},',
      'Nhân 20/10, lớp mình muốn nói với Thanh Trúc một điều: sự năng nổ của Thanh Trúc trong mọi hoạt động chung không hề bị ai bỏ qua đâu, dù ít khi có ai nói ra.',
      'Cảm ơn Thanh Trúc vì luôn sẵn sàng xắn tay vào việc chung. Chúc Thanh Trúc luôn giữ vững sự lạc quan ấy, học tập thuận lợi và có thật nhiều niềm vui ở 10C5.',
      'Happy Women’s Day, Thanh Trúc!'
    ]
  },

  's35': {
    title: 'Gửi Nhã Uyên',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Nhã Uyên ơi,',
      'Nhân ngày 20/10, lớp mình gửi Nhã Uyên một lời chúc thật chân thành.',
      'Chúc Nhã Uyên luôn điềm đạm, kiên trì với mục tiêu của mình và có nhiều niềm vui nhỏ mỗi ngày ở trường.',
      'Chúc Nhã Uyên một ngày thật ấm áp!'
    ]
  },

  's36': {
    title: 'Gửi Khánh Vân',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Gửi {name},',
      '20/10 đến rồi, cả lớp gửi Khánh Vân một lời chúc thật tươi.',
      'Chúc Khánh Vân luôn tự tin, học hành thuận lợi và giữ được sự chăm chỉ, cẩn thận mà lớp mình hay thấy ở bạn.',
      'Chúc mừng ngày của Khánh Vân!'
    ]
  },

  's37': {
    title: 'Gửi Hà Vy',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Hà Vy thân mến,',
      'Một lời chúc nhỏ nhân 20/10 dành riêng cho Hà Vy, từ cả lớp 10C5.',
      'Chúc Hà Vy luôn vui vẻ, tự tin và có một năm học nhiều niềm vui, nhiều điều đáng nhớ.',
      'Chúc Hà Vy một ngày thật rạng rỡ!'
    ]
  },

  /* ---------- Thư riêng cho Cô ---------- */
  'teacher': {
    title: 'Kính gửi Cô Nguyễn Thị Thu Hương',
    signature: 'Tập thể lớp 10C5',
    paragraphs: [
      'Kính gửi Cô,',
      'Nhân ngày Phụ nữ Việt Nam 20/10, tập thể lớp 10C5 chúng em xin gửi đến Cô những lời tri ân chân thành nhất.',
      'Mới chỉ một học kỳ được Cô dẫn dắt, nhưng chúng em đã cảm nhận rõ sự tận tâm trong từng bài giảng và sự kiên nhẫn của Cô với lớp. Đó là điều chúng em luôn ghi nhớ.',
      'Chúng em kính chúc Cô luôn mạnh khỏe, bình an, hạnh phúc và gặt hái nhiều thành công trong sự nghiệp trồng người.',
      'Chúng em kính chúc Cô một ngày 20/10 thật ý nghĩa!'
    ]
  }
};
