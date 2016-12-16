<section class="section-page section-page--grey">
	<div class="container">
		<div class="section-page__title">КЕЙСЫ</div>
		<div class="cases-slider-wrap">
			<div class="cases-slider-panel">
				<span>Все</span>
				<span>Название</span>
			</div>
			<div class="cases-slider-nav js-slider-cases-nav">
				<button class="cases-slider-nav__left left"></button>
				<button class="cases-slider-nav__right right"></button>
			</div>
			<div class="cases-slider-all js-slider-cases-all">
				<div class="cases-slider-all__item">
					<div class="image">
						<img src="<?=SITE_TEMPLATE_PATH?>/images/lenta-logo-example.png" alt="">
					</div>
					<div class="content">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>
					</div>
				</div>
				<div class="cases-slider-all__item">
					<div class="image">
						<img src="<?=SITE_TEMPLATE_PATH?>/images/lenta-logo-example.png" alt="">
					</div>
					<div class="content">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<script>
	(function() {
		var owl2 = $('.js-slider-cases-all');
		owl2.owlCarousel({
			items : 1,
			pagination : false,
			infiniteLoop: true,
		});
		$('.js-slider-cases-nav .right').click(function(){
			owl2.trigger('owl.next');
		});
		$('.js-slider-cases-nav .left').click(function(){
			owl2.trigger('owl.prev');
		});
	})();		
</script>
