// DOM Elements
const startGameBtn = document.getElementById('startGame')
const gameBoardDiv = document.getElementById('gameBoard')
const gameGridDiv = document.getElementById('gameGrid')
const gameCellList = document.querySelectorAll('.cell')
const displayText = document.getElementById('displayText')

// Game Board Module
const gameBoard = (() => {
	const board = Array(9).fill(null) // Create an array with 8 indecies
	const getBoard = () => [...board] // Returns copy of board array
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
const createPlayer = (name, symbol) => ({ name, symbol })

// Game Controller Factory
const createGame = () => {
	const player1 = createPlayer('Player 1', 'X')
	const player2 = createPlayer('Player 2', 'O')
	let currPlayer = player1
	let isGameActive = false
	const { getBoard, placeMarker, resetBoard } = gameBoard

	// DRY - prevents repetitve update of display text
	const updateDisplayText = () => {
		displayText.textContent = `${currPlayer.name}, it's your turn. You are ${currPlayer.symbol}'s`
	}

	// Switch turns
	const switchPlayer = () => {
		currPlayer = currPlayer === player1 ? player2 : player1
		updateDisplayText()
	}

	// --- CHECK FOR WIN/TIE ---
	const checkForWin = () => {
		const board = getBoard()
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

		return winConditions.some(condition =>
			condition.every(index => board[index] === currPlayer.symbol)
		)
	}

	const checkForTie = () => getBoard().every(cell => cell !== null)

	// Player makes a move
	const handlePlayerMove = e => {
		const index = parseInt(e.target.dataset.index)
		const marker = currPlayer.symbol
		const cell = e.target

		if (!isNaN(index) && placeMarker(index, marker)) {
			cell.textContent = marker

			if (checkForWin()) {
				gameOver(currPlayer)
			} else if (checkForTie()) {
				gameOver(null)
			} else {
				switchPlayer()
			}
		} else if (!isNaN(index)) {
			displayText.textContent =
				'Invalid Move! That space is already taken, try again!'
		}
	}

	// Start the game
	const startGame = () => {
		isGameActive = true
		startGameBtn.classList.add('hidden')
		displayText.classList.remove('hidden')
		resetBoard()
		gameCellList.forEach(cell => {
			cell.textContent = '' // Clear the UI
			cell.addEventListener('click', handlePlayerMove, { once: true })
		})
		currPlayer = player1
		updateDisplayText()
		startGameBtn.textContent = 'Play Again'
	}

	// Game over
	const gameOver = winner => {
		isGameActive = false
		if (winner) {
			displayText.textContent = `${winner.name} wins!`
		} else {
			displayText.textContent = `It's a tie!`
		}

		startGameBtn.classList.remove('hidden')
		gameCellList.forEach(cell => {
			cell.removeEventListener('click', handlePlayerMove)
		})
	}

	return { startGame }
}

const game = createGame()
startGameBtn.addEventListener('click', game.startGame)
