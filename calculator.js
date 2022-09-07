//calculator


const display = document.getElementById('display');
const buttons = document.getElementById('buttons');
const clearButton = document.getElementById('clear');
const backutton = document.getElementById('backspace');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const equalButton = document.getElementById('equal');
const squareButton = document.getElementById('square');
const rootButton = document.getElementById('root');

let lastOperation ='';
let memory = 0;