'use strict';

// Buttons
const headerBtn = document.querySelector('.btn-primary');
const likeTripBtn = document.querySelectorAll('.tours__icon');
const openModalBtn = document.querySelectorAll('.book-now');
const closeModalBtn = document.querySelector('.modal__close--btn');

const modalWindow = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');

// Header button to scroll to main content
const section1 = document.querySelector('.info');
headerBtn.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Toggle like button on tours cards
likeTripBtn.forEach((btn) => {
  btn.addEventListener('click', function () {
    btn.classList.toggle('like');
  });
});

// Open and close modal
const openModal = function (e) {
  // Prevent default
  e.preventDefault();
  modalWindow.classList.add('open-modal');
};

const closeModal = function () {
  modalWindow.classList.remove('open-modal');
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

openModalBtn.forEach((btn) => btn.addEventListener('click', openModal));
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Slider component
const slides = document.querySelectorAll('.slider__slide');
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');

// Initial slide position
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

let curSlide = 0;
const maxSlide = slides.length - 1;

// Slide transitions
const goToSlide = function () {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
};

// Next Slide
const nextSlide = function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide();
};

// Previous Slide
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  goToSlide();
};

// Event Listeners
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
