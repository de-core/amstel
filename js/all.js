$(document).ready(function(){
	$(document).foundation();

	$(window).scroll(function(e){
		e.preventDefault();
		var winScroll = $(this).scrollTop();
		if (winScroll > 0){
			$('.nav-wrap').addClass('scrolled');
		} else
		{
			$('.nav-wrap').removeClass('scrolled')
		}
	});
	$('.search-box .search-btn').click(function(){
		$(this).parents('.search-box').addClass('active')
	})
	$(window).scroll(function(){
		$('.search-box').removeClass('active');
	})
	$(".owl-carousel").owlCarousel({
		margin: 15,
		mergeFit: true,
		nav: false,
		responsive:{
		0:{
			items:1,
			nav:false
		},
		520:{
			items:2,
			nav:false
		},
		790:{
			items:3,
			nav:false,
			loop:false
		},
		1060:{
			items:4,
			nav:false
		},
		1330:{
			items:5,
			nav:false
		},
		1600:{
			items:6,
			nav:false
		}
	}
	});

})