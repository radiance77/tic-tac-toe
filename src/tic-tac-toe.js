class TicTacToe {
  constructor() {
    this.ticTacToeChars = ['x', 'o'];
    this.currentChar = 'x';
    this.field = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.winner = null;
  }

  getCurrentPlayerSymbol() {
    return this.currentChar;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.field[rowIndex][columnIndex] === null) {
      this.field[rowIndex][columnIndex] = this.currentChar;
      this.currentChar =
        this.currentChar === this.ticTacToeChars[0]
          ? this.ticTacToeChars[1]
          : this.ticTacToeChars[0];
    }
  }

  isFinished() {
    return this.getWinner() || this.isDraw() ? true : false;
  }

  getWinner() {
    for (let i = 0; i < this.field.length; i++) {
      if (this.field[i].every((value) => value === this.field[i][0])) {
        this.winner = this.field[i][0];
      }
      if (this.winner) return this.winner;

      if (this.field.every((value) => value[i] === this.field[0][i])) {
        this.winner = this.field[0][i];
      }

      if (this.winner) return this.winner;
    }

    if (
      this.field[0][0] === this.field[1][1] &&
      this.field[1][1] === this.field[2][2]
    ) {
      this.winner = this.field[0][0];
    } else if (
      this.field[0][2] === this.field[1][1] &&
      this.field[1][1] === this.field[2][0]
    ) {
      this.winner = this.field[0][2];
    }

    return this.winner;
  }

  noMoreTurns() {
    let flag = true;
    for (let i = 0; i < this.field.length; i++) {
      for (let j = 0; j < this.field[i].length; j++) {
        if (this.field[i][j] === null) flag = false;
      }
    }
    return flag;
  }

  isDraw() {
    return this.noMoreTurns() && this.getWinner() === null;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
