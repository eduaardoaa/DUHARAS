var slideIndex = 0;
var slideInterval;

showSlides();
startSlideInterval();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var indicators = document.getElementsByClassName("indicator");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove("active");
  }

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  slides[slideIndex].style.display = "block";
  indicators[slideIndex].classList.add("active");
}

function plusSlides(n) {
  slideIndex += n;
  showSlides();
  resetSlideInterval();
}

function startSlideInterval() {
  slideInterval = setInterval(function () {
    slideIndex++;
    showSlides();
  }, 5000);
}

function resetSlideInterval() {
  clearInterval(slideInterval);
  startSlideInterval();
}

function showNav() {
  document.getElementById("prevBtn").style.opacity = 0.7;
  document.getElementById("nextBtn").style.opacity = 0.7;
}

function hideNav() {
  document.getElementById("prevBtn").style.opacity = 0;
  document.getElementById("nextBtn").style.opacity = 0;
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  resetSlideInterval();
}
