ticTacToe = [
  'X', 'O', 'X',
  'X', ' ', 'O',
  'X', 'O', ' '
];

currentScoreX = ticTacToe.
  map(item => item === 'X' ? 'X' : undefined).
  map((item, i) => item ? 2 ** (8 - i) : 0).
  reduce((sum, i) => sum + i);

console.log(currentScoreX);

currentScoreO = ticTacToe.
  map(item => item === 'O' ? 'O' : undefined).
  map((item, i) => item ? 2 ** (8 - i) : 0).
  reduce((sum, i) => sum + i);

console.log(currentScoreO);
