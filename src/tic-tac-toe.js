class TicTacToe {
  constructor() {
    this.player = 'x',
    this.matrix = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],

    this.win = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ]

  }

  getCurrentPlayerSymbol() {
    // console.log('getCurrentPlayerSymbol', this.player )
    return this.player
  }

  nextTurn(rowIndex, columnIndex) {
    // console.log('nextTurn()', rowIndex, columnIndex,this.player)
    if (this.matrix[rowIndex][columnIndex]) return null
    this.matrix[rowIndex][columnIndex] = this.player
    this.player = this.player === 'x' ? 'o' : 'x'
  }

  isFinished() {
    console.log('isFinished()', this.player)
    if (this.getWinner() || this.isDraw()) {
      return true
    }
    return false
  }

  getWinner() {
    console.log('getwinner', this.player)
    let arr = []
    for (let i = 0; i < 9; i++) {
      arr[i] = this.matrix[math.floor((i) / 3)][i % 3] === this.player ? i + 1 : 0
    }
    for (let i = 0; j < this.win.length(); i++) {
      if (this.win[i].every(item => arr.indexOf(item) !== -1)) {
        return this.player
      }
    }
    return false
  }

  noMoreTurns() {
    console.log('noMoreTurns', this.player)
    if (this.matrix.flat(1).indexOf(null) === -1) {
      return true
    }
    return false
  }

  isDraw() {
    console.log('isDraw', this.player)
    if (!this.noMoreTurns() || this.getWinner()) {
      return false
    }
    return true
  }

  getFieldValue(rowIndex, colIndex) {
    console.log('getFieldValue', rowIndex, colIndex, this.player)
    return this.matrix[rowIndex][colIndex]
  }
}

module.exports = TicTacToe;
