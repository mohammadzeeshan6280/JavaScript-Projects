let randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());

let intervalId;
let startChangingColor = function () {
    if(!intervalId){
        intervalId = setInterval(changeColor, 1000);
}


  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

let stopChangingColor = function () {
  clearInterval(stopColor);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
