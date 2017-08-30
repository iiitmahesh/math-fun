<?php
include "dbconfig.php";
$username=$_POST['username'];
$password=$_POST['password'];
$query=mysql_query("SELECT username,password FROM users WHERE username='$username'");
$count=mysql_affected_rows();
if($count>0)
{
	$password=md5($password);
	$row=mysql_fetch_array($query);
	$passwd=$row['password'];
	if($password==$passwd)
	{
		echo "green";
		authorize();
	}
}
else
{
	//
}
function authorize()
{
	$username=$_POST['username'];
	$query1=mysql_query("SELECT * FROM users WHERE username='$username'");
	$row=mysql_fetch_array($query1);
	$fullname=$row['name'];
	$cookie=$row['cookie'];
	$username="user".$username;
	$username=md5($username);
	if($cookie==$username)
	{
		setcookie("MVAuth", $username, time()+10800, "/");
		setcookie("MVAuthFname", $fullname, time()+10800, "/");
	}
}
?>