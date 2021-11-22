<?php

    define("PATH", "https://openclipart.org/download/2821");

    $imgElements = "";
    
    for($i = 0; $i < 6; $i++) {
        $rndValue = rand(1, 6);
        $imgElements .= "<img src='" . PATH . ($rndValue + 26) . "/Die" . $rndValue . ".svg'" . "alt='Dice " . $rndValue . "' />" . PHP_EOL;
    }
    
    echo($imgElements . PHP_EOL);