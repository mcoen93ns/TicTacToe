const {createThePlayingBoard, playerTakesHisTurn} = require('../src/template');

describe('This is a testsuite for a game called TicTacToe.', () => {
    describe('Before the game starts, we need to have a board to play on', () => {
        it('A TicTacToe board consists of 9 positions', () => {
            var ticTacToeBoard = ''
            expect(createThePlayingBoard(ticTacToeBoard)).toEqual(['','','','','','','','','']);
        });
    });
    // describe('The board should be visible in the logging, so that we can check how the game is going', () => {
    //     it('Board is visible in the logging', () => {
    //         var ticTacToeBoard = ''
    //         createThePlayingBoard(ticTacToeBoard)
    //         expect(printTheBoardInTheLog(ticTacToeBoard)).toEqual(false)
    //     });
    // });
    describe('A player should be able to place his mark on the board', () => {
        it('Player X places his mark in the first cell ', () => {
            var ticTacToeBoard = ['', '', '', '', '', '', '', '', '']
            playerTakesHisTurn(ticTacToeBoard, 'X', 0)
            expect(ticTacToeBoard).toEqual(['X','','','','','','','',''])
        });
        it('Player O places his mark in the first cell ', () => {
            var ticTacToeBoard = ['', '', '', '', '', '', '', '', '']
            playerTakesHisTurn(ticTacToeBoard, 'O', 0)
            expect(ticTacToeBoard).toEqual(['O', '', '', '', '', '', '', '', ''])
        });
        it('Player X places his mark in the 5th cell ', () => {
            var ticTacToeBoard = ['', '', '', '', '', '', '', '', '']
            playerTakesHisTurn(ticTacToeBoard, 'X', 4)
            expect(ticTacToeBoard).toEqual(['', '', '', '', 'X', '', '', '', ''])
        });
    });
    describe('It is only allowed to place a mark in an empty cell', () => {
        it('Cell 1 = O, Player X chooses cell 1 -> false ', () => {
            var ticTacToeBoard = ['O', '', '', '', '', '', '', '', '']
            expect(playerTakesHisTurn(ticTacToeBoard, 'X', 0)).toEqual(false)
        });
        it('Cell 3 = X, Player O chooses cell 3 -> false ', () => {
            var ticTacToeBoard = ['', '', 'X', '', '', '', '', '', '']
            expect(playerTakesHisTurn(ticTacToeBoard, 'O', 2)).toEqual(false)
        });
    });
    describe('Players should switch turns', () => {
        it('Player X played, player O is the next player', () => {
            var currentPlayer = 'X'
            switchCurrentPlayer(currentPlayer)
            expect(currentPlayer).toEqual('O')
        });
    });
});

