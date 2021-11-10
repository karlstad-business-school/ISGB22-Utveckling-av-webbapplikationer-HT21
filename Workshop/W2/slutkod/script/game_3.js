'use strict';

let oGameData = {
    timerId : null,
    antalSpoken : 0,
    antalKlickadSpoken : 0,
    missadeSpoken : 0, //Steg 4
    imgTimers : null //Steg 7
};

function gameOver() { //Steg 7
    clearInterval(oGameData.timerId);
    console.log('Antalet spöken var', oGameData.antalSpoken, ' och du tog ', oGameData.antalKlickadSpoken);

    oGameData.timerId = null;
    oGameData.antalKlickadSpoken = 0;
    oGameData.antalSpoken = 0;
    oGameData.missadeSpoken = 0; //Steg 4
     
    /*
    let imgRefs = document.querySelectorAll('img');

    for(let i = 0; i < imgRefs.length; i++) {
        imgRefs.item(i).remove();
    }
    */

    $('body img').remove();
    
    //Steg 7
    oGameData.imgTimers.forEach(function(data) {
        console.log(data.timerId);
        oGameData.imgTimers.delete(data.timerId);
        clearTimeout(data.timerId);
    });
    
    oGameData.imgTimers = null;
}

//addEventListener('load', function() {
$(document).ready(function() {
    console.log('ready');

    //document.addEventListener('keydown', function(e) {
    $(document).on('keydown', function(e) {
        console.log('keydown');

        //Extra villkor för att tabort buggar!
        if((e.key === 'e' || e.key === 'E') && oGameData.timerId !== null ) {
            gameOver();
        }

        //Extra villkor för att tabort buggar!
        if((e.key === 'b' || e.key === 'B') && oGameData.timerId === null) {

            oGameData.imgTimers = new Map(); //Steg 7

            oGameData.timerId = setInterval(function() {

                let imgRef = $('<img>');
                //let imgRef = document.createElement('img');

                imgRef.attr('alt', 'Detta är en bild på ett spöke!');
                imgRef.attr('src', 'https://openclipart.org/image/400px/svg_to_png/83359/fantomme.png');
                //imgRef.attr({});

                //För att undvika buggen med imgRef.height() och imgRef.width()
                imgRef.width('400px');
                imgRef.height('211px');

                //imgRef.setAttribute('alt', 'Detta är en bild på ett spöke!');
                //imgRef.setAttribute('src', 'https://openclipart.org/image/400px/svg_to_png/83359/fantomme.png');

                //Steg 6
                let top = Math.round( Math.random() * ($(document).height() - imgRef.height() ) )+ 1;
                let left = Math.round( Math.random() * ($(document).width() - imgRef.width() ) ) + 1;
                //let top = Math.round( Math.random() * screen.height ) + 1;
                //let left = Math.round( Math.random() * screen.width ) + 1;
        
                imgRef.css('position',  'absolute');
                imgRef.css('left', left + 'px');
                imgRef.css('top', top + 'px');
                imgRef.css('width',  '15%');
                imgRef.css('height', '15%');
                //imgRef.css({});
                /*
                imgRef.style.position = 'absolute';
                imgRef.style.left = left + 'px';
                imgRef.style.top = top + 'px';
                imgRef.style.width = '15%';
                imgRef.style.height = '15%';
                */

                imgRef.on('mouseover', function(e) { //Steg 2
                    oGameData.antalKlickadSpoken++;
                    clearTimeout(imgRef.timerId);
                    oGameData.imgTimers.delete(imgRef.timerId);
                    $(this).remove();
                });

                //Utöka imgRef-objektet med ett nytt attribut som innehåller timer id.
                //Steg 3, 4 och 7 (dock inte hela lösingen).
                imgRef.timerId = setTimeout(function() {
                    console.log('imgRef.remove()', Date.now())
                    oGameData.missadeSpoken++;
                    oGameData.imgTimers.delete(imgRef.timerId); //Steg 7
                    imgRef.remove();

                    //Steg 5
                    if(oGameData.missadeSpoken === 3) {
                        console.log('Game Over!');
                        gameOver(); //Steg 7
                    }

                }, 3000);

                /*
                imgRef.addEventListener('click', function(e) {
                    console.log(e.target, e.currentTarget, this);
                    this.remove();
                    //this.style.display = 'none';
                    oGameData.antalKlickadSpoken++;
                });
                */
                imgRef.appendTo('body');
                //document.querySelector('body').appendChild(imgRef);
                
                oGameData.antalSpoken++;
                oGameData.imgTimers.set(imgRef.timerId, imgRef); //Steg 7

            }, 1000);
        }
    });


});