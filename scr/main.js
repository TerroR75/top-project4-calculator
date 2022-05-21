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
const buttonEqual = document.querySelector('.fa-equals');
const buttonPlus = document.querySelector('.fa-plus');
const buttonMinus = document.querySelector('.fa-minus');
const buttonTimes = document.querySelector('.fa-xmark');
const buttonDivide = document.querySelector('.fa-divide');
const buttonSquareRoot = document.querySelector('.fa-square-root-variable');
const buttonExponent = document.querySelector('.fa-superscript');



btnNumbers.forEach(button => button.addEventListener('click', appendNumber));
// numberZero.addEventListener('click', appendNumber);
// numberOne.addEventListener('click', appendNumber);
// numberTwo.addEventListener('click', appendNumber);
// numberThree.addEventListener('click', appendNumber);
// numberFour.addEventListener('click', appendNumber);
// numberZero.addEventListener('click', appendNumber);
// numberZero.addEventListener('click', appendNumber);
// numberZero.addEventListener('click', appendNumber);
// numberZero.addEventListener('click', appendNumber);
// numberZero.addEventListener('click', appendNumber);



// FUNCTIONS
function appendNumber() {
    calcInput.value += this.value;
};







function equals() {

};

function add() {

};

function subtract() {

};

function multiply() {

};

function divide() {

};

function squareRoot() {

};

function exponent() {

};