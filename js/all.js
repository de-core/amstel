$(document).ready(function(){

	$(document).foundation();

	$('.form').each(function(){
		$(this).checkBo();
	});


	smoothScroll.init({
		speed: 600,
		easing: 'linear',
		offset: 150,
		updateURL: true
	});

	// var fixblock_height = $('.booking-box').height(); // определяем высоты фиксированного блока
	if ($('body').hasClass('with-bottom-menu')) {
		var nav_pos = $('.nav-bottom').position().top;
		$(window).scroll(function(){
			if ($(window).scrollTop() > 0){
				$('.nav-bottom').addClass('fix');
			} else {
				$('.nav-bottom').removeClass('fix');
			}
		});
	}
	if ($('body').hasClass('with-booking-box')) {
		var book_pos = $('.booking-box').position().top; // определяем его первоначальное положение
		$(window).scroll(function(){
			if ($(window).scrollTop() > book_pos){
				$('.booking-box').addClass('fix');
			} else {
				$('.booking-box').removeClass('fix');
			}
		});
	}

	//Map
	var myMap,
		myMap_1;
	function init(){
		if ($('body').hasClass('excursions')){
			myMap = new ymaps.Map("map-amsterdam", {
				center: [52.373085, 4.893276],
				zoom: 13,
				type: 'yandex#map',
				controls: ['smallMapDefaultSet']
			});
			myMap.behaviors.disable(['scrollZoom', 'drag']);
		}
		if ($('body').hasClass('articles')){
			myMap_1 = new ymaps.Map("map-holland", {
				center: [52.373085, 4.893276],
				zoom: 6,
				type: 'yandex#map',
				controls: ['smallMapDefaultSet']
			});
			myMap_1.behaviors.disable(['scrollZoom', 'drag']);
		}
	}
	ymaps.ready(init);
	

//Search-box
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
			$('.nav-wrap').removeClass('scrolled');
		}
	});
	$('.search-box .search-btn').click(function(e){
		e.preventDefault();
		$(this).parents('.search-box').toggleClass('active')
	})


//Slider
	$('.owl-carousel').owlCarousel({
		margin: 15,
		mergeFit: true,
		itemsScaleUp : true,
		nav: true,
		autoHeight : false,
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
	});

//Datepicker
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
		})
	});

	$('.tour-date').datepicker({
		keyboardNavigation: false,
		autoclose: true,
		maxViewMode: 1
	});

//aside-menu
	$('.aside .aside-link').click(function(e){
		e.preventDefault();
		$(this).parent().find('.second-line').toggleClass('open');
	});
	$('.aside .second-line-link').click(function(e){
		e.preventDefault();
		$(this).parent().find('.third-line').toggleClass('open');
	});

})