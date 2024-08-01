const password = document.querySelector("#password")
const background = document.querySelector("#background")

password.addEventListener("input", () =>{
    const input = password.value;
    const blurValue = 12 - input.length;
    background.style.filter =`blur(${blurValue}px)`
})