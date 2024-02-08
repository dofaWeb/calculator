const display = document.getElementById('display');
let isCalculated = false;

function appendToDisplay(input){
    if(isCalculated){
        display.value = '';
        isCalculated = false;
    }
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
    display.value=eval(display.value);
    }catch(err){
        display.value = 'Error';
    }finally{
        isCalculated = true;
    }
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}