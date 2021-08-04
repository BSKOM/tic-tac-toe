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
      ],

      this.finised = false

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
    if (this.finished) {
      return true
    }
    return false
  }

  getWinner() {
    let curPlayer = this.player
    let arr = []
    for (let i = 0; i < 9; i++) {
      arr[i] = this.matrix[Math.floor((i) / 3)][i % 3] === curPlayer ? i + 1 : 0
    }
    for (let i = 0; i < this.win.length; i++) {
      if (this.win[i].every(item => arr.indexOf(item) !== -1)) {
        this.finised = true
        return curPlayer
      }
    }
    curPlayer = curPlayer==='x'?'o':'x'
    arr = []
    for (let i = 0; i < 9; i++) {
      arr[i] = this.matrix[Math.floor((i) / 3)][i % 3] === curPlayer ? i + 1 : 0
    }
    for (let i = 0; i < this.win.length; i++) {
      if (this.win[i].every(item => arr.indexOf(item) !== -1)) {
        return curPlayer
      }
    }
    return null
  }

  noMoreTurns() {
    // console.log('noMoreTurns', this.matrix.flat(1),  this.player)
    if (this.matrix.flat(1).indexOf(null) === -1) {
      // console.log('yes! noMoreTurns')
      return true
    }
    return false
  }

  isDraw() {
    // console.log('isDraw', this.player)
    if (this.noMoreTurns() && !this.getWinner()) {
      this.finished = true
      return true
    }
    return false
  }

  getFieldValue(rowIndex, colIndex) {
    // console.log('getFieldValue', rowIndex, colIndex, this.player)
    return this.matrix[rowIndex][colIndex]
  }
}

module.exports = TicTacToe;
