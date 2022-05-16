const {createThePlayingBoard, playerTakesHisTurn, switchCurrentPlayer, checkHorizontalLineForWinner, checkVerticalLineForWinner, checkDiagonalLineForWinner, checkForDraw} = require('../src/template');

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
            var currentPlayerAfterTurn = switchCurrentPlayer(currentPlayer)
            expect(currentPlayerAfterTurn).toEqual('O')
        });
        it('Player O played, player X is the next player', () => {
            var currentPlayer = 'O'
            var currentPlayerAfterTurn = switchCurrentPlayer(currentPlayer)
            expect(currentPlayerAfterTurn).toEqual('X')
        });
    });
    describe('A player has won when one of the following lines contains the same marks, or the board is full', () => {
        describe('➡ - horizontal', () => {
            it('First row is filled with X marks --> X wins ', () => {
                var ticTacToeBoard = ['X', 'X', 'X', '', '', '', '', '', '']
                expect(checkHorizontalLineForWinner(ticTacToeBoard, 'X')).toEqual('Player X has won')
            });
            it('Second row is filled with O marks --> O wins ', () => {
                var ticTacToeBoard = ['', '', '', 'O', 'O', 'O', '', '', '']
                expect(checkHorizontalLineForWinner(ticTacToeBoard, 'O')).toEqual('Player O has won')
            });
            it('Third row is filled with X marks --> X wins ', () => {
                var ticTacToeBoard = ['', '', '', '', '', '', 'X', 'X', 'X']
                expect(checkHorizontalLineForWinner(ticTacToeBoard, 'X')).toEqual('Player X has won')
            });
            it('No lines complete -> no winner', () => {
                var ticTacToeBoard = ['', '', '', '', '', '', 'X', '', 'X']
                expect(checkHorizontalLineForWinner(ticTacToeBoard, 'X')).toEqual('No winner, continue playing')
            });

        });
        describe('⬇ - vertical', () => {
            it('First row filled with X marks -> X wins', () => {
                var ticTacToeBoard = ['X', '', '', 'X', '', '', 'X', '', '']
                expect(checkVerticalLineForWinner(ticTacToeBoard, 'X')).toEqual('Player X has won')
            });
            it('Second row filled with O marks -> O wins', () => {
                var ticTacToeBoard = ['', 'O', '', '', 'O', '', '', 'O', '']
                expect(checkVerticalLineForWinner(ticTacToeBoard, 'O')).toEqual('Player O has won')
            });
            it('Third row filled with O marks -> O wins', () => {
                var ticTacToeBoard = ['', '', 'O', '', '', 'O', '', '', 'O']
                expect(checkVerticalLineForWinner(ticTacToeBoard, 'O')).toEqual('Player O has won')
            });
            it('No lines complete -> no winner', () => {
                var ticTacToeBoard = ['', '', '', '', '', 'O', '', '', 'O']
                expect(checkVerticalLineForWinner(ticTacToeBoard, 'O')).toEqual('No winner, continue playing')
            });
        });
        describe('↘ or ↙ - diagonal', () => {
            it('↘ filled with X marks --> X wins', () => {
                var ticTacToeBoard = ['X', '', '', '', 'X', '', '', '', 'X']
                expect(checkDiagonalLineForWinner(ticTacToeBoard, 'X')).toEqual('Player X has won')
            });
            it('↙ filled with O marks --> O wins', () => {
                var ticTacToeBoard = ['', '', 'O', '', 'O', '', 'O', '', '']
                expect(checkDiagonalLineForWinner(ticTacToeBoard, 'O')).toEqual('Player O has won')
            });
            it('No lines complete -> no winner', () => {
                var ticTacToeBoard = ['', '', '', '', 'O', '', 'O', '', '']
                expect(checkDiagonalLineForWinner(ticTacToeBoard, 'O')).toEqual('No winner, continue playing')
            });

        });
        describe('All cells are filled -> draw', () => {
            it('The board is full with marks -> draw', () => {
                var ticTacToeBoard = ['O', 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'X']
                expect(checkForDraw(ticTacToeBoard)).toEqual('The game has ended in a draw')
            });
            it('The board is not yet full -> no winner', () => {
                var ticTacToeBoard = ['', 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'X']
                expect(checkForDraw(ticTacToeBoard)).toEqual('No winner, continue playing')
            });
        });
    });
    
});

