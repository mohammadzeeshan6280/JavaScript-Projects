let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector("#result");
const sound = document.querySelector("#sound");
const btn = document.querySelector("#search-btn");

btn
  .addEventListener("click", function () {
    let inpWord = document.querySelector("#inp-word").value;
    // console.log(inpWord)
    fetch(`${url} ${inpWord}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        result.innerHTML = `
        <div class="word">
                <h3>${inpWord}</h3>
                <button>
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partsOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
            </div>

            <p class="word-meaning">
              ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
            ${data[0].meanings[0].definitions[0].example || ""}
            </p>
        `;
        sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
        console.log(sound);
      });
  })
  .catch(() => {
    result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
  });

function playSound() {
  sound.play();
}
