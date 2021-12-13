<?php

    define("IMG", "<img src='https://openclipart.org/download/2821");

    $summa = 0;
    $antal = 0;
    $stringToEcho = "";

    if( isset( $_POST["skicka"] ) ) {

        /*
            I följande workshop skall du fortsätta jobba med tärningar och mellan varje gång webbapplikationen
            anropas spara antalet gånger du kastat de 6 tärningarna och dess totala summa.

            När summan är större eller lika med 100 är spelet över.
        */

        /*
            1. Kontrollera om kakorna summa och antal finns på servern och om så är fallet
            tilldela dess värden till variablerna summa och antal.

            2. Slumpa 6 tal mellan 1 och 6 och öka på $summa i iteratine samt använd strängkonkatenering
            för att till stringToEcho lägga till HTML-instruktioner som skapar bilder.

            3. Öka antal med ett.

            4. Använd strängkonkatentering och till stringToEcho lägg till texten om hur stor summan är samt
            hur många gånger tärningarna har kastats.

            5. Kontrollera om summan är större eller lika med 100 och om så är fallet nollställ summa och antal samt 
            använd strängkonkatenering och till stringToEcho lägg till För nytt spel tryck på Skicka!.

            6. Skapa/uppdatera kakorna summa och antal med nya värden och gör dessa tillgänliga en timme.

        */

    }

    if(isset($_POST["rensa"])) {
        /*
            Tabort kakorna från klienten och kakans värde/index på servern.
        */
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