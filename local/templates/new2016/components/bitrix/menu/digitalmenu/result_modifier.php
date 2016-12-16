<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

//Если установлен город, установить соответствующую ссылку
if (Contacts::isConcreteCitySelected())
{
	$url = Contacts::getContactsUrlForCity(Contacts::getUserCity());

	foreach ($arResult as &$arItem)
	{
		if ($arItem["LINK"] == Contacts::BASE_FOLDER)
		{
			$arItem["LINK"] = $url;
			$arItem["ADDITIONAL_CLASS"] = Contacts::MENU_ITEM_CLASS;
		}
	}
	unset($arItem);
}
