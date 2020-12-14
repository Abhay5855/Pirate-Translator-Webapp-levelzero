var txtInput = document.querySelector("#text-input");

var btnTranslate = document.querySelector("#btn-translate");

var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pirate.json"



function clickHandler() {

    

    var inputText = txtInput.value

    fetch(getTranslationURL(inputText))

        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;



          
         })