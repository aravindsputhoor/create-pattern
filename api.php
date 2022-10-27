<?php
header('Content-Type: application/json');

$data=['status'=> 1, 'code'=> 400, 'count'=> 3];
echo json_encode($data);