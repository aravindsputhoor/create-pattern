<?php
header('Content-Type: application/json');
include_once('env.php');

$host = DB_HOST;
$db   = DB_DATABASE;
$user = DB_USER;
$pass = DB_PASS;

$charset = 'utf8mb4';
$port='3306';

$options = [
    \PDO::ATTR_ERRMODE            => \PDO::ERRMODE_EXCEPTION,
    \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
    \PDO::ATTR_EMULATE_PREPARES   => false,
];
$dsn = "mysql:host=$host;dbname=$db;charset=$charset;port=$port;";

try {
     $pdo = new \PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    //  throw new \PDOException($e->getMessage(), (int)$e->getCode());
    echo json_encode(array("status" => 0, "code" => 400, "message" => "DB connection failed")); die();
}




