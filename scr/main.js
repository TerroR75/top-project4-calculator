// SELECTORS
const calcInput = document.querySelector('.calcinput');
const calcOutput = document.querySelector('#calcoutput');
const calcHistory = document.querySelector('#calchistory');


// Numbers
const btnNumbers = document.querySelectorAll('.btnNumber');

// const numberZero = document.querySelector('.btnZero');
// const numberOne = document.querySelector('.btnOne');
// const numberTwo = document.querySelector('.btnTwo');
// const numberThree = document.querySelector('.btnThree');
// const numberFour = document.querySelector('.btnFour');
// const numberFive = document.querySelector('.btnFive');
// const numberSix = document.querySelector('.btnSix');
// const numberSeven = document.querySelector('.btnSeven');
// const numberEight = document.querySelector('.btnEight');
// const numberNine = document.querySelector('.btnNine');

// Function buttons
const btnFunctions = document.querySelectorAll('.btnFunction');

// Special functions
const btnClearCurrent = document.querySelector('.btnClearCurrent');
const btnClearAll = document.querySelector('.btnClearAll');

// const buttonEqual = document.querySelector('.fa-equals');
// const buttonPlus = document.querySelector('.fa-plus');
// const buttonMinus = document.querySelector('.fa-minus');
// const buttonTimes = document.querySelector('.fa-xmark');
// const buttonDivide = document.querySelector('.fa-divide');
// const buttonSquareRoot = document.querySelector('.fa-square-root-variable');
// const buttonExponent = document.querySelector('.fa-superscript');

let numbers = [];
let resultMain = 0;
let operator = '';



btnNumbers.forEach(button => button.addEventListener('click', appendNumber));
// btnFunctions.forEach(button => button.addEventListener('click', addNumberToArray));
btnFunctions.forEach(button => button.addEventListener('click', calculator));

btnClearCurrent.addEventListener('click', clearCurrentNumber);
btnClearAll.addEventListener('click', clearAll);



// FUNCTIONS
function calculator() {
    operator = this.dataset.operator;

    switch (operator) {
        case '+':
            add();
            break;
        case '-':
            subtract();
            break;
        case '*':
            multiply();
            break;
        case '/': break;
        case 'v2': break;
        case '^': break;
        default: console.log('Unknown operator!');
    }
};





function appendNumber() {
    calcInput.value += this.value;
};

function addNumberToArray() {
    if (calcInput.value !== '') {
        if (calcInput.value.includes('.')) {
            numbers.push(parseFloat(calcInput.value));
            calcInput.value = '';
        }
        else {
            numbers.push(parseInt(calcInput.value));
            calcInput.value = '';
        }
    }

    // displayNumberHistory();
    // calcOutput.value = add();
    console.log(numbers);
};

function clearAll() {
    calcInput.value = '';
    calcOutput.value = '';
    operator = '';
    resultMain = 0;
    numbers = [];
}

function clearCurrentNumber() {
    calcInput.value = '';
}


function displayNumberHistory() {
    // calcOutput.textContent = '';
    // numbers.forEach(number => calcOutput.textContent += `${number} `);
}


function equals() {

};

function add() {
    if (calcOutput.value === '') {
        calcOutput.value = calcInput.value.includes('.') ? parseFloat(calcInput.value) : parseInt(calcInput.value);
    }

    if (calcInput.value !== '') {
        resultMain += calcInput.value.includes('.') ? parseFloat(calcInput.value) : parseInt(calcInput.value);
    }

    calcInput.value = '';
    calcOutput.value = `${resultMain} ${operator}`;

    console.log(resultMain);
};

function subtract() {
    if (calcOutput.value === '') {
        calcOutput.value = calcInput.value.includes('.') ? parseFloat(calcInput.value) : parseInt(calcInput.value);
    }

    if (calcInput.value !== '') {
        resultMain -= calcInput.value.includes('.') ? parseFloat(calcInput.value) : parseInt(calcInput.value);
    }

    calcInput.value = '';
    calcOutput.value = `${resultMain} ${operator}`;

    console.log(resultMain);
};

function multiply() {
    if (calcOutput.value === '') {
        calcOutput.value = calcInput.value.includes('.') ? parseFloat(calcInput.value) : parseInt(calcInput.value);
    }

    if (calcInput.value !== '') {
        resultMain *= calcInput.value.includes('.') ? parseFloat(calcInput.value) : parseInt(calcInput.value);
    }

    calcInput.value = '';
    calcOutput.value = `${resultMain} ${operator}`;

    console.log(resultMain);
};

function divide() {

};

function squareRoot() {

};

function exponent() {

};