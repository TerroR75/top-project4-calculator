const btnNumbers = document.querySelectorAll('.btnNumber');
btnNumbers.forEach(btn => btn.addEventListener('click', appendNumber));


const btnFunctions = document.querySelectorAll('.btnFunction');
btnFunctions.forEach(btn => btn.addEventListener('click', setOperator))



const calcInput = document.querySelector('.calcinput');
const calcOutput = document.querySelector('#calcoutput');


const btnEquals = document.querySelector('.btnEquals');
btnEquals.addEventListener('click', evaluate);

const btnClearCurrentNumber = document.querySelector('.btnClearCurrent');
const btnClearAll = document.querySelector('.btnClearAll');

btnClearCurrentNumber.addEventListener('click', clearCurrentNumber);
btnClearAll.addEventListener('click', clearAll);

let mainResult = 0;
let currentOperator = null;

let firstNumber = '';
let secondNumber = '';

let shouldClearInputScreen = false;









function appendNumber() {
    if (calcInput.value === '' || shouldClearInputScreen)
        clearInput()
    calcInput.value += this.value;
}

function clearInput() {
    calcInput.value = ''
    shouldClearInputScreen = false
}

function setOperator() {
    if (currentOperator !== null) evaluate();

    currentOperator = this.dataset.operator;

    firstNumber = calcInput.value;

    calcOutput.value = `${firstNumber} ${currentOperator}`;
    shouldClearInputScreen = true;
}

function evaluate() {
    secondNumber = calcInput.value;

    calcInput.value = roundNumber(calculate(currentOperator, firstNumber, secondNumber));

    calcOutput.value = `${firstNumber} ${currentOperator} ${secondNumber} =`;
    currentOperation = null;
}




// CALCULATOR
function calculate(operator, firstNumber, secondNumber) {
    a = Number(firstNumber);
    b = Number(secondNumber);
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            if (b === 0) return null
            else return divide(a, b);
        default:
            return null;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}





// UTILS
function roundNumber(number) {
    return Math.round(number * 1000) / 1000
}

function clearAll() {
    firstNumber = '';
    secondNumber = '';
    currentOperator = null;
    calcInput.value = '';
    calcOutput.value = '';
}
function clearCurrentNumber() {
    calcInput.value = '';
}