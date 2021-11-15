
$(document).ready(function() {
    let ref1 = $('p');

    ref1.attr('data-demo', 'Detta är mitt eget attribut');

    let ref2 = $('<p>').appendTo('main div');
    let ref3 = $('main div').append('<p>');

    ref2.text('Detta är en text i en paragraf!');
    //ref3.text('Vad blir resultatet här?');

    ref2.on('click', function(e) {
        console.log($(this), e.target, e.currentTarget)
    });

    ref3.on('click', function(e) {
        console.log($(this), e.target, e.currentTarget)
    });

});