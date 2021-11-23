"use strict";

function checkForm() {
    console.log('checkForm()');
    
    let inputRefText = $('#txtNamn');
    console.log(inputRefText);
    let inputRefChk = $('#chkBoxGDPR');
    console.log(inputRefChk);
    let divRef = $('#errorMsg');
    console.log(divRef);

    if(inputRefText.val() === '') {
        divRef.text('Ange namn!')
        return false;
    }

    //prop('checked') ger true || false!
    if(inputRefChk.prop('checked') === false) {
        divRef.text('Acceptera GDPR!')
        return false;
    }

    return true;
}

function makeAJAXCall(){
    console.log('makeAJAXCall()');

    let request = $.ajax({
        'method' : 'POST',
        'url' : 'uppgift2.php',
        'dataType' : 'json',
        'data' : {
            'txtNamn' : $('#txtNamn').val(),
            'chkBoxGDPR' : $('#chkBoxGDPR').prop('checked'),
            'btnSkicka' : $('input[type=submit').val()
        }
    });

    request.done(function(inData) {
        console.log('done');
        $('<p>').text(inData.namn + ' ' + inData.gdpr).appendTo('#newContent');
    });

    request.fail(function(jqXHR) {
        console.log('fail');
        //Skall vara statusText och inget annat!
        $('#errorMsg').text(jqXHR.statusText);
    });


}


$(document).ready(function() {

    console.log('ready');

    $('input[type=reset]').on('click', function() {
        console.log('click');
        $('#errorMsg').text('');
    });

    $(document).ajaxStart(function() {
        console.log('ajaxStart');
        $('form').fadeTo(500, 0.5);
    });

    $(document).ajaxStop(function(){
        console.log('ajaxStop');
        $('form').fadeTo(500, 1.0);
    });

    $('form').on('submit', function(e) {

        console.log('submit');
        e.preventDefault();
        e.stopPropagation();

        if(checkForm()) {
            makeAJAXCall();
        }

    });
});