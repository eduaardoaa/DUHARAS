function startSlideshow() {
    const images = document.querySelectorAll(".ftteam");
    const dots = document.querySelectorAll(".dot");
    let currentImageIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = "block";
                dots[i].classList.add("active");
            } else {
                image.style.display = "none";
                dots[i].classList.remove("active");
            }
        });
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    }

    const intervalId = setInterval(nextImage, 10000);

    showImage(currentImageIndex);

    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    prevButton.addEventListener("click", () => {
        clearInterval(intervalId);
        prevImage();
    });

    nextButton.addEventListener("click", () => {
        clearInterval(intervalId);
        nextImage();
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", (event) => {
            clearInterval(intervalId);
            const slideIndex = parseInt(event.target.getAttribute("data-slide-index"));
            currentImageIndex = slideIndex;
            showImage(currentImageIndex);
        });
    });
}

window.addEventListener("load", startSlideshow);