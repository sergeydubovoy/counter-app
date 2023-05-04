const buttonPlusTen = document.querySelector('[data-js="btn-plus-ten"]');
const buttonPlusOne = document.querySelector('[data-js="btn-plus-one"]');
const buttonMinusOne = document.querySelector('[data-js="btn-minus-one"]');
const buttonMinusTen = document.querySelector('[data-js="btn-minus-ten"]');
const buttonReset = document.querySelector('[data-js="btn-reset"]');
const counterText = document.querySelector(".counter");

const COUNTER_INITIAL_VALUE = 0;
let counter = COUNTER_INITIAL_VALUE;

counterText.innerText = counter;

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
  counter = COUNTER_INITIAL_VALUE;
  counterText.innerText = counter;
});
