$(function() {
   //PC -gnb 연습
   $('#gnb_wrap>li>a').hover(function() {
      $(this).append('<span></span>')
      $(this).children('span').stop().animate({'width' : '100%'})
  
    },function() {
      $(this).children('span').animate({'width':'0'}, function() {
        (this).remove()
      })

   //올메뉴 버튼
   $('.util_wrap button:nth-child(1)').click(function() {
      $('#gnb_wrap .gnbbg').hide();
      $('.search_wrap').hide()
      $('.allmenu_wrap').show()
      
   })
   
   //헤더의 검색 버튼
   $('.util_wrap button:nth-child(2)').click(function() {
      $('.search_wrap').show()
      $('.allmenu_wrap').hide()
      
   })
   //올메뉴와 검색의 닫기버튼
   $('.fixed_box .btn_close').click(function() {
      $('.fixed_box').hide();
   })

   // $('.all_1>li').has('.all_2').addClass('has2')
   // $('.all_2>li').has('.all_3').addClass('has3')
   $('.all_1 li').has('ul').addClass('has')

   //패밀리사이트
   $('.family_site button').click(function() {
      $(this).next().toggle()
   })
   //모바일 메뉴
   $('all_1 li a').click(function() {
      $(this).next().slideToggle();
      $(this).toggleClass('on')
   })

   //배너 롤링
   
   var banner_cnt = $('.banner_wrap li').length;

   $('.banner_btns .next_btn span').text(banner_cnt);

   var n = 1;
   /*
   $('.banner_btns .prev_btn').click(function() {
      if(n <= 1) {n = banner_cnt}
      else {n--;}
      $('.banner_wrap li').css('z-index','1')
      $('.banner_wrap li:nth-child(' + n + ')').css('z-index','2')
   })

   
   $('.banner_btns .next_btn').click(function() {
      if(n >= banner_cnt) {n = 1}
      else {n++;}
      $('.banner_wrap li').css('z-index','1')
      $('.banner_wrap li:nth-child(' + n + ')').css('z-index','2')
   })
   */
  $('.banner_brns button').click(function() {
     var name = $(this).attr('class');

     switch(name) {
      case 'prev_btn' :
         if(n <= 1) {n = banner_cnt}
         else {n--;}
         break;
      case 'next_btn' :
         if(n >= banner_cnt) {n = 1}
         else {n++;}
         break;
     }
  
      $('.banner_wrap li').css('z-index','1')
      $('.banner_wrap li:nth-child(' + n + ')').css('z-index','2')
      $('.banner_btns .prev_btn span').text(n);
   })
   
   
   //패밀리사이트
   $('.family_site button').click(function() {
      $(this).next().toggle();
   })

   

})//ready()