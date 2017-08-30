<?php
include "dbconfig.php";
$username=$_POST['username'];
$query=mysql_query("SELECT * FROM users WHERE username='$username'") or die(mysql_error());
$count=mysql_affected_rows();
if($count==0)
{
	echo "green";
}
?>