let slideIndex = 1;
let right ='';
showSlides(slideIndex);
function nextSlide(n) {
  right = true;
  showSlides(slideIndex += n);
}
function prevSlide(n) {
  right = false;
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let img1 = document.querySelector('.image_slide1');
  let img2 = document.querySelector('.image_slide2');
  let img3 = document.querySelector('.image_slide3');
  let i;
  let dots = document.getElementsByClassName("dot");
  let ss = document.styleSheets;
  if (n > 3) {slideIndex = 1}
  if (n < 1) {slideIndex = 3}
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  $('.image_slide1').removeClass("previousImagePrev");
  $('.image_slide1').removeClass("currentImagePrev");
  $('.image_slide1').removeClass("nextImagePrev");
  $('.image_slide1').removeClass("previousImageNext");
  $('.image_slide1').removeClass("currentImageNext");
  $('.image_slide1').removeClass("nextImageNext");
  $('.image_slide2').removeClass("previousImagePrev");
  $('.image_slide2').removeClass("currentImagePrev");
  $('.image_slide2').removeClass("nextImagePrev");
  $('.image_slide2').removeClass("previousImageNext");
  $('.image_slide2').removeClass("currentImageNext");
  $('.image_slide2').removeClass("nextImageNext");
  $('.image_slide3').removeClass("previousImagePrev");
  $('.image_slide3').removeClass("currentImagePrev");
  $('.image_slide3').removeClass("nextImagePrev");
  $('.image_slide3').removeClass("previousImageNext");
  $('.image_slide3').removeClass("currentImageNext");
  $('.image_slide3').removeClass("nextImageNext");
  if(right === true){
    if(slideIndex === 1){
      console.log(1);
      $('.image_slide1').addClass("currentImageNext");
      $('.image_slide2').addClass("previousImageNext");
      $('.image_slide3').addClass("nextImageNext");
    }else if(slideIndex === 2){
      console.log(2);
      $('.image_slide1').addClass("previousImageNext");
      $('.image_slide2').addClass("nextImageNext");
      $('.image_slide3').addClass("currentImageNext");
    }else if(slideIndex === 3){
      console.log(3);
      $('.image_slide1').addClass("nextImageNext");
      $('.image_slide2').addClass("currentImageNext");
      $('.image_slide3').addClass("previousImageNext");
    }
  }else if(right === false){
    if(slideIndex === 1){
      console.log(1);
      $('.image_slide1').addClass("currentImagePrev");
      $('.image_slide2').addClass("previousImagePrev");
      $('.image_slide3').addClass("nextImagePrev");
    }else if(slideIndex === 2){
      console.log(2);
      $('.image_slide1').addClass("previousImagePrev");
      $('.image_slide2').addClass("nextImagePrev");
      $('.image_slide3').addClass("currentImagePrev");
    }else if(slideIndex === 3){
      console.log(3);
      $('.image_slide1').addClass("nextImagePrev");
      $('.image_slide2').addClass("currentImagePrev");
      $('.image_slide3').addClass("previousImagePrev");
    }
  }
  img1.addEventListener('animationstart', false);
  img1.addEventListener('animationiteration', false);
  img1.addEventListener('animationend', false);
  img2.addEventListener('animationstart', false);
  img2.addEventListener('animationiteration', false);
  img2.addEventListener('animationend',  false);
  img3.addEventListener('animationstart',  false);
  img3.addEventListener('animationiteration',  false);
  img3.addEventListener('animationend',  false);
  right = '';
}
