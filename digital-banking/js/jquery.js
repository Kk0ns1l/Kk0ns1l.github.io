$(document).ready(function(){

    $(window).scroll(function() {
		if($(this).scrollTop() > 400) {
			$('.btnTop').fadeIn();
		} else {
			$('.btnTop').fadeOut();
		}
	});

    $('.btnTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
});