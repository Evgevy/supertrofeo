


$(document).ready(function (){
    $(".header__burger").click(function(){
        $(".header__logo").toggleClass("header__logo--hide")
        $(".header__nav").toggleClass("header__nav--open")
        $(".header__line:nth-child(1)").toggleClass("header__line--first")
        $(".header__line:nth-child(2)").toggleClass("header__line--middle")
        $(".header__line:nth-child(3)").toggleClass("header__line--last")
    })

})


$(document).ready(function(){
  $(".slider__swiper-wrapper").slick({
    prevArrow: '.slider__swiper-button-prev',
    nextArrow: '.slider__swiper-button-next',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1
          
          
        }
      }
    ]
    
  })

})


   
  

