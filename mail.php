<?php
	header('Access-Control-Allow-Origin: https://j-huang.fr');
    function send_mail(){
		$to = "me@j-huang.fr";
		$subject = $_POST['object'];

		$message='nom:'.$_POST['name']."\r\n";
		$message.='email:'.$_POST['email']."\r\n";
		$message.=$_POST['message']."\r\n";

		$message = wordwrap($message, 70, "\r\n");

		$headers = 'from:'.$_POST['email'];
		$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

		mail($to, $subject, $message, $headers);
		echo '<div class="alert alert-success" role="alert">message envoyé !</div>';
    }
 
    if(isset($_POST['submitForm'])){
		send_mail();
		
    }
?>