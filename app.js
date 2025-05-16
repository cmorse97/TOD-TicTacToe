// Game Board
const gameBoard = (() => {
	const board = Array(9).fill(null)
	const getBoard = () => board
	const placeMarker = (index, marker) => {
		if (board[index] === null) {
			board[index] = marker
			return true
		}
		return false
	}
	const resetBoard = () => board.fill(null)
	return { getBoard, placeMarker, resetBoard }
})()

// Player Factory
const createPlayer = (name, symbol) => {
	return { name, symbol }
}

const createGame = () => {
	const { getBoard, resetBoard, placeMarker } = gameBoard
	const player1 = createPlayer('Player 1', 'X')
	const player2 = createPlayer('Player 2', 'O')
	let currPlayer = player1

	// Start game
	const start = () => {
		console.log(
			`${currPlayer.name}, it's your turn. You are ${currPlayer.symbol}'s`
		)
		console.log(getBoard())
	}

	// Player makes a move
	const makeMove = () => {
		const selectSquare = prompt('Please select a square (0-8)')
		const index = parseInt(selectSquare)

		if (index < 0 || index > 8) {
			console.log('Invalid input. Please enter a number between 0 and 8')
			makeMove()
			return
		}

		if (!placeMarker(index, currPlayer.symbol)) {
			console.log(
				'That square is already taken, please select a different square'
			)
			makeMove()
			return
		}

		console.log(getBoard())
		checkForWin()
		switchPlayer()
		console.log(
			`${currPlayer.name}, now it's your turn. You are ${currPlayer.symbol}`
		)
	}

	// Switch turns
	const switchPlayer = () => {
		currPlayer = currPlayer === player1 ? player2 : player1
	}

	// Check for win
	const checkForWin = () => {
		const winConditions = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		]

		const board = getBoard()
		return winConditions.some(condition =>
			condition.every(index => board[index] === currPlayer.symbol)
		)
	}

	// Check for tie
	const checkForTie = () => {
		return getBoard().every(cell => cell !== null)
	}

	// Game over
	const gameOver = winner => {
		if (winner) {
			console.log(`${winner.name} wins!`)
		} else {
			console.log(`It's a tie!`)
		}

		resetBoard()
		console.log(getBoard())
	}

	// Single round
	const playRound = () => {
		makeMove()
		if (checkForWin()) {
			gameOver(currPlayer)
			return true
		}
		if (checkForTie()) {
			gameOver(null)
			return true
		}
		return false
	}

	// Start the game
	const startGame = () => {
		start()
		let gameIsOver = false
		while (!gameIsOver) {
			gameIsOver = playRound()
		}
	}

	return { start: startGame, makeMove, gameOver }
}

const game = createGame()
game.start()
