ticTacToe = [
  'X', 'O', 'X',
  'X', ' ', 'O',
  'X', 'O', ' '
];

getOnlyXs = function (board) {
  result = [];

  for (var i = 0; i < board.length; i++) {
    if (board[i] === 'X') {
      result.push('X');
    } else {
      result.push(undefined);
    }
  }

  return result;
};

getOnlyOs = function (board) {
  result = [];

  for (var i = 0; i < board.length; i++) {
    if (board[i] === 'O') {
      result.push('O');
    } else {
      result.push(undefined);
    }
  }

  return result;
};

getFieldsValues = function (board) {
  result = [];

  for (var i = 0; i < board.length; i++) {
    if (board[i]) {
      result.push(2 ** (8 - i));
    } else {
      result.push(0);
    }
  }

  return result;
};

getScore = function (board) {
  result = 0;

  for (var i = 0; i < board.length; i++) {
    result += board[i];
  }

  return result;
};

ticTacToeWithOnlyXs = getOnlyXs(ticTacToe);
ticTacToeWithNumbersX = getFieldsValues(ticTacToeWithOnlyXs);
currentScoreX = getScore(ticTacToeWithNumbersX);

console.log(currentScoreX);

ticTacToeWithOnlyOs = getOnlyOs(ticTacToe);
ticTacToeWithNumbersO = getFieldsValues(ticTacToeWithOnlyOs);
currentScoreO = getScore(ticTacToeWithNumbersO);

console.log(currentScoreO);
