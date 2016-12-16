<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>
	<button class="promotion-menu-btn visible-sm visible-xs js-toggle-menu-promotion">
		<?foreach($arResult as $arItem):

			if($arItem["SELECTED"]):?>
				<span><?=$arItem["TEXT"]?></span>
			<?endif;

		endforeach?>
		<img src="<?=SITE_TEMPLATE_PATH?>/img/template/ico-menu-down-big.png" alt="">
	</button>

	<ul>
	<?
	$previousLevel = 0;
	foreach($arResult as $arItem):?>

		<?if ($previousLevel && $arItem["DEPTH_LEVEL"] < $previousLevel):?>
			<?=str_repeat("</ul></li>", ($previousLevel - $arItem["DEPTH_LEVEL"]));?>
		<?endif?>

		<?if ($arItem["IS_PARENT"]):?>

			<?if ($arItem["DEPTH_LEVEL"] == 1):?>
				<?//Ссылка не выводится. Таково пожелание заказчика.?>
				<li><a href="javascript:void(0)" class="has-children<?if($arItem["ADDITIONAL_CLASS"]):?> <?=$arItem["ADDITIONAL_CLASS"]?><?endif;?>"><?=$arItem["TEXT"]?></a>
				<ul>
			<?else:?>
				<li><a href="<?=$arItem["LINK"]?>"<?if($arItem["ADDITIONAL_CLASS"]):?> class="<?=$arItem["ADDITIONAL_CLASS"]?>"<?endif;?>>
						<?=$arItem["TEXT"]?>
					</a>
				<ul>
			<?endif?>

		<?else:?>

			<?if ($arItem["PERMISSION"] > "D"):?>

				<?if ($arItem["DEPTH_LEVEL"] == 1):?>
					<li<?if($arItem["SELECTED"]):?> class="active"<?endif;?>><a href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a></li>
				<?else:?>
					<li<?if($arItem["SELECTED"]):?> class="active"<?endif;?>><a href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a></li>
				<?endif?>

			<?else:?>

				<?if ($arItem["DEPTH_LEVEL"] == 1):?>
					<li><a href="" title="<?=GetMessage("MENU_ITEM_ACCESS_DENIED")?>"<?if($arItem["ADDITIONAL_CLASS"]):?> class="<?=$arItem["ADDITIONAL_CLASS"]?>"<?endif;?>><?=$arItem["TEXT"]?></a></li>
				<?else:?>
					<li><a href="" title="<?=GetMessage("MENU_ITEM_ACCESS_DENIED")?>"<?if($arItem["ADDITIONAL_CLASS"]):?> class="<?=$arItem["ADDITIONAL_CLASS"]?>"<?endif;?>><?=$arItem["TEXT"]?></a></li>
				<?endif?>

			<?endif?>

		<?endif?>

		<?$previousLevel = $arItem["DEPTH_LEVEL"];?>

	<?endforeach?>

	<?if ($previousLevel > 1)://close last item tags?>
		<?=str_repeat("</ul></li>", ($previousLevel-1) );?>
	<?endif?>

	</ul>
<?endif?>

<script type="text/javascript">
	$('.js-toggle-menu-promotion').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).parents('.promotion-menu').find('ul').toggleClass('active');
	});
</script>
