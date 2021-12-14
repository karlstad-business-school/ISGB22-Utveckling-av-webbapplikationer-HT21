<?php

    define("IMG", "<img src='https://openclipart.org/download/2821");

    $summa = 0;
    $antal = 0;
    $stringToEcho = "";

    if( isset( $_POST["skicka"] ) ) {

        /*
            Utgå från lösningen i cookies.php och översätt den till att istället använda sessioner.
        */
        
        //OBSERVERA alltid först när ni vill använda sessioner --> session_start()

        session_start();

        //Fortfarande isset() för att kontrollera om en varibel/index i array existerar och har ett värde!
        if(isset($_SESSION["summa"]) && isset($_SESSION["antal"])) {
            $antal = $_SESSION["antal"];
            $summa = $_SESSION["summa"];
        }

        for($i = 1; $i <= 6; $i++) {
            $slumptal = rand(1, 6);
            $stringToEcho .= IMG . (26 + $slumptal) 
                . "/Die" . $slumptal 
                . ".svg' alt='Tärning " . $slumptal 
                . "' />" . PHP_EOL;
            $summa += $slumptal;
        }

        $antal++;

        $stringToEcho .= "<p>Summan blev $summa!</p>";
        $stringToEcho .= "<p>Antalet gånger du kastat de 6 tärningarna är $antal!</p>";


        if($summa >= 100) {
            $summa = 0;
            $antal = 0;
            $stringToEcho .= "<p>För nytt spel tryck på 'Skicka'!</p>";
        }

        $_SESSION["antal"] = $antal;
        $_SESSION["summa"] = $summa;
    }

    if(isset($_POST["rensa"])) {

        session_start();

        if(session_status() === PHP_SESSION_ACTIVE) {

            $_SESSION = array();

            if ( ini_get( "session.use_cookies" ) ) {
            
                $sessionCookieData = session_get_cookie_params();
                
                $path = $sessionCookieData["path"];
                $domain = $sessionCookieData["domain"];
                $secure = $sessionCookieData["secure"];
                $httponly = $sessionCookieData["httponly"];
                
                setcookie( session_name(), "", time() - 3600, $path, $domain, $secure, $httponly );
            }

            session_destroy();
        }
    }
?>  
<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>PHP F9 - Sessioner</title>
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
            <h1>PHP F9 - Först till 100 med sessioner</h1>
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