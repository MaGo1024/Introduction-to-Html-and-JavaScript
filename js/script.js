function saveToCookie(key, value, onCompletion){
    var  cookieValue = key + ';' + value;
    document.cookie +=  cookieValue;
    onCompletion(cookieValue);
}

function saveTextValue(){
    var textValue = document.getElementsByName('position')[0].value;
    saveToCookie('Position', textValue, showTextSuccessful);
}

function  showTextSuccessful(result){
    window.alert('You succesfully saved [' + result + '] from the text input to your cookie');
}

function saveRadioValue(){
    var radioValue;
    var radioOption = document.getElementsByName('department');
    for (var index = 0; index < radioOption.length; index++){
        if (radioOption[index].checked){
            radioValue = radioOption[index].value;
            break;
        }
    }
    saveToCookie('Department', radioValue, function (result){
        window.alert('You did it! You saved [ ' + result + ']');
    }); 
}