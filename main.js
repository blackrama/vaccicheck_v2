$(document).ready(function(){
$('.stycky_img').on('click',function(){
  $('body, html').animate({scrollTop:0}, '500');
});
$('.vacci_toggle_question').on('click',function(){
  $(this).toggleClass('vacci_toggle_active');
  $('.vacci_toggle_question').not(this).removeClass('vacci_toggle_active');
  if($(this).hasClass('vacci_toggle_active')){
    $(this).next($('.vacci_toggle_answer')).slideDown();
      $('.vacci_toggle_question').not(this).next($('.vacci_toggle_answer')).slideUp();
  } else {
    $(this).next($('.vacci_toggle_answer')).slideUp();
  }
 
});

$('.plus1').on('mouseover',function(){
  $('.yt1').css('color','#f26539');
});
$('.plus1').on('mouseleave',function(){
  $('.yt1').css('color','#493280');
})
$('.plus2').on('mouseover',function(){
  $('.yt2').css('color','#f26539');
});
$('.plus2').on('mouseleave',function(){
  $('.yt2').css('color','#493280');
})
$('.plus3').on('mouseover',function(){
  $('.yt3').css('color','#f26539');
});
$('.plus3').on('mouseleave',function(){
  $('.yt3').css('color','#493280');
})
$('.plus4').on('mouseover',function(){
  $('.yt4').css('color','#f26539');
});
$('.plus4').on('mouseleave',function(){
  $('.yt4').css('color','#493280');
})
$('.plus5').on('mouseover',function(){
  $('.yt5').css('color','#f26539');
});
$('.plus5').on('mouseleave',function(){
  $('.yt5').css('color','#493280');
});

// $('.experts_slider').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   vertical: true,
//   dots: false,
//   arrows: false,
//   infinite: true,
//   speed: 300,
//   verticalSwiping: true,
//   autoplay: true,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         vertical: false,
//         slidesToShow: 1
//       }
//     }]
// });

$('.experts_slider').slick({
  slidesToScroll: 1,
  centerMode: true,  
  centerPadding: '113px',
  slidesToShow: 1,
  vertical: true,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 800,
  verticalSwiping: true,
  autoplay: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        vertical: false,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "0px",
        verticalSwiping: false,
      }
    }]
});


$('#empirial_to').on('click',function(){
  $('html, body').animate({ scrollTop: $('.evidence').offset().top }, 500); 
});

$('#faq_to').on('click',function(){
  $('html, body').animate({ scrollTop: $('.use_vacci_faq').offset().top-100 }, 500); 
});


$('#use_to').on('click',function(){
  $('html, body').animate({ scrollTop: $('.use_vacci').offset().top }, 500); 
});


$('#expert_to').on('click',function(){
  $('html, body').animate({ scrollTop: $('.experts').offset().top-100 }, 500); 
});
$(window).scroll(function(){
  if($('.modal_overlay').css('display')!='block'){
     if($(window).scrollTop()>200){
  $('.stycky_nav').fadeIn();
  } else {
    $('.stycky_nav').fadeOut();
  }
};
 
});
$('#benefis_to').on('click',function(){
  $('html, body').animate({ scrollTop: $('.benefis').offset().top }, 500); 
});


$('.modal_overlay').on('click',function(){
  $('.stycky_nav').slideDown('slow');
  $(this).css('display','none');
  $('.thanks_sub').fadeOut('slow');
  $('.form_vicci').fadeOut('slow');
  $('.technicalc_specific').fadeOut('slow');
  $('.empirical2012').fadeOut('slow');

  $('.empirical2013').fadeOut('slow');

  $('.empirical2016').fadeOut('slow');
;
  $('.empirical2017').fadeOut('slow');
  
  $('.empirical2018').fadeOut('slow');
})
$('#s_order1').on('click',function(){
  $('.modal_overlay').fadeIn('slow');
  $('.form_vicci').css('top',$(window).scrollTop()+120);
  $('.form_vicci').fadeIn('slow');
  $('.stycky_nav').slideUp('slow');
});
$('#header_order').on('click',function(){
  $('.modal_overlay').fadeIn('slow');
  $('.form_vicci').css('top',$(window).scrollTop()+120);
  $('.form_vicci').fadeIn('slow');
  $('.stycky_nav').slideUp('slow');
});

$('#sign_up_form').on('click', function(){
  $('.modal_overlay').fadeIn('slow');
  $('.form_vicci').css('top',$(window).scrollTop()+120);
  $('.form_vicci').fadeIn('slow');
  $('.stycky_nav').slideUp('slow');
});

$('.plus1').on('click',function(){
 
  $('.modal_overlay').fadeIn('slow');
  $('.empirical2012').css('top',$(window).scrollTop()+120);
  $('.empirical2012').fadeIn('slow');
  $('.stycky_nav').slideUp('slow');
});

$('.plus2').on('click',function(){

  $('.modal_overlay').fadeIn('slow');
  $('.empirical2013').css('top',$(window).scrollTop()+120);
  $('.empirical2013').fadeIn('slow');
  $('.stycky_nav').slideUp('slow');
});
$('.plus3').on('click',function(){

  $('.modal_overlay').fadeIn('slow');
  $('.empirical2016').css('top',$(window).scrollTop()+120);
  $('.empirical2016').fadeIn('slow');
  $('.stycky_nav').slideUp('slow');
});
$('.plus4').on('click',function(){
 
  $('.modal_overlay').fadeIn('slow');
  $('.empirical2017').css('top',$(window).scrollTop()+120);
  $('.empirical2017').fadeIn('slow');
  $('.stycky_nav').slideUp('slow');
});
$('.plus5').on('click',function(){

  $('.modal_overlay').fadeIn('slow');
  $('.empirical2018').css('top',$(window).scrollTop()+120);
  $('.empirical2018').fadeIn('slow');
  $('.stycky_nav').slideUp('slow');
});
$('.close_x').on('click',function(){
  $('.modal_overlay').fadeOut('slow');
  $('.form_vicci').fadeOut('slow');
  $('.empirical').fadeOut('slow');
  $('.technicalc_specific').fadeOut('slow');
$('.stycky_nav').slideDown('slow');
});
$('#full_spec').on('click',function(){
  $('.modal_overlay').fadeIn('slow');
  $('.technicalc_specific').css('top',$(window).scrollTop()+120);
  $('.technicalc_specific').fadeIn('slow');
  $('.stycky_nav').slideUp('slow');
})
$('#tech_btn_close').on('click',function(){
  $('.technicalc_specific').fadeOut('slow');
  $('.modal_overlay').fadeOut('slow');
  $('.stycky_nav').slideDown('slow');
});
});

function checkEmail () {
  var email = $('input[type=email]').val();
  if( /(.+)@(.+){2,}\.(.+){2,}/.test(email) ){
    $('input[type=email]').removeClass('hasError').addClass('valid')
  } else {
    $('input[type=email]').addClass('hasError').removeClass('valid')
    $('input[type=email]').prop('placeholder', 'Please enter a valid email address')
  }
}

$('.form_vicci input[type=email]').on('blur keyup', function(){
  checkEmail()
})

$('.form_vicci input[type=text], .form_vicci input[type=tel]').on('blur keyup select change', function(){
  if($(this).val().length < 2 || $(this).val() < 1){
    $(this).addClass('hasError').removeClass('valid')
  } else {
    $(this).removeClass('hasError').addClass('valid')
  }
})

$('.form_vicci select').on('blur keyup select change', function(){
  if($(this).val() == null){
    $(this).addClass('hasError').removeClass('valid')
  } else {
    $(this).removeClass('hasError').addClass('valid')
  }
})

  $.fn.inputFilter = function(inputFilter) {
    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  };

  $('input[name="fullName"], input[name="country"], input[name="state"]').on('keyup', function(){
    var node = $(this);
    node.val(node.val().replace(/[^A-z ]/g,'') ); 
    if(node.hasClass('hasError')) node.prop('placeholder', 'Please use letters only')
  });
$('.form_vicci input[type=tel]').inputFilter(function(value) {
  return /^\d*$/.test(value); });

document.querySelector('.form_vicci').addEventListener('submit', function (e) {
    setTimeout(function() {
      $('.form_vicci').fadeOut('slow');
      $('.thanks_sub').fadeOut('slow');
      $('.thanks_sub').css('top',$(window).scrollTop()+120);
      $('.thanks_sub').fadeIn('slow');
    }, 1000)
    e.preventDefault()
  })