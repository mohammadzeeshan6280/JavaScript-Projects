const btn = document.querySelector("#btn")


const randomNum = () => {
    return Math.floor(Math.random() * 256)
}

const changeColor = () => {
    let randomColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
    document.body.style.backgroundColor = randomColor;
}

btn.addEventListener("click", changeColor)
window.addEventListener("click", changeColor)
window.addEventListener("resize", changeColor);



