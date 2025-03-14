export class Board {
  #size: number;
  #grid: number[][];

  constructor(size: number = 5) {
    this.#size = size
    this.#grid = this.makeGrid()

  }

  makeGrid() {
    const field = []

    for(let i = 0; i < this.#size; i++) {
      const row = []
      
      for (let j = 0; j < this.#size; j++) {
        row.push(0)
      }
      field.push(row)
    }

    return field;
  }

  isEmptyCell(row: number, col: number) {
    return this.#grid[row][col] === 0;
  }

  setCell(row: number, col: number, value: number) {
    this.#grid[row][col] = value
  }

  getGrid() {
    return this.#grid
  }
}