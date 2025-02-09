// メニュークリックで開閉
$(document).ready(function () {
  const headerNav = $(".l-header__nav");
  const navHeight = headerNav.outerHeight();

  $("#js-header-button").on("click", function () {
    $(this).toggleClass("is-active");
    if ($("#js-header-button").hasClass("is-active")) {
      $("#js-header-button").css("transform", "translateY(0)");
      $(".l-header__container").removeClass("is-active");
    } else {
      $("#js-header-button").css({
        transform: `translateY(${navHeight}px)`,
        transition: "transform 0.3s ease",
      });
      $(".l-header__container").addClass("is-active");
    }
  });
});




// スムーススクロール
$('a[href^="#"]').on("click", function (e) {
  const speed = 1000;
  const id = jQuery(this).attr("href");
  const paddingTop = 30;
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top - paddingTop;
  $("html, body").animate({
    scrollTop: position,
  },
  speed,
  "swing"
);
$("#js-header-button").css("transform", "translateY(0)");
$(".l-header__container").removeClass("is-active");
});