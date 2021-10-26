$(function() {
   var winSize = $(window).width()
  // PC - gnb
   $('.gnb>li').hover(function() {
      $('.dep2').css('zindex','1').stop().slideUp();
      $(this).children('ul').css('z-index','2').stop().slideDown()
    
    }, function() {
       $(this).children('ul').stop().slideUp();
    })

    if(winSize <= 1200) {
      $('.gnb>li').off()
    }
    
// new_production

    const swiper = new Swiper('#new_product', {
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
          1200: {
          slidesPerView: 6,
            spaceBetween: 100
          }
        }
    });
   

    $('header .mo_open').click(function() {
      $('header nav').after('<div class="mo_gnb_bg"></div>');
    $('header nav').animate({'right' : '0'})
    $('.mo_gnb_bg').fadeIn()
    $('html, body').css('overflow', 'hidden')
    })
    $('.mo_close').click(function() {
      $('.mo_gnb_bg').remove();
      $('header nav').animate({'right' : '-400px'})
      $('html, body').css('overflow', 'auto')
    })
    

   $('.tabs li').click(function() {
      var num = $(this).attr('class').substr(-1,1)
      $('.tabs li span').remove();
      $(this).children('a').append('<span></span>')
      
       $('.contents>div').hide()
       $('.content' + num).show()
   
   })
   $('.tabs li').hover(function() {
    var num = $(this).attr('class').substr(-1,1)
    $('.tabs li span').remove();
    $(this).children('a').append('<span></span>')
  })
   
  
})