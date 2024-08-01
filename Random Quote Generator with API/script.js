let quote = document.getElementById("quote")
let author = document.getElementById("author")
let btn = document.getElementById("btn")

const url = "https://api.quotable.io/randm";


btn.addEventListener("click", function(){
fetch(url)
.then((response) => response.json())
.then((data) => {
    console.log(data)
        quote.innerHTML = data.content;
        author.innerHTML = data.author;

}).catch((err) => {
    console.log(err)
})
})

