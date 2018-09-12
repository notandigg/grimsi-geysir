!function() {
  $("body").scrollspy({target: ".fixed-top", offset: 50}),
  (new WOW).init(),
  $("a.page-scroll").bind("click", function(c) {
    var b = a(this);
    $("html, body").stop().animate({
      scrollTop: a(b.attr("href")).offset().top
    }, 1450, "easeInOutExpo"),
    preventDefault()
  })
}(jQuery),
$("#menuModal").on("hidden.bs.modal", function() {
  $("nav#topNav.navbar.navbar-default.navbar-fixed-top.bg-nav").css("display", "block"),
  $("nav#topNav.navbar.navbar-default.bg-nav").css("display", "block")
});
$("#menuModal").on("shown.bs.modal", function() {
  $("nav#topNav.navbar.navbar-default.navbar-fixed-top.bg-nav").css("display", "none"),
  $("nav#topNav.navbar.navbar-default.bg-nav").css("display", "none")
});
$(document).pjax("a#nav-back, a#nav-forward", {
  container: "#pjax-container",
  fragment: "#pjax-container"
});
window.NProgress && NProgress.configure({showSpinner: true});
$(document).on("pjax:send", function() {
  window.NProgress && NProgress.start(),
  $("#menuModal").modal("hide"),
  $(".modal-backdrop").remove();
  $("#pjax-container").fadeTo("slow", 0.35, "linear");
});
$(document).on("pjax:complete", function() {
  window.NProgress && NProgress.done(true);
  $("#pjax-container").fadeTo("slow", 1.0, "linear");

  $("a").filter(function() {
    return this.hostname && this.hostname !== location.hostname
  }).addClass("external");

  $(function() {
  $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('k-nav-current');
});

});
$(document).on("pjax:timeout", function() {
  preventDefault()
});
$(document).on("koken:lightbox:loading", function() {
  window.NProgress && NProgress.start();
  $("#pjax-container").fadeTo("slow",0.35, "linear");
});
$(document).on("koken:lightbox:loaded", function() {
  NProgress.done(true);
  $("#pjax-container").fadeTo("slow", 1.0, "linear");
});
jQuery(function() {
  jQuery(".smooth, .scrollme").click(function() {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var c = jQuery(this.hash);
      c = c.length
        ? c
        : jQuery("[name=" + this.hash.slice(1) + "]");
      if (c.length) {
        jQuery("html,body").animate({
          scrollTop: c.offset().top
        }, 1000);
        return false
      }
    }
  })
});
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 75) {
      $(".btn.navbar-toggle.collapsed").addClass("nav-button-scrolled");
      $("#down-button").css("display", "none")
    } else {
      $(".btn.navbar-toggle.collapsed").removeClass("nav-button-scrolled");
      $("#down-button").css("display", "block")
    }
  })
});
$("a").filter(function() {
  return this.hostname && this.hostname !== location.hostname
}).addClass("external");
