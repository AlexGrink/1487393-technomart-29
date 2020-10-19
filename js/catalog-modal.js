const modalCart = document.querySelector(`.modal-cart`);
const cartClose = modalCart.querySelector(`.modal-close`);
const buyButtons = document.querySelectorAll(`.buy-button`);
const modalClose = document.querySelector(`.modal-close`);

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener(`click`,
    () => { modalCart.hidden = false; })
});

modalClose.addEventListener(`click`, () => { modalCart.hidden = true; });
