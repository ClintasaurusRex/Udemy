'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// SelectorAll grabs all of the classes with the same class name
// console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  // console.log('button has been clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal); // dont put () otherwise the close modal gets invoked immiedatly
overlay.addEventListener('click', closeModal);

// Keypress events

document.addEventListener('keydown', function (e) {
  // console.log('A key was pressed');
  console.log(e.key); // this pulls what key was pressed in the object that is the event

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }

  // if (e.key === 'Escape') {
  //   console.log('Esc was pressed');
  // }
});

// The code on how we got to this point above

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', function () {
//     console.log('Button Clicked');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// }

// // btnsCloseModal is using the .add method to add the hidden class to the modal and overlay which closes the modal check the css file for the hidden class

// btnCloseModal.addEventListener('click', function () {
//   console.log('button has been clicked');
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
