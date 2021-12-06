<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>PHP F6</title>
    </head>
    <body>
        <main>
            <?php 
            
                //Kodexempel med utskrift och variabler
                $kurskod = "ISGB02";
                echo($kurskod);

                $kursnamn = "Webbutveckling";
                $hp = 7.5;

                echo("<p>" . $kurskod . "</p>");
                echo("<p>$kurskod, $kursnamn, $hp");

                echo("<p>" . gettype($kurskod) . " " . gettype($hp) . "</p>");

                echo("<script>alert('hahaha');</script>");

                //För gettype() och settype() se 
                //https://www.php.net/manual/en/function.gettype.php
                //https://www.php.net/manual/en/function.settype.php

                //Kodexempel med selektion
                $klienthp = 3.5;
                $serverhp = 4.0;
                $helkurs = 7.5;
                if($klienthp + $serverhp === $helkurs) {
                    echo("<p>Grattis du har klarat hela kursen!</p>");
                } else {
                    echo("<p>Nja du har nog ngt kvar</p>");
                }

                //Kodexempel med iteration
                for($i = 1; $i < 7;  $i++) {
                    echo("<h$i>Detta är rubriknivå $i</h$i>"). PHP_EOL;
                    echo("<script>alert('inte igen...');</script>");
                }

                echo("<div style='color: pink;'>Detta är en</div>");
                echo("<div style=\"color: lightblue;\">Detta är en text!</div>");
              
            ?>
        </main>
    </body>
</html>