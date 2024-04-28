document.addEventListener('DOMContentLoaded', function() {
    const startGameButton = document.getElementById('start-game');
    const player1Input = document.getElementById('player1');
    const player2Input = document.getElementById('player2');
    const playerTurn = document.getElementById('player-turn');
    const PlayerNames = document.getElementById('player-names-buttom');


    // Disable the game board initially
    const gameBoard = document.getElementById('game-board');
    gameBoard.style.display = 'none';

    // Add event listener to the start game button
    startGameButton.addEventListener('click', () => {
        const player1Name = player1Input.value.trim();
        const player2Name = player2Input.value.trim();

        if (player1Name && player2Name) {
            // Show the game board and start the game
            gameBoard.style.display = 'grid';
            startGame(player1Name, player2Name);

            // Clear player names
            player1Input.value = '';
            player2Input.value = '';
        } else {
            alert('Please enter names for both players!');
        }
    });

    function startGame(player1Name, player2Name) {
        // Initialize game variables
        const cells = document.querySelectorAll('.cell');
        let currentPlayer = 'X';
        let winner = null;
        let moves = 0;

        // Display the starting player's name
        playerTurn.textContent = `${player1Name}'s Turn`;
        PlayerNames.innerHTML = `Player 1 - <span style="color: red; font-size: 20px;">${player1Name}</span> vs Player 2 - <span style="color: blue; font-size: 20px;">${player2Name}</span>`;




        // Add click event listeners to each cell
        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                // Check if the cell is not disabled
                if (!cell.classList.contains('disabled')) {
                    // Set current player's symbol and disable cell
                    cell.textContent = currentPlayer;
                    cell.classList.add(currentPlayer);
                    cell.classList.add('disabled');

                    moves++;

                    // Check for a winner or tie
                    if (checkWinner()) {
                        winner = currentPlayer;
                    } else if (moves === 9) {
                        winner = 'Tie';
                    }

                    // Display winner or tie message and reset game
                    if (winner) {
                        setTimeout(() => {
                            alert(winner === 'Tie' ? 'It\'s a Tie!' : `Player ${winner} wins!`);
                            resetGame();
                        }, 100);
                    } else {
                        // Switch to the next player and update turn message
                        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                        playerTurn.textContent = `${currentPlayer === 'X' ? player1Name : player2Name}'s Turn`;
                    }
                }
            });
        });

        // Function to check for a winner
        function checkWinner() {
            const winningCombos = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];

            return winningCombos.some(combo => {
                const [a, b, c] = combo;
                return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
            });
        }

        // Function to reset the game
        function resetGame() {
            cells.forEach(cell => {
                cell.textContent = '';
                cell.classList.remove('X', 'O', 'disabled');
            });
            currentPlayer = 'X';
            winner = null;
            moves = 0;
            playerTurn.textContent = '';    
            gameBoard.style.display = 'flex;';
        }
    }
});
