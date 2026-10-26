document.addEventListener('DOMContentLoaded', () => {
  // Video placeholder feedback
  const videoSlot1 = document.getElementById('videoSlot1');
  const videoSlot2 = document.getElementById('videoSlot2');

  function handleVideoPlaceholderClick(slotName) {
    alert(`${slotName} için video dosyasını sağladığında buraya otomatik yerleştirilecek.`);
  }

  if (videoSlot1) {
    videoSlot1.addEventListener('click', () => handleVideoPlaceholderClick('Dikey Reels (9:16)'));
  }
  if (videoSlot2) {
    videoSlot2.addEventListener('click', () => handleVideoPlaceholderClick('Sinematik Lansman (16:9)'));
  }

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
