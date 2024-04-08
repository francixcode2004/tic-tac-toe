const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let currentPlayer = 'X';

function makeMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementById('board').children[row * 3 + col].innerText = currentPlayer;
        if (checkWin()) {
            document.getElementById('winnerText').innerText = currentPlayer + ' wins!';
            document.getElementById('myModal').style.display = "block";
        } else if (checkDraw()) {
            document.getElementById('winnerText').innerText = 'It\'s a draw!';
            document.getElementById('myModal').style.display = "block";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            
            return true;
        }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            return true;
        }
    }
    // Check diagonals
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return true;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return true;
    }
    return false;
}

function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

function resetGame() {
    resetBoard();
    document.getElementById('myModal').style.display = "none";
}

function resetBoard() {
    board.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            board[rowIndex][colIndex] = '';
        });
    });
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
    currentPlayer = 'X';
}
