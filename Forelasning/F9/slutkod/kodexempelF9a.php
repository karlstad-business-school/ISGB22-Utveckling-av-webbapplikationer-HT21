<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>PHP F9 - Gömda fält</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <style> 
            img {
                width: 15%;
                height: 15%;
                padding-right: 5px;
                padding-bottom: 10px;
            }
        </style>
    </head>

    <body class="container p-2">
        <header class="jumbotron text-center">
            <h1>PHP F9 - Först till 100 med gömda fält</h1>
        </header>

        <main>    
            <?php

                define("IMG", "<img src='https://openclipart.org/download/2821");

                $summa = 0;
                $antal = 0;

                if( isset( $_POST["skicka"] ) ) {

                    //summa och antal borde kontrolleras med is_numeric() för vad händer om dessa inte innehåller
                    //siffror som kan typkonverteras till heltal?
                    $summa = $_POST["summa"];
                    $antal = $_POST["antal"];
                        
                    for($i = 1; $i <= 6; $i++) {
                        $slumptal = rand(1, 6);
                        echo(IMG . (26 + $slumptal) . "/Die" . $slumptal . ".svg' alt='Tärning " . $slumptal . "' />");
                        $summa += $slumptal;
                    }

                    $antal++;

                    echo("<p>Summan blev: $summa</p>");
                    echo("<p>Antalet gånger du kastat de 6 tärningarna är: $antal</p>");

                    if($summa >= 100) {
                        
                        $summa = 0;
                        $antal = 0;

                        echo("<p>För nytt spel tryck på 'Skicka'!</p>");
                    }

                }

            ?>

            <form action="<?php echo($_SERVER["PHP_SELF"]); ?>" method="post">
                <input type="submit" name="skicka" value="Skicka" />
                <input type="submit" name="rensa" value="Rensa" />
                <input type="hidden" name="summa" value="<?php echo($summa); ?>" />
                <input type="hidden" name="antal" value="<?php echo($antal); ?>" />
            </form>

        </main>

    </body>

</html>