/**
    Client: Fa-mi te rog butonul de login sa nu fie valabil atunci cand a pus cineva
        parola mai mica de 6 caractere.

    Tech:
    - modificam inputul de password
    - numaram numarul de caracter din input
    - comparam cu numarul minim (var )
    - cream o conditie un if/else
    - daca e mai mare sa fie enabled, altfel disabled
    - cand se apasa o tasta pe password, executam codul

    1) Modificam inputul de password
*/

const inputUserName = document.querySelector('#username');
const inputPassword = document.querySelector('#password');
const inputRepeatPassword = document.getElementById('repeat-password');
const submitBtn = document.querySelector('#submitBtn');

const passElements = [inputPassword, inputRepeatPassword];

function checkConditions( passElement ){
    return [ 
        {
            param1: '.validation-list .vl-nummber', 
            param2: passElement, 
            callback : checkNumbers
        },
        {
            param1: '.validation-list .vl-litera_mare', 
            param2: passElement, 
            callback : checkUpperCase
        }, 
        {
            param1: '.validation-list .vl-caracter_special', 
            param2: passElement, 
            callback : checkSpecialCharacter
        },
        {
            param1: '.validation-list .vl-litera_mica', 
            param2: passElement, 
            callback : checkLowerCase
        },
        {
            param1: '.validation-list .vl-size', 
            param2: passElement, 
            callback : checkPassSize
        },
        {
            param1: '.validation-list .vl-same_passwords', 
            param2: passElements, 
            callback : checkSamePassword
        },  
    ];
}

passElements.forEach( function(passElement) {
    passElement.addEventListener('input', function() {
        let shouldEnable = true;
        
        checkConditions( passElement ).forEach(function(value){
            checkCondition(
                value.param1, 
                value.param2, 
                value.callback 
            )

            if (!value.callback(value.param2)) {
                shouldEnable = false
            }
        }); 

        if (shouldEnable) {
          submitBtn.removeAttribute('disabled');  
        } else {
            submitBtn.setAttribute('disabled', 'true');
        }
    })
});


function checkCondition(param1, param2, callback){
    const element = document.querySelector(param1);
    element.classList.toggle('active', callback(param2));
} 

function checkLowerCase(inputElement){
    const value = inputElement.value;
    const regEx = new RegExp (/[a-z]/);
    return value.match(regEx);
}

function checkPassSize(inputElement){
    return inputElement.value.length >= 6;
}

function checkSamePassword(inputElements){
    const inputElementsValue1 = inputElements[0].value;
    const inputElementsValue2 = inputElements[1].value;

    return inputElementsValue1 === inputElementsValue2;
}

function checkUpperCase(inputElement) {
    const value = inputElement.value;
    const regEx = new RegExp (/[A-Z]/);
    return value.match(regEx);
}

function checkNumbers(inputElement){
    let value = inputElement.value;
    let reg = new RegExp(/[0-9]/);
    return value.match(reg);
}

function checkSpecialCharacter(inputElement){
    const value = inputElement.value.match(/[!-*&]/g);
    return value;
}
