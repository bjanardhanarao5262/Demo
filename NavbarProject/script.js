const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
const navActions = document.getElementById('navActions');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navLinks.classList.toggle('open', isOpen);
  navActions.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    navActions.classList.remove('open');
  });
});

const sections = document.querySelectorAll('section[id]');
const links    = navLinks.querySelectorAll('a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 80) current = section.getAttribute('id');
  });
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.navbar')) {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    navActions.classList.remove('open');
  }
});
