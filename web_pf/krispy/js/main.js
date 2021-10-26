$(document).ready(function() {
   //main_visual
   $('.controls .page').click(function() {
      //버튼의 스타일 변경
         var i = $(this).attr('class').substr(8,1) // page btn
         //var i = $(this).index() + 1;
         $('.controls .page').not(this).removeClass('page_on')
         $(this).addCalss('page_on')
      
      //슬라이드 변경
      $('.slide').css('z-index','1').fadeOut()
      $('.slide'+ i).css('z-index', '2').fadeIn()
   })
   var btnName = $('.controls button').attr('class')

        $('.controls button').click(function() {
           var btnName = $(this).attr('class')

         if(btnName == 'stop') {
           $(this).attr('class','play')
           $(this).text('▶')
        }
        else {
           auto = setInterval(mainSlider,t)
           $(this).attr('class','stop')
           $(this).text('■')
        } 
        })

   var t = 2000;
   var n = 1;
   var auto = setInterval(mainSlide, t)

   function mainSlide() {
      if(n >= 5 ) {n = 1}
      else {n++}
   

   $('.controls button').removeClass('page_on')
   $('.controls .btn' + n).addClass('page_on')
   }
})//ready()