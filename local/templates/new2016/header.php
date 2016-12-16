<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8">
	<!--[if IE]>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<![endif]-->
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<!--[if IE]>
	<link href="css/ie.css" type="text/css" rel="stylesheet">
	<![endif]-->
	<?$APPLICATION->ShowHead();?>
	<title><?$APPLICATION->ShowTitle()?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<link rel="icon" href="/images/favicon.ico" type="image/x-icon">
	<link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
	<link rel="stylesheet" href="/blog/style.css">
	<script type="text/javascript" src="//vk.com/js/api/openapi.js?124"></script>
	<script type="text/javascript">
		VK.init({apiId: 5557972, onlyWidgets: true});
	</script>
	<script>(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.7&appId=1411070495858100";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));</script>
	<script type="text/javascript">(window.Image ? (new Image()) : document.createElement('img')).src = location.protocol + '//vk.com/rtrg?r=oi**OlAa02DzzPBQzQND1bdpwRj81PJfEm0i9V8UlUxlY6CpsyZgQqP9lk05joLYGFL6D3LlNO*GKhwALMmk3Z/1A3VHb3PLF8/kSjzhihJAVkoo3CLu49ZFrCc2wFYDFVEYsjKgLxvdbpz3b1uqlE0fgCUj9qH4/DJGrssfk1c-&pixel_id=1000024123';</script>
	<!-- Yandex.Metrika counter -->
	<script type="text/javascript">
		(function (d, w, c) {
			(w[c] = w[c] || []).push(function() {
				try {
					w.yaCounter39905280 = new Ya.Metrika({
						id:39905280,
						clickmap:true,
						trackLinks:true,
						accurateTrackBounce:true,
						webvisor:true
					});
				} catch(e) { }
			});

			var n = d.getElementsByTagName("script")[0],
				s = d.createElement("script"),
				f = function () { n.parentNode.insertBefore(s, n); };
			s.type = "text/javascript";
			s.async = true;
			s.src = "https://mc.yandex.ru/metrika/watch.js";

			if (w.opera == "[object Opera]") {
				d.addEventListener("DOMContentLoaded", f, false);
			} else { f(); }
		})(document, window, "yandex_metrika_callbacks");
	</script>
	<noscript><div><img src="https://mc.yandex.ru/watch/39905280" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
	<!-- /Yandex.Metrika counter -->
</head>
<?
$isNewTemplate = "Y" == $APPLICATION->GetDirProperty("IS_NEW_TEMPLATE");

// Условия для динамических портфолио
if(preg_match('/^\/portfolio\/(.+)$/', $_SERVER["REQUEST_URI"], $match)) {
	if($APPLICATION->GetDirProperty("IS_NEW_TEMPLATE_OVERRIDES") == "Y"){
		$isNewTemplate = "Y";
	} else {
		$isNewTemplate = false;
	}
}

?>
<body<?if ($isNewTemplate):?> class="new2016"<?endif;?>>
<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-67277162-2', 'auto');
	ga('send', 'pageview');

</script>
<?
$APPLICATION->ShowPanel();

$isMainPage = $APPLICATION->GetCurPage() == SITE_DIR;
?>

<?if (!$isNewTemplate):?>
	<div class="new2016">
<?endif;?>

<div class="container-fluid section-header normal-menu">
	<a href="http://pb.ru/about/sites-company/" target="_blank" class="our-sites">Наши сайты</a>
	<div class="mobile-small-phone">
		<div class="row">
			<?$APPLICATION->IncludeComponent(
				"studioBit:init.office_phone",
				"new",
				array(
					"FILE_DIR" => "",
					"FILE_PATH" => "/upload/phones_calendar.csv",
					"DEFAULT_PHONE" => "+7(495) 748-01-23",
					"DEFAULT_ZOOM" => "",
					"AJAX_MODE" => "",
					"CACHE_TYPE" => "N",
					"CACHE_TIME" => "0"
				),
				false
			);?>
		</div>		
	</div>
	<div class="container">
		<span class="logo">
			<?if (!$isMainPage):?>
				<a href="<?=SITE_DIR?>">
			<?endif;?>
					<img src="<?=SITE_TEMPLATE_PATH?>/img/template/logo-header.svg" alt="">
			<?if (!$isMainPage):?>
				</a>
			<?endif;?>
		</span>
		<?$APPLICATION->IncludeComponent(
	"bitrix:menu", 
	"mainmenu", 
	array(
		"ROOT_MENU_TYPE" => "top",
		"MAX_LEVEL" => "2",
		"CHILD_MENU_TYPE" => "vozmojnosti",
		"USE_EXT" => "Y",
		"DELAY" => "N",
		"ALLOW_MULTI_SELECT" => "Y",
		"MENU_CACHE_TYPE" => "N",
		"MENU_CACHE_TIME" => "3600",
		"MENU_CACHE_USE_GROUPS" => "Y",
		"MENU_CACHE_GET_VARS" => array(
		),
		"USER_CITY_SECTION_ID" => $_SESSION["USER_CITY"]["SECTION_ID"]=="all"?$_SESSION["USER_CITY"]["SECTION_ID"]:(int)$_SESSION["USER_CITY"]["SECTION_ID"]
	),
	false
);?>
		<div class="right">
			<a class="nav-open"></a>
			<?$APPLICATION->IncludeComponent(
				"studioBit:init.office_phone",
				"new",
				array(
					"FILE_DIR" => "",
					"FILE_PATH" => "/upload/phones_calendar.csv",
					"DEFAULT_PHONE" => "+7(495) 748-01-23",
					"DEFAULT_ZOOM" => "",
					"AJAX_MODE" => "",
					"CACHE_TYPE" => "N",
					"CACHE_TIME" => "0"
				),
				false
			);?>

			<?
			$url = $APPLICATION->GetCurPage();
			if(strripos($url, "portfolio") !== false)
			{
				$url  = "make_order";
				$portfolioItemCode = getPortfolioItemCodeFromUrl();
				if ($portfolioItemCode)
				{
					$url .= "_" . $portfolioItemCode;
				}
			}
			elseif($url == "/")
			{
				$url = "main";
			}
			else
			{
				$url = "none";
			}
			$APPLICATION->IncludeComponent("bit:form.request", "", array(
				"TARGET" => $url
			))?>

		</div>
	</div>
</div>

<?if (!$isNewTemplate):?>
	</div><!--Close new2016-->
<?endif;?>