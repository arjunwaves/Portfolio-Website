const overlay = document.getElementById('introOverlay');
const enterButton = document.getElementById('enterPortfolio');
const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');

function closeIntro() {
  overlay.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  try { sessionStorage.setItem('arjunPortfolioIntroSeen', 'yes'); } catch (error) {}
}

let alreadySeen = false;
try { alreadySeen = sessionStorage.getItem('arjunPortfolioIntroSeen') === 'yes'; } catch (error) {}
if (alreadySeen) {
  overlay.classList.add('is-hidden');
} else {
  document.body.classList.add('modal-open');
}
enterButton.addEventListener('click', closeIntro);
overlay.addEventListener('click', (event) => {
  if (event.target === overlay) closeIntro();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !overlay.classList.contains('is-hidden')) closeIntro();
});

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
