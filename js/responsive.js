$(function(){
$(".title").click(function() {
   $(this).next(".sub").stop().slideToggle(300);
   $(this).toggleClass('.on').siblings().removeClass('.on');
   $(this).next(".sub").siblings(".sub").slideUp(300); // 1개씩 펼치기
 });
});
//menu_accordion

  $(function(){
      let btnOpen = $('.btn_open>i');
      let btnClose = $('.btn_close>i');
      let nav = $('.menu');
      
      btnOpen.click(function(){
          nav.animate({
            left : 0
          }, 500);
          btnOpen.css('display','none');
          btnClose.css('display','block');
      });
      btnClose.click(function(){
        nav.animate({
            left : '100%'
        }, 500);
          btnOpen.css('display','block');
          btnClose.css('display','none');
      });

      let eventOpen = $('.event_open>i');
      let eventClose = $('.event_close>i');
      let eventNav = $('.event_menu');

      eventOpen.click(function(){
        eventNav.animate({
            left : 0
          }, 500);
          eventOpen.css('display','none');
          eventClose.css('display','block');
      });
      eventClose.click(function(){
        eventNav.animate({
            left : '-100%'
        }, 500);
        eventOpen.css('display','block');
        eventClose.css('display','none');
      });
  });
//ham_btn, event_btn menu slide 

  $(function(){
    let searchOpen = $('.search_open i');
    let searchClose = $('.search_close i');
    let bg = $('.search_bg');
    let form = $('form')

    form.hide();
    searchOpen.click(function(){
      bg.fadeIn('fast')
      form.fadeIn('fast')
      searchOpen.css('display','none');
      searchClose.css('display','block');
    });
    searchClose.click(function(){
      bg.fadeOut('fast')
      form.fadeOut('fast')
      searchClose.css('display','none');
      searchOpen.css('display','block');
    });
      bg.click(function(){
      bg.fadeOut('fast')
      form.fadeOut('fast')
      searchClose.css('display','none');
      searchOpen.css('display','block');
    });
  });
//input(search_box)

  $( document ).ready( function() {
    $( '.slider' ).bxSlider({
        auto: true, 
        speed: 1000, 
        pause: 4000, 
        controls :true,
        minSlides: 2,
        maxSlides : 6,
        slideWidth: 200,
        stopAutoOnClick: true,
        pager: true,
    });
  });
//product_slide

$(function(){
$('.menu2').hide();

$(".bot_title").click(function() {
 $(this).next(".menu2").stop().slideToggle(300);
 $(this).toggleClass('.on').siblings().removeClass('.on');
 $(this).next(".menu2").siblings(".menu2").slideUp(300); 
});
});
//bottom_accordion

 $(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() >=200){
      $('.top').fadeIn('fast');
    }else {
      $('.top').fadeOut('fast');
    }
  });

  $('.top').click(function(e){
    e.preventDefault();
    $(window).scrollTo(this.hash || 0, 1000)
  });
 }); //top_to_#header_btn

$( document ).ready( function() {
  $( '.popup' ).bxSlider({
      auto: true, 
      mode: 'vertical',
      speed: 1000, 
      pause: 4000, 
      minSlides: 1,
      maxSlides : 1,
      slideWidth: 3000, //control width !!!!!!!!!!
      stopAutoOnClick: true,
      pager: true,
  });
}); //rolling_banner_slide 

$(function(){
$('#num1').mouseenter(function(){
$('.web_sub ul').hide()
$('.web_menu1').show()
});
$('.web_menu1').mouseleave,
$('.web_header').mouseleave(function(){
  $('.web_menu1').hide()
  });

$('#num2').mouseenter(function(){
$('.web_sub ul').hide()
$('.web_menu2').show()
});
$('.web_menu2').mouseleave,
$('.web_header').mouseleave(function(){
  $('.web_menu2').hide()
  });

$('#num3').mouseenter(function(){
$('.web_sub ul').hide()
$('.web_menu3').show()
});
$('.web_menu3').mouseleave,
$('.web_header').mouseleave(function(){
  $('.web_menu3').hide()
  });

$('#num4').mouseenter(function(){
$('.web_sub ul').hide()
$('.web_menu4').show()
});
$('.web_menu4').mouseleave,
$('.web_header').mouseleave(function(){
  $('.web_menu4').hide()
  });

$('#num5').mouseenter(function(){
$('.web_sub ul').hide()
$('.web_menu5').show()
});
$('.web_menu5').mouseleave,
$('.web_header').mouseleave(function(){
  $('.web_menu5').hide()
  });

$('#num6').mouseenter(function(){
$('.web_sub ul').hide()
$('.web_menu6').show()
});
$('.web_menu6').mouseleave,
$('.web_header').mouseleave(function(){
  $('.web_menu6').hide()
  });

$('#num7').mouseenter(function(){
$('.web_sub ul').hide()
$('.web_menu7').show()
});
$('.web_menu7').mouseleave,
$('.web_header').mouseleave(function(){
  $('.web_menu7').hide()
  });

  $('.ws').mouseenter(function(){
    $('.web_sub ul').hide()
});
}); 
//web_lnb 

$(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() >= 200){
          $('.web_lnb').addClass('fixed');
      } else {
          $('.web_lnb').removeClass('fixed');
      } if($(this).scrollTop() >= 200){
          $('.top').fadeIn('fast');
      } else {
          $('.top').fadeOut('fast');
      }
  });
}); 
//web_lnb_fixed 

$( document ).ready( function() {
  $( '.bxslider_02' ).bxSlider({
      auto: true, 
      speed: 1000, 
      pause: 4000, 
      pager: true,
      slideWidth: 3000,
      
  });
});
//main_visual_slide (final version)
