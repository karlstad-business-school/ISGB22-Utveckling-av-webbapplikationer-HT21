<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>PHP F7</title>
    </head>
    <body>
        <main>
            <?php 
            
            //Exempel för att skapa databasen i phpMyAdmin
                
            //Kodexempel med databaskoppling och select utan villkor
            $dns = "mysql:host=localhost;dbname=bil;charset=utf8";
            $username = "root";
            $password = "";

            //Koppla upp mot DBHS mot given DB med användare och lösenord
            $dbh = new PDO($dns, $username, $password);
            
            echo("<p>Japp det fungerar!</p>");
            
            //Skapa en SQL-sats och observera att den är utan villkor!
            //$sql = "SELECT * FROM cars;";

            $sql = "SELECT * FROM cars WHERE fabrikat = :fabrikat AND farg != :farg;";

            $stmt = $dbh->prepare($sql);
            
            $stmt->bindValue(":fabrikat", "Kia");
            $stmt->bindValue(":farg", "#000000");

            $stmt->execute();

            //Detta är bara för test och felsökning!
            
            //$table = $stmt->fetchAll();
            /*
            echo("<pre>");
            print_r($table);
            echo("</pre>");
            */

            /*
            foreach($table as $row) {
                echo($row["id"] . " " . $row["fabrikat"]);
            }
            */

            echo("<pre>");
            while($row = $stmt->fetch()) {
                //print_r($row);
                //echo($row[0] . " " . $row["mil"]);

                echo("<p>id: " . $row["id"] . "</p>");
            }
            echo("</pre>");



            $stmt = null;
            //Stäng ner kopplingen mot DBHS...
            $dbh = null;

            //Kodexempel med databaskoppling och select med villkor

            ?>
        </main>
    </body>
</html>