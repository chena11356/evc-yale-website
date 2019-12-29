(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict

// Parallax text messages
// var popups = $('.popup');
$(window).scroll(function(){

  $(".popup").each(function() {
    if ($(window).scrollTop() >= $(this).offset().top
                  + $(this).outerHeight() - window.innerHeight + 100) {
                  $(this).addClass('popup_show');
              }
  });

  $(".popup-r").each(function() {
    if ($(window).scrollTop() >= $(this).offset().top
                  + $(this).outerHeight() - window.innerHeight + 100) {
                  $(this).addClass('popup_show-r');
              }
  });

/*
 	var show = $(document).scrollTop() / (600);
    popup.css('opacity', show);
  */

  //if($(window).scrollTop() > $(document).height()/4){
  //  console.log($(document).height()/4);
  //  popup.addClass('popup_show');
  //};



          });

// Stop horizontal scroll
var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);

// Dropdown Menu Functionality
$(function(){

  $("#state-dropdown .dropdown-item").click(function(){

    $("#state-button").text($(this).text());
     $("#state-button").val($(this).text());
  });

  $("#goal-dropdown .dropdown-item").click(function(){

    $("#goal-button").text($(this).text());
     $("#goal-button").val($(this).text());
  });

});
