<?php
include "dbconfig.php";
$fullname=$_POST['fullname'];
$username=$_POST['username'];
$cookie="user".$username;
$cookie=md5($cookie);
$password=$_POST['passwd'];
$password=md5($password);
$secq=$_POST['secq'];
$seca=$_POST['seca'];
$dob=$_POST['dob'];
$query=mysql_query("INSERT INTO users VALUES('$fullname','$username','$cookie','$password','$dob','$secq','$seca')") or die(mysql_error());
if($query)
{
	echo "green";	
}
?>