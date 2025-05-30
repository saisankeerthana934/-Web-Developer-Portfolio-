document.getElementById('menu-toggle').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  });
  
  // Optional: Smooth scrolling for older browsers
  const links = document.querySelectorAll('.nav-links a');
  for (const link of links) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  };
  