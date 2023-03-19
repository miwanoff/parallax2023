$(document).ready(function () {
  $(window).scroll(function () {
    /* Скроллировать фоновые слои с разной скоростью */
    let winTop = $(window).scrollTop();
    $(".parallax").css(
      "background-position",
      "center " + (-120 -(winTop * 0.5)) + "px"
    );
  });
});
