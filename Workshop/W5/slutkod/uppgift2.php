<?php
    header ("Content-Type", 'application/json');

    if(isset($_POST['btnSkicka'])){

        if (strlen (trim( $_POST["txtNamn"])) === 0){
            echo("Ange namn!");
        
        }else{
        
            if( !isset ($_POST["chkBoxGDPR"])){
                echo("Acceptera GDPR");
        
            }else{
                $namn = $_POST["txtNamn"];
                $gdpr = $_POST["chkBoxGDPR"];
                $json = array ("namn" => $namn, "gdpr" => $gdpr);
                echo (json_encode ($json));
            }
        }
    }
