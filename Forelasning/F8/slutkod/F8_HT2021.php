<?php

class bil {

    private $fabrikat;
    private $modell;
    private $regnr;
    private $farg;

    public function __construct($infabrikat,$inmodell,$inregnr,$infarg) {

        $this->fabrikat=$infabrikat;
        $this->modell=$inmodell;
        $this->regnr=$inregnr;
        $this->farg=$infarg;
    }

    public function skrivBilData() {
        echo($this->fabrikat . ", " . $this->modell);
    }

}

function checkFormData() {
    if(isset($_POST["btnSend"])) {
        //Det är ett POST-anrop!
        $fabrikat = $_POST["fabrikat"];
        $modell = $_POST["modell"];
        $regnr = $_POST["regnr"];
        $farg = $_POST["farg"];

        if(strlen($fabrikat)===0) {
            echo("Du har inte fyllt i fabrikat!!!!");
            return false;
        }
        if(strlen($modell)===0) {
            echo("Du har inte fyllt i modell!!!!");
            return false;
        }

        try {

            $dns="mysql:host=localhost;dbname=bil;charset=utf8";
            $userName="root";
            $password="";

            $dbhOptions=array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION );

            $dbh = new PDO($dns,$userName, $password, $dbhOptions);

            $sql = "INSERT INTO cars(fabrikat, modell, regnr, farg) VALUES(:fabrikat,:modell,:regnr,:farg);";

            $stmt = $dbh->prepare($sql);
            $stmt->bindValue(":fabrikat", $fabrikat);
            $stmt->bindValue(":modell", $modell);
            $stmt->bindValue(":regnr",$regnr);
            $stmt->bindValue(":farg", $farg);

            $stmt->execute();

            $stmt = null;
            $dbh = null;

            echo("Bildata sparade...");



        }
        catch(PDOException $e) {
            echo($e->getMessage());
        }






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
    $dns="mysql:host=localhost;dbname=bil;charset=utf8";
    $userName="root";
    $password="";

    $dbhOptions=array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION );

    $dbh = new PDO($dns,$userName, $password, $dbhOptions);

    $sql = "SELECT * FROM cars";

    $stmt = $dbh->prepare($sql);
    $stmt->execute();

    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach($data as $row) {

        foreach($row as $col) {
            echo($col . "<br>"); 
        }
        echo("<hr>");
    }

    $stmt = null;
    $dbh=null;
           
    $bil = new bil("Volvo","V90", "ABC321", "#ffffff");

    $bil->skrivBilData();

    checkFormData();


            ?>
			
            <form action="F8_HT2021.php" method="post">
                <input type="text" name="fabrikat" />
                <input type="text" name="modell" />
                <input type="text" name="regnr" />
                <input type="color" name="farg" />
                <input type="submit" name="btnSend" value="Skicka" />
            </form>
			
        </main>
    </body>
</html>