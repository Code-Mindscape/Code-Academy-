  $(document).ready(function(){
    $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      speed: 800,
      infinite: false,
      innerWidth: '100%',
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>'
    });
  });
