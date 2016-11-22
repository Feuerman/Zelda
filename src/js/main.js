$(document).ready(function() {
	'use strict';

	// Main page top slider
	$('.main-slider-wrap').slick({
		slidesToShow: 1,
		arrows: true,
		nextArrow: $('.main-slider-nav .next'),
		prevArrow: $('.main-slider-nav .prev'),
		speed: 1000
	});

	// Main page review slider
	$('.js-main-review-slider').slick({
		slidesToShow: 3,
		arrows: false,
		dots: true,
		appendDots: '.js-review-slider-dots',
		speed: 1000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
					}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1
					}
			}
		]
	});

	//Main page advice slider
	$('.js-advice-slider').slick({
		slidesToShow: 1,
		arrows: false,
		dots: true,
		appendDots: '.js-advice-slider-dots',
		speed: 1000
	});

	$('a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
	});
});
