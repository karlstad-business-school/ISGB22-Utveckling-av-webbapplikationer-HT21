<?php

    define("PATH", "https://openclipart.org/download/2821");

    if(isset($_GET["dice"])) {

        if($_GET["dice"] === "dice") { 

            $jsonDataArray = array();

            for($i = 1; $i <= 6; $i++) {
                $rnd = rand(1, 6);
                array_push($jsonDataArray, "<img src='" . PATH . ($rnd + 26) . "/Die" . $rnd . ".svg'" . "alt='Dice_" . $rnd . "' data-dice='" . $rnd . "'/>");
            }

            //sleep(2);
    
            header("Content-type: application/json; charset=utf-8");
            echo( json_encode($jsonDataArray) );

        } else {
            echo("Request variabeln dice har inte korrekt värde!");
        }
    } else {
        echo("Request variabeln dice saknas!");
    }
