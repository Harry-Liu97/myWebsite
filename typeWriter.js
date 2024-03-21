const text = "Welcome";
let index = -1;
const speed = 100;

function typeWriter() {
    const element = document.getElementById("typeWriter-text");

    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed)
    } else {
        setTimeout(restText, 2000);
    }
}

function restText() {
    const element = document.getElementById("typeWriter-text");

    if (index >= 0) {
        const newText = text.substring(0, index)
        element.innerHTML = newText
        index--;
        setTimeout(restText, speed)
    } else {
        setTimeout(typeWriter, 1000)
    }
}

window.onload = function() {
    typeWriter();
}