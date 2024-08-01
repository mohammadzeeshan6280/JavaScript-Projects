function getRandomInt(max){
   return Math.floor(Math.random() * max)  
}

function generatorCode(){
 let r = getRandomInt(256)
 let g = getRandomInt(256)
 let b = getRandomInt(256)

 let rgbColor = `rgb(${r}, ${g}, ${b})`

 let colorBox = document.querySelector("#color")
 let rgb = document.querySelector("#rgb")

 colorBox.style.backgroundColor = rgbColor;

 rgb.textContent = rgbColor;
}