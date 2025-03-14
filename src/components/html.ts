import { Board } from "./board"

export class Html {
  #htmlElement!: HTMLElement;

  constructor(id: string) {
    const el = document.getElementById(id)

    if (!el) {
      throw new Error('app element not found');
    }

    this.#htmlElement = el

  }
  
  render(board: Board) {
    this.#htmlElement.innerHTML = ''
    const grid = board.getGrid()

    const boardDiv = document.createElement('div')
    boardDiv.classList.add('board')

    grid.forEach((row, xIndex) => {
      const rowDiv = document.createElement('div')
      rowDiv.classList.add('row')
      row.forEach((cell, yIndex) => {
        const cellDiv = document.createElement('div')
        cellDiv.dataset.x = xIndex.toString()
        cellDiv.dataset.y = yIndex.toString()
        cellDiv.classList.add('cell')

        if (cell !== 0) {
          cellDiv.innerText = cell.toString()
          cellDiv.classList.add('selected')
        }

        rowDiv.appendChild(cellDiv)
      })
      boardDiv.appendChild(rowDiv)
    })
    this.#htmlElement.appendChild(boardDiv)
  }
}