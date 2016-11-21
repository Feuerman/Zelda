$(document).ready(function() {
	'use strict';

	// Main page top slider
	$('.main-slider-wrap').slick({
		slidesToShow: 1,
		arrows: true,
  		focusOnSelect: true,
		nextArrow: $('.main-slider-nav .next'),
		prevArrow: $('.main-slider-nav .prev'),
		speed: 1000
	});
});