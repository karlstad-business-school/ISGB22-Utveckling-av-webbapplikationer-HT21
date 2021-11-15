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

            /*
                Fånga klick-händelsen och animera img-elementet genom att först göra bilden 100 pixalar större på en sekund och därefter
                göra bilden 100 pixlar mindre på en sekund.
            */

            imgRef.appendTo(mainRef);

        }

    },

    randomDiceNumbers : function() {

        const PATH = 'https://openclipart.org/download/2821';

        let rndValue = 0;
        let sum = 0;
        let imgRefs = $('body main img');

        imgRefs.each( function() {

            /*
                Animera aktuellt bildelement (slideUp()), slumpa nya siffror och ändra alt + src attributet för aktuellt 
                och när animeringen har exekverat klart skall en ny animering köras (slideDown()) som visar bilder på de
                nya tärningarna.
            */
            
            rndValue = Math.floor( Math.random() * 6) + 1;
            sum += rndValue;
            $(this).attr({'alt' : 'Dice_' + rndValue, 'src' : PATH + (rndValue + 26) + '/Die' + rndValue + '.svg' });

        });

    }

};

$(document).ready( function() {
    console.log('ready');

    oGameData.createImgElements();

    $(document).on('keydown', function(e) {
        console.log('keydown', e.key);

        if(e.key === 'd' || e.key === 'D') {
            oGameData.randomDiceNumbers();
        }

    });

    window.alert('Tryck d-tangenten för att slumpa nya tärningar!');