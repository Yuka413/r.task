// メニュー開く
function openMenu() {
  $(".l-header").addClass("is-active");
  $(".l-header__bg-mask").addClass("is-active");
}

// メニュー閉じる
function closeMenu() {
  $(".l-header").removeClass("is-active");
  $(".l-header__bg-mask").removeClass("is-active");
}

// メニュークリックで開閉
$(document).ready(function () {
  $("#js-header-button").on("click", function () {
    $(this).toggleClass("is-active");
    if ($("#js-header-button").hasClass("is-active")) {
      closeMenu();
    } else {
      openMenu();
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
  $("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing"
  );
  closeMenu();
});

// 
const pageTop = document.querySelector("#js-pagetop");
pageTop.addEventListener("click", scroll_top);
function scroll_top() {
window.scroll({ top: 0, behavior: "smooth" });
}