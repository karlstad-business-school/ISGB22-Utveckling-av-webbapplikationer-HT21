<?php

    define("IMG", "<img src='https://openclipart.org/download/2821");

    $summa = 0;
    $antal = 0;
    $stringToEcho = "";

    //Om ni har post för method i form-elementet finns data i miljövariabeln $_POST!
    if( isset( $_POST["skicka"] ) ) {

        /*
            I följande workshop skall du fortsätta jobba med tärningar och mellan varje gång webbapplikationen
            anropas spara antalet gånger du kastat de 6 tärningarna och dess totala summa.

            När summan är större eller lika med 100 är spelet över.
        */

        /*
            1. Kontrollera om kakorna summa och antal finns på servern och om så är fallet
            tilldela dess värden till variablerna summa och antal.
        */

        //I miljövariabeln $_COOKIE hittar ni kakorna!
        if(isset($_COOKIE["summa"]) && isset($_COOKIE["antal"])) {
            $summa = $_COOKIE["summa"];
            $antal = $_COOKIE["antal"];
        }

        /*
            2. Slumpa 6 tal mellan 1 och 6 och öka på $summa i iterationen samt använd strängkonkatenering
            för att till stringToEcho lägga till HTML-instruktioner som skapar bilder.

            Observera att strängkonkatenering i PHP görs med en punkt! Jmf med JavaScript där ett plustecken istället används.
        */

        for($i = 1; $i <= 6; $i++) {
            $slumptal = rand(1, 6);
            $stringToEcho .= IMG . (26 + $slumptal) 
                . "/Die" . $slumptal 
                . ".svg' alt='Tärning " . $slumptal 
                . "' />" . PHP_EOL;
            $summa += $slumptal;
        }


        /*
            3. Öka antal med ett.
        */

        $antal++;     

        /*
            4. Använd strängkonkatentering och till stringToEcho lägg till texten om hur stor summan är samt
            hur många gånger tärningarna har kastats.
        */

        $stringToEcho .= "<p>Summan blev $summa!</p>";
        $stringToEcho .= "<p>Antalet gånger du kastat de 6 tärningarna är $antal!</p>";

        /*
            5. Kontrollera om summan är större eller lika med 100 och om så är fallet nollställ summa och antal samt 
            använd strängkonkatenering och till stringToEcho lägg till För nytt spel tryck på Skicka!.
        */

        if($summa >= 100) {
            $summa = 0;
            $antal = 0;
            $stringToEcho = "<p>För nytt spel tryck på 'Skicka'!</p>";
        }

        /*
            6. Skapa/uppdatera kakorna summa och antal med nya värden och gör dessa tillgänliga en timme.
        */

        setcookie("summa", $summa, time() + 3600);
        setcookie("antal", $antal, time() + 3600);

    }

    if(isset($_POST["rensa"])) {
        /*
            Tabort kakorna från klienten och kakans värde/index på servern.
        */
        setcookie("summa", "", time() - 3600);
        setcookie("antal", "", time() - 3600);

        //För att tabort värdet på servern är ett tips unset()
        //Kanske lite överkurs eftersom summa och antal i $_COOKIE kommer att tas bort när skriptet har exekverat klart.
        unset($_COOKIE["summa"]);
        unset($_COOKIE["antal"]);


    }
?>  
<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>PHP F9 - kakor</title>
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
            <h1>PHP F9 - Först till 100 med kakor</h1>
        </header>

        <main>    

            <?php echo($stringToEcho); ?>

            <form action="<?php echo($_SERVER["PHP_SELF"]); ?>" method="post">
                <input type="submit" name="skicka" value="Skicka" />
                <input type="submit" name="rensa" value="Rensa" />
            </form>

        </main>

    </body>

</html>