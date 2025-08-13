function setSliderHeight() {
  const img = document.querySelector('.slider-img');
  const slider = document.querySelector('.slider');

  if (img && slider) {
      slider.style.height = img.clientHeight + 'px';
  }
}

window.addEventListener('load', setSliderHeight);
window.addEventListener('resize', setSliderHeight);
