<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
?>
<!-- onclick переехал в bitrix/components/bit/form.request/templates/.default/script.js:10
	 Вы НЕ хотите добавить атрибут onclick прямо сюда
 -->
<div style="display: none" id="gide" class="ok-send">
	Спасибо, Ваша заявка отправлена.<br/> В самое ближайшее время, с Вами, свяжется наш специалист.
</div>

<a onclick="$('.nav-open-layer .nav-open').trigger('click');" href="javascript:void(0)" class="make-app js-request-btn" data-toggle="modal" data-target="#requestModal">Оставить заявку</a>
<?if($_REQUEST["request_send"] == 'y'):?>
	<script type="text/javascript">
		$(function(){
			$.fancybox({'href': '#gide','centerOnScroll':true});
		});
	</script>
<?endif?>
<?if($arResult["ERROR"]):?>
	<script type="text/javascript">
		$(function(){
			$.fancybox({'href': '#gide_err','centerOnScroll':true});
		});
	</script>
	<div style="display: none;" id="gide_err" class="ok-send">
		<?=$arResult["ERROR"]?>
	</div>
<?endif?>
<!-- оставить заявку шаг1 -->
<div class="modal fade" id="requestModal" tabindex="-1" role="dialog" aria-labelledby="requestModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-request">
		<div class="modal-content modal-content-request">
			<form action="<?=$templateFolder.'/ajax.php'?>" method="post" class="form form_request">
				<input type="hidden" name="bit-ajax" value="Y"/>
				<div class="modal-header modal-header-request">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"> </button>
					<h4 class="modal-title" id="requestModalLabel">Оставить заявку</h4>
				</div>
				<div class="modal-body modal-body-request">
					<div class="name_input input">
						<input type="text" placeholder="Ваше имя" class="inputtext" name="NAME" value=""  required>
					</div>
					<div class="phone_input input">
						<input type="text" name="PHONE" value="" placeholder="Контактный телефон" required>
					</div>
					<div class="email_input input">
						<input type="email" name="EMAIL" value="" placeholder="E-mail" required>
					</div>
					<input type="hidden"  class="service_input" name="SERVICE" value="<?=$arResult["PAGE_SERVICE"]?>">
					 <input type="hidden" name="CITY" value="<?=$_SESSION["TRUE_USER_CITY"]?>">
					<div class="services_popup  kostyl">
						<div class="nm_wrapper">
							<div class="nm"><?=($arResult["PAGE_SERVICE"])?$arResult["PAGE_SERVICE"]:"Выберите услугу";?></div>
						</div>
						<div class="service_pop">
							<a href="#">Интернет-магазины</a>
							<a href="#">Крупный проект</a>
							<a href="#">Информационные сайты</a>
							<a href="#">Корпоративные порталы</a>
							<a href="#">Техническая поддержка</a>
							<a href="#">Интеграция с 1С</a>
							<a href="#">Лицензия 1С-Битрикс</a>
							<a href="#">Другое</a>
						</div>
					</div>

					<input type="hidden" class="license_input" name="MORE_INFO" value="<?=($arResult["PAGE_LICENSE"])?'Редакция: '.$arResult["PAGE_LICENSE"]:'';?>">
					<div class="license_popup" <?if($arResult["PAGE_SERVICE"] == "Лицензия 1С-Битрикс"):?>style="display: block;"<?endif?>>
						<div class="nm_wrapper">
							<div class="nm"><?=($arResult["PAGE_LICENSE"])?$arResult["PAGE_LICENSE"]:"Выберите редакцию";?></div>
						</div>
						<div class="license_pop">
							<a href="#">Старт</a>
							<a href="#">Стандарт</a>
							<a href="#">Эксперт</a>
							<a href="#">Малый бизнес</a>
							<a href="#">Бизнес</a>
							<a href="#">Enterprise</a>
							<a href="#">24 Корпоративный портал</a>
							<a href="#">24 Холдинг</a>
							<a href="#">Продление лицензии</a>
							<a href="#">24 Продление лицензии</a>
							<a href="#">Незнаю что выбрать</a>
						</div>
					</div>
				</div>
				<div class="modal-footer modal-footer-request" style="padding: 20px;">
					<button type="submit" class="btn btn-default">Отправить</button>
				</div>
			</form>
		</div>
	</div>
</div>

<!-- оставить заявку шаг2 -->
<div class="modal fade" id="requestModal2" tabindex="-1" role="dialog" aria-labelledby="requestModalLabel2" aria-hidden="true">
	<div class="modal-dialog modal-dialog-request">
		<div class="modal-content modal-content-request">
			<form id="requestModal2Form"  data-target="<?=$arParams["TARGET"]?>" method="post" class="form js-modal-form-2" enctype="multipart/form-data">
				<input name="ID" type="hidden" value="0" id="idrequest"/>
				<div class="modal-header modal-header-request">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"> </button>
					<h4 class="modal-title" id="requestModalLabel2">Оставить заявку</h4>
				</div>
				<div class="modal-body modal-body-request">
					<span class="modal-subscr-request">Если Вы хотите чтобы наш первый разговор прошёл более продуктивно, расскажите кратко о своем проекте</span>
					<div class="name_input input modal-textarea-request">
						<textarea name="COMMENTS" id="" rows="5" placeholder="Комментарий" class=""></textarea>
					</div>
					<div class="modal-file">
						<div class="modal-file-group">
							<a href="/upload/breef_download.docx" class="modal-file-brif"><i class="fa fa-cloud-download form-icon" aria-hidden="true"></i>Скачать бриф</a>
						</div>
						<div class="modal-file-group">
							<span class="modal-file-add"><i class="fa fa-file-text form-icon" aria-hidden="true"></i>Прикрепить файл</span>
							<input name="FILE" type="file" class="modal-file-add-input">
						</div>
					</div>
					<div class="modal-agr">
						<label class="modal-agr-checkbox" for="agr1">
							<input name="SUBSCRIBE_NEWS" type="checkbox" id="agr1" checked="checked">
							<div class="modal-agr-text">Я хочу получать новости о проводимых акциях и кейсы внедрения успешных инструментов для увеличения продаж и автоматизации бизнес процессов</div>
						</label>
					</div>
				</div>
				<div class="modal-footer modal-footer-request" style="padding: 20px;">
					<button type="submit" class="btn btn-default">Отправить</button>
				</div>
			</form>
		</div>
	</div>
</div>
