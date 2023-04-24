'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

function openModalHandler() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModelHandler() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModalHandler);
}

btnCloseModal.addEventListener('click', closeModelHandler);

overlay.addEventListener('click', closeModelHandler);

document.addEventListener('keypress', function (e) {
  if (e.key === 'b' && !modal.classList.contains('hidden')) {
    closeModelHandler();
  }
});
