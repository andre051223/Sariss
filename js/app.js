document.querySelectorAll('.slider').forEach(slider => {
const track = slider.querySelector('.slider-track');
const prevBtn = slider.querySelector('.prev');
const nextBtn = slider.querySelector('.next');

let index = 0; // Este índice es local para cada galería

prevBtn.addEventListener('click', () => {
if (index > 0) index--;
updateSlider();
});

nextBtn.addEventListener('click', () => {
if (index < track.children.length - 1) index++;
updateSlider();
});

function updateSlider() {
const imageWidth = track.children[0]?.offsetWidth || 300;
const offset = -index * (imageWidth + 10);
track.style.transform = `translateX(${offset}px)`;
}
});