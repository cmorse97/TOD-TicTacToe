# Tic Tac Toe

This is a project that is apart of The Odin Project's online curriculum for web development. The intention behind this project is to showcase JavaScript skills, specifically, factory functions.

# My Plan

Create a single instance of the game board by utilizing an IIFE. Set game board as an array within an object and loop through the array, pushing 'null' 9 times.

Make a 'createPlayer' factory function to make it easier to create multiple players. Assign to each player a name, symbol, and displayName (this combines player name and symbol for better display on the UI)

The flow of the game should behave like this:

1. game board starts blank (null)
2. player1 (X's) is set as currentPlayer, indicating it is their turn to make a play.
3. after player1 select's where to put their symbol (X), update game board, set currentPlayer to player2
4. Repeat step 3 with player2
5. The game controller looks for a winner by seeing if the same symbol is in a winning condition (3 in a row)
6. If neither player gets 3 in a row, the game ends in a tie.
7. When game is over, regardless of result, update result to winner (if applicable) and give option to play again
