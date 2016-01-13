$(document).ready(function(){
  $('.dropdown-button').dropdown();
  $(".button-collapse").sideNav();
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
  $("#top").click(function() {
    console.log('hello');
    $('html, body').animate({
      scrollTop: ($('#beginning').first().offset().top)
    },500);
  });
  $("#portfolio").click(function() {
    console.log('hello');
    $('html, body').animate({
      scrollTop: ($('#projects').first().offset().top)
    },500);
  });
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
