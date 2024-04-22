// Create the calculator container
const calculator = document.createElement('div');
calculator.style.width = '200px';
calculator.style.height = '300px';
calculator.style.backgroundColor = '#f5f5f5';
calculator.style.border = '1px solid #000';
calculator.style.padding = '10px';
calculator.style.boxSizing = 'border-box';
document.body.appendChild(calculator);

// Create the display
const display = document.createElement('input');
display.type = 'text';
display.style.width = '100%';
display.style.height = '50px';
display.style.fontSize = '20px';
display.style.textAlign = 'right';
calculator.appendChild(display);

// Create the buttons
const buttons = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '=', '/'];
buttons.forEach(button => {
  const buttonElement = document.createElement('button');
  buttonElement.textContent = button;
  buttonElement.style.width = '46%';
  buttonElement.style.height = '40px';
  buttonElement.style.margin = '2%';
  buttonElement.style.fontSize = '18px';
  calculator.appendChild(buttonElement);
});

// Add event listeners to the buttons
calculator.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === '=') {
      // Calculate the result
      display.value = eval(display.value);
    } else if (button.textContent === 'C') {
      // Clear the display
      display.value = '';
    } else {
      // Add the button's value to the display
      display.value += button.textContent;
    }
  });
});
