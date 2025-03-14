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

  isEmptyCell(x: number, y: number) {
    this.#grid[x][y] === 0;
  }

  setCell(x: number, y: number, value: number) {
    this.#grid[x][y] = value
  }

  getGrid() {
    return this.#grid
  }
}