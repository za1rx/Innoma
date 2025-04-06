const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
  
    // If we need pagination
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
      780: {
        slidesPerView: 3,
      }
    }
  });
  