document.addEventListener('DOMContentLoaded', () => {
  // Video switcher tabs for Vertical Reels
  const pillBtns = document.querySelectorAll('.pill-btn');
  const vplayer1 = document.getElementById('vplayer1');
  const vmetaTitle1 = document.getElementById('vmetaTitle1');
  const vmetaDesc1 = document.getElementById('vmetaDesc1');

  pillBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      pillBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const newSrc = btn.getAttribute('data-src');
      const newTitle = btn.getAttribute('data-title');
      const newDesc = btn.getAttribute('data-desc');

      if (vplayer1 && newSrc) {
        vplayer1.src = newSrc;
        vplayer1.load();
        vplayer1.play().catch(() => {});
      }
      if (vmetaTitle1 && newTitle) vmetaTitle1.textContent = newTitle;
      if (vmetaDesc1 && newDesc) vmetaDesc1.textContent = newDesc;
    });
  });

  // Active navigation highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
