$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.delay(500).fadeOut();
    $preloader.delay(500).fadeOut('slow');
});

$(document).ready(function(){
	'use strict';

	$('.company-slider').slick({
		autoplay: true,
  		autoplaySpeed: 5000,
		arrows: true,
		nextArrow: '.company-slider__nav-next',
		prevArrow: '.company-slider__nav-prev'
	});

	$('.company-slider').on('beforeChange', function(slick, currentSlide, nextSlide) {				
		var blockChangeBG = $('.main-page-bg__changeImage');
		var arrBgImage = ["url('img/bg__main--first.jpg')", "url('img/bg__main--first-1.jpg')", "url('img/bg__main--first-2.jpg')"];
		var randImage = Math.floor(Math.random() * arrBgImage.length);
		$(blockChangeBG).css('background-image', arrBgImage[randImage]);	
	});

	$('.main-menu-slider').slick({
		arrows: true,
		nextArrow: $('.main-menu-slider-nav .arrow-next'),
		prevArrow: $('.main-menu-slider-nav .arrow-prev'),
		slidesToShow: 2,
		rows: 3
	});

	$('.main-catalog-slider').slick({
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		rows: 2,
		infinite: false,
		nextArrow: '.main-catalog-slider--next',
		prevArrow: '.main-catalog-slider--prev'
	});

	$('.news-slider.mobile').slick({
		autoplay: true,
  		autoplaySpeed: 5000,
		arrows: false,
		dots: true,
		appendDots: '.news-slider-mobile-dots'
	});

	$('.news-slider.desktop').slick({
		autoplay: true,
  		autoplaySpeed: 5000,
  		fade: true,
		arrows: false,
		dots: true,
		appendDots: '.news-slider-dots'
	});

	var btnNavNews = $('.main-news-nav');
	$(btnNavNews).on('click', function(e) {
		e.preventDefault();
		var action = $(this).data('action'),
			tabs = $('.news-tabs .tabs');
		tabsSelection(action, tabs);
	});
	function tabsSelection(action, tabs) {
		var activeElIndex = $(tabs).find('.active').index();
		switch (action) {
			case 'prev':
				$(tabs).find('.tabs__item').eq(activeElIndex - 1).trigger('click');	
				break;
			case 'next':
				$(tabs).find('.tabs__item').eq(activeElIndex + 1).trigger('click');					
				break;
			default:
				break;
		}
	}			

	$('.main-portfolio-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: '.main-portfolio-slider--next',
		prevArrow: '.main-portfolio-slider--prev',
		responsive: [
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
		]
	});	

	$('.cart-slider').slick({
		arrows: false,
		dots: false,	
		asNavFor: '.cart-slider-thumb'	
	});

	$('.cart-slider-thumb').slick({
		slidesToScroll: 1,
		slidesToShow: 3,
		arrows: true,
  		focusOnSelect: true,
		nextArrow: '.cart-slider--next',
		prevArrow: '.cart-slider--prev',
		asNavFor: '.cart-slider',
		responsive: [
			{
			breakpoint: 768,
			settings: {
				dots: true,
					dotsClass: 'custom_paging',
					customPaging: function (slider, i) {
						return  '<span class="custom_paging__current">' + (i + 1) + '</span>' + '/' + slider.slideCount;
					}
				}
			}
		]		
	});

	$('.model-top-slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		dots: true,	
		appendDots:'.model-top-slider__nav',	
		cssEase: 'ease-in-out',
		speed: 1000
	});

	$('.model-slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		dots: false,		
		cssEase: 'ease-in-out',
		speed: 1000,		
		asNavFor: '.model-slider-thumbs'
	});

	$('.model-slider-thumbs').slick({
		draggable: false,
		slidesToScroll: 1,
		slidesToShow: 4,
		arrows: true,
  		focusOnSelect: true,
		nextArrow: $('.model-arrows .arrow-next'),
		prevArrow: $('.model-arrows .arrow-prev'),
		dots: false,	
		cssEase: 'ease-in-out',
		speed: 1000,
		asNavFor: '.model-slider',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});

	$('.news-detail-slider').slick({
		arrows: false,
		dots: false,		
		cssEase: 'ease-in-out',
		speed: 1000,		
		asNavFor: '.news-detail-slider-thumbs'
	});
	
	$('.news-detail-slider-thumbs').slick({
		draggable: false,
		slidesToScroll: 1,
		slidesToShow: 5,
		arrows: true,
  		focusOnSelect: true,
		nextArrow: $('.news-detail-arrows .arrow-next'),
		prevArrow: $('.news-detail-arrows .arrow-prev'),
		dots: false,	
		cssEase: 'ease-in-out',
		speed: 1000,
		asNavFor: '.news-detail-slider',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 6
				}
			},
			{
			breakpoint: 600,
			settings: {
				dots: true,
					dotsClass: 'custom_paging',
					customPaging: function (slider, i) {
						return  '<span class="custom_paging__current">' + (i + 1) + '</span>' + '/' + slider.slideCount;
					}
				}
			}
		]
	});

	$('.recommend-slider').slick({
		infinity: true,
		swipeToSlide: true,
		touchThreshold: 5,
		slidesToShow: 5,
		arrows: true,
		nextArrow: '.recommend-slider--next',
		prevArrow: '.recommend-slider--prev',
		responsive: [
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 3,
				}		
			},
			{
				breakpoint: 440,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});	

	$('.catalog-menu-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 2,
		rows: 2,
		arrows: true,
		nextArrow: '.catalog-slider-arrows .arrow-next',
		prevArrow: '.catalog-slider-arrows .arrow-prev',
		responsive: [
			{
			breakpoint: 1200,
			settings: {	
					slidesToShow: 3,
				}
			},
			{
			breakpoint: 800,
			settings: {	
					slidesToShow: 2,
				}
			},
			{
			breakpoint: 550,
			settings: {	
					slidesToShow: 1,
				}
			}
		]
	});	

	$('.history-slider').slick({
		arrows: true,
		dots: false,		
		cssEase: 'ease-in-out',
		fade: true,
		speed: 1000,		
		nextArrow: $('.history-slider-arrows .arrow-next'),
		prevArrow: $('.history-slider-arrows .arrow-prev'),
		asNavFor: '.history-slider-years',
	});

	$('.history-slider-years').slick({
		slidesToScroll: 1,
		slidesToShow: 10,
		arrows: false,
		vertical: true,
		adaptiveHeight: true,
  		focusOnSelect: true,
		dots: false,	
		cssEase: 'ease-in-out',
		speed: 1000,
		asNavFor: '.history-slider',
		responsive: [
			{
			breakpoint: 600,
			settings: {	
					vertical: false,
					arrows:true,
					slidesToScroll: 1,
					slidesToShow: 3,
					centerMode: true
				}
			}
		]
	});

	$('.history-slider-bg').slick({
		slidesToShow: 1,
		arrows: false,
		dots: false,
		cssEase: 'ease',
		speed: 2000,
	});	

	$('.history-slider').on('beforeChange', function(slick, currentSlide, nextSlide) {		
		setTimeout(function () {
			var currentSlideIndex;

			currentSlideIndex = currentSlide.currentSlide;
			$('.history-slider-bg').slick('slickGoTo', currentSlideIndex);

		}, 100);	
		
	});

	var currentClientWidth = $('body').width();

	if (currentClientWidth > 992) {
		onSliders();

		$('body').on('mousewheel', function(event) {
		    if (event.deltaY > 0) {
		    	$('.main-page-slider').slick('slickPrev');	
		    } else {
		    	$('.main-page-slider').slick('slickNext');
		    }
		});
	}

	var goToFirstSlide = $('.main-bottom-nav__prev-page');

	$(goToFirstSlide).on('click', function(event) {
		event.preventDefault();
		$('.main-page-slider').slick('slickGoTo', 0);
	});

	function onSliders() {
		$('.main-page-bg-slider').slick({
			arrows: false,
			infinite: false,
			cssEase: 'ease-in-out',	
			fade: true,
			speed: 2000,
			settings: 'ease',
			responsive: [
				{
				breakpoint: 9999,
				settings: 'slick'
				},
				{
				breakpoint: 992,
				settings: 'unslick'
				}
			]
		});

		$('.main-page-slider').slick({
			asNavFor: '.main-page-bg-slider',
			slidesToShow: 1,
			arrows: true,
			nextArrow: '.main-bottom-nav__next-page',
			prevArrow: '',
			infinite: false,
			dots: true,
			appendDots:'.main-pagination',
			draggable: false,
			fade: true,
			speed: 2000,
			cssEase: 'ease',
			settings: 'slick',
			responsive: [
				{
				breakpoint: 999999,
				settings: 'slick'
				},
				{
				breakpoint: 992,
				settings: 'unslick'
				}
			]
		});
		
	}

	function offSliders() {
		$('.main-page-bg-slider').slick('unslick');
		$('.main-page-slider').slick('unslick');
	}
	// Sliders ---start
	

	var themeObject = {
		siteLogo: $('.site-logo'),
		iconAuth: $('.icon__auth'),
		iconSearch: $('.icon__search'),
		btnMenu: $('.main-menu-button'),
		slideContent: $('.main-page-slider__item'),
		mainPagination: $('.main-pagination'),
		copyright: $('.copyright')
	}

	$('.main-page-bg-slider').on('beforeChange', function(slick, currentSlide, nextSlide) {		
		setTimeout(function () {
			var currentSlideIndex,
				currentItem,
				currentPage,
				currentPageData;

			currentSlideIndex = currentSlide.currentSlide;
			currentItem = currentSlide.$slides[currentSlideIndex];
			currentPage = $(currentItem).attr('data-current-page');
			currentPageData = setThemeData(currentPage);

			switchTheme(currentPageData);
		}, 100);	
		
	});

	function setThemeData(currentPage) {
		var pageData = {
			siteLogo: 'dark-theme',
			iconAuth: 'dark-theme',
			iconSearch: 'dark-theme',
			btnMenu: 'dark-theme',
			slideContent: 'dark-theme',
			mainPagination: 'dark-theme',
			copyright: 'dark-theme'
		};
		var btnNextPage = $('.main-bottom-nav__next-page'),
			btnPrevPage = $('.main-bottom-nav__prev-page');

		$(btnNextPage).removeClass('animate');
		$(btnNextPage).removeClass('reverse');
		$(btnPrevPage).removeClass('active-nav');
		$(btnNextPage).addClass('active-nav');

		switch (currentPage) {
			case 'main':
				pageData.siteLogo = 'dark-theme';
				pageData.iconAuth = 'dark-theme';
				pageData.iconSearch = 'dark-theme';
				pageData.btnMenu = 'dark-theme';
				pageData.slideContent = 'dark-theme';
				pageData.mainPagination = 'dark-theme';
				pageData.copyright = 'dark-theme';
				$(btnNextPage).addClass('animate'); 
				break;
			case 'main-catalog':
				pageData.siteLogo = 'light-theme';
				pageData.iconAuth = 'light-theme';
				pageData.iconSearch = 'light-theme';
				pageData.btnMenu = 'light-theme';
				pageData.slideContent = 'light-theme';
				pageData.mainPagination = 'light-theme';
				pageData.copyright = 'light-theme';
				break;
			case 'main-documents':
				pageData.siteLogo = 'dark-theme';
				pageData.iconAuth = 'dark-theme';
				pageData.iconSearch = 'dark-theme';
				pageData.btnMenu = 'dark-theme';
				pageData.slideContent = 'dark-theme';
				pageData.mainPagination = 'dark-theme';
				pageData.copyright = 'dark-theme';
				bgVideo.volume = 0;
				bgVideo.currentTime = 26;
				bgVideo.play();
				break;
			case 'main-portfolio':
				pageData.siteLogo = 'light-theme';
				pageData.iconAuth = 'light-theme';
				pageData.iconSearch = 'light-theme';
				pageData.btnMenu = 'light-theme';
				pageData.slideContent = 'light-theme';
				pageData.mainPagination = 'light-theme';
				pageData.copyright = 'light-theme';
				$(btnNextPage).addClass('reverse');				
				$(btnPrevPage).addClass('active-nav');
				$(btnNextPage).removeClass('active-nav');
				$('.main-portfolio-slider').slick('reinit');
				break;
			case 'main-news':
				pageData.siteLogo = 'light-theme';
				pageData.iconAuth = 'light-theme';
				pageData.iconSearch = 'light-theme';
				pageData.btnMenu = 'light-theme';
				pageData.slideContent = 'light-theme';
				pageData.mainPagination = 'light-theme';
				pageData.copyright = 'light-theme';
				break;
			case 'main-about':
				pageData.siteLogo = 'light-theme';
				pageData.iconAuth = 'dark-theme';
				pageData.iconSearch = 'dark-theme';
				pageData.btnMenu = 'dark-theme';
				pageData.slideContent = 'light-theme';
				pageData.mainPagination = 'light-theme';
				pageData.copyright = 'light-theme';
				break;
			case 'main-contacts':
				pageData.siteLogo = 'light-theme';
				pageData.iconAuth = 'light-theme';
				pageData.iconSearch = 'light-theme';
				pageData.btnMenu = 'light-theme';
				pageData.slideContent = 'light-theme';
				pageData.mainPagination = 'light-theme';
				pageData.copyright = 'light-theme';
				break;
			default:								
				break;
		}
		return pageData;
	};

	var bgVideo = document.querySelector(".main-page-bg-slider__item .bg-video");
	var bgVideoMobile = document.querySelector(".bg-video-mobile .bg-video");

	if (currentClientWidth > 992 && bgVideo) {
		bgVideo.autoplay = true;		
	};

	$('.bg-video-button').on('click', function() {
		if (currentClientWidth > 992) {
			$('.main-content, .bg-video-overlay, .bg-video').animate({
				opacity: 'hide'
			}, 2000);
			$('.bgVideo-controll').addClass('active');
			$('.main-bottom-nav__next-page').css('opacity', '0');
			setTimeout(function(){
				$(bgVideo).animate({
					opacity: 'show'
				}, 2000);
				bgVideo.volume = 1;
				bgVideo.currentTime = 0;
				bgVideo.play();
			}, 1500);
		} else {
			$('.main-wrapper').animate({
				opacity: 'hide'
			}, 2000);
			$('.bgVideo-controll').addClass('active');
			setTimeout(function(){
				$(bgVideoMobile).animate({
					opacity: 'show'
				}, 2000);
				bgVideoMobile.volume = 1;
				bgVideoMobile.currentTime = 0;
				bgVideoMobile.play();
			}, 1500);
		}		
	});

	$('.bgVideo-controll__stop').on('click', function() {
		if (currentClientWidth > 992) {
			bgVideo.volume = 0;
			$('.main-content, .bg-video-overlay').animate({
				opacity: 'show'
			}, 2000);
			$('video').animate({
				opacity: 'hide'
			}, 2000);
			$('.bgVideo-controll').removeClass('active');
			$('.main-bottom-nav__next-page').css('opacity', '1');
			setTimeout(function(){
				$('video').animate({
					opacity: 'show'
				}, 1000);			
				bgVideo.currentTime = 26;
				bgVideo.play();
			}, 1500);
		} else {
			$('.main-wrapper').animate({
				opacity: 'show'
			}, 2000);
			$(bgVideoMobile).animate({
				opacity: 'hide'
			}, 2000);
			$('.bgVideo-controll').removeClass('active');				
		}	
		$('.company-slider-wrap').css('width', '100%');
		$('.company-slider').slick('slickGoTo', 1);		
	});

	function switchTheme(data) {
		var themeClassList = 'dark-theme light-theme';
		for(var key in data){
			themeObject[key].removeClass(themeClassList).addClass(data[key]);			
		}
	}
	// Sliders ---end

	// Events ---start
	var modalDefault = {
		autoOpen: false,
		hide: { effect: "fade" },
		show: { effect: "fade" },
		position: 'absolute',
		open: function(){
			var that = $(this);
			$(this).find('.box-modal_close').on('click', function() {				
				$(that).dialog('close');
			});
			$('html').addClass('ui-dialog-open');
			var documentWidth = parseInt(document.documentElement.clientWidth);
			var windowsWidth = parseInt(window.innerWidth);
			var scrollbarWidth = windowsWidth - documentWidth;
			if(scrollbarWidth) {
				$('body').css({
					'padding-right': scrollbarWidth,
					'overflow': 'hidden'
				});
			}
		},
		close: function() {
			$('html').removeClass('ui-dialog-open');
			$('body').css({
				'padding-right': 0,
				'overflow': 'auto'
			});
		}
	};

	var searchModal = $('#search-modal'),
		mainMenu = $('#main-menu-modal'),
		loginModal = $('#login-modal');

	$(searchModal).dialog(modalDefault);
	$(mainMenu).dialog(modalDefault);
	$(loginModal).dialog(modalDefault);

	$(mainMenu).on("dialogopen", function( event, ui ){
		$('.main-menu-slider').slick('slickGoTo', 1);	
	});	

	$('.btn-modal').click(function(event) {
		event.preventDefault();
		var targetModal = $(this).data('target-modal');
		$('#' + targetModal).dialog('open');
	});

	var btnMenulvl1 = $('.main-menu__link--isChild'),
		btnMenulvl2 = $('.main-menu-sub__link');
	$(btnMenulvl1).on('click', function(e) {
		e.preventDefault();
		$(this).addClass('active');

		$('.main-menu-sub').addClass('active');
	});
	$(btnMenulvl2).on('click', function(e) {
		e.preventDefault();

		$(btnMenulvl2).removeClass('active');
		$(this).addClass('active');
		
		$('.main-menu-slider-wrap').addClass('active');		

	});

	var btnCatalogMenu = $('.btn-catalog-menu'),
		catalogMenuContainer = $('.catalog-menu-wrap');
	$(btnCatalogMenu).on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$(catalogMenuContainer).toggleClass('active');
	});

	var btnMenuDropdown = $('.btn-menu-dropdown'),
		linkMenuDropdown = $('.menu-dropdown a');
	$(btnMenuDropdown).on('click', function(event) {
		$(this).siblings('.menu-dropdown').toggleClass('active');
	});

	$(linkMenuDropdown).on('click', function(event) {
		var linkText = $(this).text();
		$(this).parents('.menu-dropdown').toggleClass('active');
		$(this).parents('.menu-dropdown').siblings('.btn-menu-dropdown').text(linkText);
	});
	
	var btnTabs = $('.tabs__item'),
		tabsItem = $('.news-content');
	tabs(btnTabs, tabsItem);

	var documentsTabsLink = $('.documents-tabs__item'),
		documentsTabsContent = $('.documents-tabs-content__item');
	tabs(documentsTabsLink, documentsTabsContent); 

	var documentsTabsLink = $('.documents-page-tabs__item'),
		documentsTabsContent = $('.documents-tabs-content__item');
	tabs(documentsTabsLink, documentsTabsContent); 

	var propertyTabsLink = $('.property-tabs__item'),
		propertyTabsContent = $('.property-tabs-content');
	if (currentClientWidth > 768) {
		tabs(propertyTabsLink, propertyTabsContent); 	
	};	
	var propertyDropdown = $('.property-mobile-title');
	$(propertyDropdown).on('click', function(event) {
		event.preventDefault();
		$(this).parents(propertyTabsContent).toggleClass('active');
	});

	function tabs (tabs, content) {
		$(tabs).eq(0).addClass('active');
		$(content).eq(0).addClass('active');

		$(tabs).on('click', function(event) {
			event.preventDefault();
			var index = $(this).index();

			$(tabs).removeClass('active');
			$(content).removeClass('active');

			$(this).addClass('active');
			$(content).eq(index).addClass('active');
		});
	}


	var btnVideoModal = $('.main-production-video__modal');
	$(btnVideoModal).on('click', function(event) {
		event.preventDefault();
		var videoURL = $(this).data('video-url');
		
		showVideoModal(videoURL);
	});
	function showVideoModal(url) {
		var video = $('<iframe/>', {
		    src: url,
		    frameborder: 0,
		    allowfullscreen: 'allowfullscreen'
		});

		$(video).css({
			width: '100%',
			height: '95vh',
			marginTop: '4vh'
		});

		var closeVideo = $('<div/>', {
		    class: 'box-modal_close',
		    css: {
		    	top: '0'
		    }
		});		

		var randomID = Math.floor(Math.random() * (10000 - 0) + 0);
		var modal = $('<div/>', {
		    class: 'video-' + randomID,
		    html: video
		}).appendTo('body');	

		$(closeVideo).appendTo(modal);	

		$('.video-' + randomID).dialog({			
			hide: { effect: "fade" },
			show: { effect: "fade" },
			open: function(){
				var that = $(this);
				$(this).find('.box-modal_close').on('click', function() {				
					$(that).dialog('close');
				});
				$('html').addClass('ui-dialog-open');
			},
			close: function() {
				$('html').removeClass('ui-dialog-open');
			}
		});
	}	

	var btnScrollUp = $('.scroll-up__button');
	$(btnScrollUp).on('click', function() {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0},1000);
	});	

	var header = $('.header'),        
		headerHeight = $('.header').outerHeight();
    $(window).scroll(function(){        
    	var topScroll = $(this).scrollTop();

        if (topScroll < headerHeight) {
            $(header).removeClass('header-fixed');
        } else {
            $(header).addClass('header-fixed');
        }
    });

    var btnCatalogMenu = $('.catalog-header__current-category'),
		catalogMenu = $('.catalog-header-menu');
	$(btnCatalogMenu).on('click', function() {
		$(catalogMenu).toggleClass('active');
	});

	var btnPersonalMenu = $('.personal-menu-btn'),
		personalMenu = $('.personal-menu');
	$(btnPersonalMenu).on('click', function() {
		$(personalMenu).toggleClass('active');
	});

	var btnFilterMobile = $('.catalog-filter-mobile__button'),
		filterMobile = $('.catalog-filter');		
	$(btnFilterMobile).on('click', function() {
		$(filterMobile).toggleClass('active');
	});

	var shareBtn = $('.share-block__btn-open'),
		sharePanel = $('.share-block__panel');
	$(shareBtn).on('click', function(event) {
		event.preventDefault();
		$(sharePanel).toggleClass('active');
	});

	var questionBtn = $('.question-item__title');
	$(questionBtn).on('click', function(event) {
		event.preventDefault();
		$(this).parents('.question-item').toggleClass('active');
	});

	var regTizer = $('.form-reg-tizer'),
		regSubmit = $('.form-reg-submit');
	$(regTizer).on('click', function(event) {
		event.preventDefault();
		$(regTizer).removeClass('active');
		$(this).addClass('active');
		$(regSubmit).removeClass('disabled');
		$(regSubmit).removeAttr('disabled');
	});

	var modelSampleBtn = $('.model-sample__trigger');
	$(modelSampleBtn).on('click', function(event) {
		event.preventDefault();
		$(this).parents('.model-sample').toggleClass('active');
		$(this).find('i').toggleClass('active');
	});
	// Events ---end

	// Custom select ---start

	$('.catalog-filter-item__checkbox input').styler();
	$('.personal-form__subscribe input').styler();
	
	// Custom select ---end

	$(".catalog-tizers__loop").fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
});