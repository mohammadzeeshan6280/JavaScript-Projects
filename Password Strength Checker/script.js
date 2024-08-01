const indicator = document.querySelector(".indicator")
const input = document.querySelector("input")
const weak = document.querySelector(".weak")
const medium = document.querySelector(".medium")
const strong = document.querySelector(".strong")
const text = document.querySelector(".text")
const showBtn = document.querySelector(".showBtn")
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,(,)]/;

function trigger(){
    if(input.value != ""){
        indicator.style.display = "block";
        indicator.style.display = "flex"

    }
}