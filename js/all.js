$(document).ready(function(){
	$(document).foundation();

	$(window).scroll(function(e){
		e.preventDefault();
		$('.search-box').removeClass('active');
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

	$('.input-range-group').each(function(){
		var startDate = $(this).find('.date-in');
		var endDate = $(this).find('.date-out');
		$(this).datepicker({
			language:'ru',
			autoclose: 'true',
			format: 'dd/mm/yyyy',
			orientation: 'bottom left',
			// todayHighlight: true,
			inputs: [startDate, endDate]
		})
		.on('show', function(e){
			$('.datepicker').css('position', 'fixed').css('top', '95px')
			if ($('.search-box').hasClass('active')){
				$(window).scroll(function(){
					$('.search-box').addClass('active');
				})
			} else {
				$(window).scroll(function(){
					$('.search-box').addClass('active');
				})
			}
		})
		.on('hide', function(){
			$('.datepicker').css('position', 'absolute')
			$(window).scroll(function(){
					$('.search-box').removeClass('active');
				})
		})
	});

})