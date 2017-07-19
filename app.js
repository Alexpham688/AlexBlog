$(document).ready(function(){

  var speed = 500;
  var autoSwitch = true;
  var autoSwitchSpeed= 4000;

  $(".slide").first().addClass("active");

  //hide all slides
  $(".slide").hide();
  // show first slide
  $(".active").show();
     //next handler
  $("#next").on("click",nextSlide);

   // prev handler
  $("#prev").on("click", prevSlide);
   //auto slider handler
  if(autoSwitch === true) {
    setInterval(nextSlide,autoSwitchSpeed);
  }

  // switch to next slide
  function nextSlide(){
    $(".active").removeClass("active").addClass("lastActive");
    if($(".lastActive").is(":last-child")){
      $(".slide").first().addClass("active");
    } else {
      $(".lastActive").next().addClass("active");
    }
    $(".lastActive").removeClass("lastActive");
    $(".slide").fadeOut(speed);
    $(".active").fadeIn(speed);
  };
  function prevSlide() {
    $(".active").removeClass("active").addClass("lastActive");
    if($(".lastActive").is(":first-child")){
      $(".slide").last().addClass("active");
    } else {
      $(".lastActive").prev().addClass("active");
    }
    $(".lastActive").removeClass("lastActive");
    $(".slide").fadeOut(speed);
    $(".active").fadeIn(speed);
    };


  var co = $('section').find("span.co").each(function() {
    var $this = $(this);
    $("<blockquote></blockquote>", {
      class: 'co',
      text: $this.text()
    }).prependTo( $this.closest('p') );
  });
  $('.subBtn').on('click', function() {
    alert("THANKS AND HAVE A NICE DAY.")
  });


});
