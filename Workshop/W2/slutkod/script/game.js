'use strict';

let oGameData = {
    timerId : null,
    antalSpoken : 0,
    antalKlickadSpoken : 0
};


//addEventListener('load', function() {
$(document).ready(function() {
    console.log('ready');

    //document.addEventListener('keydown', function(e) {
    $(document).on('keydown', function(e) {
        console.log('keydown');

        //Extra villkor för att tabort buggar!
        if((e.key === 'e' || e.key === 'E') && oGameData.timerId !== null ) {

            clearInterval(oGameData.timerId);
            console.log('Antalet spöken var', oGameData.antalSpoken, ' och du tog ', oGameData.antalKlickadSpoken);

            oGameData.timerId = 0;
            oGameData.antalKlickadSpoken = 0;
            oGameData.antalSpoken = 0;

            /*
            let imgRefs = document.querySelectorAll('img');

            for(let i = 0; i < imgRefs.length; i++) {
                imgRefs.item(i).remove();
            }
            */

            $('body img').remove();

        }

        //Extra villkor för att tabort buggar!
        if((e.key === 'b' || e.key === 'B') && oGameData.timerId === null) {

            oGameData.timerId = setInterval(function() {

                let imgRef = $('<img>');
                //let imgRef = document.createElement('img');

                let top = Math.round( Math.random() * screen.height ) + 1;
                let left = Math.round( Math.random() * screen.width ) + 1;
        
                imgRef.attr('alt', 'Detta är en bild på ett spöke!');
                imgRef.attr('src', 'https://openclipart.org/image/400px/svg_to_png/83359/fantomme.png');
                //imgRef.attr({});

                //imgRef.setAttribute('alt', 'Detta är en bild på ett spöke!');
                //imgRef.setAttribute('src', 'https://openclipart.org/image/400px/svg_to_png/83359/fantomme.png');
        
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

                imgRef.on('click', function(e) { 
                    oGameData.antalKlickadSpoken++;
                    $(this).remove();
                });

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
        
            }, 1000);
        }
    });


});