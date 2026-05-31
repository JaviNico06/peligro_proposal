// Progress bar
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      document.getElementById('progress').style.width = progress + '%';
    });

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));

