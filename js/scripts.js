$(document).ready(function(){

    

});






// HEADER EN SCROLL
$(function() {
  $(window).on('scroll', function () {
      var scrollTop = $(this).scrollTop();
      if(scrollTop > 200) {
        $('.barraTop').slideUp(250);
      } else {
        $('.barraTop').slideDown(250);
      }
  });
});








// SUBMENU MULTINIVEL
//abre y cierra buscador
$( ".barraIconosDesktop button.search img" ).click(function() {
    $(".barraIconosDesktop button.search ul").fadeIn();
});
$( ".barraIconosDesktop button.search .close" ).click(function() {
    $(".barraIconosDesktop button.search ul").fadeOut();
});
$(document).click(function() {
    var container = $(".barraIconosDesktop button.search");
    if (!container.is(event.target) && !container.has(event.target).length) {
        $(".barraIconosDesktop button.search ul").fadeOut();
    }
});
//abre menu mobile
$( ".abreMenuMobile" ).click(function() {
    $(".menuMobile").slideToggle();
});
//cierra menu mobile
$(document).click(function() {
    var container = $("header");
    if (!container.is(event.target) && !container.has(event.target).length) {
        $(".menuMobile").hide();
        $(".menuMobile .dropMenu01").hide();
    }
});
//cierra menu desktop
$(document).click(function() {
    var container = $("header");
    if (!container.is(event.target) && !container.has(event.target).length) {
        $(".navbar .menuItem .dropMenu01").hide();
        $(".navbar .menuItem .dropMenu01 .sub-menu02").hide();
    }
});
//cierra menus paralelos primer nivel - mobile
$( ".navbarMobile .nav-item" ).click(function() {
    $(".navbarMobile .nav-item .dropMenu01").hide();
    $(this).find(".dropMenu01").show();
});
//cierra menu cuando clickeas en link
$( ".navbarMobile .nav-link" ).click(function() {
    $(".menuMobile").hide();
    $(".navbarMobile .nav-item .dropMenu01").hide();
})
//cierra menus paralelos primer nivel - desktop
$(".menuItem").click(function() {
    $(".dropMenuNivel1").hide();
    $(this).find(".dropMenuNivel1 ").show();
});
//cierra menus paralelos tercer nivel - desktop
$(".drop-down02").click(function() {
    $(".dropMenuNivel2").hide();
    $(this).find(".dropMenuNivel2 ").show();
});

(function($bs) {
    const CLASS_NAME = 'has-child-dropdown-show';
    document.querySelectorAll('.dropdown').forEach(function(dd) {
        dd.addEventListener('hide.bs.dropdown', function(e) {
            if (this.classList.contains(CLASS_NAME)) {
                this.classList.remove(CLASS_NAME);
                e.preventDefault();
            }
            if(e.clickEvent && e.clickEvent.composedPath().some(el=>el.classList && el.classList.contains('dropdown-toggle'))){
                e.preventDefault();
            }
            e.stopPropagation();
        });
    });
})(bootstrap);




function toggleCart(){
    document.querySelector('.sidecart').classList.toggle('open-cart');
}