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


    imgRefs.off('mouseover');
    imgRefs.slideUp('slow', function() {
        imgRefs.remove();
    });
    

    oGameData.timerId = null;
    oGameData.antalKlickadSpoken = 0;
    oGameData.antalSpoken = 0;
    oGameData.missadeSpoken = 0;


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


           $('body h3').remove();

            oGameData.timerId = setInterval(function() {

                let imgRef = $('<img>');

                imgRef.attr('alt', 'Detta är en bild på ett spöke!');
                imgRef.attr('src', 'https://openclipart.org/image/400px/svg_to_png/83359/fantomme.png');

                imgRef.width('400px');
                imgRef.height('211px');


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