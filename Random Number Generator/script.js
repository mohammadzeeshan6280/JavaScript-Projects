function generateRandom() {
  let min = 1;
  let max = 100;
  let randomNumber = Math.floor(Math.random() * (max - min) + min);

  let result = document.querySelector("#result");
  result.textContent = `Random Number : ${randomNumber}`;
}

let btn = document.querySelector("#generateButton");
btn.addEventListener("click", generateRandom);
