let meme = document.getElementById("meme");
let title = document.getElementById("title");
let btn = document.getElementById("get-meme-btn");

// API URL
let url = 'https://meme-api.herokuapp.com/gimme'
let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];

let getmeme = () => {
    let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)]

    fetch(url + randomSubreddit).
    then((response) => response.json())
    .then((data) => {
        let memeImg = new Image();
        memeImg.onload = () => {
            meme.src = data.url;
            title.innerHTML = data.title
        };
        memeImg.src = data.url
    })
}
btn.addEventListener("click", getmeme)
window.addEventListener("load", getmeme)
