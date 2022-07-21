// Variables //

let calculator  = document.getElementById('calculator');
let display = document.getElementById('display');
let keyboard = document.getElementById('keyboard');
let keys = document.getElementsByClassName('keys');


let num = '';
let num1 = '';
let num2 = '';
let operator = '';
let result = '';

// Events //

document.addEventListener('keydown', runEventKeyb);

keys[0].addEventListener('click', runEvent);
keys[1].addEventListener('click', runEvent);
keys[2].addEventListener('click', runEvent);
keys[3].addEventListener('click', runEvent);
keys[4].addEventListener('click', runEvent);
keys[5].addEventListener('click', runEvent);
keys[6].addEventListener('click', runEvent);
keys[7].addEventListener('click', runEvent);
keys[8].addEventListener('click', runEvent);
keys[9].addEventListener('click', runEvent);
keys[10].addEventListener('click', runEvent);
keys[11].addEventListener('click', runEvent);
keys[12].addEventListener('click', runEvent);
keys[13].addEventListener('click', runEvent);
keys[14].addEventListener('click', runEvent);
keys[15].addEventListener('click', runEvent);
keys[16].addEventListener('click', runEvent);
keys[17].addEventListener('click', runEvent);
keys[18].addEventListener('click', runEvent);


// Functions

function runEventKeyb (e) {

  // n# cases //
  if (e.key === '0' ||
      e.key === '1' ||
      e.key === '2' ||
      e.key === '3' ||
      e.key === '4' ||
      e.key === '5' ||
      e.key === '6' ||
      e.key === '7' ||
      e.key === '8' ||
      e.key === '9' ) {
        if (display.innerText === '0') {
          num = e.key;
          display.innerText = num;
        } else {
          num += e.key;
          display.innerText = num;
        }
      }
  
  // '.' case //
  else if (e.key === '.') {
    if (display.innerText === '0') {
      num = '0';
      num += e.key;
      display.innerText = num;
    } else {
      num += e.key;
      display.innerText = num;
  }
  }

  // Operator cases //
  else if(e.key === '+' ||
          e.key === '-' ||
          e.key === '/' ||
          e.key === '*') {
    if(num1 === '') {
      num1 = num;
      operator = e.key;
      num = '';
      display.innerText = operator;
    } 
    else {
      num2 = num;
      calc(operator, num1, num2);
      display.innerText = result;
      num1 = result;
      operator = e.key;
      num = '';
      num2 = '';
    }
  }

  //Equal case //
  else if(e.key === 'Enter') {
    num2 = num;
    calc(operator, num1, num2);
    display.innerText = result;
    num = result;
    num1 = '';
    num2 = '';
  }

  // Backspace case //
  else if(e.key === 'Backspace') {
    if (display.innerText.length <= 1) {
      display.innerText = '0';
    } else {
      num = num.substring(0, num.length - 1);
      display.innerText = num
    }
  }

}

function runEvent (e) {
  // n# cases //
  if (e.srcElement.innerText === '0' ||
      e.srcElement.innerText === '1' ||
      e.srcElement.innerText === '2' ||
      e.srcElement.innerText === '3' ||
      e.srcElement.innerText === '4' ||
      e.srcElement.innerText === '5' ||
      e.srcElement.innerText === '6' ||
      e.srcElement.innerText === '7' ||
      e.srcElement.innerText === '8' ||
      e.srcElement.innerText === '9' ) {
        if (display.innerText === '0') {
          num = e.srcElement.innerText
          display.innerText = num
        } else {
          num += e.srcElement.innerText
          display.innerText = num
        }
      }
  
  // '.' case //
  else if (e.srcElement.innerText === '.') {
    if (display.innerText === '0') {
      num = '0';
      num += e.srcElement.innerText
      display.innerText = num
    } 
    else if(display.innerText.includes('.')){
      display.innerText = num;
    }
    else {
      num += e.srcElement.innerText
      display.innerText = num
    }
  }

  // Operator cases //
  else if(e.srcElement.innerText === '+' ||
          e.srcElement.innerText === '-' ||
          e.srcElement.innerText === '÷' ||
          e.srcElement.innerText === 'x') {
    if(num1 === '') {
      num1 = num;
      operator = e.srcElement.innerText;
      num = '';
      display.innerText = operator;
    } 
    else {
      num2 = num;
      calc(operator, num1, num2);
      display.innerText = result;
      num1 = result;
      operator = e.srcElement.innerText;
      num = '';
      num2 = '';
    }
  }

  //Equal case //
  else if(e.srcElement.innerText === '=') {
    num2 = num;
    calc(operator, num1, num2);
    display.innerText = result;
    num = result;
    num1 = '';
    num2 = '';
    operator = '';
  }

   // Backspace case //
  else if(e.srcElement.innerText === "⌫") {
    if (display.innerText.length <= 1) {
      display.innerText = '0';
    } else {
      num = num.substring(0, num.length - 1);
      display.innerText = num
    }
  }

  // CE case //
  else if(e.srcElement.innerText === "CE") {
   num = ''
   display.innerText = '0';
  }

  // C case //
  else if(e.srcElement.innerText === 'C') {
    num = '';
    num1 = '';
    num2 = '';
    operator = '';
    display.innerText = '0';
  }



}

// Math Function //

function calc(op, factor1, factor2 ){
  switch (op) {
    case '+':
      result = String(parseFloat(factor1) + parseFloat(factor2));
      if (result === 'NaN') { result = '0' }
      break;
    case '-':
      result = String(parseFloat(factor1) - parseFloat(factor2));
      if (result === 'NaN') { result = '0' }
      break;
    case 'x':
      result = String(parseFloat(factor1) * parseFloat(factor2));
      if (result === 'NaN') { result = '0' }
      break;
    case '÷':
      result = String(parseFloat(factor1) / parseFloat(factor2));
      if (result === 'NaN') { result = '0' }
      break;
    case '/':
      result = String(parseFloat(factor1) / parseFloat(factor2));
      if (result === 'NaN') { result = '0' }
      break;
    case '*':
      result = String(parseFloat(factor1) * parseFloat(factor2));
      if (result === 'NaN') { result = '0' }
      break;
    default:
      result = '0'
  }
}