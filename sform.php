<?php
include_once 'db-inc.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$fullname = $_POST['fullName'];
$collegename = $_POST['collegeName'];
$regno = $_POST['regNo'];
$stream = $_POST['Stream'];
$email = $_POST['Email'];
$dob = $_POST['DOB'];
$password = $_POST['Password'];
$conpassword = $_POST['conPassword'];
$pnnum = $_POST['pnNum'];

$sqlStatement = 'select * from sform;';
$queryResult = mysqli_query($dbConnection,$sqlStatement);
$resultCheck = mysqli_num_rows($queryResult);

if($resultCheck > 0) {
    while($row = mysqli_fetch_array($queryResult)) {
        if($row['email'] == $email) {
            header("submission=failed");
            echo '<script>';
            echo 'alert("Email alreay exist.");';
            echo 'window.location="authentication.html";';
            echo '</script>';
        }
    }
}

if($password == $conpassword) {
    $sqlStatement = 'insert into sform values("'.$fullname.'","'.$collegename.'","'.$regno.'","'.$stream.'","'.$email.'","'.$dob.'","'.$password.'","'.$pnnum.'");';
    $queryResult = mysqli_query($dbConnection,$sqlStatement);

    // ini_set("SMTP", "smtp.server.com");

    $to = $email;
    $subject = "Welcome to UI family.";

    $message = "Dear {$fullname},<br><br> Thanks for registering on our website uncalledinnovators.com.We are delighted to confirm that your registration has been successfully received.<br><br> If you have any questions or concerns, feel free to reach out to us with the below mentioned contact information. <br><br> Contact Information: <br><br> K. SRI KRISHNA SAI - +91 9398001517 <br><br> B.BOBBY - +91 9398501366 <br><br> P. PARDHU - +91 9550314022 <br><br> Best regards, <br><br> Team UI";

    // $headers = "MIME-Version: 1.0" . "\r\n";
    // $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // $headers .= 'From: <uncalledinnovators@gmail.com>' . "\r\n";
    // $headers .= 'Cc: uncalledinnovators@gmail.com' . "\r\n";

    // mail($to,$subject,$message,$headers);

    $mail = new PHPMailer(true);

    $mail -> isSMTP();
    $mail -> Host = 'smtp.gmail.com';
    $mail -> SMTPAuth = true;
    $mail -> Username = 'uncalledinnovators@gmail.com';
    $mail -> Password = 'akqjsdqrlgklwoky';
    $mail -> SMTPSecure = 'ssl';
    $mail -> Port = 465;

    $mail -> setFrom('uncalledinnovators@gmail.com');
    $mail -> addAddress($to);
    $mail -> isHTML(true);
    $mail -> Subject = $subject;
    $mail -> Body = $message;

    $mail -> send();

    header("submission=success");
    echo '<script>';
    echo 'alert("Registration Successfull");';
    echo 'window.location="student.php";'; // can change in place of verify.html
    echo '</script>';
}
else {
    header("submission=failed");
    echo '<script>';
    echo 'alert("Password doesn\'t match.");';
    echo 'window.location="authentication.html";';
    echo '</script>';
}
?>