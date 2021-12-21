<?php
    function dbConnect() {
        try {
            $dns = "mysql:dbname=test;host=localhost";
            $user = "root";
            $password = "";
            $options = array( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
            $db = new PDO($dns, $user, $password, $options);
            return $db;
        } catch( PDOException $e ) {
            throw $e;
        }
    }

?>  
<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>PHP F10 - Sessioner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <style> 
            * {
                box-sizing: border-box;

            }

            main {
                width:15%;
                min-width: 400px;
                max-width: 100%;
                border:solid 1px gray;
                margin: 0 auto;
                padding: 15px;
            }
        </style>
    </head>

    <body class="container p-2">
        <header class="jumbotron text-center">
            <h1>Visa epost</h1>
        </header>

        <main>    

            <?php

                session_start();
                if($_SESSION["inloggad"]!="japp!") {
                    header("Location: kodexempel-2-3-4.php");
                    die();
                }
                else {
                    
                    try {

                        $dbh = dbConnect();
                        $sql = "SELECT epost FROM tblusers WHERE id=:id;";
                        $stmt = $dbh->prepare($sql);
                        $stmt->bindValue(":id", $_SESSION["id"]);
                        $stmt->execute();
                        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

                        if(count($data)<1) {
                            throw new Exception("Hittade ingen epost");
                        }

                        $epost = openssl_decrypt($data[0]["epost"], "AES-128-ECB", "valfristrang1234");

                        echo("<h5>Din epost är: " . $epost . "</h5>");

                        $data=null;
                        $stmt = null;
                        $dbh = null;

                    }
                    catch(Exception $ex) {
                        //Skriv ut fel...
                    }

                }
    
            ?>



        </main>

    </body>

</html>