$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$(".menu-toggle").click(function(){
  $(".navbar__ul-top").toggleClass("navbar__ul-open");
  $(".menu-toggle").toggleClass("menu-toggle--close");
});