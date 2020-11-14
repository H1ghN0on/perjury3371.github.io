<?php

include "vk_api.php"; 


const VK_KEY = "3a5eb7b4f02821c71813ef13ba3d0eccfca127bd1e64d97f077bb3467c31a7808af1bda385230fbbc18db";  // Токен сообщества
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
	