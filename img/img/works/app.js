const buttons = document.querySelectorAll('.button');
const paragraph = document.querySelector('.top');
let movement = 0;
document.addEventListener('click', checkRadio);

function checkRadio() {
    setTimeout(function() {
        changeText();
    }, 10)
}

function changeText() {
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            movement = i * 400;
            paragraph.style.marginLeft = `-${movement}px`;
        };
    };

};