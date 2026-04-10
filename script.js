// Custom cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// Dark/Light mode toggle
const toggle = document.getElementById('modeToggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});
