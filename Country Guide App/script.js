// Button Select
let searchBtn = document.querySelector("#serach-btn");

// Input Select
let countryInp = document.querySelector("#country_inp");
let result = document.querySelector("#result");

searchBtn.addEventListener("click", function(){
    let countryName = countryInp.value;
    // let countryName = "India";
    // https://restcountries.com/v3.1/name/{name}?fullText=true // api
    let finalUrl =  `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalUrl)

fetch(finalUrl).then((response) => response.json())
.then((data) => {
    console.log(data)
    console.log(data[0])
    console.log(data[0].capital[0])
    console.log(data[0].flags.svg)
    console.log(data[0].name.common)
    console.log(data[0].continents[0])
    console.log(Object.keys(data[0].currencies)[0]);
    console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
console.log(Object.values(data[0].languages).toString().split(",").join(", "));

result.innerHTML = `
<img src="${data[0].flags.svg}" class="flag-img">
<h2>${(data[0].name.common)}</h2>
<div class="wrapper">
<div class="data-wrapper">
<h4>Capital : </h4>
<span>${data[0].capital[0]}</span>
</div>
</div>

<div class="wrapper">
<div class="data-wrapper">
<h4>Continent : </h4>
<span>${data[0].continents[0]}</span>
</div>
</div>

<div class="wrapper">
<div class="data-wrapper">
<h4>Popultation : </h4>
<span>${data[0].population}</span>
</div>
</div>

<div class="wrapper">
<div class="data-wrapper">
<h4>Currency : </h4>
<span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
</div>
</div>

<div class="wrapper">
<div class="data-wrapper">
<h4>Common Languange : </h4>
<span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
</div>
</div>
`

})
})