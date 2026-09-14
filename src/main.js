import './style.css';

// Menu responsivo
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Alto contraste com persistência
const toggleContrast = document.querySelector('#toggle-contrast');
const body = document.body;

if (localStorage.getItem('contrast') === 'high') {
  body.classList.add('high-contrast');
}

toggleContrast.addEventListener('click', () => {
  body.classList.toggle('high-contrast');
  localStorage.setItem(
    'contrast',
    body.classList.contains('high-contrast') ? 'high' : 'normal'
  );
});
