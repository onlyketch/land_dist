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

   let hambButton = document.getElementById('burg');
   let sideMenu = document.querySelector('.sideMenu');
   let closeButton = document.querySelector('.sideMenu__close');
   let sideMenuLink = document.querySelectorAll('.sideMenu__link');

   sideMenuLink.forEach(function(e) {
    e.addEventListener('click', function() {
      sideMenu.classList.toggle('__visible');
    });
   })

   hambButton.addEventListener('click', function() {
    sideMenu.classList.toggle('__visible');
   });

   closeButton.addEventListener('click', function() {
    sideMenu.classList.toggle('__visible');
   });


    
});