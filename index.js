const buttonPlusTen = document.querySelector('[data-js="btn-plus-ten"]');
const buttonPlusOne = document.querySelector('[data-js="btn-plus-one"]');
const buttonMinusOne = document.querySelector('[data-js="btn-minus-one"]');
const buttonMinusTen = document.querySelector('[data-js="btn-minus-ten"]');
const buttonReset = document.querySelector('[data-js="btn-reset"]');
const counterText = document.querySelector('[data-js="counter"]');
const buttonBonus = document.querySelector('[data-js="btn-bonus"]');

const COUNTER_INITIAL_VALUE = 0;
let counter = COUNTER_INITIAL_VALUE;

counterText.innerText = counter;

function updateCounter(value) {
  counter += value;
  counterText.innerText = counter;

  if (counter > 100) {
    buttonReset.classList.add("btn-reset-small");
    buttonBonus.classList.add("bonus-active");
  }
  if (counter < 100) {
    buttonReset.classList.remove("btn-reset-small");
    buttonBonus.classList.remove("bonus-active");
  }
}

buttonPlusTen.addEventListener("click", function () {
  updateCounter(10);
});

buttonPlusOne.addEventListener("click", function () {
  updateCounter(1);
});

buttonMinusOne.addEventListener("click", function () {
  updateCounter(-1);
});

buttonMinusTen.addEventListener("click", function () {
  updateCounter(-10);
});

buttonReset.addEventListener("click", function () {
  counter = COUNTER_INITIAL_VALUE;
  counterText.innerText = counter;
  buttonReset.classList.remove("btn-reset-small");
  buttonBonus.classList.remove("bonus-active");
});
