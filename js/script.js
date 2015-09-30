/* Keep the main background image at the same height as the window */
$('.main-bg, .jumbotron').css('height', $(window).height() + 'px');
var jumboHeight = $('.jumbotron').outerHeight();
parallax();
$('.jumbotron.aboutme').css('height', $('#about').height() + 80 + 'px');
$('#projects').css('height', ($(window).height() - 50) + 'px');

$(window).resize(function(){
	$('.jumbotron').css('height', $(window).height() + 'px');
	scrolled = $(window).scrollTop();
	jumboHeight = $('.jumbotron').outerHeight();
	$('.main-bg').css('height', (jumboHeight-scrolled) + 'px');

	$('.jumbotron.aboutme').css('height', $('#about').height() + 80 + 'px');

	$('#projects').css('height', ($(window).height() - 50) + 'px');
});

/* Parallax effect */
function parallax(){
    scrolled = $(window).scrollTop();
    $('.main-bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});

/* Navbar buttons scrolling */
var animationTime = 700;
var navbarHeight = $('.navbar').height();

$('#menu-main').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, animationTime);
});

$('#menu-about').click(function(e){
	e.preventDefault();
 	$('html, body').animate({
 		scrollTop: jumboHeight - navbarHeight
 	}, animationTime);
});

$('#menu-projects').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: jumboHeight + $('.aboutme').outerHeight() - navbarHeight
	}, animationTime);
});

// TODO: Figure out why calling the height of #projects cause the height of .main-bg to flash to the full value
$('#menu-resume').click(function(e){
	e.preventDefault;
	$('html, body').animate({
		scrollTop: jumboHeight + $('.aboutme').outerHeight() +  $('#projects').height() - navbarHeight
	}, animationTime)
});

$('#menu-contact').click(function(e){
	e.preventDefault;
	$('html, body').animate({
		scrollTop: jumboHeight + $('.aboutme').outerHeight() +  $('#projects').height() + $('#resume').outerHeight()
	}, animationTime)
});