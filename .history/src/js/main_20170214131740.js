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
		slidesToShow: 8,
		arrows: true,
		speed: 1000,
		focusOnSelect: true,
		asNavFor: '.js-slider-top-catalog',
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 7
					}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 6
					}
			},
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 5
					}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 4
					}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2
					}
			}
		]
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
				breakpoint: 580,
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
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1
					}
			}
		]
	});
	$('.configurator-category').slick({
		slidesToShow: 10,
		infinite: false,
		adaptiveHeight: true,
		vertical: true,
		verticalSwiping: true,
		waitForAnimate: false,
		arrows: true,
		speed: 1000,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 10
					}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 8
					}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 6
					}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 4
					}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3
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

	// Lk slider
	$('.js-slider-lk').slick({
		slidesToShow: 1,
		arrows: false,
		dots: true,
		appendDots: '.js-slider-lk-dots',
		speed: 1000
	});

	// Accessories slider
	$('.js-slider-accessories').slick({
		slidesToShow: 3,
		arrows: true,
		dots: false,
		speed: 1000,
		responsive: [
			{
				breakpoint: 767,
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
		$(this).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
			adaptiveHeightConf();
		});
	});

	$('.js-extend-choise').on('click', function(event) {
		event.preventDefault();
		$('.configurator-slider-wrap').toggleClass('active');
		$(this).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
			adaptiveHeightConf();
		});
	});

	function adaptiveHeightConf() {
		var headerH = $('.top-mobile').outerHeight();
		var bottmPanelH = $('.configurator__bottom-panel').outerHeight();
		var imageH = $('.configurator__main-image').outerHeight();
		var windowH = $(window).height();
		var windowW = $(window).width();
		if (windowW >= 768) return false;
		if ((windowH - headerH - bottmPanelH - imageH) < 0) {
			$('.configurator__bottom-panel').css('position', 'relative');
			$('html').animate({scrollTop: windowH }, 0);
		} else {
			$('.configurator__bottom-panel').css('position', 'absolute');
		}
	}


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
				console.log(el);
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
		var index = $.inArray(value, selectedArr);
		selectedArr.splice(index, 1);
		$(elem).remove();
	}

	// Catalog sort
	$('.catalog-sort button').on('click', function(event) {
		event.preventDefault();
		$('.catalog-sort button').removeClass('active');
		$(this).addClass('active');
	});

	// Dropdown
	$('.dropdown-list-item__head').on('click', function(event) {
		event.preventDefault();
		$(this).parent().toggleClass('active');
	});

	// Selected products function --start
	var products = [
		{
			id: 1,
			items: [
				{
					name: 'Шкаф сушка 1 (720x600)',
					articul: 'A-600-CR',
					image: 'img/step3__image-small.png',
					price: 359.62,
					checked: true
				},
				{
					name: 'Шкаф сушка 2 (800x600)',
					articul: 'A-700-CR',
					image: 'img/step3__image-small.png',
					price: 369.62,
					checked: false
				},
				{
					name: 'Шкаф сушка 3 (860х600)',
					articul: 'A-800-CR',
					image: 'img/step3__image-small.png',
					price: 379.62,
					checked: false
				},
				{
					name: 'Шкаф сушка 4 (960х600)',
					articul: 'A-900-CR',
					image: 'img/step3__image-small.png',
					price: 379.62,
					checked: false
				}
			]
		},
		{
			id: 2,
			items: [
				{
					name: 'База ящик 1 ДМ',
					articul: 'B-456',
					image: 'img/step3__image-small.png',
					price: 559.62,
					checked: true
				},
				{
					name: 'База ящик 2 ДМ',
					articul: 'B-457',
					image: 'img/step3__image-small.png',
					price: 549.62,
					checked: false
				}
			]
		}
	];

	$('.js-modal-spec').on('click', function () {
		var productId = $(this).data('product-id');
		var productController = new ProductController(productId);
		$('.js-product-choise').on('click', function() {
			productController.closeModal();
			productController.editMainTable(productId);
		});
		$('input[name="product"]').on('click', function() {
			var key = $(this).data('product-articul');
			productController.findProduct(key);
		});
	});

	$('.table-products').on('click', function(e) {
		if (e.target.nodeName != 'INPUT') {
			$(e.target).parents('tr').find('input').trigger('click');
		}
	});

	function ProductController(id){
		this.id = id;
		this.products = products;
		this.currentProductsArr = [];
		this.selectedProduct = {};

		this.findArrById(this.id);
		this.createTable(this.currentProductsArr);
		this.openModal();
	};

	ProductController.prototype.findArrById = function (id) {
		var that = this;
		that.products.forEach(function(item, i, arr) {
			if ( item.id === id ) that.currentProductsArr = that.products[i].items;
		});
	};
	ProductController.prototype.findProduct = function (key) {
		var that = this;
		that.currentProductsArr.forEach(function(item, i, arr) {
			item.checked = false;
			if (item.articul === key) {
				item.checked = true;
				that.selectedProduct = item;
			}
		});
	};

	ProductController.prototype.createTable = function (data) {
		var trHead = $('<tr/>')
		trHead.append("<th></th><th>Артикул</th><th>Изображение</th><th>Наименование</th><th>Цена</th>");
		$('#modal-products').append(trHead);
		var tr;
		for (var i = 0; i < data.length; i++) {
			tr = $('<tr/>');
			if (data[i].checked) {
				tr.append("<td><input type='radio' name='product' data-product-articul='" + data[i].articul + "' checked></td>");
			} else {
				tr.append("<td><input type='radio' name='product' data-product-articul='" + data[i].articul + "'></td>");
			}
			tr.append("<td>" + data[i].articul + "</td>");
			tr.append("<td><img src=" + data[i].image + "></td>");
			tr.append("<td class='name'>" + data[i].name + "</td>");
			tr.append("<td>" + data[i].price + "р.</td>");
			$('#modal-products').append(tr);
		};
	};

	ProductController.prototype.openModal = function () {
		var that = this;
		$.fancybox.open({
			href: '#js-modal-product',
			closeBtn: false,
			afterShow: function() {
				$('.modal-close').click(function(event) {
					that.closeModal();
				});
			}
		});
	};
	ProductController.prototype.closeModal = function () {
		$.fancybox.close();
		$('#modal-products').html('');
	};

	ProductController.prototype.editMainTable = function (data) {
		var that = this;
		products = that.products;
		var edited = $('.specification-table[data-product-container-id="' + this.id + '"]');
		edited.find('.js-product-articul').text(that.selectedProduct.articul);
		edited.find('.js-product-name').text(that.selectedProduct.name);
		edited.find('.js-product-image').attr('src', that.selectedProduct.image);
		edited.find('.js-product-price').text(that.selectedProduct.price);
	};
	// Selected products function --end



	var specificationContainer = $('.specification-table-wrap');
	$('.js-toggle-spec').on('click', function () {
		$(specificationContainer).toggleClass('active');

		if ($(specificationContainer).hasClass('active')) {
			var positionTop = $(specificationContainer).offset().top;
			$('body').animate({scrollTop: positionTop}, '500');
		} else {
			var positionTop = $('.content-section-head').offset().top;
			$('body').animate({scrollTop: positionTop}, '500');
		}
	});

	$('.js-show-order').on('click', function(event) {
		event.preventDefault();
		$(this).parents('.orders-list-item').toggleClass('active');
	});

	$('.js-toggle-section-menu').on('click', function() {
		$(this).parents('.section-menu--mobile').toggleClass('active');
	});

	$('.js-toggle-filter').on('click', function() {
		$(this).parents('.filter-wrap').toggleClass('active');
	});

	$('.accessories-btn-mobile').on('click', function() {
		$(this).parents('.tabs-content-item').toggleClass('active');
		var targetBlock = $(this).parents('.tabs-content-item');
			scrollToBlock(targetBlock);
	});

	function scrollToBlock(block) {
		var destination = block.offset().top;
		$('body').animate({ scrollTop: destination }, 1100);
	}

	// Copy promo key code
	$('.js-copy-promo-key').on('click', function(event) {
		event.preventDefault();
		$(this).siblings('.promo__key').select();
		document.execCommand("copy");
	});

	// Switch theme
	$('.aside-contacts__phone, .top-mobile-contacts__phone').on('click', function(event) {
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

	// Test article form submit
	$('.form-article').on('submit', function (event) {
		event.preventDefault();
		$.fancybox.open([
				{
						href : '#js-modal-add-arctile',
						type: 'inline',
						closeClick: false,
						closeBtn: false,
						afterShow: function() {
							$('.modal-close, .button').click(function(event) {
								$.fancybox.close();
							});
						}
				}
		]);
	});

	// Rating
	var initialStateRating = 0;
	$('.js-rating-change span').on('mouseenter', function(){
		var currentElIndex = $(this).index();
		changeRating(currentElIndex);
	});

	$('.js-rating-change').on('mouseleave', function(){
		changeRating(initialStateRating);
	});

	$('.js-rating-change span').on('click', function(){
		var currentElIndex = $(this).index();
		initialStateRating = currentElIndex;

		$('#reviewRating').val(currentElIndex + 1);
		changeRating(currentElIndex);
	});

	function changeRating(indexChange) {
		$('.js-rating-change span').each(function (index) {
			if(indexChange >= index) {
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});
	}

	// Tabs
	$('.tabs__item').on('click', function (e) {
		e.preventDefault();

		var tabsID = $(this).parents('.tabs').data('tabs');
		var currentIndex = $(this).index();

		changeTab(tabsID, currentIndex);
	})

	function changeTab(id, index) {
		$('.tabs[data-tabs="' + id + '"] .tabs__item').removeClass('active');
		$('.tabs[data-tabs="' + id + '"] .tabs__item').eq(index).addClass('active');

		$('.tabs-content[data-tabs="' + id + '"] .tabs-content-item').removeClass('active');
		$('.tabs-content[data-tabs="' + id + '"] .tabs-content-item').eq(index).addClass('active');
	}

	// Place-an-order events
	$('.form-order-payment .item').on('click', function() {
		$('.form-order-payment .item').removeClass('active');
		$(this).addClass('active');
	})
	$('.form-order-payment-method .item').on('click', function() {
		$('.form-order-payment-method .item').removeClass('active');
		$(this).addClass('active');
	})

	// Change file
	$('.js-change-file').on('change', function () {
		var fileName = $(this)[0].files[0].name;
		$('.js-change-file-name').text(fileName);
	});

	// Scroll
	$('.js-scroll-to-detail').on('click', function functionName() {
		var targetH = $('.catalog-variants').offset().top + $('.catalog-variants').height();
		$('body').animate({scrollTop: targetH}, 1000);
	});	

	$('.gallery-item').fancybox();
});
