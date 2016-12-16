<section class="container-fluid section-page">
	<div class="container">
		<div class="section-page__title nav-slider-wrap">
			<span>Сертификаты</span>
			<div class="nav-slider js-sert-slider-nav">
				<button class="left">
					<i></i>
				</button>
				<button class="right">
					<i></i>
				</button>
			</div>
		</div>
		<div class="sert-slider js-sert-slider">
			<img src="<?=SITE_TEMPLATE_PATH?>/images/slider-sertificate-1.jpg" alt="">
			<img src="<?=SITE_TEMPLATE_PATH?>/images/slider-sertificate-2.jpg" alt="">
			<img src="<?=SITE_TEMPLATE_PATH?>/images/slider-sertificate-3.jpg" alt="">
			<img src="<?=SITE_TEMPLATE_PATH?>/images/slider-sertificate-4.jpg" alt="">
			<img src="<?=SITE_TEMPLATE_PATH?>/images/slider-sertificate-5.jpg" alt="">
			<img src="<?=SITE_TEMPLATE_PATH?>/images/slider-sertificate-6.jpg" alt="">
			<img src="<?=SITE_TEMPLATE_PATH?>/images/slider-sertificate-9.png" alt="">
			<img src="<?=SITE_TEMPLATE_PATH?>/images/slider-sertificate-10.png" alt="">
			<img src="<?=SITE_TEMPLATE_PATH?>/images/slider-sertificate-8.png" alt="">
			<img src="<?=SITE_TEMPLATE_PATH?>/images/slider-sertificate-11.png" alt="">
			<img src="<?=SITE_TEMPLATE_PATH?>/images/slider-sertificate-7.png" alt="">
		</div>
	</div>
</section>
<script>
	$(document).ready(function() {
		var owl1 = $('.js-sert-slider');
		owl1.owlCarousel({
			items : 5,
			itemsCustom : false,
			itemsDesktop : [1280,4],
			itemsTablet: [992,3],
			itemsTabletSmall: [767,2],
			itemsMobile : [480,1],
			pagination : false,
			infiniteLoop: true
		});
		$('.js-sert-slider-nav .right').click(function(){
			owl1.trigger('owl.next');
		});
		$('.js-sert-slider-nav .left').click(function(){
			owl1.trigger('owl.prev');
		});
	});
</script>
