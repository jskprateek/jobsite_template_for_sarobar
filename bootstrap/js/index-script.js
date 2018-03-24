// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});





$(".js-open-modal").click(function(){
  $("#loginModal").addClass("visible");
});

$(".js-close-modal").click(function(){
  $("#loginModal").removeClass("visible");
});

$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest("#loginModal,.js-open-modal").length) {
    $("body").find("#loginModal").removeClass("visible");
  }
});


