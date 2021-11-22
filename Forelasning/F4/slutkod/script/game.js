'use strict';

let oGameData = {

    createImgElements : function() {

        console.log('createImgElements()');
        
        const PATH = 'https://openclipart.org/download/2821';

        let mainRef = $('main');
        let imgRef = null;
        
        for(let i = 1; i <= 6; i++) {

            imgRef = $('<img>');
            imgRef.attr({'alt' : 'Dice_' + i, 'src' : PATH + (i + 26) + '/Die' + i + '.svg' });
            imgRef.css({'width' : '10%', 'height' : '10%' });

            imgRef.on('click', function() {
                $(this).animate({'width' : '+=100px', 'height' : '+=100px'}, 1000, 'swing', function() {
                    console.log('Större bild...');
                    $(this).animate({'width' : '-=100px', 'height' : '-=100px'}, 1000, 'swing', function() {
                        console.log('Mindre bild...');
                    });
                });
            });

            imgRef.appendTo(mainRef);

        }

    },

    randomDiceNumbers : function() {

        const PATH = 'https://openclipart.org/download/2821';

        let rndValue = 0;
        let sum = 0;
        let imgRefs = $('body main img');

        imgRefs.each( function() {

            $(this).slideUp( function() {
                rndValue = Math.floor( Math.random() * 6) + 1;
                sum += rndValue;
                $(this).attr({'alt' : 'Dice_' + rndValue, 'src' : PATH + (rndValue + 26) + '/Die' + rndValue + '.svg' });
            }).slideDown();

        });

    }

};

$(document).ready( function() {
    console.log('ready');

    oGameData.createImgElements();

    $(document).on('keydown', function(e) {
        console.log('keydown', e.key);

        if(e.key === 'd' || e.key === 'D') {

            
            //Äldre typen av AJAX och "ren" JavaScript
            /*
            let oXMLHTTP = new XMLHttpRequest();

            oXMLHTTP.onreadystatechange = function() {

                console.log(oXMLHTTP.readyState);

                if(oXMLHTTP.readyState === 4) {
                    if(oXMLHTTP.status === 200) {
                        //Ta hand om inkommande data och gör ngt med DOM:en!
                        console.log('Allt ok');
                    }
                }

            };

            oXMLHTTP.open('GET', 'ajax/fetchDices.php?dice=dice', true);
            oXMLHTTP.send();

            */

            oGameData.randomDiceNumbers();

        }

    });

    window.alert('Tryck d-tangenten för att slumpa nya tärningar!');
});
        

            