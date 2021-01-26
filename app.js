'use strict';

// Variables
const headerBtn = document.querySelector('.btn-primary');
const likeTripBtn = document.querySelectorAll('.tours__icon');

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
