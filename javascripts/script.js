$(document).ready(function(){

  $(".button-collapse").sideNav();
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
  var $nav = $("nav");

	//caches a jQuery object containing the header element
	// var header = $('.noBackground');
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 525) {
      $nav.addClass("line");
      $nav.removeClass("transparent");
		} else {
			$nav.removeClass("line");
			$nav.addClass("transparent");
		}
	});

  //
  // $("#about").click(function() {
  //   console.log('hello');
  //   $('html, body').animate({
  //     scrollTop: ($('.line').first().offset().top)
  //   },500);
  // });
  // $("#aboutme").click(function() {
  //   console.log('hello');
  //   $('html, body').animate({
  //     scrollTop: ($('.line').first().offset().top)
  //   },500);
  // });
  // $("#portfolio").click(function() {
  //   console.log('hello');
  //   $('html, body').animate({
  //     scrollTop: ($('#portstuff').first().offset().top)
  //   },500);
  // });
  // $("#portfoliome").click(function() {
  //   console.log('hello');
  //   $('html, body').animate({
  //     scrollTop: ($('#portfolionav').first().offset().top)
  //   },500);
  // });
  // $("#home").click(function() {
  //   console.log('hello');
  //   $('html, body').animate({
  //     scrollTop: ($('body').first().offset().top)
  //   },500);
  // });
  // $("#homeme").click(function() {
  //   console.log('hello');
  //   $('html, body').animate({
  //     scrollTop: ($('body').first().offset().top)
  //   },500);
  // });
  // $("#contacts").click(function() {
  //   console.log('hello');
  //   $('html, body').animate({
  //     scrollTop: ($('#contactme').first().offset().top)
  //   },500);
  // });
  // $("#contactsme").click(function() {
  //   console.log('hello');
  //   $('html, body').animate({
  //     scrollTop: ($('#contactme').first().offset().top)
  //   },500);
  // });
  // $("#emailmove").click(function() {
  //   console.log('hello');
  //   $('html, body').animate({
  //     scrollTop: ($('#contactme').first().offset().top)
  //   },500);
  // });
  //
});
