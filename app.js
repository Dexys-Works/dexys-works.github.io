const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const closeMenu = () => {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  menuButton.querySelector('span').textContent = '+';
};
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('is-open', !expanded);
  menuButton.querySelector('span').textContent = expanded ? '+' : '−';
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
const family = document.querySelector('.family-links');
family.style.setProperty('--count', family.children.length);
document.getElementById('year').textContent = new Date().getFullYear();
