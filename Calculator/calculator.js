document.addEventListener('DOMContentLoaded', function() {
    let displayValue = '';
    const display = document.getElementById('calc-display');
    const numberButtons = document.querySelectorAll('.number-button');
    const operationButtons = document.querySelectorAll('.operation-button');
    const equalsButton = document.getElementById('='); 
    const resetButton = document.getElementById('reset');

    const updateDisplay = () => {
        display.textContent = displayValue;
    };

    const isLastCharacterOperator = () => {
        const lastChar = displayValue.charAt(displayValue.length - 1);
        return ['+', '-', '*', '/'].includes(lastChar);
    };

    const containsDotInLastNumber = () => {
        const segments = displayValue.split(/[\+\-\*\/]/);
        const lastSegment = segments[segments.length - 1];
        return lastSegment.includes('.');
    };

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            if (value === '.') {
                if (!displayValue || isLastCharacterOperator() || containsDotInLastNumber()) {
                    return;
                }
            }
            displayValue += value;
            updateDisplay();
        });
    });

    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (!isLastCharacterOperator()) {
                displayValue += button.textContent;
                updateDisplay();
            }
        });
    });

    equalsButton.addEventListener('click', () => {
        if (!isLastCharacterOperator()) {
            try {
                displayValue = new Function('return ' + displayValue)();
                displayValue = displayValue.toString();
                updateDisplay();
            } catch (error) {
                displayValue = 'Error';
                updateDisplay();
            }
        }
    });

    resetButton.addEventListener('click', () => {
        displayValue = '';
        updateDisplay();
    });
});
