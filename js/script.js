const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
});
