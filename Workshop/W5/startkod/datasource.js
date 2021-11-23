"use strict";

function dataSource() {

    return [

        {
            "instruction": "insertAfter()",
            "codeexample": "$('&#60;p&#62;Test&#60;/p&#62;').insertAfter('.inner');", //$('<p>Test</p>').insertAfter('.inner');
            "sourceurl": "https://api.jquery.com/insertAfter/"
        },

        {
            "instruction": "inserBefore()",
            "codeexample": "$('&#60;p&#62;Test&#60;/p&#62;').insertBefore('.inner');", //$('<p>Test</p>').insertBefore('.inner');
            "sourceurl": "https://api.jquery.com/insertBefore/"
        },

        {
            "instruction": "appendTo()",
            "codeexample": "$('&#60;p&#62;Test&#60;/p&#62;').appendTo('.inner');", //$('<p>Test</p>').appendTo('.inner');
            "sourceurl": "https://api.jquery.com/appendto/"
        },
        
        {
            "instruction": "prependTo()",
            "codeexample": "$('&#60;p&#62;Test&#60;/p&#62;').prependTo('.inner');", //$('<p>Test</p>').prependTo('.inner');
            "sourceurl": "https://api.jquery.com/prependto/"
        }

    ];
    
}

$(document).ready( function() {
    addTable();
    showLinksAsButtons();
    addCSSToTable();
    addMouseOverEventsToTable();
    addClickEventsToTable();
});

function addTable() { 

    /*
        Uppgift 1. 4p

        1. Anropa funktionen dataSource() och placera returen från funktionen i en variabel som du namnger dataToDisplay.

        2. Ur DOM:en sök ut main-elementet och placera resultatet i en variabel som du namnger mainRef.

        3. Lägga till följande HTML-kod och text: <table><thead><tr><td>instruction</td><td>codeexample</td><td>sourceurl</td></tr></thead><tbody></tbody></table> sist i mainRef.

        4. Ur DOM:en sök ut tbody-elementet och placera resultatet i en variabel som du namnger tBodyRef.

        5. Iterera igenom innehållet i variabeln dataToDisplay och för varje objekt som finns i vektorn skall du skapa en ny tabellrad med tre kolumner och placera denna sist i tBodyRef.
        a) Den första kolumnen skall bara innehålla texten som finns i instruction-attributet.
        b) Den andra kolumen skall innehålla ett code-element som i sin tur innehåller texten som finns i codeexample-attributet.
        c) Den tredje kolumnen skall innehålla ett a-element där både href-attributet och den synliga texten för a-elementet innehåller texten i sourceurl-attributet.
    */

}

function showLinksAsButtons() {

    /*
        Uppgift 2. 1p

        Ur DOM:en sök ut alla a-element som finns i ett td-element och för dessa lägg till klasserna: btn och btn-primary.
    */
}

function addCSSToTable() {

    /*
        Uppgift 3. 1p

        Ur Dom:en sök ut table-elementet och för detta lägg till klasserna: table och table-striped.
    */

}

function addMouseOverEventsToTable() {

    /*

        Uppgift 3. 3p

        1. Ur DOM:en sök ut alla code-element som finns i ett td-element och placera resultaten i en variabel som du namnger codeRefs.

        2. Iterera igenom codeRefs och för varje code-element exekvera en anonym inline-funktion.

        3. I den anonyma inline-funktionen sök ut en referens till det enda div-elementet som finns i DOM:en och placera resultatet i en variabel du namnger divRef.

        4. I den anonyma inline-funktionen skall du för aktuellt code-element lägga till en lyssnare för händelsen "mouseover" och när den inträffar skall du 
           som text för divRef:en visa den text som finns det code-element användaren för tillfället har pekaren över.

        5. I den anonyma inline-funktionen skall du för aktuellt code-element också lägga till en lyssnare för händelsen "mouseout" och när den inträffar skall du
            som text för divRef:en visa en tom sträng.
    */

}

function addClickEventsToTable() {

    /*

        Uppgift 4a. 3p

        1. Ur DOM:en sök ut alla a-element som finns i ett td-element och placera resultaten i en variabel som du namnger aRefs.

        2. Iterera igenom aRefs och för varje a-element exekvera en anonym inline-funktion.

        3. I den anonyma inline-funktionen sök ut en referens till det enda iframe-elementet som finns i DOM:en och placera resultatet i en variabel du namnger iFrameRef.

        4. I den anonyma inline-funktionen skall du för aktuellt a-element lägga till en lyssnare för händelsen "click" och när den inträffar skall du:
        a) Avbryta att default-beteendet för aktuellt a-element exekveras.
        b) Stoppa att händelsen propageras (bubblar) till aktuellt a-elements förälder.
        c) Ändra src-attributet för iFrameRef till att innehålla värdet i href-attributet för aktuellt a-element.

    */

    /*

        Uppgift 4b. 4p

        1. Skapa variabeln codeRef och tilldela den värdet null.

        2. Ur DOM:en sök ut alla code-element som finns i ett td-element och placera resultaten i en variabel som du namnger codeRefs.

        3. Iterera igenom codeRefs och för varje code-element exekvera en anonym inline-funktion.

        4. I den anonyma inline-funktionen skall du för aktuellt code-element lägga till en lyssnare för händelsen "click" och när den inträffar skall du:

        a) Tilldela variabeln codeRef en referens till aktuellt code-element.
        b) Ur DOM:en söka ut en referens till form-elementet och placera resultatet i variabeln formRef.
        c) För formRef ändra CSS-egenskaperna left = e.clientX, top = e.clientY och display=block (användandet av e förutsätter att du till funktionen som exekveras 
            vid click-händelsen också skickar med händelseobjektet e).   
        d) Ur DOM:en söka ut en referens till textarea-elementet och placera resultatet i variabeln textareaRef:
        e) Tilldela värdet för textareaRef (texten användaren ser i textrutan) den text som finns i aktuellt code-element.


    */

    /*
        
        Uppgift 4c. 4p

        1. Ur DOM:en sök ut en referens till input-elementet och placera resultatet i en variabel som du namnger inputRef.

        2. Lägg till en lyssnare för händelsen "click" för inputRef och när den inträffar exekvera en anonym inline-funktion i vilken följande skall ske:
        a) Ändra CSS-egenskapen display=none för knappens förälder (observera att här skall du använda referensen till knappen för att komma åt föräldern).
        b) Ur DOM:en sök ut textarea-elementet och placera i en variabel som du namnger textareaRef.
        c) Ändra texten för variabeln (som innehåller en referens till ett code-element) codeRef till att innehålla texten som finns i textareaRef.
        d) Ändra texten som finns i textareaRef till en tom sträng.

    */


}


