const bars = document.querySelector('#bars');
const curtain = document.querySelector('.curtain');
const closeBtn = document.querySelector('#close');
bars.addEventListener('click', () => {
    curtain.style.width = "70%";
    bars.style.display = "none";
    closeBtn.style.display = "block";
});

closeBtn.addEventListener('click', () => {
    curtain.style.width = "0%";
    closeBtn.style.display = "none";
    bars.style.display = "block";

});

const home = document.querySelector('#home');
const about = document.querySelector('#about');
const exp = document.querySelector('#exp');
const skill = document.querySelector('#skill');
const contact = document.querySelector('#contact');

home.addEventListener('click', () => {
    curtain.style.width = "0%";
    closeBtn.style.display = "none";
    bars.style.display = "block";
});

about.addEventListener('click', () => {
    curtain.style.width = "0%";
    closeBtn.style.display = "none";
    bars.style.display = "block";
});

exp.addEventListener('click', () => {
    curtain.style.width = "0%";
    closeBtn.style.display = "none";
    bars.style.display = "block";
});

skill.addEventListener('click', () => {
    curtain.style.width = "0%";
    closeBtn.style.display = "none";
    bars.style.display = "block";
});

contact.addEventListener('click', () => {
    curtain.style.width = "0%";
    closeBtn.style.display = "none";
    bars.style.display = "block";
});



//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}