<?php
    if(isset($_POST["docHeight"]) && isset($_POST["docWidth"]) && isset($_POST["imgHeight"]) && isset($_POST['imgWidth'])) {

        $docWidth = $_POST["docWidth"] - $_POST["imgWidth"];
        $docHeight = $_POST["docHeight"] - $_POST["imgHeight"];
        $jsonData = array();

        for($i = 1; $i < 31; $i++) {

            $left = rand(1, $docWidth);
            $top = rand(1, $docHeight);
            $height = $_POST["imgHeight"] - ( round($_POST["imgHeight"] / 30) * $i );
            $width = $_POST['imgWidth'] - ( round($_POST['imgWidth'] / 30) * $i );

           array_push($jsonData, "\"$i\" : { \"top\" : \"$top\", \"left\" : \"$left\", \"width\" : \"$width\", \"height\" : \"$height\"}");
        }

        header("Content-type: application/json; charset=utf-8");
        echo(json_encode( $jsonData ));

    }