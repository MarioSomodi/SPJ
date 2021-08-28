<?php
    $data = json_decode(file_get_contents("php://input"));
    $fp = fopen('vijesti.json','w');
    fwrite($fp, json_encode($data));
    fclose($fp);
?>