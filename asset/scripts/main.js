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
