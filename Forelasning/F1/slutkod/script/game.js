/*
    <img src="https://openclipart.org/download/282132/Die6.svg" />
    <img src="https://openclipart.org/download/282131/Die5.svg" />
    <img src="https://openclipart.org/download/282130/Die4.svg" />
    <img src="https://openclipart.org/download/282129/Die3.svg" />
    <img src="https://openclipart.org/download/282128/Die2.svg" />
    <img src="https://openclipart.org/download/282127/Die1.svg" />              
*/

'use strict';
let oGameData = {

    createImgElements : function() {

        console.log('createImgElements()');
        console.table(['createImgElements', Date.now()]);

        const PATH = 'https://openclipart.org/download/2821';

        let rndValue = 0;
        let mainRef = document.querySelector('main');
        let imgRef = null;
        let sum = 0;

        for(let i = 1; i <= 6; i++) {

            rndValue = Math.floor( Math.random() * 6) + 1;
            sum += rndValue;

            imgRef = document.createElement('img');

            imgRef.setAttribute('alt', 'Dice');
            imgRef.setAttribute('src', PATH + (rndValue + 26) + '/Die' + rndValue + '.svg');

            imgRef.style.width = '10%';
            imgRef.style.height = '10%';

            mainRef.appendChild(imgRef);

            console.log(rndValue);
        }

        console.log('Summan är', sum);
    },

    removeImgElements : function() {
        
        console.log('removeImgElements()');

        let imgRefs = document.querySelectorAll('main img');

        console.log( imgRefs );

        for(let i=0; i < imgRefs.length; i++) {
            imgRefs.item(i).remove();
        }

    }

};

window.addEventListener('load', function() {

    console.log('load', Date.now());
});

window.addEventListener('DOMContentLoaded', function() {

    console.log('DOMContentLoaded', Date.now());

    document.addEventListener('keydown', function(e) {

        console.log('keydown', e.key);

        if(e.key === 'd' || e.key === 'D') {

            //Tabort alla img-element som finns i main innan nya tärningar slumpas!
            oGameData.removeImgElements();
            
            //Skapa och lägg till nya img-element.
            oGameData.createImgElements();

        }

    });

    window.alert('Tryck d-tangenten för att slumpa nya tärningar!');
});