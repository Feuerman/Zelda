<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
?>
<form action="<?=$templateFolder.'/ajax.php'?>" class="form-license">
    <div class="error"></div>
    <input type="hidden" name="bit-ajax" value="Y">
    <input type="text" name="NAME" placeholder="Ваше имя" value="" required="required" class="form-license__input placeholder-black">
    <input type="email" name="EMAIL" placeholder="E-mail" value="" required="required" class="form-license__input placeholder-black">
    <input type="hidden" name="CITY" value="<?=$_SESSION["TRUE_USER_CITY"]?>">
    <input type="text" name="PHONE" placeholder="Телефон" value="" required="required" class="phone_input form-license__input placeholder-black">
    <button type="submit" name="SUBMIT" value="" class="form-license__sumbit">Отправить</button>
</form>
