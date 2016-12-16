<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?
$isNewTemplate = "Y" == $APPLICATION->GetDirProperty("IS_NEW_TEMPLATE");
$isUseForm = "Y" == $APPLICATION->GetDirProperty("IS_USE_FORM");
?>

<?if ($isUseForm && $isNewTemplate):?>
	<?$APPLICATION->IncludeComponent(
	"bitrix:iblock.element.add.form",
	"main_order",
	array(
		"IBLOCK_TYPE" => "request",
		"IBLOCK_ID" => "17",
		"STATUS_NEW" => "N",
		"LIST_URL" => "",
		"USE_CAPTCHA" => "N",
		"USER_MESSAGE_EDIT" => "",
		"USER_MESSAGE_ADD" => "Сообщение успешно отправлено",
		"DEFAULT_INPUT_SIZE" => "30",
		"RESIZE_IMAGES" => "N",
		"PROPERTY_CODES" => array(
			0 => "NAME",
			1 => "PREVIEW_TEXT",
			2 => "90",
			3 => "93",
			4 => "94",
			5 => "96",
			6 => "92",
			7 => "95",
			8 => "91",
		),
		"PROPERTY_CODES_REQUIRED" => array(
			0 => "90",
			1 => "93",
			2 => "92",
		),
		"GROUPS" => array(
			0 => "2",
		),
		"STATUS" => "ANY",
		"ELEMENT_ASSOC" => "CREATED_BY",
		"MAX_USER_ENTRIES" => "100000",
		"MAX_LEVELS" => "100000",
		"LEVEL_LAST" => "Y",
		"MAX_FILE_SIZE" => "0",
		"PREVIEW_TEXT_USE_HTML_EDITOR" => "N",
		"DETAIL_TEXT_USE_HTML_EDITOR" => "N",
		"SEF_MODE" => "N",
		"CUSTOM_TITLE_NAME" => "",
		"CUSTOM_TITLE_TAGS" => "",
		"CUSTOM_TITLE_DATE_ACTIVE_FROM" => "",
		"CUSTOM_TITLE_DATE_ACTIVE_TO" => "",
		"CUSTOM_TITLE_IBLOCK_SECTION" => "",
		"CUSTOM_TITLE_PREVIEW_TEXT" => "",
		"CUSTOM_TITLE_PREVIEW_PICTURE" => "",
		"CUSTOM_TITLE_DETAIL_TEXT" => "",
		"CUSTOM_TITLE_DETAIL_PICTURE" => "",
		"SEF_FOLDER" => "/test/"
	),
	false
);?>
<?endif;?>

<?if (!$isNewTemplate):?>
	<div class="new2016">
<?endif;?>

<div class="container-fluid section-footer">
	<div class="container">
		<div class="row">
			<div class="col-md-3 footer footer-col">
				<div>
					<img src="<?=SITE_TEMPLATE_PATH?>/img/template/logo-footer.svg" alt="Первый БИТ"/>
					<div class="txt">Мы — веб-студия «Первый БИТ»</div>
					<div class="bottom">&copy; 1997-<?=date("Y")?><br> Веб-студия «Первый БИТ»</div>
					<div class="social">
						<a href="https://www.facebook.com/studiobit" target="_blank" class="fb" rel="nofollow"></a>
						<a href="https://twitter.com/FirstBITweb" target="_blank" class="tw" rel="nofollow"></a>
					</div>
				</div>
			</div>
			<div class="col-md-9 visible-lg visible-md nav footer-col"><div>
					<ul>
						<li>
							<span>О компании</span>
							<?$APPLICATION->IncludeComponent(
								"bitrix:menu",
								"footerStudioBit",
								array(
									"ROOT_MENU_TYPE" => "",
									"MAX_LEVEL" => "1",
									"CHILD_MENU_TYPE" => "",
									"USE_EXT" => "Y",
									"DELAY" => "N",
									"ALLOW_MULTI_SELECT" => "Y",
									"MENU_CACHE_TYPE" => "A",
									"MENU_CACHE_TIME" => "3600",
									"MENU_CACHE_USE_GROUPS" => "Y",
									"MENU_CACHE_GET_VARS" => array(
									)
								),
								false
							);?>
						</li>
						<li>
							<span>Наши возможности</span>
							<?$APPLICATION->IncludeComponent(
								"bitrix:menu",
								"footerStudioBit",
								array(
									"ROOT_MENU_TYPE" => "footer_second",
									"MAX_LEVEL" => "1",
									"CHILD_MENU_TYPE" => "",
									"USE_EXT" => "Y",
									"DELAY" => "N",
									"ALLOW_MULTI_SELECT" => "Y",
									"MENU_CACHE_TYPE" => "A",
									"MENU_CACHE_TIME" => "3600",
									"MENU_CACHE_USE_GROUPS" => "Y",
									"MENU_CACHE_GET_VARS" => array(
									)
								),
								false
							);?>
						</li>
						<li>
							<span>Готовые решения</span>
							<?$APPLICATION->IncludeComponent(
								"bitrix:menu",
								"footerStudioBit",
								array(
									"ROOT_MENU_TYPE" => "footer_3",
									"MAX_LEVEL" => "1",
									"CHILD_MENU_TYPE" => "",
									"USE_EXT" => "Y",
									"DELAY" => "N",
									"ALLOW_MULTI_SELECT" => "Y",
									"MENU_CACHE_TYPE" => "A",
									"MENU_CACHE_TIME" => "3600",
									"MENU_CACHE_USE_GROUPS" => "Y",
									"MENU_CACHE_GET_VARS" => array(
									)
								),
								false
							);?>
						</li>
					</ul></div>
			</div>
		</div>
	</div>
</div>

<?if (!$isNewTemplate):?>
	</div><!--Close new2016-->

	<?$APPLICATION->IncludeComponent("studioBit:form.result.newForm", "formByHead", Array(
		"SEF_MODE" => "N",	// Включить поддержку ЧПУ
		"WEB_FORM_ID" => "1",	// ID веб-формы
		"LIST_URL" => "",	// Страница со списком результатов
		"EDIT_URL" => "result_edit.php",	// Страница редактирования результата
		"SUCCESS_URL" => "",	// Страница с сообщением об успешной отправке
		"CHAIN_ITEM_TEXT" => "",	// Название дополнительного пункта в навигационной цепочке
		"CHAIN_ITEM_LINK" => "",	// Ссылка на дополнительном пункте в навигационной цепочке
		"IGNORE_CUSTOM_TEMPLATE" => "N",	// Игнорировать свой шаблон
		"USE_EXTENDED_ERRORS" => "Y",	// Использовать расширенный вывод сообщений об ошибках
		"CACHE_TYPE" => "A",	// Тип кеширования
		"CACHE_TIME" => "3600",	// Время кеширования (сек.)
		"SEF_FOLDER" => "/",	// Каталог ЧПУ (относительно корня сайта)
		"CITY"=>$_SESSION['TRUE_USER_CITY']
		),
		false
	);?>
<?endif;?>

<?
$APPLICATION->IncludeComponent("studioBit:main.feedback","article-form",
	Array(
		"USE_CAPTCHA" => "N",
		"OK_TEXT" => "Спасибо, ваше сообщение принято.",
		"EMAIL_TO" => "orderweb@1cbit.ru",
		"REQUIRED_FIELDS" => Array("NAME","EMAIL", "PHONE"),
		"EVENT_MESSAGE_ID" => Array("63"),
		"AJAX_MODE" => "Y",  // режим AJAX
		"AJAX_OPTION_SHADOW" => "N", // затемнять область
		"AJAX_OPTION_JUMP" => "N", // скроллить страницу до компонента.
		"AJAX_OPTION_STYLE" => "N", // подключать стили
		"AJAX_OPTION_HISTORY" => "N"
	)
);
?>

<?
$asset = \Bitrix\Main\Page\Asset::getInstance();

if ($isNewTemplate)
{
	$asset->addCss(SITE_TEMPLATE_PATH . "/css/modal.css");
	$asset->addCss(SITE_TEMPLATE_PATH . "/css/owl.carousel.css");
	$asset->addCss(SITE_TEMPLATE_PATH . "/css/owl.theme.css");
}
else
{
	$asset->addCss(SITE_TEMPLATE_PATH . "/css/owl.carousel.css");
	$asset->addCss(SITE_TEMPLATE_PATH . "/css/owl.theme.css");
	$asset->addCss(SITE_TEMPLATE_PATH . "/css/bootstrap.css");
	$asset->addCss(SITE_TEMPLATE_PATH . "/css/new.css");
	$asset->addCss(SITE_TEMPLATE_PATH . "/css/style.css");
	$asset->addCss(SITE_TEMPLATE_PATH . "/css/studioBit_main.css");
	$asset->addCss(SITE_TEMPLATE_PATH . "/css/jquery.bxslider.css");
	$asset->addCss(SITE_TEMPLATE_PATH . "/css/jquery.fancybox.css");
	$asset->addCss(SITE_TEMPLATE_PATH . "/css/fix.css");
	$asset->addCss(SITE_TEMPLATE_PATH . "/css/old.template.fix.css");
}
$asset->addCss(SITE_TEMPLATE_PATH . "/css/jquery.jscrollpane.css");

$asset->addJs(SITE_TEMPLATE_PATH . "/js/bootstrap.js");
$asset->addJs(SITE_TEMPLATE_PATH . "/js/jquery.jscrollpane.min.js");
$asset->addJs(SITE_TEMPLATE_PATH . "/js/swipe.js");
$asset->addJs(SITE_TEMPLATE_PATH . "/js/common.js");
$asset->addJs(SITE_TEMPLATE_PATH . "/js/jquery.maskedinput.js");

if (!$isNewTemplate)
{
	$asset->addJs(SITE_TEMPLATE_PATH . "/js/studioBit/html5shiv.js");
	$asset->addJs(SITE_TEMPLATE_PATH . "/js/studioBit/jquery.placeholder.min.js");
	$asset->addJs(SITE_TEMPLATE_PATH . "/js/studioBit/jquery.bxslider.min.js");
	$asset->addJs(SITE_TEMPLATE_PATH . "/js/studioBit/jquery.validate.min.js");
	$asset->addJs(SITE_TEMPLATE_PATH . "/js/studioBit/jquery.fancybox.pack.js");
	$asset->addJs(SITE_TEMPLATE_PATH . "/js/studioBit/jquery.maskedinput.js");
	$asset->addJs(SITE_TEMPLATE_PATH . "/js/studioBit/jquery.scrollTo.js");
	$asset->addJs(SITE_TEMPLATE_PATH . "/js/studioBit/owl.carousel.min.js");
	$asset->addJs(SITE_TEMPLATE_PATH . "/js/studioBit/jquery.animateNumber.min.js");
	$asset->addJs(SITE_TEMPLATE_PATH . "/js/studioBit/main.js");
} else {
	$asset->addJs(SITE_TEMPLATE_PATH . "/js/studioBit/owl.carousel.min.js");
}
?>

<?if (!$isNewTemplate):?>
	<script type="text/javascript">

		function parseGetParams() {
			var $_GET = {};
			var __GET = window.location.search.substring(1).split("&");
			for(var i=0; i<__GET.length; i++) {
				var getVar = __GET[i].split("=");
				$_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1];
			}
			return $_GET;
		}
		var paramGet = parseGetParams();
		if(paramGet['formresult1']) {
			$.fancybox({'href': '#gide','centerOnScroll':true});
		}

		//This checks if a specific attribute is supported
		function attributeSupported(attribute) {
			return (attribute in document.createElement("input"));
		}

		function hasHtml5Validation () {
			//Check if validation supported && not safari
			return (typeof document.createElement('input').checkValidity === 'function') &&
				!(navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0);
		}

		$('form[name=SIMPLE_FORM_1]').submit(function(){
			if(!hasHtml5Validation())
			{
				var isValid = true;
				var $inputs = $(this).find('[required]');
				$inputs.each(function(){
					var $input = $(this);
					$input.removeClass('invalid');
					if(!$.trim($input.val()).length)
					{
						isValid = false;
						$input.parent().addClass('focused');
					}
				});
				if(!isValid)
				{
					return false;
				}
			}
		});

		$(window).resize(function(e){contentHeight();});
		$(window).load(function(e){contentHeight();});
		function contentHeight() {
			var h = $(window).height() - ($('#navbar').height() + $('.menu_fix').height() + ($('#site_footer').height() * 2));
			var hs = $('#leftCol').height();
			if (hs > $(window).height()) {
				h = hs - ($('#site_footer').height() * 2);
			}
			$('.content').css('min-height', h);
		}

	</script>
<?endif;?>

<!-- Yandex.Metrika counter -->
<script type="text/javascript">
	(function (d, w, c) {
		(w[c] = w[c] || []).push(function() {
			try {
				w.yaCounter29758008 = new Ya.Metrika({id:29758008,
					webvisor:true,
					clickmap:true,
					trackLinks:true,
					accurateTrackBounce:true});
			} catch(e) { }
		});

		var n = d.getElementsByTagName("script")[0],
			s = d.createElement("script"),
			f = function () { n.parentNode.insertBefore(s, n); };
		s.type = "text/javascript";
		s.async = true;
		s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

		if (w.opera == "[object Opera]") {
			d.addEventListener("DOMContentLoaded", f, false);
		} else { f(); }
	})(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/29758008" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

<!-- BEGIN JIVOSITE CODE {literal} -->
<script type='text/javascript'>
	(function(){ var widget_id = 'aSO35aXZnp';var d=document;var w=window;function l(){
		var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/geo-widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
</script>
<!-- {/literal} END JIVOSITE CODE -->

<div id="hamburger-menu-holder"<?if (!$isNewTemplate):?> class="new2016"<?endif;?>></div>
</body></html>
