<?php
$url = parse_url(getenv("CLEARDB_DATABASE_URL"));

$server = $url["host"];
$username = $url["user"];
$password = $url["pass"];
$db = substr($url["path"], 1);

//DPO Setup

//Create DSN
$dsn = "mysql:host=$server;dbname=$db";

//Create PDO Instance
$pdo = new PDO($dsn, $username, $password);