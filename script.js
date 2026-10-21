// Слайдшоу
const imgs = document.querySelectorAll('.slideshow img');
if (imgs.length > 1) {
  let i = 0;
  setInterval(() => {
    imgs[i].classList.remove('active');
    i = (i + 1) % imgs.length;
    imgs[i].classList.add('active');
  }, 3500);
}

// Логика открытки и конфетти
function openCard() {
  // Прячем главный экран
  document.getElementById('main-content').style.display = 'none';
  
  // Показываем открытку
  const card = document.getElementById('card-content');
  card.style.display = 'flex';

  // Запускаем конфетти (несколько залпов для красоты)
  confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
  
  setTimeout(() => {
    confetti({ particleCount: 100, angle: 60, spread: 55, origin: { x: 0 } });
    confetti({ particleCount: 100, angle: 120, spread: 55, origin: { x: 1 } });
  }, 500);
}

function closeCard() {
  // Прячем открытку
  document.getElementById('card-content').style.display = 'none';
  
  // Показываем главный экран
  document.getElementById('main-content').style.display = 'flex';
}
