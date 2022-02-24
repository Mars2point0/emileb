//Global Variables
const progressBar = document.getElementsByClassName('skill-flex-item');
const html = document.getElementById('html');
const css = document.getElementById('css');
const javascript = document.getElementById('javascript');
const node = document.getElementById('node');
const django = document.getElementById('django');
const buttons = document.querySelectorAll('.button');
const paragraph = document.querySelector('.top');
let movement = 0;

// change navbar color on scroll
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        document.getElementById("navbar").style.background = "#01008A";
    } else {

        document.getElementById("navbar").style.background = "none";
    }
}
// check if element is visible
function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= -150 &&
        rect.bottom <= (window.innerHeight + 300 || document.documentElement.clientHeight + 300)
    )
};

//Function to start progress bar animation
function startAnime() {
    if (isVisible(progressBar[0])) {
        // Set the width to animate the progress bar
        // Along with time duration in milliseconds
        $("#html").animate({
            width: "95%",
        }, 2500);
        $("#css").animate({
            width: "85%",
        }, 2500);
        $("#javascript").animate({
            width: "90%",
        }, 2500);
        $("#node").animate({
            width: "80%",
        }, 2500);
        $("#django").animate({
            width: "70%",
        }, 2500);
        html.id = "htmldone";
        css.id = "cssdone";
        javascript.id = "javascriptdone";
        node.id = "nodedone";
        django.id = "djangodone";
    };


};

//change postion of paragraphs
function changeText() {
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            movement = i * 400;
            paragraph.style.marginLeft = `-${movement}px`;
        };
    };

};


//Evenets

//Start progress bar animation
document.addEventListener('scroll', startAnime);

//Listen to clicks for radio button
document.addEventListener('click', changeText);