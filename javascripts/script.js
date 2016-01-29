$(document).ready(function(){
  $('.dropdown-button').dropdown();
  $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal();
  var $nav = $("nav");
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
  $("#logoimg").click(function() {
    console.log('hello');
    $('html, body').animate({
      scrollTop: ($('#aboutme').first().offset().top)
    },500);
  });
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
  $("#skills").click(function() {
    console.log('hello');
    $('html, body').animate({
      scrollTop: ($('#skillsecHeader').first().offset().top)
    },500);
  });
  $('#emailOpenButton').click(function() {
    $('#emailModal').openModal();
  });
  $('#toGitHub').click(function() {
    window.open('https://github.com/mikesankovich', '_blank');
  });
});
