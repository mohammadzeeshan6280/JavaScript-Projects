let imageElement = document.querySelector("#image");
let numberElement = document.querySelector("#number")
let count =  0
let maxCount = 100;

const incrementLoader = () => {
if(count < maxCount){
    count++;

    numberElement.textContent = count + "%";
    const opacity = count / maxCount;

    imageElement.style.opacity = opacity

    imageElement.style.filter = `blue((10-1- * opacity)px)`
} else if(count === maxCount){
    clearInterval(loaderInterval);
    numberElement.textContent = ""
}
}

const loaderInterval = setInterval(incrementLoader, 60)