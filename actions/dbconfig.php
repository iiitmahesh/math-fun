<?php
$hostname="localhost";
$username="root";
$password="secure148";
mysql_connect($hostname,$username,$password);
mysql_query("CREATE DATABASE IF NOT EXISTS mathsvilla");
mysql_select_db('mathsvilla');
?>