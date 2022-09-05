// Variables //

let firstOperandDisplay = document.querySelector('.first-operand');
let secondOperandDisplay = document.querySelector('.second-operand');
let numberKeys = document.querySelectorAll('.number-keys');
let operationKeys = document.querySelectorAll('.operation-keys');
let clearEntryKey = document.querySelector('.clear-entry-key')
let clearKey = document.querySelector('.clear-key')
let backspaceKey = document.querySelector('.backspace-key')
let equalsKey = document.querySelector('.equals-key')

let firstOperand = '';
let secondOperand = '';
let operation = '';
let result = '';

// Functions //

function addNumber(num) {
  if (result != '') {
    result = '';
    firstOperand = num;    
  }
  else if(num === '.' && firstOperand.includes('.')){
    return
  } 
  else if (firstOperandDisplay.innerText === '0') {
    firstOperand = num.toString();
  } 
  else {
    firstOperand += num.toString();
  }
}

function addOperation (op) {
  if (firstOperand === '' && secondOperand === '') {
    return
  }
  if (secondOperand === '') {
    secondOperand = firstOperand;
    operation = op;
    firstOperand = '';
  } else if (firstOperand === '' && operation != '') {
    operation = op;
  } else {
    compute (operation, secondOperand, firstOperand)
    secondOperand = result;
    firstOperand = '';
    operation = op;
    result = '';
  }

}

function equalsOperation() {
  if (firstOperand === '' || secondOperand === '' || operation === '') {
    return
  }
  else {
    compute(operation, secondOperand, firstOperand);
    firstOperand = result;
    secondOperand = '';
    operation = '';
  }
}

function compute (op, factor1, factor2) {
  if (factor2 === '-') {
    return;
  }
  switch (op) {
    case '+':
      result = String(parseFloat(factor1) + parseFloat(factor2));
      if (result === 'NaN') { result = 'Error' }
      break;
    case '-':
      result = String(parseFloat(factor1) - parseFloat(factor2));
      if (result === 'NaN') { result = 'Error' }
      break;
    case 'x':
      result = String(parseFloat(factor1) * parseFloat(factor2));
      if (result === 'NaN') { result = 'Error' }
      break;
    case '÷':
      result = String(parseFloat(factor1) / parseFloat(factor2));
      if (result === 'NaN') { result = 'Error' }
      break;
    default:
      result = 'Error'
  }
}

function clearOperation() {
  firstOperand = '';
  secondOperand = '';
  operation = '';
}

function clearEntryOperation() {
  firstOperand = '';
}

function backspaceOperation() {
  firstOperand = firstOperand.substring(0, firstOperand.length - 1);
}

function updatedDisplay () {
  firstOperandDisplay.innerText = firstOperand;
  secondOperandDisplay.innerText = `${secondOperand} ${operation}`;
};


// Events //


numberKeys.forEach(key => {
  key.addEventListener('click', () => {
    addNumber (key.innerText);
    updatedDisplay ();
  });
});

operationKeys.forEach(key => {
  key.addEventListener('click', () => {
    // if (key.innerText === '-' && firstOperand === '') {
    //   addNumber(key.innerText);
    //   updatedDisplay ();
    // } 
    // else {
    //   addOperation(key.innerText);
    //   updatedDisplay ();
    // }

    addOperation(key.innerText);
    updatedDisplay ();
    
  })
});

equalsKey.addEventListener('click', () => {
  equalsOperation();
  updatedDisplay();
})

clearKey.addEventListener('click', () => {
  clearOperation();
  updatedDisplay();
})

clearEntryKey.addEventListener('click', () => {
  clearEntryOperation();
  updatedDisplay();
})

backspaceKey.addEventListener('click', () => {
  backspaceOperation();
  updatedDisplay();
})

document.addEventListener('keydown', (e) => {
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
      e.key === '9' ||
      e.key === '.' ) {
    addNumber (e.key);
    updatedDisplay ();
  }

  // Operation cases //
  else if(e.key === '+' ) {
    addOperation(e.key);
    updatedDisplay ();
  }

  else if(e.key === '-' ) {
    // if (firstOperand === '') {
    //   addNumber (e.key);
    //   updatedDisplay ();
    // } 
    // else {
    //   addOperation(e.key);
    //   updatedDisplay ();
    // }

    addOperation(e.key);
    updatedDisplay ();
  }

  else if (e.key === '/') {
    let oper = '÷';
    addOperation(oper);
    updatedDisplay ();
  }

  else if(e.key === '*'){
    let oper = 'x';
    addOperation(oper);
    updatedDisplay ();
  }

  //Equals case //
  else if(e.key === 'Enter') {
    equalsOperation();
    updatedDisplay();
  }

  // Backspace case //
  else if(e.key === 'Backspace') {
    backspaceOperation();
    updatedDisplay();
  }
});