"use strict";
const contactsSection = document.querySelector(`.contacts`);
const modalMap = document.querySelector(`.modal-map`);
const modalWriteUs = document.querySelector(`.modal-writeus`);
const smallMap = contactsSection.querySelector(`.contacts-map`);
const modalLogin = modalWriteUs.querySelector(`[name = name]`);
const modalEmail = modalWriteUs.querySelector(`[name = email]`);
const buttonModalContact = contactsSection.querySelector(`.writeus-button`);
const modalMapClose = modalMap.querySelector(`.modal-close`);
const writeUsClose = modalWriteUs.querySelector(`.modal-close`);
const writeUsForm = modalWriteUs.querySelector(`form`);
const modalTextarea = modalWriteUs.querySelector(`textarea`);

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem(`login`);
} catch (err) {
  isStorageSupport = false;
}

/* Модальное окно карты */

smallMap.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  modalMap.hidden = false;
});

modalMapClose.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  modalMap.hidden=true;
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === `Escape`) {
    if (modalMap.hidden === false) {
      evt.preventDefault();
      modalMap.hidden = true;
    }
  }
});

/* Модальное окно Обратной связи */

buttonModalContact.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  modalWriteUs.hidden = false;

  if (storage) {
    modalLogin.value = localStorage.getItem(`login`);
    modalEmail.value = localStorage.getItem(`email`);
    modalTextarea.focus();
  } else{modalLogin.focus()}
});

writeUsClose.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  modalWriteUs.hidden = true;
  modalWriteUs.classList.remove(`modal-error`);
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === `Escape`) {
    if (modalWriteUs.hidden === false) {
      evt.preventDefault();
      modalWriteUs.hidden = true;
      modalWriteUs.classList.remove(`modal-error`);
    }
  }
});

writeUsForm.addEventListener(`submit`, (evt) => {
  if (!modalLogin.value||!modalEmail.value||!modalTextarea.value) {
    evt.preventDefault();
    modalWriteUs.classList.remove(`modal-error`);
    void modalWriteUs.offsetWidth;
    modalWriteUs.classList.add(`modal-error`);
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem(`login`, modalLogin.value);
      localStorage.setItem(`email`, modalEmail.value);
    }
  }
  });
