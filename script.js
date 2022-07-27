let title = document.querySelector('.main-title');
let mainButton = document.querySelector('.button-first');
let buttonFirst = document.getElementById('idbut-first');
let buttonSecond = document.getElementById('idbut-second');
let buttonThird = document.getElementById('idbut-third');
let buttonFourth = document.getElementById('idbut-fourth');
let buttonFifth = document.getElementById('idbut-fifth');
let span = document.querySelector('.span-first');
let paragraph = document.querySelector('.paragraph-first');
let spanSecond = document.querySelector('.span-second');
let paragraphSecond = document.querySelector('.paragraph-second');


function description() {
    title.innerHTML = "Choose the description content";
    span.style.backgroundColor = "blue";
    span.style.color = "white";
    paragraph.style.color = "black";
    spanSecond.style.backgroundColor = "#eeeeee";
    spanSecond.style.color = "#929292";
    paragraphSecond.style.color = "#929292";
    buttonFourth.style.display = "none";
    buttonFifth.style.display = "none";
    buttonFirst.style.display = "none";
    buttonSecond.style.display = "inline-block";
    buttonThird.style.display = "inline-block";
};

function mainTitle() {
    title.innerHTML = "Choose the title content";
    span.style.backgroundColor = "#eeeeee";
    span.style.color = "#929292";
    paragraph.style.color = "#929292";
    spanSecond.style.backgroundColor = "#eeeeee";
    spanSecond.style.color = "#929292";
    paragraphSecond.style.color = "#929292";
    buttonFourth.style.display = "none";
    buttonFifth.style.display = "none";
    buttonSecond.style.display = "none";
    buttonThird.style.display = "none";
    buttonFirst.style.display = "block";
};
function confirm() {
    title.innerHTML = "Are you happy now?";
    spanSecond.style.backgroundColor = "blue";
    spanSecond.style.color = "white";
    paragraphSecond.style.color = "black";
    span.style.backgroundColor = "blue";
    span.style.color = "white";
    paragraph.style.color = "black";
    buttonFirst.style.display = "none";
    buttonSecond.style.display = "none";
    buttonThird.style.display = "none";
    buttonFourth.style.display = "inline-block";
    buttonFifth.style.display = "inline-block";
}

function finish() {
    title.innerHTML = "Ok, we`re done. Thanks for sending us your data!";
    title.style.width = "250px";
    buttonFirst.style.display = "none";
    buttonSecond.style.display = "none";
    buttonThird.style.display = "none";
    buttonFourth.style.display = "none";
    buttonFifth.style.display = "none";
}