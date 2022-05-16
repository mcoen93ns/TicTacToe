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

module.exports = {createThePlayingBoard, playerTakesHisTurn};