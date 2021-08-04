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

      this.winner = ''

  }

  getCurrentPlayerSymbol() {
    return this.player
  }

  nextTurn(rowIndex, columnIndex) {
 
    if (this.matrix[rowIndex][columnIndex]) return null
    this.matrix[rowIndex][columnIndex] = this.player
    this.player = this.player === 'x' ? 'o' : 'x'
  }

  isFinished() {
    this.getWinner()
    let draw = this.isDraw()
    if (this.winner === 'x' || this.winner === 'o' || draw){
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
     
        this.winner = curPlayer
        return curPlayer
      }
    }
    curPlayer = curPlayer === 'x' ? 'o' : 'x'
    arr = []
    for (let i = 0; i < 9; i++) {
      arr[i] = this.matrix[Math.floor((i) / 3)][i % 3] === curPlayer ? i + 1 : 0
    }
    for (let i = 0; i < this.win.length; i++) {
      if (this.win[i].every(item => arr.indexOf(item) !== -1)) {
   
        this.winner = curPlayer
        return curPlayer
      }
    }
    return null
  }

  noMoreTurns() {
    if (this.matrix.flat(1).indexOf(null) === -1) {
      return true
    }
    return false
  }

  isDraw() {
    if (this.noMoreTurns() && !this.getWinner()) {
      return true
    }
    return false
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex]
  }
}

module.exports = TicTacToe;
