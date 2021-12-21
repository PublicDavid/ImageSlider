const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
const bulletsEl = document.querySelector('.carousel-bullets');
let bullets = [];


document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

setInterval(moveToNextSlide, 5000);

document.addEventListener('keyup', function (e) {
    if (e.key === 'ArrowRight') {
        moveToNextSlide();
    } else if (e.key === 'ArrowLeft') {
        moveToPrevSlide();
    } else {
        return;
    }
});

document.addEventListener('click', function (e) {
    if (e.target.className === 'carousel-bullet') {
        changeToSlide(e.target);
    } else {
        return;
    }
});

(function displayBullets() {
    let bullet = "";
    for (let i = 0; i < totalSlides; i++) {
        bullet += `<div class="carousel-bullet" id="bullet-${i}" data-bullet>&bull;</div>`;
    }
    bulletsEl.innerHTML = bullet;
    bullets = document.querySelectorAll('[data-bullet]');
    bullets[0].classList.remove('carousel-bullet');
    bullets[0].classList.add('carousel-bullet-active');
})();

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();
    removeActiveButton();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    addActiveButton();
}

function moveToPrevSlide() {
    hideAllSlides();
    removeActiveButton();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    addActiveButton();
}

function changeToSlide(clickedButton) {
    hideAllSlides();
    removeActiveButton();

    slidePosition = clickedButton.id.substr(7);

    slides[slidePosition].classList.add("carousel-item-visible");
    
    addActiveButton();
}

function removeActiveButton() {
    bullets[slidePosition].classList.remove('carousel-bullet-active');
    bullets[slidePosition].classList.add('carousel-bullet');
}

function addActiveButton() {
    bullets[slidePosition].classList.remove('carousel-bullet');
    bullets[slidePosition].classList.add('carousel-bullet-active');
}