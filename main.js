const sections = document.querySelectorAll('main section');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.2) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => observer.observe(section));