'use strict';

$(document).ready(function() {

    console.log('ready');

    $(document).on('keydown', function(e) {

        if(e.key === 'a' || e.key === 'A') {

            let request = $.ajax({
                'method' : 'GET',
                'url' : 'ajax/rep.php',
                'dataType' : 'text',
                'timeout' : '2000'
            });

            request.fail( function(jqXHR) {
                console.log(jqXHR);
                alert(jqXHR.statusText);
            });

            request.done(function(inData) {
                console.log(inData);

                //$('<p>').text(inData + ' ' + Date.now()).appendTo('main');
                //Kedja av metodanrop medan nedanstående exempel delar upp det i flera med en referens...
                let pRef = $('<p>');
                pRef.text(inData + ' ' + Date.now());
                pRef.appendTo('main');
            })

        }

    });

});