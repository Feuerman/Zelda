<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>

	<div class="container-fluid section-services-home">
		<div class="container">
			<div class="block-title"><?=GetMessage("TITLE_TEXT");?></div>
			<div class="items">
				<?
				$counter = 1;
				foreach($arResult as $arItem):
					if($arItem["DEPTH_LEVEL"] > 1)
						continue;
				?>

					<a href="<?=$arItem["LINK"]?>" class="item item-<?=$counter++?>">
						<span class="img"></span>
						<span class="name"><span><?=$arItem["TEXT"]?></span></span>
					</a>

				<?endforeach?>
			</div>
		</div>
	</div>

<?endif?>
