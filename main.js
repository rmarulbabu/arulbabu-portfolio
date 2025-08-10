// NAV TOGGLE (mobile)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', ()=> navLinks.classList.toggle('open'));

// FADE-IN ON SCROLL
const faders = document.querySelectorAll('.fade-in');
const appearOpts = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('in-view');
    obs.unobserve(entry.target);
  });
}, appearOpts);
faders.forEach(fader => appearOnScroll.observe(fader));

// CONTACT FORM HANDLER (stub)
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const status = e.target.querySelector('.form-status');
  status.textContent = 'Sending...';
  // Simulate async email sending:
  setTimeout(()=>{
    status.textContent = 'Thank you! Your message has been sent.';
    e.target.reset();
  }, 1500);
});