document.addEventListener('DOMContentLoaded', function() {
    let displayValue = '';
    const display = document.getElementById('calc-display');
    const numberButtons = document.querySelectorAll('.number-button');
    const operationButtons = document.querySelectorAll('.operation-button');
    const equalsButton = document.getElementById('='); // Ensure this ID matches your button's ID
    const resetButton = document.getElementById('reset');

    const updateDisplay = () => {
        display.textContent = displayValue;
    };

    const isLastCharacterOperator = () => {
        const lastChar = displayValue.charAt(displayValue.length - 1);
        return ['+', '-', '*', '/'].includes(lastChar);
    };

    const containsDotInLastNumber = () => {
        // Find the last segment of numbers or dot separated by operators
        const segments = displayValue.split(/[\+\-\*\/]/);
        const lastSegment = segments[segments.length - 1];
        return lastSegment.includes('.');
    };

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            if (value === '.') {
                if (!displayValue || isLastCharacterOperator() || containsDotInLastNumber()) {
                    // Avoid adding a dot if it's the first character, after an operator, or if the last number segment already contains a dot
                    return;
                }
            }
            displayValue += value;
            updateDisplay();
        });
    });

    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (!isLastCharacterOperator() ) { // Ensure there's something to operate on
                displayValue += button.textContent;
                updateDisplay();
            }
        });
    });

    equalsButton.addEventListener('click', () => {
        if ( !isLastCharacterOperator()) {
            try {
                // Safely calculate the expression
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
