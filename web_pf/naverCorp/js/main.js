$(function() {

  //PC - gnb
  $('#gnb>li').hover(function() {
    $(this).children('a').append('<span class="underbar"></span>')
    $(this).find('.underbar').stop().animate({'width' : '100%'})

    $('.depth2').css('zindex','1').stop().slideUp();
    $(this).children('ul').css('z-index','2').stop().slideDown()
  },function() {
    $('.underbar').animate({'width':'0'}, function() {
      (this).remove()
    })
  })

  /*
  $('#gnb>li>a').hover(function() {
    $(this).children('a').append('<span></span>')
  }, function() {
    $(this).children('span').remove()
  })
  */

  //$('.service_wrap li a').mouseenter(function() {})
  //$('.service_wrap li a').mouseleaver(function() {})

  //$('.service_wrap li a').hover(function() {}, function() {})
  var s = 0;
  //햄버거 gnb 버튼
  $('.allmenu_btn').click(function() {
    //잘못된 표현식 : $('#header .allmenu_wrap').css('left','0','background', 'rgba(0,0,0,0.5)');
    //$('#header .allmenu_wrap').css('left','0');
    //$('#header .allmenu_wrap').css('background', 'rgba(0,0,0,0.5)');
    if(s == 0) {
      $('#header .allmenu_wrap').css({'left': '0', 'background': 'rgba(0,0,0,0.5)'});
      $('.allmenu_wrap ul.allmenu').css('margin-left','40%')
      $('#header .lang').css('margin-left','40%')

      $('.allmenu_wrap').addClass('all_on');
      s = 1;
    }
    else {
      $('#header .allmenu_wrap').css({'left': '100%', 'background': 'none'});
      $('.allmenu_wrap ul.allmenu').css('margin-left','100%')
      $('#header .lang').css('margin-left','100%')

      $('.allmenu_wrap').removeClass('all_on');
      s = 0;
    }
  });

  //메인 비주얼
  var vis_wid = $(window).width(); //1649px
  var vis_len = $('.visual_slider li').length;
  var n = 1;

  $('.visual_slider ul').css({'width' : vis_wid * vis_len})
  $('.visual_slider li').css({'width' : vis_wid});

  $('.visual_slider .prev_btn').click(function() { 
    $('.visual_slider li:last-child').insertBefore($('.visual_slider li:first-child'));
    $('.visual_slider ul').css('margin-left', -vis_wid)
    $('.visual_slider ul').stop().animate({'margin-left' : 0})

    if(n <= 1) {n = vis_len}
    else {n--}

    $('.slide_paging .current').text(n)
    $('.slide_progressbar .progress').css({'width' : prog_wid * n})
  })
  $('.visual_slider .next_btn').click(function() { mainSlider() })

  var prog_wid =  $('.slide_progressbar').width() / vis_len;

  $('.slide_progressbar .progress').css({'width' : prog_wid})

  var t = 5000;
  var auto = setInterval(mainSlider,t)
  function mainSlider() {
    $('.visual_slider ul').stop().animate({'margin-left': -vis_wid}, function() {
      $('.visual_slider li:first-child').insertAfter($('.visual_slider li:last-child'));
      $('.visual_slider ul').css({'margin-left': 0})
    })
    if(n >= vis_len) {n = 1}
    else {n++}

    $('.slide_paging .current').text(n)
    $('.slide_progressbar .progress').css({'width' : prog_wid * n})
  }

  //서비스 목록
  $('.service_wrap li a').hover(function() {
    $(this).css('background','rgba(0,0,0,0.5)');
    $(this).children().css('bottom','0')
  }, function() {
    $(this).css('background','rgba(0,0,0,0)')
    $(this).children().css('bottom','-130px')
  })

  //footer 패밀리사이트
  $('.family_site button').click(function() {
    $('.family_site ul').toggle();
    $(this).toggleClass('on')
  })

})//ready()