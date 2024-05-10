document.addEventListener('DOMContentLoaded', function() {
    let displayValue = '';
    let currentOperation = '';
    const display = document.getElementById('calc-display');

    const numberButtons = document.querySelectorAll('.number-button');
    const operationButtons = document.querySelectorAll('.operation-button');
    const equalsButton = document.getElementById('=');
    const resetButton = document.getElementById('reset');
    
    const updateDisplay = () => {
        display.textContent = displayValue;
    }

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            displayValue += button.textContent;
            updateDisplay();
        });
    });

    operationButtons.forEach(button => {
        button.addEventListener('click', function handleClick() {
            currentOperation = button.textContent;
            displayValue += currentOperation;
            updateDisplay();
            button.removeEventListener('click', handleClick);
        });
    });

    equalsButton.addEventListener('click', () => {
        calculateResult();
    });

    resetButton.addEventListener('click', () => {
        resetCalculator();
    });

    const calculateResult = () => {
        try {
            displayValue = eval(displayValue);
            updateDisplay();
        } catch (error) {
            displayValue = 'Error';
            updateDisplay();
        }
    }

    const resetCalculator = () => {
        displayValue = '';
        currentOperation = '';
        updateDisplay();
    }
});
