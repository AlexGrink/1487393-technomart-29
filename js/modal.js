"use strict";
const contactsSection = document.querySelector(`.contacts`);
const modalMap = document.querySelector(`.modal-map`);
const modalWriteUs = document.querySelector(`.modal-writeus`);
const smallMap = contactsSection.querySelector(`.contacts-map`);
const buttonModalContact = contactsSection.querySelector(`button`);
const modalMapClose = modalMap.querySelector(`.modal-close`);
const writeUsClose = modalWriteUs.querySelector(`.modal-close`);

smallMap.addEventListener(`click`, () => {
  modalMap.classList.remove(`visually-hidden`);
});

modalMapClose.addEventListener(`click`, () => {
  modalMap.classList.add(`visually-hidden`);
});

buttonModalContact.addEventListener(`click`, () => {
  modalWriteUs.classList.remove(`visually-hidden`);
});

writeUsClose.addEventListener(`click`, () => {
  modalWriteUs.classList.add(`visually-hidden`);
});

