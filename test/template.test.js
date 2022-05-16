const { createThePlayingBoard, printTheBoardInTheLog } = require('../src/template');

describe('This is a testsuite for a game called TicTacToe.', () => {
    describe('Before the game starts, we need to have a board to play on', () => {
        it('A TicTacToe board consists of 9 positions', () => {
            var ticTacToeBoard = ''
            expect(createThePlayingBoard(ticTacToeBoard)).toEqual(['','','','','','','','','']);
        });
    });
    describe('The board should be visible in the logging, so that we can check how the game is going', () => {
        it('Board is visible in the logging', () => {
            var ticTacToeBoard = ''
            createThePlayingBoard(ticTacToeBoard)
            expect(printTheBoardInTheLog(ticTacToeBoard)).toEqual(true)
        });
    });

});