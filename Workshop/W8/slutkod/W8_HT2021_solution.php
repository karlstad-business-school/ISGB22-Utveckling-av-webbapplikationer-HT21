<?php
    function checkFormData() { 
            
        try {
            $fabrikat = $_POST["fabrikat"];
            $modell = $_POST["modell"];
            $regnr = $_POST["regnr"];
            $farg = $_POST["farg"];
            $mil = $_POST["mil"];

            if(strlen($fabrikat) === 0) {
                throw new Exception("Fabrikat saknas!");
            } 

            if(strlen($modell) === 0) {
                throw new Exception("Modell saknas!");
            } 

            if(strlen($regnr) === 0) {
                throw new Exception("Regnr saknas!");
            } 

            if(strlen($farg === 0)) {
                throw new Exception("Färg saknas!");
            }

            if($farg === "#ff0000" || $farg === "#00ff00" || $farg === "#0000ff") {
                throw new Exception("Ogiltigt färgval!");
            }

            if(strlen($mil) === 0) {
                throw new Exception("Mil saknas!");
            }

            if(!is_numeric($mil)) {
                throw new Exception("Ogiltigt värde för mil!");
            }

            if($mil < 0) {
                throw new Exception("Mil får inte var mindre än noll!");
            }

            return true;

        } catch(Exception $e) {
            echo("<p>" . $e->getMessage() . "</p>");
            return false;
        }
        
    }

    function addCarToDatabase() {

        try {

            $fabrikat = $_POST["fabrikat"];
            $modell = $_POST["modell"];
            $regnr = $_POST["regnr"];
            $farg = $_POST["farg"];
            $mil = $_POST["mil"];

            $dns = "mysql:host=localhost;dbname=car;charset=utf8";
            $userName = "root";
            $password = "";

            $dbh = new PDO($dns, $userName, $password);
            $sql = "INSERT INTO cars(fabrikat, modell, regnr, farg, mil) VALUES(:fabrikat, :modell, :regnr, :farg, :mil);";

            $stmt = $dbh->prepare($sql);

            $stmt->bindValue(":fabrikat", $fabrikat);
            $stmt->bindValue(":modell", $modell);
            $stmt->bindValue(":regnr", $regnr);
            $stmt->bindValue(":farg", $farg);
            $stmt->bindValue(":mil", $mil);

            $stmt->execute();


        } catch(PDOException $e) {
            echo($e->getMessage());
        } finally {
            $stmt = null;
            $dbh = null;
        }
    }

    function listCarData() {
        try {

            $dns = "mysql:host=localhost;dbname=car;charset=utf8";
            $userName = "root";
            $password = "";

            $dbh = new PDO($dns, $userName, $password);
            $sql = "SELECT * FROM cars;";
            $stmt = $dbh->prepare($sql);
            $stmt->execute();

            echo("<h2>Alla bilar i databasen!</h2>");

            while( $row = $stmt->fetch() ) {

                $id = $row["id"];
                $fabrikat = $row["fabrikat"];
                $modell = $row["modell"];
                $regnr = $row["regnr"];
                $farg = $row["farg"];
                $mil = $row["mil"];

                echo("<p style=\"background: $farg\">id: $id, fabrikat: $fabrikat, modell: $modell, regnr: $regnr, mil: $mil</p>") . PHP_EOL;

            }

        }catch(PDOException $e) {
            echo($e->getMessage());
        } finally {
            $stmt = null;
            $dbh = null;
        }
    }
?>

<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>PHP F8</title>
    </head>
    <body>
        <main>
            <?php 
                
                if(isset($_POST["btnSend"])){
                    
                    if(checkFormData()) {
                        addCarToDatabase();
                    }
                }

                if(isset($_POST["btnShow"])) {
                    listCarData();
                }

            ?>
            <form action="W8_HT2021_solution.php" method="post">
                <input type="text" name="fabrikat" />
                <input type="text" name="modell" />
                <input type="text" name="regnr" />
                <input type="color" name="farg" />
                <input type="mil" name="mil" />
                <input type="submit" name="btnSend" value="Skicka" />
                <input type="submit" name="btnShow" value="Visa alla bilar" />
            </form>
        </main>
    </body>
</html>