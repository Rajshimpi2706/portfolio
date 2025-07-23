document.addEventListener('DOMContentLoaded', function() {
  // Fade-in on scroll for elements with .fade-in-on-scroll
  function handleFadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in-on-scroll');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 60) {
        el.classList.add('opacity-100', 'translate-y-0');
        el.classList.remove('opacity-0', 'translate-y-8');
      }
    });
  }
  window.addEventListener('scroll', handleFadeInOnScroll);
  window.addEventListener('load', handleFadeInOnScroll);

  // Fade-in hero section on page load
  const hero = document.querySelector('.hero-fade-in');
  if (hero) {
    setTimeout(() => {
      hero.classList.add('opacity-100', 'translate-y-0');
      hero.classList.remove('opacity-0', 'translate-y-8');
    }, 100);
  }
});
