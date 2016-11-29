$(document).ready(function() {
	'use strict';

	// Main page top slider
	$('.js-slider-top').slick({
		slidesToShow: 1,
		arrows: true,
		nextArrow: $('.top-slider-nav .next'),
		prevArrow: $('.top-slider-nav .prev'),
		speed: 1000
	});
	$('.js-slider-top-catalog').slick({
		slidesToShow: 1,
		arrows: true,
		nextArrow: $('.top-slider-nav .next'),
		prevArrow: $('.top-slider-nav .prev'),
		speed: 1000,
		asNavFor: '.js-slider-top-thumbs'
	});
	$('.js-slider-top-thumbs').slick({
		slidesToShow: 7,
		arrows: true,
		speed: 1000,
		focusOnSelect: true,
		asNavFor: '.js-slider-top-catalog'
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
				breakpoint: 850,
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
		slidesToShow: 3,
		arrows: false,
		dots: true,
		appendDots: '.js-advice-slider-dots',
		speed: 1000,
		responsive: [
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 2
					}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
					}
			}
		]
	});

	// Configurator slider
	$('.js-configurator-slider').slick({
		slidesToShow: 4,
		arrows: true,
		nextArrow: $('.configurator-slider-nav .next'),
		prevArrow: $('.configurator-slider-nav .prev'),
		speed: 1000,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 3
					}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
					}
			}
		]
	});

	// Product detail slider
	$('.js-slider-product').slick({
		slidesToShow: 1,
		arrows: false,
		speed: 1000,
		focusOnSelect: true,
		asNavFor: '.js-slider-product-thumbs'		
	});
	$('.js-slider-product-thumbs').slick({
		slidesToShow: 5,
		arrows: false,
		speed: 1000,
		focusOnSelect: true,
		asNavFor: '.js-slider-product',
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 4
					}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 3
					}
			}
		]
	});

	// Recommended slider
	$('.js-slider-recommended').slick({
		slidesToShow: 4,
		arrows: true,
		nextArrow: $('.js-slider-recommended-nav .next'),
		prevArrow: $('.js-slider-recommended-nav .prev'),
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
					}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2
					}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1
					}
			}
		]
	});	

	// Service slider
	$('.js-slide-service').slick({
		slidesToShow: 4,
		arrows: true,
		nextArrow: $('.js-slide-service-nav .next'),
		prevArrow: $('.js-slide-service-nav .prev'),
		speed: 1000,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
					}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2
					}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1
					}
			}
		]
	});

	// Mobile menu
	$('.js-menu-mobile').on('click', function(event) {
		event.preventDefault();
		if ($('.aside').hasClass('active')) {
			$('body').css('overflow', 'visible');
		} else {
			$('body').css('overflow', 'hidden');
		}
		$('.aside').toggleClass('active');
	});

	// Configurator
	$('.js-spec-info-btn').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$('.js-spec-info-content').toggleClass('active');
	});

	$('.configurator-category__item').on('click', function(event) {
		event.preventDefault();
		$('.configurator-category').addClass('only-title');
		$('.configurator-category__item').removeClass('active');
		$(this).addClass('active');
		$('.configurator-product').addClass('active');
	});

	$('.js-extend-choise').on('click', function(event) {
		event.preventDefault();
		$('.configurator-slider-wrap').toggleClass('active');
	});

	// Modal
	$('.js-modal').fancybox({
		href: $(this).data('fancybox-href'),
	    type: 'inline',
	    closeClick: false,
	    closeBtn: false,	
	    afterShow: function() {
	    	$('.modal-close').click(function(event) {
	    		$.fancybox.close();
	    	});
	    }	
	});

	// Select events
	var selectedArr = [];

	filterSelected();

	function filterSelected() {
		$('.filter .select').on('change', function(e) {
			var value = $(this).find('option:selected').val();
			var text = $(this).find('option:selected').text();
			filterSelectedAdd(value, text);
		});
		$('.filter-selected-items').on('click', '.js-filter-remove', function(event) {
			var elem = $(this).parents('.item');
			filterSelectedRemove(elem);
		});
		$('.js-filter-clear').on('click', function(event) {
			event.preventDefault();
			selectedArr.splice(0)
			$('.filter-selected-items').html('');
			$('.filter .select').each(function(index, el) {
				$(el).find('option').eq(0).attr('selected', true);
			});
		});
	}
	function filterSelectedAdd(value, text) {
		var checkSelected = $.inArray(value, selectedArr);
		if (checkSelected == -1) {
			selectedArr.push(value)
		} else {
			return false;
		}
		var template = '<div class="item" data-filter="' + value + '"><span>' + text + '</span><button class="icon icon__close js-filter-remove"></button></div>';
		$(template).appendTo('.filter-selected-items');
	}
	function filterSelectedRemove(elem) {
		var value = $(elem).data('filter');
		var index = find(selectedArr, value);
		selectedArr.splice(index, 1);	
		$(elem).remove();	
	}	

	// Catalog sort
	$('.catalog-sort button').on('click', function(event) {
		event.preventDefault();
		$('.catalog-sort button').removeClass('active');
		$(this).addClass('active');
	});

	// Dropdown list
	$('.dropdown-list-item__head').on('click', function(event) {
		event.preventDefault();
		$(this).parent().toggleClass('active');
	});

	// Switch theme
	$('.site-logo img, .aside-header .title').on('click', function(event) {
		event.preventDefault();
		$('.wrapper').toggleClass('light-theme');
	});

	// View select
	$('.js-view-select button').on('click', function(event) {
		event.preventDefault();
		$('.js-view-select button').removeClass('active');
		$(this).addClass('active');
		if ($(this).data('view') === 'list') {
			$('.js-variable-display').addClass('display-list');
		} else {
			$('.js-variable-display').removeClass('display-list');
		}
	});

	$('a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
	});
});
