# Tic Tac Toe

A simple Tic Tac Toe game implemented using HTML, CSS, and vanilla JavaScript, utilizing factory functions for game logic.

## How to Play

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/cmorse97/TOD-TicTacToe.git
    ```
2.  **Open `index.html`** in your web browser.
3.  **Click the "Start Game" button.** The button's text will change to "Play Again" for subsequent games.
4.  **Players take turns clicking on the empty cells** on the game board to place their symbol ('X' or 'O').
5.  The game continues until one player achieves three of their symbols in a row (horizontally, vertically, or diagonally), or all nine cells are filled resulting in a tie.
6.  **After a game ends, click the "Play Again" button** to start a new game.

## Features

- Clean and intuitive user interface.
- Game logic implemented using JavaScript factory functions for organized and maintainable code.
- Keeps track of the current player's turn.
- Detects win and tie conditions.
- Allows for starting new games.

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla - no external libraries)

## Code Structure

The JavaScript code is organized using the following pattern:

- **DOM Elements:** Variables to reference key HTML elements.
- **DOM Events:** Event listeners for user interactions (e.g., clicking the start button and game cells).
- **`gameBoard` Module (IIFE):** Encapsulates the game board state (the array) and functions to interact with it (getting the board, placing a marker, resetting the board).
- **`createPlayer` Factory Function:** Creates player objects with a name and symbol.
- **`createGame` Factory Function:** Contains the core game logic, including:
  - Managing players and the current turn.
  - Handling player moves on the board.
  - Checking for win and tie conditions.
  - Updating the display text to inform players.
  - Starting and ending games.

## Potential Future Enhancements

- Implement a way for players to choose their names or symbols.
- Add a scorekeeping system.
- Improve the visual feedback for valid and invalid moves.
- Consider implementing an AI opponent for single-player mode.

## Author

Caleb Morse - cmorse97
