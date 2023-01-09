if ($(window).width() <= 768) {
  $(".footer-links-wrapper").addClass("collapseClass");
} else {
  $(".footer-links-wrapper").removeClass("collapseClass");
}
$(window).on("resize", function () {
  if ($(window).width() <= 768) {
    $(".footer-links-wrapper").addClass("collapseClass");
    $(".footer-links-wrapper ul").hide();
  } else {
    $(".footer-links-wrapper").removeClass("collapseClass");
    $(".footer-links-wrapper").removeClass("xClose");
    $(".footer-links-wrapper ul").show();
  }
});

$(Document).on("click", ".collapseClass h3", function () {
  $(this).next("ul").slideToggle("collapseClass");
  $(this).toggleClass("xClose");
});
