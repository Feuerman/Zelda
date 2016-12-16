<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
?>
<!-- onclick переехал в bitrix/components/bit/form.request/templates/.default/script.js:10
     Вы НЕ хотите добавить атрибут onclick прямо сюда
 -->
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
<div class="modal fade" id="grfbModal" tabindex="-1" role="dialog" aria-labelledby="grfbModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-request ">
        <div class="modal-content modal-content-request">
            <form action="<?=$templateFolder.'/ajax.php'?>" method="post" class="form form_grfb">
                <input type="hidden" name="bit-ajax" value="Y"/>
                <div class="modal-header modal-header-request">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true"> </button>
                    <h4 class="modal-title" id="grfbTitle"></h4>
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
					 <input type="hidden" name="CITY" value="<?=$_SESSION["TRUE_USER_CITY"]?>">
					 <input type="hidden" name="SERVICE" value="">
                </div>
                <div class="modal-footer modal-footer-request">
                    <button type="submit" class="btn btn-default">Отправить</button>
                </div>
            </form>
        </div>
    </div>
</div>