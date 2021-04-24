const text = document.getElementById("text");
const author = document.getElementById("author");
const movie = document.getElementById("movie")
const btnNext = document.getElementById("next");
const btnTwitter = document.getElementById("twitter");
const mainBox = document.getElementById("box");
const gif = document.getElementById("gif");
const google = ("https://www.google.com.br/search?q=");


let apitext;
let numbertext;

function loading() {
    gif.hidden = false
    mainBox.hidden = true
}
function complete() {
    gif.hidden = true
    mainBox.hidden = false
};
async function getText() {
    loading()
    const urlAPI = ("https://run.mocky.io/v3/60401dfd-3c33-4cf2-9059-491821590d43");                 
    const response = await fetch(urlAPI);
    apitext = await response.json();
    next();
};
function next() {
    loading()
    let lastNumber = numbertext
    numbertext = apitext[Math.floor(Math.random() * apitext.length)];
    if (numbertext === lastNumber) {
        next()
    } else {
        if(numbertext.texts.length < 25){
            text.classList.add('small')
        }
        else{if (numbertext.texts.length < 87) {
            text.classList.add('medium')
            text.classList.remove('small')
            } else {
            text.classList.remove('small')
            text.classList.remove('medium')
        }}
        text.textContent = numbertext.texts
        author.textContent = numbertext.author
        movie.textContent = numbertext.movie
        document.body.style.backgroundImage = `url(${numbertext.backGround})`
    }
    complete()
};
btnTwitter.addEventListener("click", twittar);
btnNext.addEventListener("click", next);
text.addEventListener("click", searchtext);
author.addEventListener("click", searchauthor);
movie.addEventListener("click", searchmovie);

function twittar() {
    window.open(`https://twitter.com/intent/tweet?text=${text.textContent}%0d${author.textContent}`);
};
function searchtext() {
    window.open(google+text.textContent)
};
function searchauthor() {
    window.open(google+author.textContent)
};
function searchmovie() {
    window.open (google + movie.textContent)
};

getText();
