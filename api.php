<?php
include 'dbConfig.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!empty($_POST['keyword'])) {
        $keyword = $_POST['keyword'];
        $data = [':keyword' => $keyword];
        $sql = "INSERT INTO keywords (keyword) VALUES (:keyword)";
        $stmt_insrt = $pdo->prepare($sql);
        $result = $stmt_insrt->execute($data);

        $row_result = false;
        if ($result) {
            $stmt1 = $pdo->prepare("SELECT COUNT(keyword) as coun FROM keywords where keyword='$keyword'");
            $stmt1->execute();
            $row_result = $stmt1->fetchAll();
        }

        $response = array(
            "status" => ($result) ? 1 : 0,
            "code" => ($result) ? 200 : 500,
            "count" => ($row_result) ? $row_result[0]['coun'] : 0,
            "message" => ($result) ? "Inserted into the table successfully" : "Insertion failed",
        );
        echo json_encode($response);
    } else {
        echo json_encode(array("status" => 0, "code" => 400, "message" => "keyword missing"));
    }
} else {
    echo json_encode(array("status" => 0, "code" => 400, "message" => "Method not Allowed"));
}
