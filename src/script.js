const slides = [
    { text: "Slide 1", color: "#1abc9c" },
    { text: "Slide 2", color: "#3498db" },
    { text: "Slide 3", color: "#e74c3c" },
    { text: "Slide 4", color: "#9b59b6" },
];

let currentSlide = 0;
let autoSlideInterval;
const slideElement = document.getElementById("slide");
const playButton = document.getElementById("play");
const stopButton = document.getElementById("stop");

function showSlide(index) {
    slideElement.textContent = slides[index].text;
    slideElement.style.backgroundColor = slides[index].color;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function playSlides() {
    stopAutoSlide();
    autoSlideInterval = setInterval(nextSlide, 2000);
    playButton.disabled = true;
    stopButton.disabled = false;
    stopButton.classList.add("hover:bg-red-400");
    playButton.classList.remove("hover:bg-green-400");
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
    playButton.disabled = false;
    stopButton.disabled = true;
    stopButton.classList.remove("hover:bg-red-400");
    playButton.classList.add("hover:bg-green-400");
}

document.getElementById("next").addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
});

document.getElementById("prev").addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
});

playButton.addEventListener("click", playSlides);
stopButton.addEventListener("click", stopAutoSlide);

showSlide(currentSlide);
stopButton.disabled = true;
