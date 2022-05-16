function createThePlayingBoard(ticTacToeBoard) {
    ticTacToeBoard = ['', '', '', '', '', '', '', '', ''];
    return ticTacToeBoard
}

function playerTakesHisTurn(ticTacToeBoard, player, cell) {
    if (ticTacToeBoard[cell] == '') {
        ticTacToeBoard[cell] = player
        return ticTacToeBoard
    } else return false
}

function switchCurrentPlayer(currentPlayer) {
    if (currentPlayer === 'X') {
        return currentPlayer = 'O'
    } else return currentPlayer = 'X'
}

function checkHorizontalLineForWinner(ticTacToeBoard, currentPlayer) {
    if (ticTacToeBoard[0] == currentPlayer && ticTacToeBoard[1] == currentPlayer && ticTacToeBoard[2] == currentPlayer ||
        ticTacToeBoard[3] == currentPlayer && ticTacToeBoard[4] == currentPlayer && ticTacToeBoard[5] == currentPlayer ||
        ticTacToeBoard[6] == currentPlayer && ticTacToeBoard[7] == currentPlayer && ticTacToeBoard[8] == currentPlayer ){
        return 'Player '+ currentPlayer +' has won'
    } else return 'No winner, continue playing'

}

function checkVerticalLineForWinner(ticTacToeBoard, currentPlayer){
    if (ticTacToeBoard[0] == currentPlayer && ticTacToeBoard[3] == currentPlayer && ticTacToeBoard[6] == currentPlayer ||
        ticTacToeBoard[1] == currentPlayer && ticTacToeBoard[4] == currentPlayer && ticTacToeBoard[7] == currentPlayer ||
        ticTacToeBoard[2] == currentPlayer && ticTacToeBoard[5] == currentPlayer && ticTacToeBoard[8] == currentPlayer) {
        return 'Player ' + currentPlayer + ' has won'
    } else return 'No winner, continue playing'
}

function checkDiagonalLineForWinner(ticTacToeBoard, currentPlayer) {
    if (ticTacToeBoard[0] == currentPlayer && ticTacToeBoard[4] == currentPlayer && ticTacToeBoard[8] == currentPlayer ||
        ticTacToeBoard[2] == currentPlayer && ticTacToeBoard[4] == currentPlayer && ticTacToeBoard[6] == currentPlayer) {
        return 'Player ' + currentPlayer + ' has won'
    } else return 'No winner, continue playing'
}

function checkForDraw(ticTacToeBoard) {
    if (ticTacToeBoard.indexOf('') == -1) {
        return 'The game has ended in a draw'
    } else return 'No winner, continue playing'
}

module.exports = {createThePlayingBoard, playerTakesHisTurn, switchCurrentPlayer, checkHorizontalLineForWinner, checkVerticalLineForWinner, checkDiagonalLineForWinner, checkForDraw};