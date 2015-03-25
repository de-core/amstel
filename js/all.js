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
		nav: true,
		responsive:{
		0:{
			items:1,
			nav:true
		},
		520:{
			items:2,
			nav:true
		},
		790:{
			items:3,
			nav:true,
			loop:false
		},
		1060:{
			items:4,
			nav:true
		},
		1330:{
			items:5,
			nav:true
		},
		1600:{
			items:6,
			nav:true
		}
	}
	});
	$('.owl-prev, .owl-next').each(function(){
		$(this).text('');
	})

})