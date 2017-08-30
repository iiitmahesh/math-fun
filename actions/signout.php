<?php
if(isset($_COOKIE['MVAuth']))
{
	include("dbconfig.php");
	$username=$_COOKIE['MVAuth'];
	setcookie("MVAuth", null, time()-10800, "/");
	setcookie("MVAuthFname", null, time()-10800, "/");
}
else 
{
	//do nothing..
}
?>