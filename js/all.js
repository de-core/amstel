$(document).ready(function(){
	$(document).foundation();

	$(window).scroll(function(e){
		e.preventDefault();
		if ($('html').width()>500){
			$('.search-box').removeClass('active');
		}
		var winScroll = $(this).scrollTop();
		if (winScroll > 0){
			$('.nav-wrap').addClass('scrolled');
		} else
		{
			$('.nav-wrap').removeClass('scrolled')
		}
	});
	$('.search-box .search-btn').click(function(e){
		e.preventDefault();
		$(this).parents('.search-box').toggleClass('active')
	})

	$(".owl-carousel").owlCarousel({
		margin: 15,
		mergeFit: true,
		nav: true,
		responsive:{
			0:{
				items: 1
				// nav: false
			},
			480:{
				items: 3
			},
			768:{
				items: 6
			}
		}
	});
	$('.owl-prev, .owl-next').each(function(){
		$(this).text('');
	})
	$('.tour-mix').each(function () {
		var ratio = 5/3;
		var $box = $(this).find('.card-image');
		// $box.height($box.width()*ratio);
		$(window).resize(function() {
			$box.height($box.width() * ratio);
		});
	})
	$('.offers-spec').each(function () {
		var ratio = 28/59;
		var $box = $(this).find('.card-image');
		// $box.height($box.width()*ratio);
		$(window).resize(function() {
			$box.height($box.width() * ratio);
			console.log($box.height())
		});
	})

	$('.input-range-group').each(function(){
		var startDate = $(this).find('.date-in');
		var endDate = $(this).find('.date-out');
		$(this).datepicker({
			language:'ru',
			autoclose: 'true',
			format: 'dd/mm/yyyy',
			orientation: 'bottom left',
			container: '.search-box',
			disableTouchKeyboard: true,
			inputs: [startDate, endDate]
		})
		.on('show', function(e){
			$('.datepicker').css('position', 'fixed');
			$('#date-in').click(function(){
				$('.datepicker').addClass('date-1')
			})
			$('#date-out').click(function(){
				$('.datepicker').addClass('date-2')
			})
				// $(window).scroll(function(){
				// 	$('.search-box').addClass('active');
				// })
			// if ($('.search-box').hasClass('active')){
			// } else {
			// 	$(window).scroll(function(){
				// $('.search-box').addClass('active');
			// 	})
			// }
		})
	});

})