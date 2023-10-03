<?php
session_start();

$uname=$_POST['uname'];
$pwrd=$_POST['password'];
$type1=$_POST['type1'];


include "./connect.php";

	
	$sql = "select uid,pwd,type from login where uid='$uname'";
	$res = mysqli_query($db,$sql);
	if(!$res){
		//echo "errors in query";
		//mysql_error();
                header("Location:./page_login.html");
		die();
	}
	
	else{
	
	
	while($row = mysqli_fetch_row($res)){
		
		
        	if($uname == $row[0] && $pwrd == $row[1]){
             // header("Location:./page_login.html");
				  if($type1=="student)
                 {  header("Location:./student.php");}
				   else if($type1=="verifier")
                  { header("Location:./verifier.php");}
				   else if($type1=="industry")
		        {header("Location:./industry.php");}
             }  
		else{ 
			
			header("Location:./page_login.html");
		   die();
		
		}
}


	


	
}
	




?>