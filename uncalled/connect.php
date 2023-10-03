<?php
$username = "rvr ";
$password = "rvr";
$hostname = "localhost"; 
$database="uncalled";	
//$db = mysqli_connect($hostname,$username,$password,$database ) or die("Unable to connect to MySQL". mysqli_connect_error());
	
$db = mysql_connect($hostname,$username,$password) or Die("data base error" .mysql_error());
		mysql_select_db($database,$db);
	
	?>