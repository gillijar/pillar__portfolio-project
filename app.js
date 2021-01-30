'use strict';

// Buttons
const headerBtn = document.querySelector('.btn-primary');
const likeTripBtn = document.querySelectorAll('.tours__icon');
const openModalBtn = document.querySelectorAll('.book-now');
const closeModalBtn = document.querySelector('.modal__close--btn');

const modalWindow = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');

const slides = document.querySelectorAll('.slider__slide');
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');

// Header button to scroll to main content
headerBtn.addEventListener('click', function () {
  const headerBottom = document.querySelector('.header').getBoundingClientRect()
    .bottom;
  window.scrollTo({ top: headerBottom });
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

//////////////////////////////////
// Slider component
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

//////////////////////////////////
// Section smooth intro
const sections = document.querySelectorAll('.section');

const sectionSlideIn = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  }
};

const sectionObserver = new IntersectionObserver(sectionSlideIn, {
  root: null,
  threshold: 0.2,
});

sections.forEach((section) => {
  sectionObserver.observe(section);
});
