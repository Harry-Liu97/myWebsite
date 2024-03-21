const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const slides = document.querySelectorAll('.cardBox input[type="radio"]');

let currentSlide = 0;

function navIndex() {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].checked == true) {
            currentSlide = i
            break
        }
    }
}

function preSlide() {
    navIndex()
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].checked = true;
}

function nextSlide() {
    navIndex()
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].checked = true;
}
