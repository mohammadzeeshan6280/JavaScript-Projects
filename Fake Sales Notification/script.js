let productAlert = document.getElementById("product-alert");
let closeAlertBtn = document.getElementById("close-btn")
let productText = document.getElementById("product-text")
let productImage = document.getElementById("product-image")
const names = ["John", "Alice", "Bob", "Emma", "Betty"];
const products = [
    {
name : "Bata Shoes",
image : "shoe.jpg"
    },

    {
name : "White Abmer Perfume",
image : "perfume.jpg"
    },

    {
name : "Peter Englend Black Tshirt",
image : "tshirt.jpg"
    },

    {
name : "RedTape Sunglesses",
image : "sungless.jpg"
    },

    {
name : "Apple Watch",
image : "watch.jpg"
    },
    {
    name : "Bata Wallet",
    image : "wallet.jpg"
    },

    {
name : "Red Chip Belt",
image : "belt.jpg"
    }
    
]

function getRandomItemFromArray(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}

function getRandomTime(){
    return Math.floor(Math.random() * 59) + 1;
}

const getRandomDisplayTime = () =>  Math.random() * (8-3) + 3;


const showAlert = () => {
const randomName = getRandomItemFromArray(names);
const randomProduct = getRandomItemFromArray(products);
const {name, image} = randomProduct;
productImage.src = image;
productText.innerHTML = `<p class="message">${randomName} purchased ${name}</p><p class="time">${getRandomTime()} mins ago</p>`
productAlert.style.display = "flex";
}

closeAlertBtn.addEventListener("click", () => {
    productAlert.style.display = "none";
    setTimeout(showAlert, Math.floor(getRandomItemFromArray()) * 1000)
})

setTimeout(showAlert, Math.floor(getRandomDisplayTime()) * 1000)