export class Board {
  #size: number;
  #grid: number[][];

  constructor(size: number = 5) {
    this.#size = size;
    this.#grid = this.makeGrid();
  }

  makeGrid() {
    return Array.from({ length: this.#size }, () => Array(this.#size).fill(0));
  }

  isEmptyCell(row: number, col: number) {
    return this.#grid[row][col] === 0;
  }

  setCell(row: number, col: number, value: number) {
    this.#grid[row][col] = value;
  }

  getGrid() {
    return this.#grid;
  }

  getSize() {
    return this.#size;
  }

  resetBoard() {
    this.#grid = this.makeGrid();
  }
}
