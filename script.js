const resultDisplay = document.getElementById('result');
let currentInput = '';  // Store the current input
let currentOperator = '';  // Store the operator
let previousInput = '';  // Store the previous input

// Function to append number or dot to current input
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// Function to update the display
function updateDisplay() {
    resultDisplay.value = currentInput;
}

// Add event listeners to number buttons
document.getElementById('button0').addEventListener('click', () => appendNumber('0'));
document.getElementById('button1').addEventListener('click', () => appendNumber('1'));
document.getElementById('button2').addEventListener('click', () => appendNumber('2'));
document.getElementById('button3').addEventListener('click', () => appendNumber('3'));
document.getElementById('button4').addEventListener('click', () => appendNumber('4'));
document.getElementById('button5').addEventListener('click', () => appendNumber('5'));
document.getElementById('button6').addEventListener('click', () => appendNumber('6'));
document.getElementById('button7').addEventListener('click', () => appendNumber('7'));
document.getElementById('button8').addEventListener('click', () => appendNumber('8'));
document.getElementById('button9').addEventListener('click', () => appendNumber('9'));

// Add event listener for decimal
document.getElementById('dot').addEventListener('click', () => {
    if (!currentInput.includes('.')) {
        appendNumber('.');
    }
});

// Function to handle operators
function handleOperator(operator) {
    if (currentInput === '') return;
    previousInput = currentInput;
    currentInput = '';
    currentOperator = operator;
}

// Add event listeners for operators
document.getElementById('add').addEventListener('click', () => handleOperator('+'));
document.getElementById('subtract').addEventListener('click', () => handleOperator('-'));
document.getElementById('multiply').addEventListener('click', () => handleOperator('*'));
document.getElementById('divide').addEventListener('click', () => handleOperator('/'));

// Function to calculate the result
function calculate() {
    if (previousInput === '' || currentInput === '' || currentOperator === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (currentOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    currentOperator = '';
    previousInput = '';
    updateDisplay();
}

// Event listener for equal button
document.getElementById('equal').addEventListener('click', calculate);

// Event listener for clear button
document.getElementById('clear').addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    currentOperator = '';
    updateDisplay();
});

// Event listener for backspace button
document.getElementById('backspace').addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
});
