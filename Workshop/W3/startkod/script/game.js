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

    imgRefs.remove();

    oGameData.timerId = null;
    oGameData.antalKlickadSpoken = 0;
    oGameData.antalSpoken = 0;
    oGameData.missadeSpoken = 0;
}

$(document).ready(function() {
    console.log('ready');

    $(document).on('keydown', function(e) {
        console.log('keydown');

        if((e.key === 'e' || e.key === 'E') && oGameData.timerId !== null ) {
            gameOver();
        }

        if((e.key === 'b' || e.key === 'B') && oGameData.timerId === null) {

            oGameData.timerId = setInterval(function() {

                let imgRef = $('<img>');

                imgRef.attr('alt', 'Detta är en bild på ett spöke!');
                imgRef.attr('src', 'https://openclipart.org/image/400px/svg_to_png/83359/fantomme.png');

                imgRef.width('400px');
                imgRef.height('211px');

                let top = Math.round( Math.random() * ($(document).height() - imgRef.height() ) ) + 1;
                let left = Math.round( Math.random() * ($(document).width() - imgRef.width() ) ) + 1;
            
                imgRef.css('position',  'absolute');
                imgRef.css('left', left + 'px');
                imgRef.css('top', top + 'px');
                imgRef.css('width',  '15%');
                imgRef.css('height', '15%');

                imgRef.on('mouseover', function(e) {
                    oGameData.antalKlickadSpoken++;
                    clearTimeout($(this).attr('data-timerid'));
                    $(this).remove();
                });

                let timerId = setTimeout(function() {
                    console.log('imgRef.remove()', Date.now())
                    oGameData.missadeSpoken++;
                    clearTimeout(imgRef.attr('data-timerid'));
                    imgRef.remove();

                    if(oGameData.missadeSpoken === 3) {
                        console.log('Game Over!');
                        gameOver();
                    }

                }, 3000);

                imgRef.attr('data-timerid', timerId);
                imgRef.appendTo('body');
                
                oGameData.antalSpoken++;

            }, 1000);
        }
    });


});