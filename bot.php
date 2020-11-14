<?php

include "vk_api.php"; 


const VK_KEY = "b317fd9b6b4cd0836eb7995c507fdee275b9105942628142d347aa3a8aa2a69d60fb83fe238fcf9cbbd96";  // Токен сообщества
const ACCESS_KEY = "0ecc4999";  // Тот самый ключ из сообщества 
const VERSION = "5.81"; // Версия API VK


$vk = new vk_api(VK_KEY, VERSION); 
$data = json_decode(file_get_contents('php://input')); 

if ($data->type == 'confirmation') { 
    exit(ACCESS_KEY); 
}
$vk->sendOK(); 
// ====== Наши переменные ============
$id = $data->object->from_id; // Узнаем ID пользователя, кто написал нам
$message = $data->object->text; // Само сообщение от пользователя
// ====== *************** ============

if ($data->type == 'message_new') {

    if ($message == '!бот') {

            $vk->sendMessage($id, "Привет :-)");
			
        }


	}
	
