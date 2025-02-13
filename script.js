window.onscroll = function() {
    var nav = document.querySelector('nav');
    if (window.pageYOffset > 0) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
};


document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) { // Only activate after scrolling down a bit
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    });
});


let currentIndex = 0;
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;
const visibleItems = 3;
const itemWidth = items[0].offsetWidth + 20; // Include gap

function moveCarousel() {
    currentIndex++;
    if (currentIndex > totalItems - visibleItems) {
        currentIndex = 0;
    }
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
setInterval(moveCarousel, 10000);

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");
    let index = 0;

    function moveSlide() {
        index = (index + 1) % items.length;
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moveSlide, 10000);
});

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");
    let index = 0;

    function moveSlide() {
        index = (index + 1) % items.length;
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moveSlide, 10000);
});

