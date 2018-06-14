$(document).ready(function () {
	$(window).scroll(function(){
		var scroll_img = $('.howitwork').offset().top;
		if ($(this).scrollTop() > scroll_img){
			$('.animate').addClass('animated-left');
		} else {
			$('.animate').removeClass('animated-left');
		}
	});

	$('a.search-btn').on('click', function () {
        $('.search-area').addClass('is-visible');
    });
    $('a.close-btn').on('click', function () {
        $('.search-area').removeClass('is-visible');
    });
});
