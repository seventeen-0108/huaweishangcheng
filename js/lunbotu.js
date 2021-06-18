
    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            pauseOnMouseEnter: true,
            autoplay:true,
            delay: 3000
          },
        
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  