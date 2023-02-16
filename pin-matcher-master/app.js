
function getPin(){
    const pin = genaratePin();
    const pinString = pin + '';

    if(pinString.length === 4){
        return pin;
    }else{
        return getPin();
    }
}

function genaratePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    // display pin
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remaningDigits = digits.join('');
            typedNumberField.value = remaningDigits;
        }
    }else{
        const newtypedNumber = previousTypedNumber + number;
        typedNumberField.value = newtypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedPinField = document.getElementById('typed-number');
    const typedNumber = typedPinField.value;

    const pinSuccessMessage = document.getElementById('pin-sucess');
    const pinFaillurMessage = document.getElementById('pin-faillur');

    if(typedNumber === currentPin){
        pinSuccessMessage.style.display = 'block';
        pinFaillurMessage.style.display = 'none';
    }else{
        pinFaillurMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})