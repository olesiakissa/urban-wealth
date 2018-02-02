$(document).ready( function() {
	console.log('ready');

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#top-btn').fadeIn();
		} else {
			$('#top-btn').fadeOut();
		}
	});

	$('#top-btn').click(function(){
		$('html, body').animate({scrollTop : 0}, 800);
		return false;
	});

});