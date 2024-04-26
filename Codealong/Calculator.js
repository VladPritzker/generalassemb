const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Initialize the board
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' '],
];

// Function to display the board
function displayBoard() {
  console.log('-------------');
  for (let row of board) {
    console.log(`| ${row.join(' | ')} |`);
    console.log('-------------');
  }
}

// Function to update the board based on the player's move
function updateBoard(row, col, player) {
  if (board[row][col] === ' ') {
    board[row][col] = player;
    return true; // Move successful
  } else {
    console.log('This position is already taken. Try again.');
    return false; // Move unsuccessful
  }
}

// Function to check if a player has won
function checkWin(player) {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
      return true;
    }
  }
  // Check columns
  for (let j = 0; j < 3; j++) {
    if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
      return true;
    }
  }
  // Check diagonals
  if ((board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
      (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
    return true;
  }
  return false;
}

// Function to check if the board is full (tie)
function boardIsFull() {
  for (let row of board) {
    for (let cell of row) {
      if (cell === ' ') {
        return false; // Board is not full
      }
    }
  }
  return true; // Board is full
}

// Function to start the game
function startGame() {
  let currentPlayer = 'X';

  // Recursive function to continue the game until a player wins or it's a tie
  function playTurn() {
    displayBoard();

    rl.question(`Player ${currentPlayer}, enter row (0-2): `, (rowInput) => {
      rl.question(`Player ${currentPlayer}, enter column (0-2): `, (colInput) => {
        const row = parseInt(rowInput);
        const col = parseInt(colInput);

        // Check if row and column inputs are valid
        if (isNaN(row) || isNaN(col) || row < 0 || row > 2 || col < 0 || col > 2) {
          console.log('Invalid input. Please enter numbers between 0 and 2.');
          playTurn(); // Repeat the turn
          return;
        }

        // Update the board and check for win
        if (updateBoard(row, col, currentPlayer)) {
          if (checkWin(currentPlayer)) {
            displayBoard();
            console.log(`Player ${currentPlayer} wins!`);
            rl.close();
            return;
          } else if (boardIsFull()) {
            displayBoard();
            console.log('It\'s a tie!');
            rl.close();
            return;
          }
          // Switch players and continue the game
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          playTurn();
        } else {
          playTurn(); // Repeat the turn
        }
      });
    });
  }

  // Start the game
  playTurn();
}

// Start the game when the script is run
startGame();
