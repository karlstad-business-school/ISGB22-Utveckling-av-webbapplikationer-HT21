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
            <h1>Skapa användare</h1>
        </header>

        <main>    

            <?php
                if (isset($_POST['skicka'])) {

                    //Vettig validering?
                    //Kontrollera dublett på epost
                    //Giltig epost
                    //antal tecken, specialtecken, krav på lösen?
                    // kolla att båda lösen samma

                    try {

                        $hashatlosen = hash("SHA256", $_POST["losen1"]);

                        $krypteradEpost = openssl_encrypt($_POST["epost"], "AES-128-ECB", "valfristrang1234");

                        $dbh = dbConnect();

                        $sql = "INSERT INTO tblusers(epost, losen) VALUES(:epost,:losen);";

                        $stmt = $dbh->prepare($sql);
                        $stmt->bindValue(":epost", $krypteradEpost);
                        $stmt->bindValue(":losen", $hashatlosen);

                        $stmt->execute();

                        $stmt = null;
                        $dbh = null;

                        session_start();
                        $_SESSION["inloggad"] = "japp!";



                    }
                    catch(Exception $ex) {
                        //Gör något vettigt felmeddelande....
                        //echo($ex->getMessage());
                    }





                }
            ?>

            <form action="<?php echo($_SERVER["PHP_SELF"]) ?>" method="POST">
                <div class="form-group">
                    <label for="epost">Ange epost</label><br>
                    <input type="email" id="epost" name="epost" required>    
                </div>
                <div class="form-group">
                    <label for="losen1">Välj lösenord (upprepa två gånger)</label><br>
                    <input type="password" id="losen1" name="losen1" required><br>
                    <input type="password" id="losen2" name="losen2" required>
                </div>
                <input type="submit" name="skicka" value="skicka" class="btn btn-danger">

            </form>

        </main>

    </body>

</html>