$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$(".menu-toggle").click(function(){
  $(".menu-top__ul-mobile").toggleClass("menu-top__ul-mobile--open");
  $(".menu-toggle").toggleClass("menu-toggle--close");
});