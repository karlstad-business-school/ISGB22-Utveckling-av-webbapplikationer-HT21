'use strict';

let oGameData = {
    timerId : null,
    antalSpoken : 0,
    antalKlickadSpoken : 0,
    missadeSpoken : 0, 
    imgPositions : null, //Nytt
    imgHeight : 211, //Nytt
    imgWidth : 400 //Nytt
};

function gameOver() {
    clearInterval(oGameData.timerId);
    console.log('Antalet spöken var', oGameData.antalSpoken, ' och du tog ', oGameData.antalKlickadSpoken);

    let imgRefs = $('body img');

    imgRefs.each(function() {
        clearTimeout($(this).attr('data-timerid'));
    });


    imgRefs.off('mouseover');
    imgRefs.slideUp('slow', function() {
        imgRefs.remove();
    });
    
    let h3Ref = $('<h3>');
    h3Ref.text('Du fångade ' + oGameData.antalKlickadSpoken + ' och totalt var det ' + oGameData.antalSpoken + ' spöken!');
    h3Ref.prependTo('body');

    oGameData.timerId = null;
    oGameData.antalKlickadSpoken = 0;
    oGameData.antalSpoken = 0;
    oGameData.missadeSpoken = 0;

    oGameData.imgPositions = null; //Nytt

}

$(document).ready(function() {
    console.log('ready');

    $(document).on('keydown', function(e) {
        console.log('keydown');

        if((e.key === 'e' || e.key === 'E') && oGameData.timerId !== null ) {
            gameOver();
        }

        if((e.key === 'b' || e.key === 'B') && oGameData.timerId === null) {

             //Observera att exemplet använder XAMPP-stacken och anropar ett PHP-script som returnerar ett objekt med 
            //30 nästlade objekt.

            /*
                A.
                1. Med .ajax()-metoden anropa filen, ajax/koordinater.php, med POST-metoden. Det du förväntas få i retur är json och
                anropet får ta max 2 sekunder. Till servern skall du skicka docHeight som innehåller dokumentets höjd, docWidth som innehåller
                dokumentets bredden, imgHeight som innehåller höjden på bilden du utgår från samt imgWidth som innehåller bredden för bilden
                du utgår från.

                2. Om .ajax() anropet går bra skall du till konsolen skriva ut 'done' och till imgPositions (som finns i det globala objektet)
                tilldela returdata från servern. Du skall också flytta koden så att timer:n bara börjar vid ett done!

                3. Om .ajax() anropet inte går bra skall du istället till konsolen skriva ut 'fail'.
            */

           $('body h3').remove();

            oGameData.timerId = setInterval(function() {

                let imgRef = $('<img>');

                imgRef.attr('alt', 'Detta är en bild på ett spöke!');
                imgRef.attr('src', 'https://openclipart.org/image/400px/svg_to_png/83359/fantomme.png');

                imgRef.width('400px');
                imgRef.height('211px');

                //Nytt
                /*
                    B. 
                    1. Skapa variablerna width, height, left och top.

                    2. Till width-variabeln tilldela värdet som finns i width-egenskapen för aktuellt objekt i oGameData.imgPositions. 
                    Aktuellt objekt är oGameData.totalGhosts och eftersom du kan behandla imgPostions som en "vektor" kan du använda 
                    något i stil med globaltObjekt.objekt_med_egenskaper[globaltObjekt.egenskap_för_totalt_antal_spöken].egenskap;

                    3. Till height-variabeln tilldela värdet som finns i height-egenskapen för aktuellt objekt i oGameData.imgPositions. 
                    Aktuellt objekt är oGameData.totalGhosts och eftersom du kan behandla imgPostions som en "vektor" kan du använda 
                    något i stil med globaltObjekt.objekt_med_egenskaper[globaltObjekt.egenskap_för_totalt_antal_spöken].egenskap;

                    4. Till left-variabeln tilldela värdet som finns i left-egenskapen för aktuellt objekt i oGameData.imgPositions. 
                    Aktuellt objekt är oGameData.totalGhosts och eftersom du kan behandla imgPostions som en "vektor" kan du använda 
                    något i stil med globaltObjekt.objekt_med_egenskaper[globaltObjekt.egenskap_för_totalt_antal_spöken].egenskap;

                    5. Till top-variabeln tilldela värdet som finns i top-egenskapen för aktuellt objekt i oGameData.imgPositions. 
                    Aktuellt objekt är oGameData.totalGhosts och eftersom du kan behandla imgPostions som en "vektor" kan du använda 
                    något i stil med globaltObjekt.objekt_med_egenskaper[globaltObjekt.egenskap_för_totalt_antal_spöken].egenskap;
                */

                let width = imgRef.width() - Math.round( imgRef.width() / 25) * oGameData.antalSpoken;
                let height = imgRef.height() - Math.round( imgRef.height() / 25) * oGameData.antalSpoken;
                
                let top = Math.round( Math.random() * ($(document).height() - height ) ) + 1;
                let left = Math.round( Math.random() * ($(document).width() - width ) ) + 1;

    
                imgRef.css('position',  'absolute');
                imgRef.css('left', left + 'px');
                imgRef.css('top', top + 'px');
                
                imgRef.css({'height' : height + 'px'})
                imgRef.css({'width' : width + 'px'})
                

                console.log(height, width);

                imgRef.css({'z-index' : oGameData.antalSpoken, 'cursor' : 'crosshair'});    

                imgRef.on('mouseover', function(e) {
                    oGameData.antalKlickadSpoken++;
                    clearTimeout($(this).attr('data-timerid'));

                    $(this).off('mouseover');
                    $(this).fadeOut('slow', function() {
                        $(this).remove();
                    });    
                    
                });

                let timerId = setTimeout(function() {
                    console.log('imgRef.remove()', Date.now())
                    oGameData.missadeSpoken++;
                    clearTimeout(imgRef.attr('data-timerid'));


                    imgRef.animate({'left' : $(document).width(), 'top' : $(document).height()},
                    1000, 'linear', function() {
                         imgRef.remove();
                    });    
                   

                    if(oGameData.missadeSpoken === 3) {
                        console.log('Game Over!');
                        gameOver();
                    }

                }, 3000 - (oGameData.antalSpoken * 100));

                imgRef.attr('data-timerid', timerId);
                imgRef.appendTo('body');
                
                oGameData.antalSpoken++;

            }, 1000 - (oGameData.antalSpoken * 10));
        }
    });
});