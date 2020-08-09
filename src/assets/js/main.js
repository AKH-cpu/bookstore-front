$(window).on('load', function() {
  /*------------------
    Prelode
  --------------------*/
  $(".loader").fadeOut();
  $("#preloder").delay(400).fadeOut("slow");

});
$(document).on('click', '.dropdown-menu', function (e) {
  e.stopPropagation();
});
