let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  if(slideIndex !== slides.length){
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style.zIndex = 1;
    slides[slideIndex].style.display = "block";
    slides[slideIndex].style.zIndex = 10;
  }else{
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style.zIndex = 1;
    slides[0].style.display = "block";
    slides[0].style.zIndex = 10;
  }
  dots[slideIndex-1].className += " active";
}
/*setInterval(() => {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  ++slideIndex;
}, 3*1000)*/
