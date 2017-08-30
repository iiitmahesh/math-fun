<?php
include "dbconfig.php";
$user=$_POST['user'];
$coins = $_POST['coins'];
$query=mysql_query("SELECT * FROM users WHERE cookie='$user'");
$row=mysql_fetch_array($query);
$c=$row['coins'];
$cookie=$row['cookie'];
$c=$c+$coins;
if($user==$cookie)
{
	mysql_query("UPDATE users SET coins='$c' WHERE cookie = '$user'") or die(mysql_error());
	echo "count: ".$c;
}
else
{
	mysql_error();
}
?>