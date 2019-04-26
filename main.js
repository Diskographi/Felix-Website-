$(document).ready(() => {
  $('.left').on('mouseenter', (event) => {
    $('.right').fadeIn(500);
    $('.right').css("visibility", "visible");
    $('.grid').css("width", "800");
  });
  $('.left').on('mouseleave', () => {
    $('.right').fadeOut(150);
    $('.right').css("visibility", "hidden");
    $('.grid').css({
    width: "300",
    height: "300"
    });
   });
  });