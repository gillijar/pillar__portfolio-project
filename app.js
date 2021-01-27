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
