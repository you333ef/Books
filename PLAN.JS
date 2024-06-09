document.querySelector(".main-search").onclick = function(){
    document.querySelector(".nav-New").classList.add("open");
}
document.querySelector(".x-mark").onclick = function(){
    document.querySelector(".nav-New").classList.remove("open");
}
// task user
document.querySelector(".userrr-user").onclick = function(){
    document.querySelector(".nav-user").classList.add("Fathy");
}
document.querySelector(".false").onclick = function(){
    document.querySelector(".nav-user").classList.remove("Fathy");
}
//
var mySwiper = new Swiper('.Home-right', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 500,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      enabled: true,
    },
    effect: 'slide',
    grabCursor: true,
  });
  var mySwiper = new Swiper('.testimonial-content', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 500,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      enabled: true,
    },
    effect: 'slide',
    grabCursor: true,
  });
//   dark mood
document.querySelector(".moon").onclick = function(){
document.querySelector("body").classList.add("dark");
}