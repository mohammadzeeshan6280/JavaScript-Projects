let jokeContainer = document.getElementById("joke");
let btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getJoke = () => {
    fetch(url).then(data => data.json())
    .then(item => {
        // console.log(item.joke)
        jokeContainer.textContent = `${item.joke}`;
});
btn.addEventListener("click", getJoke)
}
getJoke()