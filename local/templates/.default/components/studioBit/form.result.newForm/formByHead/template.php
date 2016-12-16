<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
?>
<?if ($arResult["isFormErrors"] == "Y"):?><?=$arResult["FORM_ERRORS_TEXT"];?><?endif;?>
<div style="display:none;">
    <?if($arResult['VALID_FORM_ERROR']):?>
        <?php echo $arResult['VALID_FORM_ERROR'];?>
    <?endif;?>
        <form name="SIMPLE_FORM_1" id="order_form" class="form" action="/" method="POST" enctype="multipart/form-data">
            <div class="order_form">
                <input type="hidden" name="sessid" id="sessid" value="145c4653ca8d24d11416ab0d36e75461">
                <input type="hidden" name="WEB_FORM_ID" value="1">
                <div class="title">Оставить заявку</div>
                <div class="name_input input">
                    <input type="text" placeholder="Ваше имя" class="inputtext" name="form_text_9" value=""  required>
                </div>
                <div class="phone_input input">
                    <input type="text" name="form_text_1" value="PHONE" placeholder="Контактный телефон" required>
                </div>
                <div class="email_input input">
                    <input type="email" name="form_text_2" value="" placeholder="E-mail" required>
                </div>
                <input type="hidden"  class="service_input" name="form_text_3" value="">
                <div class="services_popup">
                    <div class="nm_wrapper">
                        <div class="nm">Выберите услугу</div>
                    </div>
                    <div class="service_pop">
                        <a href="#">Интернет-магазины</a>
                        <a href="#">Крупный проект</a>
                        <a href="#">Информационные сайты</a>
                        <a href="#">Корпоративные порталы</a>
                        <a href="#">Техническая поддержка</a>
                        <a href="#">Интеграция с 1С</a>
						<a href="#">Другое</a>
                    </div>
                </div>
                <div class="file_upload">
                    <button type="button"></button>
                    <div>Прикрепить бриф</div>
                    <input name="form_file_8" class="inputfile" size="0" type="file">
                </div>
                <div class="brief"><a href="/upload/breef_download.docx" target="_blank">Скачать пример брифа</a></div>
                <input type="submit" name="web_form_submit" class="btn" value="Отправить">
            </div>
    </form>
</div>
<script>
$(".buy_btn").click(function(){
    var tag = $(this);
    titleSetttinf(tag);
});
$(".show_demonstration").click(function(){
    var tag = $(this);
    titleSetttinf(tag);
});
$(".get_free").click(function(){
    var tag = $(this);
    titleSetttinf(tag);
});
$(".order_button").click(function(){
    var tag = $(this);
    setOption(tag)
});
$(".by_tech").click(function(){
    var tag = $(this);
    setOption(tag);
});
$(".buy").click(function(){
    var tag = $(this);
    var newTitle = setOption(tag);
    $("form .title").html("Купить<br>"+newTitle);
    $("form .service_input").val("Клиент готов купить "+newTitle);
});

<!--$(".recall").click(function(){-->
<!--    hideAll();-->
<!--    var tag = $(this).attr("rel");-->
<!--    $("."+tag).css('display','block');-->
<!--    setTitle(title, form);-->
<!--});-->
<!--function hideAll() {-->
<!--    $(".order_form").css('display','none');-->
<!--    $(".buy_corp").css('display','none');-->
<!--}-->
function setOption(tag) {
    var title = tag.attr("rev");
    var href = tag.attr("href");
    form = $(href);
    var titleThis = form.find(".nm");
    titleThis.html(title);
    titleThis = form.find(".service_input");
    titleThis.val(title);
    return title;
}
function titleSetttinf(tag){
    var title = tag.attr("rev");
    var href = tag.attr("href");
    form = $(href);
    setTitle(title, form);
}

    function setTitle(title, form) {
        var titleThis = form.find(".title");
        titleThis.html(title);
    }
</script>

<script type="text/javascript">
    var portfolioItemCode = <?=CUtil::PhpToJSObject(getPortfolioItemCodeFromUrl())?>;
</script>

<div style="display: none" id="gide" class="ok-send">
	Спасибо, Ваша заявка отправлена.<br/> В самое ближайшее время, с Вами, свяжется наш специалист. 
</div>

<div style="display: none" id="error" class="error-send">
    Ошибка
</div>







