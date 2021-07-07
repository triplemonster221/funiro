 $(document).ready(function(){


      $('.banner').slick({
        arrows: true,
        dots: true,
        prevArrow: '<button type="button" class="left slick-prev"><img src="images/Left.svg"></button>',
        nextArrow: '<button type="button" class="right slick-next"><img src="images/Right.svg"></button>',
      });

      $('.tipsslaider__item').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: '<button type="button" class="tipsslaide-left slick-prev"><img src="images/Right.svg"></button>',
        nextArrow: '<button type="button" class="tipsslaide-right slick-next"><img src="images/Right.svg"></button>',
      });

      $('.product__list-like').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('product__list-like--active')
      });



    });