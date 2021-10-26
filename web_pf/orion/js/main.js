$(function() {
   //브라우저 사이즈 체크
    var winSize = $(window).outerWidth()
    console.log(winSize)

     if(winSize > 1200) {
       pc()
     }
    
     if(winSize <= 1200) {
       mo()
    }
    
  $(window).resize(function() {

    var winSize = $(window).outerWidth()
    if(winSize > 1200) {
      pc()
    }

    if(winSize <= 1200) {
      mo()
    }

  })
// new_production

    mySwiper = new Swiper('#new_product', {
      slidesPerView : 3,
      spaceBetween : 50,
      speed : 2000,
      loop : true,
      grabCursor: true,
      //loopedslides : 1,
      autoplay : {
        delay : 1000
      },
      
      scrollbar: {
        el: '.slide_bar',
        draggable: true,
      },
      navigation: {
        nextEl: '.product_mo_prev',
        prevEl: '.product_mo_next',
      },
        breakpoints: {
          800: {
            slidesPerView: 4,
            spaceBetween: 70
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 100
           }
         }
    });

    mainSwiper = new Swiper('.visual_wrap', {
      progressbarOpposite :true,
      autoplay : {
        delay : 3000
      },
      loop : true,
      pagination: {
        //el: '.swiper-pagination',
        //type: 'bullets',
      }
    });

    $('.tabs li').hover(function() {
      var num = $(this).attr('class').substr(-1,1)
      $('.tabs li span').remove();
      $(this).children('a').append('<span></span>')
    })
   $('.tabs li').click(function() {
      var num = $(this).attr('class').substr(-1,1)
      $('.tabs li span').remove();
      $(this).children('a').append('<span></span>')
      
      $('.contents>div').hide()
      $('.content' + num).show()
    })
  })

function pc() {
   // PC - gnb
   $('.gnb>li').hover(function() {
    $('.dep2').css('zindex','1').stop().slideUp();
    $(this).children('ul').css('z-index','2').stop().slideDown()
  
  }, function() {
     $(this).children('ul').stop().slideUp();
  })
}

function mo() {
  $('.gnb>li').off();

  $('header .mo_open').click(function() {
    $('header nav').after('<div class="mo_gnb_bg"></div>');
    $('header nav').animate({'right' : '0'})
    $('.mo_gnb_bg').fadeIn()
    $('html, body').css('overflow', 'hidden')
  })
  $('header .mo_close').click(function() {
    $('.mo_gnb_bg').remove();
    $('header nav').animate({'right' : '-400px'})
    $('html, body').css('overflow', 'auto')
  })
}