$(document).ready(function() {
    
    $('.warehouses__slider').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 2
              }  
            },
            {
                breakpoint: 770,
                settings: {
                  slidesToShow: 1
                }  
              },
        ]
    });

    $('.gallery__slider').slick({
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive:[
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 1
              }  
            }
        ]
    });

    $('.choose-btn').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#warehouses').offset().top }, 10);
        e.preventDefault();
    });

    Fancybox.bind('[data-fancybox="modal"]', {
      groupAttr: false,
   });


    let burg = document.getElementById('burg');
    let hiddenMenu = document.querySelector('.hidden');
    let hiddenNav = document.querySelectorAll('.hidden__nav');

    burg.addEventListener('click', function() {
      hiddenNav.forEach(function(e) {
        e.classList.toggle('opacity');
      });
      hiddenMenu.classList.toggle('hidden-visible');
    });

    hiddenNav.forEach(function(e) {
      e.addEventListener('click', function() {
        hiddenNav.forEach(function(e) {
          e.classList.toggle('opacity');
        });
        hiddenMenu.classList.toggle('hidden-visible');
      });
    });


    
});