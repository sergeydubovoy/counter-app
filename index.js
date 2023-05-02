let buttonPlusTen = document.querySelector(".btn-plus-ten");
let buttonPlusOne = document.querySelector(".btn-plus-one");
let buttonReset = document.querySelector(".btn-reset");
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

buttonReset.addEventListener("click", function () {
  counter = 0;
  counterText.innerText = counter;
});
