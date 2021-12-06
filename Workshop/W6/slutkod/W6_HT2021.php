<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>PHP W6</title>

        <!-- 9. -->
        <style>
            img { height: 20%; widht: 20%; }
        </style>
    </head>

    <body>

        <main>    
            <?php

                /*
                    Bilder på tärningar (1-6):

                    <img src="https://openclipart.org/download/282132/Die6.svg" />
                    <img src="https://openclipart.org/download/282131/Die5.svg" />
                    <img src="https://openclipart.org/download/282130/Die4.svg" />
                    <img src="https://openclipart.org/download/282129/Die3.svg" />
                    <img src="https://openclipart.org/download/282128/Die2.svg" />
                    <img src="https://openclipart.org/download/282127/Die1.svg" />
                    
                    1. Slumpa ett tal mellan 1 och 6 och skriv ut resultatet.
                    */

                    $slumptal = rand(1,6);

                    echo($slumptal);
                    echo(rand(1,6));

                /*
                        se rand() funktionen på https://www.php.net/manual/en/function.rand.php
                    2. Skriv ut resultatet från punkt 1 i ett p-element.

                    */
                    echo("<p>$slumptal</p>");
                    echo("<p>" . rand(1,6) . "</p>");

                    /*
                    3. Med iteration (for) slumpa 6 tal mellan 1 och 6 och skriv ut resultatet.

                    */

                    //echo("<img src=\"https://openclipart.org/download/282127/Die1.svg\" />");
                    //echo("<img src='https://openclipart.org/download/282127/Die1.svg' />");

                    for($i = 1; $i <= 6; $i++) {
                        echo(rand(1,6) .PHP_EOL);
                    }

                    /*
                    4. Skriv ut resultatet från punkt 3 i ett div-element och varje framslumpat tal i 
                        ett eget p-element.

                    */
                    echo("<div>");
                    for($i = 1; $i <= 6; $i++) {
                        echo("<p>" . rand(1,6) . "</p>" . PHP_EOL);
                    }
                    echo("</div>");

                    $element = "<div>";
                    for($i = 1; $i <= 6; $i++) {
                        $element .= "<p>" . rand(1,6) . "</p>" . PHP_EOL;
                    }
                    $element .= "</div>";
                    echo($element);

                    /*
                    5. Summera alla framslumpade tal och skriv ut summan i ett eget p-element.
                     
                    */
                    $sum = 0;
                    $rnd = 0;
                    $element = "<div><p>Text...</p>";
                    for($i = 1; $i <= 6; $i++) {
                        $rnd = rand(1,6);
                        $sum += $rnd;
                        $element .= "<p>" . $rnd. "</p>" . PHP_EOL;
                    }
                    $element .= "</div>";
                    $element .= "<p>" . $sum . "</p>";
                    echo($element);


                    /*
                    6. För varje framslupat tal mellan 1 och 6 skriv ut ett img-element som pekar
                        (använd src-attributet) på en bild som matchar en tärning (se ovan).

                    */


                    define("IMG", "<img src='https://openclipart.org/download/2821");

                    for($i = 1; $i < 6; $i++) {
                        $rnd = rand(1,6);
                        echo(IMG . (26 + $rnd) . "/Die" . $rnd .".svg' />" . PHP_EOL);
                    }

                    //Pröva med if- och/eller switch för att avgöra vilken bild som ni
                    //skall skriva ut img-elementet och src för!

                    /*
                    7. Om tid finns! Skapa använd instruktionerna ovan för img-element och skapa en vektor där varje img-element
                        finns i ett eget index. Revidera sedan punkt 6 och använd vektorn och ett framslupat värde (=vektorindex)
                        för att skriva ut img-element instruktionerna.
                    8. Gör om punkt 3 och 4 med med while och do while iteration.
                    9. Använd CSS för att minska bilderna till en storlek där alla tre tärningar visas på samma rad.
                    10. Lägg till alt-attributet för bilderna och validera sedan er kod.
                */

            ?>
               
        </main>

    </body>

</html>