# Kata TicTacToe
UAT Scenarios + atomic behaviours per phase:
1 – Game Board Creation phase:
Game Board Creation…
| |
-+-+-
| |
-+-+-
| |
Board Created.
The game will start with player X

Atomic behaviors:
- Creating an empty board
- Printing the board in the log

2 – Player X won with a vertical line
Player X:
X| |
-+-+-
X|O|
-+-+-
X| |O
PLAYER X WON!

Atomic behaviors identified:
- Player can place his mark in a cell
- Player can only place his mark in an empty cell
- Players take turns
- Determining that a vertical line is filled with one player's symbols --> win

3 – Player O won with a horizontal line
Player O:
X| |X
-+-+-
O|O|O
-+-+-
X| |
PLAYER O WON!

Atomic behaviors identified:
- Determining that a horizontal line is filled with one player's symbols --> win

4 – Player X won with a diagonal line
Player X:
X| |
-+-+-
O|X|
-+-+-
O| |X
PLAYER X WON!

Atomic behaviors identified:
- Determining that a diagonal line is filled with one player's symbols --> win

5 – Game ends with a draw
Player X:
X|O|X
-+-+-
O|O|X
-+-+-
X|X|O
GAME ENDS WITH A DRAW!

Atomic behaviors identified:
- Determining that the board is filled
- Determining that there is no winner and thus a draw


Overview of atomic behaviors:
✔ - Creating an empty board
    ✔ - Valid board: ['','','','','','','','','']

- Printing the board in the log
⛔- Valid board -> print in log -> NO CLUE ON HOW TO DO THIS
                    | |
                    -+-+-
                    | |
                    -+-+-
                    | |

- Player can place his mark in a cell
   ✔ - ['','','','','','','','',''] -> Player X -> ['X','','','','','','','','']
   ✔ - ['','','','','','','','',''] -> Player O -> ['O','','','','','','','','']
   ✔ - ['','','','','','','','',''] -> Player X, cell 5 -> ['','','','','X','','','','']

- Player can only place his mark in an empty cell
   ✔ - ['X','','','','','','','',''] -> Player O, cell 1 -> false
   ✔ - ['','','O','','','','','',''] -> Player X, cell 3 -> false

- Players take turns
    🛠- X -> O
    - O -> X

- Determining that a vertical line is filled with one player's symbols --> win
- Determining that a horizontal line is filled with one player's symbols --> win
- Determining that a diagonal line is filled with one player's symbols --> win
- Determining that the board is filled
- Determining that there is no winner and thus a draw