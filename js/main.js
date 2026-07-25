// Navbar scroll effect
  const navbar = document.getElementById('mainNavbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        navLinks.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.3 });
  sections.forEach(s => sectionObserver.observe(s));

  // Counter animation
  const counters = document.querySelectorAll('.stat-number');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.animated) {
        e.target.dataset.animated = true;
        const target = e.target.textContent;
        if (target.includes('+') || !isNaN(parseInt(target))) {
          const num = parseInt(target);
          if (!isNaN(num)) {
            let current = 0;
            const step = Math.ceil(num / 40);
            const timer = setInterval(() => {
              current = Math.min(current + step, num);
              e.target.textContent = current + (target.includes('+') ? '+' : '');
              if (current >= num) clearInterval(timer);
            }, 40);
          }
        }
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));