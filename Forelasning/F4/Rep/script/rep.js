/*'use strict';

$(document).ready( function() {

    console.log('ready');

    $('#demoDiv1').hide();

    $('#showhide').on('click', function(e) {

        console.log('click');

        e.stopPropagation();
        e.preventDefault();

        $('#demoDiv1').fadeToggle(1000, function() {
            console.log('fadeToggle()');
        });
    });

    $('#demoDiv2').on('mouseover', function() {

        console.log('mouseover');

        $(this).animate({'font-size' : '30px'}, 2000, function() {
            $(this).animate({'font-size' : '12px'}, 2000);
            console.log('Klart!');
        })
    });

});*/

'use strict';

$(document).ready( function() {
    
    console.log('ready');

    $('#demoDiv1').hide();

    $('#showhide').on('click', function(e) {

        console.log('click');

        e.preventDefault();
        e.stopPropagation();

        $('#demoDiv1').fadeToggle(1000, function() {
            console.log('fadeToggle');
        });

    });

    $('#demoDiv2').on('mouseover', function() {
        console.log('mouseover');
        $(this).animate({'font-size' : '30px'}, 2000, function() {
            $(this).animate({'font-size' : '12px'}, 2000);
        });

    });

});
























