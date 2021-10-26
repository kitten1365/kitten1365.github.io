$(function() {
  //모바일 gnb의 펼침 아이콘
  $('.dep_2>li').has('ul').addClass('has3')

  // 모바일 gnb
  $('#gnb>li>a').click(function() {      
    $('#gnb>li>a').not(this).next().slideUp();
    //$('.dep_2').slideUp();
    //클릭한 dt의 바로 다음 동생 dd만 보이게
    $(this).next().slideToggle();

    $('#gnb>li>a').not(this).removeClass('icon_on')
    $(this).toggleClass('icon_on')
  })
  
  $('.dep_2>li>a').click(function() {
    $('.dep_2>li>a').not(this).next().slideUp();
    $(this).next().slideToggle();

    $('.dep_2>li>a').not(this).removeClass('icon_on')
    $(this).toggleClass('icon_on')
  })
  
  /*$('#gnb li a').click(function() {
    $('#gnb li a').not(this).next().slideUp();
    $(this).next().slideToggle();

    $('#gnb li a').not(this).removeClass('icon_on')
    $(this).toggleClass('icon_on')
  })*/

  //모바일용 x 버튼
  $('.mo_gnb_close').click(function() {
    $('.mo_gnb_bg').hide()
    $('.mo_gnb_bg nav').css('left','-300px')
  })

  //모바일용 open 버튼
  $('.mo_gnb_open').click(function() {
    $('.mo_gnb_bg').fadeIn();
    $('.mo_gnb_bg nav').animate({'left':'0'});
  })

  //모바일 - 메인 비주얼
  var mo_vis_w = $(window).width();
  var mo_vis_l = $('.mo_slider li').length;

  $('.mo_slider li').css({'width' : mo_vis_w})
  $('.mo_slider ul').css({'width' : mo_vis_w * mo_vis_l})

  $('.mo_visual_wrap .prev').click(function() {
    $('.mo_slider ul').css({'margin-left' : -mo_vis_w})
    $('.mo_slider li:last-child').insertBefore($('.mo_slider:first-child'))
    $('.mo_slider ul').animate({'margin-left' : 0})
  })

  $('.mo_visual_wrap .next').click(function() {
    $('.mo_slider ul').css({'margin-left' : mo_vis_w})
    $('.mo_slider li:first-child').insertAfter($('.mo_slider:last-child'))
    $('.mo_slider ul').animate({'margin-left' : 0})
  })
    
  ////////////////////////////////////////


  //팝업 닫기
  $('#popup button').click(function() {
    $(this).parent().hide();
  })

  // PC - gnb
  /*
  $('#gnb>li').hover(function() {
    //$('.dep_2').hide();
    $(this).chideren('.dep_2').fadeIn();
  }, function() {
  })*/

  //메인 비주얼(PC)
  $('.visual_btn_wrap button').click(function() {
    //var i = $(this).attr('class').substr(4,1) //btn_
    var i = $(this).index() + 1;

    $('.visual_btn_wrap button').not(this).removeClass('slide_on')
    $(this).addClass('slide_on')

    $('.slide').css('z-index', '1').fadeOut()
    $('.slide_' + i).css('z-index', '2').fadeIn()
  })

  var t = 5000;
  var n = 1;
  var auto = setInterval(mainSlide, t)

  function mainSlide() {
    if(n >= 6) {n = 1}
    else {n++}

    $('.slide').css('z-index', '1').fadeOut()
    $('.slide_' + n).css('z-index', '2').fadeIn()

    $('.visual_btn_wrap button').removeClass('slide_on')
    $('.visual_btn_wrap .btn_' + n).addClass('slide_on')
  }

    //footer - familySite
    $('.fam_site button').click(function() {
      $('.fam_site ul').slideToggle();
    })
})//ready()
