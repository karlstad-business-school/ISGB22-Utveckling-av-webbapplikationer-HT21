<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>PHP W7</title>
    </head>
    <body>
        <main>
            <?php 

                //Skapa databasen car (samma databas som i F7)

                //INSERT, UPDATE, DELETE och SELECT -> CRUD

                //A
                //1. Koppla upp PHP-applikationen med databasen car. Ange de värden som behövs.
                //2. Skapa variablerna fabrikat, modell, regnr och farg och tilldela dessa testdata.
                //3. Skapa varibeln $sql som du tilldelar en insert-instruktion och använder namngivna behållare.
                //4. Preparera frågan.
                //5. Exekvera frågan.
                //6. På valfritt sätt lista innehållet i tabellen cars.
                //7. Frigör minnet och stäng ner databaskopplingen.

                $dns = "mysql:host=localhost;dbname=car;charset=utf8";
                $userName = "root";
                $password = "";
    
                $dbh = new PDO($dns, $userName, $password);

                $fabrikat = "Volvo";
                $modell = "XC90";
                $regnr = "MMM890";
                $farg = "#0000ff";
    
                //Skapa frågan
                $sql = "INSERT INTO cars(fabrikat, modell, regnr, farg) VALUES(:fabrikat, :modell, :regnr, :farg);";
    
                //Preparera frågan
                $stmt = $dbh->prepare($sql);
                $stmt->bindValue(":fabrikat", $fabrikat);
                $stmt->bindValue(":modell", $modell);
                $stmt->bindValue(":regnr", $regnr);
                $stmt->bindValue(":farg", $farg);

                //Exekvera frågan mot db
                $stmt->execute();

                //Lista på valfritt sätt
                $sql = "SELECT * FROM cars;";
                $stmt = $dbh->prepare($sql);
                $stmt->execute();
    
                //Visa data som vi fick i retur från databasen
                echo("<h2>Alla bilar i databasen!</h2>");
    
                while( $row = $stmt->fetch() ) {
    
                    $id = $row["id"];
                    $fabrikat = $row["fabrikat"];
                    $modell = $row["modell"];
                    $regnr = $row["regnr"];
                    $farg = $row["farg"];
    
                    echo("<p style=\"background: $farg\">id: $id, fabrikat: $fabrikat, modell: $modell, regnr: $regnr</p>") . PHP_EOL;
    
                }
    
                //Frigör minnet för returen från frågan och stäng ner kopplingen
                $stmt = null;
                $dbh = null;


                //B
                //1. Koppla upp PHP-applikationen med databasen car. Ange de värden som behövs.
                //2. Skapa variablerna fabrikat, modell, regnr och farg och tilldela dessa testdata.
                //3. Skapa varibeln id och tilldela den ett värde som finns i databasen (primärnyckel för cars).
                //4. Skapa varibeln $sql som du tilldelar en update-instruktion och använder namngivna behållare.
                //5. Preparera frågan.
                //6. Exekvera frågan.
                //7. På valfritt sätt lista innehållet i tabellen cars.
                //8. Frigör minnet och stäng ner databaskopplingen.

                
                $dns = "mysql:host=localhost;dbname=car;charset=utf8";
                $userName = "root";
                $password = "";
    
                $dbh = new PDO($dns, $userName, $password);

                $fabrikat = "Saab";
                $modell = "900";
                $regnr = "MMM890";
                $farg = "#00ff00";
                $id = 32;
    
                //Skapa frågan
                $sql = "UPDATE cars SET fabrikat = :fabrikat, modell = :modell, regnr = :regnr, farg = :farg";
                $sql .= " WHERE id = :id;";
    
                //Preparera frågan
                $stmt = $dbh->prepare($sql);
                $stmt->bindValue(":fabrikat", $fabrikat);
                $stmt->bindValue(":modell", $modell);
                $stmt->bindValue(":regnr", $regnr);
                $stmt->bindValue(":farg", $farg);
                $stmt->bindValue(":id", $id);

                //Exekvera frågan mot db
                $stmt->execute();

                //Lista på valfritt sätt
                $sql = "SELECT * FROM cars;";
                $stmt = $dbh->prepare($sql);
                $stmt->execute();
    
                //Visa data som vi fick i retur från databasen
                echo("<h2>Alla bilar i databasen!</h2>");
    
                while( $row = $stmt->fetch() ) {
    
                    $id = $row["id"];
                    $fabrikat = $row["fabrikat"];
                    $modell = $row["modell"];
                    $regnr = $row["regnr"];
                    $farg = $row["farg"];
    
                    echo("<p style=\"background: $farg\">id: $id, fabrikat: $fabrikat, modell: $modell, regnr: $regnr</p>") . PHP_EOL;
    
                }
    
                //Frigör minnet för returen från frågan och stäng ner kopplingen
                $stmt = null;
                $dbh = null;

                //C
                //1. Koppla upp PHP-applikationen med databasen car. Ange de värden som behövs.
                //2. Skapa varibeln id och tilldela den ett värde som finns i databasen (primärnyckel för cars).
                //3. Skapa varibeln $sql som du tilldelar en delete-instruktion och använder namngiven behållare.
                //4. Preparera frågan.
                //5. Exekvera frågan.
                //6. På valfritt sätt lista innehållet i tabellen cars.
                //7. Frigör minnet och stäng ner databaskopplingen.

                 
                $dns = "mysql:host=localhost;dbname=car;charset=utf8";
                $userName = "root";
                $password = "";
    
                $dbh = new PDO($dns, $userName, $password);
                $id = 32;
    
                //Skapa frågan
                $sql = "DELETE FROM cars WHERE id = :id;";
    
                //Preparera frågan
                $stmt = $dbh->prepare($sql);
                $stmt->bindValue(":id", $id);

                //Exekvera frågan mot db
                $stmt->execute();

                //Lista på valfritt sätt
                $sql = "SELECT * FROM cars;";
                $stmt = $dbh->prepare($sql);
                $stmt->execute();
    
                //Visa data som vi fick i retur från databasen
                echo("<h2>Alla bilar i databasen!</h2>");
    
                while( $row = $stmt->fetch() ) {
    
                    $id = $row["id"];
                    $fabrikat = $row["fabrikat"];
                    $modell = $row["modell"];
                    $regnr = $row["regnr"];
                    $farg = $row["farg"];
    
                    echo("<p style=\"background: $farg\">id: $id, fabrikat: $fabrikat, modell: $modell, regnr: $regnr</p>") . PHP_EOL;
    
                }
    
                //Frigör minnet för returen från frågan och stäng ner kopplingen
                $stmt = null;
                $dbh = null;

            ?>
        </main>
    </body>
</html>