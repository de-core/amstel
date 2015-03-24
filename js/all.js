$(document).ready(function(){

	$(".owl-carousel").owlCarousel({
		mergeFit: true,
		margin: 15,
		nav: false,
		responsive:{
		0:{
			items:1,
			autoHeight: true,
			nav:false
		},
		480:{
			items:2,
			autoHeight: true,
			nav:false
		},
		768:{
			items:3,
			autoHeight: true,
			nav:false,
			loop:false
		},
		991:{
			items:4,
			autoHeight: true,
			nav:false
		},
		1200:{
			items:5,
			autoHeight: true,
			nav:false
		},
		1400:{
			items:6,
			autoHeight: true,
			nav:false
		}
	}
	});

	// var h_img=0;
	// $('.offers-spec .card').each(function(){
	// 	var h=$(this).find('img.card-image').height();
	// 	if (h>h_img){ h_img=h}
	// });
	// $('.offers-spec .card img.card-image').height(h_img)
})