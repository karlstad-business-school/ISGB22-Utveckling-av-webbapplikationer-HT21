'use strict';

//I uppgiften skall koden översättas till jQuery

let oGameData = {
    timerId : 0,
    antalSpoken : 0,
    antalKlickadSpoken : 0
};

//oGameDate.timerId = 0;


addEventListener('load', function() {

    document.addEventListener('keydown', function(e) {
        if(e.key === 'e' || e.key === 'E') {

            //Spelet skall avslutas...
            //Meddela spelaren hur många spöken som totalt har slumpats fram och hur
            //många spöken spelaren har fångat genom att klicka på "bilden".

            clearInterval(oGameData.timerId);
            console.log('Antalet spöken var', oGameData.antalSpoken, ' och du tog ', oGameData.antalKlickadSpoken);

            oGameData.timerId = 0;
            oGameData.antalKlickadSpoken = 0;
            oGameData.antalSpoken = 0;

            let imgRefs = document.querySelectorAll('img');

            //imgRefs.forEach
            for(let i = 0; i < imgRefs.length; i++) {
                imgRefs.item(i).remove();
            }

        }

        if(e.key === 'b' || e.key === 'B') {
            //Starta spelet på nytt alt. starta spelet från början.

            oGameData.timerId = setInterval(function() {

                let imgRef = document.createElement('img');
                let top = Math.round( Math.random() * screen.height ) + 1;
                let left = Math.round( Math.random() * screen.width ) + 1;
        
                imgRef.setAttribute('alt', 'Detta är en bild på ett spöke!');
                imgRef.setAttribute('src', 'https://openclipart.org/image/400px/svg_to_png/83359/fantomme.png');
        
                imgRef.style.position = 'absolute';
                imgRef.style.left = left + 'px';
                imgRef.style.top = top + 'px';
                imgRef.style.width = '15%';
                imgRef.style.height = '15%';
        
                imgRef.addEventListener('click', function(e) {
                    console.log(e.target, e.currentTarget, this);
                    this.remove();
                    //this.style.display = 'none';
                    oGameData.antalKlickadSpoken++;
                });
        
                document.querySelector('body').appendChild(imgRef);
                oGameData.antalSpoken++;
        
            }, 1000);
        }
    });


});