<?php
require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';
require 'config.php';
// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

global $email;

echo $email;
$mail = new PHPMailer;

$mail->isSMTP();                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';       // Specify main and backup SMTP servers
$mail->SMTPAuth = true;               // Enable SMTP authentication
$mail->Username = '106075@stuba.sk';   // SMTP username
$mail->Password = 'Yvy.qec.7.ahu';   // SMTP password
$mail->SMTPSecure = 'tls';            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                    // TCP port to connect to

// Sender info
$mail->setFrom('106075@stuba.sk', 'Jovan Kis');

// Add a recipient
$mail->addAddress($email);

// Set email format to HTML
$mail->isHTML(true);

// Mail subject
$mail->Subject = 'Export of logs';

// Check if export of logs is present.
if(file_exists("logs.csv")){
    // Mail body content
    $bodyContent = '<h1>Hello.</h1>';
    $bodyContent .= '<p>This email contains export of logs(as attachment) from website you just visited.</p>';
    $mail->Body = $bodyContent;
    // Attachment
    $mail->addAttachment('./logs.csv');
} else {
    $bodyContent = '<h1>Hello.</h1>';
    $bodyContent .= '<p>Unfortunately, we do not have export og logs yet.</p>';
    $mail->Body = $bodyContent;
}
header('Location: index.html');
