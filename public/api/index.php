<?php 
    header('Access-Control-Allow-Origin: *');
    header('Content-type: text/plain; charset=utf-8');

    $data = $_POST['data'];
    $username = $_POST['username'];
    $isLocal = $_POST['isLocal'];

    if($isLocal == "true"){
        $file = $_SERVER['DOCUMENT_ROOT'] . "/users/$username.json";
    } else {
        $file = $_SERVER['DOCUMENT_ROOT'] . "/fun/api/users/$username.json";
    }

    $fp = fopen($file, 'w');
    fwrite($fp, $data);
    fclose($fp);

    if(isset($_POST['create'])){
        echo 'created';
    } else {
        echo 'updated';
    }

?>