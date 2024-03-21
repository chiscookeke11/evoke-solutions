<?php 
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'www.EvokeSolutions.com'

$email_subject = 'New Form Submission'

$email_body = " user name: $name.\n".
                "user email: $visitor_email.\n".
                "subject: $subject.\n".
                "user message: $message.\n".

$to = 'okekec807@gmail.com';

$headers = "from: email_from \r\n".

$headers .= "Reply-To: visitor_email \r\n";

mail($to, $email_subject, $email_body, $headers);

header("location: abt2.htm");
?>