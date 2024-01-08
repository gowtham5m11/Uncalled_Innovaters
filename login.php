<?php

include_once 'db-inc.php';

$email = $_POST['Email'];
$password = $_POST['Password'];

if (isset($_POST['submit'])) {
    if(!empty($_POST['Option'])) {
        $selected = $_POST['Option'];
        echo $selected;
        if($selected == "1") {
            $sqlStatement = "select * from sform where email='$email' and pasword='$password';";
            $result=$dbConnection->query($sqlStatement);
            if($result->num_rows>0) {
                $details=mysqli_fetch_all($result, MYSQLI_ASSOC);
            } else {
                header("submission=failed");
                echo '<script>';
                echo 'alert("Incorrect Email or Password");';
                echo 'window.location="authentication.html";';
                echo '</script>';
            }
            if(isset($details)>0)
            {
            header("submission=success");
            echo '<script>';
            echo 'window.location="student.php";';
            echo '</script>';
            }
        }
    }
}

?>