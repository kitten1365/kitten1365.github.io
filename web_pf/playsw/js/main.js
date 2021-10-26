$(function() {
  //$('#header').addClass('header_fix')

  $('.mo_open').click(function() {
    $('#header nav').after('<div class="mo_gnb_bg"></div>');
    $('#header nav').animate({'right' : '0'})
    $('.mo_gnb_bg').fadeIn()
    $('html, body').css('overflow', 'hidden')
  })
  $('.mo_close').click(function() {
    $('.mo_gnb_bg').remove();
    $('#header nav').animate({'right' : '-300px'})
    $('html, body').css('overflow', 'auto')
  })

  //메인비주얼
  var vis_wid = $(window).width();
  var vis_len = $('.main_slider .slide_box').length;
  
  $('.main_slider').css('width', vis_wid * vis_len);
  $('.main_slider .slide_box').css('width', vis_wid);
  
  $('.slider_controls .btns_next').click(function() {
    //ul이 왼쪽으로 애니메이션하고 난 뒤에 첫째가 막내 뒤로 이동
    $('.main_slider').animate({'margin-left' : -vis_wid}, function() {
      //첫째가 막내 뒤로 이동(insertAfter)
      $('.main_slider .slide_box:first-child').insertAfter($('.main_slider .slide_box:last-child'));
      $('.main_slider').css('margin-left', 0)
    })
  })
  $('.slider_controls .btns_prev').click(function() {
    //ul이 오른쪽으로 애니메이션하기 전에 막내가 첫째 앞에 와서 대기
    $('.main_slider .slide_box:last-child').insertBefore($('.main_slider .slide_box:first-child'));
    $('.main_slider').css('margin-left', -vis_wid)
    $('.main_slider').stop().animate({'margin-left' : 0})
  })

  var auto = setInterval(mainSlider,2000)
  var n = 0;
  function mainSlider() {
    $('.main_slider').stop().animate({'margin-left' : -vis_wid}, function() {
      $('.main_slider .slide_box:first-child').insertAfter($('.main_slider .slide_box:last-child'));
      $('.main_slider').css('margin-left', 0)
    })
    if(n >= vis_len-1) {n = 0}
    else {n++}
    
    $('.paging button').removeClass('page_on')
    $('.paging button').eq(n).addClass('page_on')
  }

  //btn_login(로그인) 버튼을 클릭하면 오토 슬라이딩이 멈추게
  $('.btn_login').click(function() {
    window.clearInterval(auto)
  })

  //마우스가 장면 위에 있으면 멈추고 아웃되면 다시 롤링
  $('.main_slider').hover(function() {
    window.clearInterval(auto)
  }, function() {
    auto = setInterval(mainSlider,2000)
  })

})//ready()