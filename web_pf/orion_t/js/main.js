$(function() {
   
  // PC - gnb
   /*$('.gnb>li').hover(function() {
      $('.dep2').css('zindex','1').stop().slideUp();
      $(this).children('ul').css('z-index','2').stop().slideDown()
    
    }, function() {
       $(this).children('ul').stop().slideUp();
    })*/
    
// new_production
//https://www.biew.co.kr/entry/%EB%B0%98%EC%9D%91%ED%98%95-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%8D%94-Swiper
//https://m.blog.naver.com/anedthh/222014406404

    const swiper = new Swiper('#new_product', {
      slidesPerView: 5,
      spaceBetween: 30,
      speed: 2000,
      //loop: true,
      autoplay: {
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
      // breakpoints: {
      //   600: {
      //     slidesPerView: 3,
      //     spaceBetween: 20
      //   }
      // }
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
    
    // $('.more_page span').hover(function() {
    //   $(this).css({'background':'red','color':'white'})
    // },function() {
    //   $(this).css({'background':'white','color':'#000'})
    // })

   // var pd_wid = $(window).width();
   // var pd_leng = $('.slider li').length;
   
   // $('.new_production .slider ul').css({'width': pd_wid * pd_leng})
   // $('.new_production .slider li').css({'width': pd_wid / 8})

   //$('.main_visual').slick();

   $('.tabs li').click(function() {
      $('.tabs li span').remove();
      $(this).children('a').append('<span></span>')

      $('.contents>div').hide()
      $('.content' + num).show()
   
   })

   
})