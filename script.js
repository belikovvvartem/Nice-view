const options = document.querySelectorAll('.option');

options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(opt => opt.classList.remove('active'));
    option.classList.add('active');
  });
});



var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    spaceBetween: 30,
    loop: false,
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
  
  swiper.slideTo(1, false, false);