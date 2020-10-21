"use strict";
const contactsSection = document.querySelector(`.contacts`);
const modalMap = document.querySelector(`.modal-map`);
const modalWriteUs = document.querySelector(`.modal-writeus`);
const smallMap = contactsSection.querySelector(`.contacts-map`);
const buttonModalContact = contactsSection.querySelector(`.writeus-button`);
const modalMapClose = modalMap.querySelector(`.modal-close`);
const writeUsClose = modalWriteUs.querySelector(`.modal-close`);

smallMap.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  modalMap.hidden=false;
});

modalMapClose.addEventListener(`click`, () => {
  modalMap.hidden=true;
});

buttonModalContact.addEventListener(`click`, () => {
  modalWriteUs.hidden=false;
});

writeUsClose.addEventListener(`click`, () => {
  modalWriteUs.hidden=true;
});

