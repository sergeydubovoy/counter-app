let buttonPlusTen = document.querySelector('[data-js="btn-plus-ten"]');
let buttonPlusOne = document.querySelector('[data-js="btn-plus-one"]');
let buttonMinusOne = document.querySelector('[data-js="btn-minus-one"]');
let buttonMinusTen = document.querySelector('[data-js="btn-minus-ten"]');
let buttonReset = document.querySelector('[data-js="btn-reset"]');
let counterText = document.querySelector(".counter");
let counter = 0;

buttonPlusTen.addEventListener("click", function () {
  counter = counter + 10;
  counterText.innerText = counter;
});

buttonPlusOne.addEventListener("click", function () {
  counter = counter + 1;
  counterText.innerText = counter;
});

buttonMinusOne.addEventListener("click", function () {
  counter = counter - 1;
  counterText.innerText = counter;
});

buttonMinusTen.addEventListener("click", function () {
  counter = counter - 10;
  counterText.innerText = counter;
});

buttonReset.addEventListener("click", function () {
  counter = 0;
  counterText.innerText = counter;
});
