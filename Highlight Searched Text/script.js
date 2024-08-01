
function search(){
    let textToSearch = document.querySelector("#text-to-search").value;
    let para = document.querySelector("#paragraph")
   console.log(textToSearch);

   textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")

   let pattern = new RegExp(`${textToSearch}`, "gi")

   para.innerHTML = para.textContent.replace(pattern, match => `<mark>${match}</mark>`)


}