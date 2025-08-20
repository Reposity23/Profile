<?php
// Replace with your credentials
$botToken = "8404118059:AAH2iA8Rmitkea8WM2F1fCxyaWP87-Aoq6Q";
$chatId   = "6642388335";

// Get visitor details
$ip      = $_SERVER['REMOTE_ADDR'];
$agent   = $_SERVER['HTTP_USER_AGENT'];
$time    = date("Y-m-d H:i:s");

// Craft message
$message = "🚨 New Visitor Alert!\n\n".
           "🌍 IP: $ip\n".
           "🖥 Browser: $agent\n".
           "⏰ Time: $time";

// Send to Telegram
file_get_contents("https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=" . urlencode($message));
?>

