// Simple rotating hero background
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const images = [
    'https://picsum.photos/id/1018/1600/900',
    'https://picsum.photos/id/1024/1600/900',
    'https://picsum.photos/id/1039/1600/900'
  ];
  let i = 0;
  setInterval(() => {
    i = (i + 1) % images.length;
    hero.style.backgroundImage = `url('${images[i]}')`;
  }, 5000);
});
