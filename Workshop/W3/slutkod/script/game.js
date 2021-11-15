'use strict';

let oGameData = {
    timerId : null,
    antalSpoken : 0,
    antalKlickadSpoken : 0,
    missadeSpoken : 0, 
};

function gameOver() {
    clearInterval(oGameData.timerId);
    console.log('Antalet spöken var', oGameData.antalSpoken, ' och du tog ', oGameData.antalKlickadSpoken);

    let imgRefs = $('body img');

    imgRefs.each(function() {
        clearTimeout($(this).attr('data-timerid'));
    });

    /*
        1.
        Alla bildelement skall vid Game Over sakta "försvinna uppåt" och först när animeringen har exekverat klart
        skall alla bildelement tas bort från DOM:en.

        Vad händer om för pekaren fram och tillbaka över bildelementet under tiden det "försvinner uppåt"?
        Hur löser du den buggen?

    */
    imgRefs.off('mouseover');
    imgRefs.slideUp('slow', function() {
        imgRefs.remove();
    });
    

    oGameData.timerId = null;
    oGameData.antalKlickadSpoken = 0;
    oGameData.antalSpoken = 0;
    oGameData.missadeSpoken = 0;

    /*
        2.
        Skapa ett nytt h3-element och placera sedan följande text i det nya h3-elementet:
        'Du fångade ' + oGameData.antalKlickadSpoken + ' och totalt var det ' + oGameData.antalSpoken + ' spöken!'.
        Avsluta med att placera det nya h3-elementet först innanför body-elemetet.
    */

    let h3Ref = $('<h3>');
    h3Ref.text('Du fångade ' + oGameData.antalKlickadSpoken + ' och totalt var det ' + oGameData.antalSpoken + ' spöken!');
    h3Ref.prependTo('body');


}

$(document).ready(function() {
    console.log('ready');

    $(document).on('keydown', function(e) {
        console.log('keydown');

        if((e.key === 'e' || e.key === 'E') && oGameData.timerId !== null ) {
            gameOver();
        }

        if((e.key === 'b' || e.key === 'B') && oGameData.timerId === null) {

            /*
                3.
                Från DOM:en ta bort det h3-elementet som eventuellt finns i body-elementet.
            */
           $('body h3').remove();

            oGameData.timerId = setInterval(function() {

                let imgRef = $('<img>');

                imgRef.attr('alt', 'Detta är en bild på ett spöke!');
                imgRef.attr('src', 'https://openclipart.org/image/400px/svg_to_png/83359/fantomme.png');

                imgRef.width('400px');
                imgRef.height('211px');

                /*
                    Högre svårighetsgrad på denna utmaningen!
                    Ändra så att bildens height och width egenskaper minskar för varje nytt bildelement som skapas.
                    Se också till att bilden inte kan hamna utanför skärmens yta (alltså tillåts inga scrollbars).

                    Dela upp detta i flera delar:
                    a) Räkna ut de nya värdena för height och width.
                    b) Räkna ut de nya värdena för top och left.
                    c) Ändra css-egenskaperna width och height och ändra enheten till px istället för %.
                */

                let width = imgRef.width() - Math.round( imgRef.width() / 25) * oGameData.antalSpoken;
                let height = imgRef.height() - Math.round( imgRef.height() / 25) * oGameData.antalSpoken;
                
                let top = Math.round( Math.random() * ($(document).height() - height ) ) + 1;
                let left = Math.round( Math.random() * ($(document).width() - width ) ) + 1;

                //let top = Math.round( Math.random() * ($(document).height() - imgRef.height() ) ) + 1;
                //let left = Math.round( Math.random() * ($(document).width() - imgRef.width() ) ) + 1;
            
                imgRef.css('position',  'absolute');
                imgRef.css('left', left + 'px');
                imgRef.css('top', top + 'px');
                //imgRef.css('width',  '15%');
                //imgRef.css('height', '15%');
                
                imgRef.css({'height' : height + 'px'})
                imgRef.css({'width' : width + 'px'})
                

                console.log(height, width);

                /*
                    4.
                    Ändra så att senaste skapade bild-elementet hamnar framför alla andra bilder som kan tänkas finnas inom
                    samma koordinater som det nya bildelementet. Ändra också så att pekarsymbolen blir kors när pekaren finns 
                    över det nya bildelementet.
                */

                imgRef.css({'z-index' : oGameData.antalSpoken, 'cursor' : 'crosshair'});    

                imgRef.on('mouseover', function(e) {
                    oGameData.antalKlickadSpoken++;
                    clearTimeout($(this).attr('data-timerid'));

                    /*
                        5.
                        Aktuellt bildelement skall sakta "försvinna" och först när animeringen har exekverat klart
                        bildelementet tas bort från DOM:en.

                        Vad händer om för pekaren fram och tillbaka över bildelementet under tiden det "försvinner"?
                        Hur löser du den buggen?
                    */
                    $(this).off('mouseover');
                    $(this).fadeOut('slow', function() {
                        $(this).remove();
                    });    
                    
                });

                let timerId = setTimeout(function() {
                    console.log('imgRef.remove()', Date.now())
                    oGameData.missadeSpoken++;
                    clearTimeout(imgRef.attr('data-timerid'));

                    /*
                        6.
                        Aktuellt bildelement som timern är knuten till skall på en sekund förflyttas genom en animering till
                        skärmens högra hörn. När animeringen har exekverat klart skall bilden tas bort från DOM:en.

                        Vad händer om för pekaren fram och tillbaka över bildelementet under tiden det animeras?
                        Hur löser du den buggen?

                    */

                    imgRef.animate({'left' : $(document).width(), 'top' : $(document).height()},
                    1000, 'linear', function() {
                         imgRef.remove();
                    });    
                   

                    if(oGameData.missadeSpoken === 3) {
                        console.log('Game Over!');
                        gameOver();
                    }

                /*
                    Högre svårighetsgrad på denna utmaningen!
                    Ändra så att bildelementets tid det visas blir kortare för varje nytt bildelement som skapas.
                */

               //}, 3000);
                }, 3000 - (oGameData.antalSpoken * 100));

                imgRef.attr('data-timerid', timerId);
                imgRef.appendTo('body');
                
                oGameData.antalSpoken++;

                /*
                    Högre svårighetsgrad på denna utmaningen!
                    Ändra så att intervallen mellan bildelementen blir kortare för varje nytt bildelement som skapas.
                */
            //}, 1000);
            }, 1000 - (oGameData.antalSpoken * 10));
        }
    });


});