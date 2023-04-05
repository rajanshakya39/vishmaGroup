// javAscript for image slider
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 6){
    counter = 1;
  }
},10000);

// javascript for menubtn

const menuBtn = document.querySelector('.menubtn');
const navbar = document.querySelector('.navlinks');

menuBtn.addEventListener("click", function(){
  menuBtn.classList.toggle('active');
  navbar.classList.toggle('active');
});

// script fot sticky navbar
const navigation = document.querySelector(".navbar")
const mainNav = document.getElementById(".main-nav");
const slider = document.querySelector(".slider");
const topbar = document.querySelector(".topbar")

window.addEventListener("scroll", function(){
    const scrollheight = window.pageYOffset;
    const sliderHeight = slider.getBoundingClientRect().height;
    if(scrollheight > sliderHeight - 150){
        navigation.classList.add("active");
        topbar.classList.add("active");
    }else if (scrollheight > 0){

      topbar.classList.remove("active");
    }


    else{
        navigation.classList.remove("active")
    }
});

// script for partner slider

var swiper = new Swiper(".partner-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
      delay: 2500,
      disableOnInteraction: true,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
    },
    1020: {
      slidesPerView: 5,
    },
  },
});
