let display = document.getElementById('display');
let currentInput = '0';
let calculation = [];

function append(value) {
  if (currentInput === '0' && value !== '.') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '0';
  display.textContent = currentInput;
  calculation = [];
}

function calculate() {
  try {
    let result = eval(currentInput);
    display.textContent = result;
    currentInput = result.toString();
  } catch (error) {
    display.textContent = 'Error';
  }
}
