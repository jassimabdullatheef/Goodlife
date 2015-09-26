// FlipClock
var clock = $('.timer').FlipClock({
  autoStart : true,
  countdown : true
});
clock.setTime(50888);
clock.start();

// Not Clickable
$('.notClickable').click(function(e){
  e.preventDefault();
})

var btnTop = 0;
//CTA button
$(".btn.cta").click(function(e){
  e.preventDefault();
  var btn = $(this);
  console.log(btn.hasClass('modal-form'));
  if(!btn.hasClass('modal-form')){
    btnTop = $(this).offset().top-$(window).scrollTop();
    $(this).siblings('.dummy').css({
      height : btn.height() + 54
    });
    btn.css({
      position:'fixed',
      display: 'block',
      top: btnTop
    });

    setTimeout(function(){
      btn.css({
        top : '25%'
      });
    },50);

    setTimeout(function(){
      btn.find('form').slideDown();
    },100);
    setTimeout(function(){
      btn.find('form .text-box').css({
        width : '100%'
      });
    },150);
    setTimeout(function(){
      btn.find('form fieldset label').addClass('fadeInDown');
    },500);
    btn.addClass('modal-form');
    $('.overlay').fadeIn();
  }
})

//Exit form
$('.overlay').click(function(){
  setTimeout(function(){
    $('.modal-form form .text-box').css({ width : '0px' });
    $('.modal-form form fieldset label').removeClass('fadeInDown');
  },100);
  setTimeout(function(){
    $('.modal-form form').slideUp();
  },200);
  setTimeout(function(){
    $('.modal-form').css({
      top: btnTop
    });
  },300);
  setTimeout(function(){
    $('.dummy').height(0);
    $('.modal-form').css({
      position:'relative',
      display: 'inline-block',
      top: ''
    });
    $('.btn.cta').removeClass('modal-form');
    $('.overlay').fadeOut();
  },500);
})
