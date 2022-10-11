$(function(){


   // ------start sticky header------

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('.header').addClass("hide");
    }
    else{
    $('.header').removeClass("hide");
    }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 10){
        $('.pricebar').addClass('active')
        
        }
        else{
       $('.pricebar').removeClass('active');
        }


        });   
 $('.marquee').marquee({ 
              duration: 7000, 
              startVisible: true, 
              duplicated: true,
              duration: 20000,
            
            }); 
         
       
           
    //-------start mobil menu---------- 
//start updates
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop || $(this).scrollTop() < 1) {

       $('.header').removeClass('sticky');
       
   } else {

      $('.header').addClass('sticky');
   }
   lastScrollTop = st;
});

//end updates
if($(window).width() < 768) {
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop || $(this).scrollTop() > 1) {

       $('.menu').slideUp();
       
   } else {

      
   }
   lastScrollTop = st;
});
}

// start width control on hover menu link 
if($(window).width() > 768) {
$('.header__menu-link').each(function(){
    $(this).width($(this).width() + 4);
});
}
// end width control on hover menu link 

//start mobile menu 
$('.menu__btn').click(function(){
    $(this).toggleClass('active');
    $('.menu').slideToggle();
})
//end mobile menu 

//start mobile sub-menu 
if($(window).width() < 768) {
 $('.header__menu-item--sub').click(function(){
    $('.sub__menu').slideToggle();
 })
 $('.footer__menu-link--sub').click(function(){
    $('.footer__menu-sub').slideToggle();
 })
}
//end mobile menu sub-menu

//start slider init
$('.slider').slick({
    prevArrow: false,
    nextArrow: false,
    fade: true,
    //autoplay: true,
    dots: true
});

$('.about-slider').slick({
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    slidesToShow: 3,
    dots: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
             
            }
          },
    ]

});

//end slider init

$('.slider').on('afterChange', function(event, slick, currentSlide){
    if (currentSlide == 0) {
        $('.header').addClass('light');
        $('.header').removeClass('orange');
        $('.header').removeClass('grey');
     }
    
    if (currentSlide == 1) {
        $('.header').addClass('orange');
        $('.header').removeClass('grey');
        $('.header').removeClass('light');
     }
     if (currentSlide == 2) {
        $('.header').addClass('grey');
        $('.header').removeClass('orange');
        $('.header').removeClass('light');
     }
   
});


});

