import { Board } from './board';

export class Html {
  static APP_ID = 'app';
  #htmlElement!: HTMLElement;

  constructor(id: string) {
    const el = document.getElementById(id);

    if (!el) {
      throw new Error('app element not found');
    }

    this.#htmlElement = el;
  }

  render(
    board: Board,
    activeIdx = 0,
    possibleMoves: { row: number; col: number }[] = []
  ) {
    this.#htmlElement.innerHTML = '';
    const grid = board.getGrid();

    const boardDiv = document.createElement('div');
    boardDiv.classList.add('board');

    grid.forEach((row, rowIdx) => {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');
      row.forEach((cell, colIdx) => {
        const cellDiv = document.createElement('div');
        cellDiv.dataset.rowIdx = rowIdx.toString();
        cellDiv.dataset.colIdx = colIdx.toString();
        cellDiv.classList.add('cell');

        if (cell !== 0) {
          cellDiv.innerText = cell.toString();
          cellDiv.classList.add('selected');
        }

        if (activeIdx && activeIdx === cell) {
          cellDiv.classList.add('active');
        }

        if (
          possibleMoves.some(
            (move) => move.row === rowIdx && move.col === colIdx
          )
        ) {
          cellDiv.classList.add('possible_move');
        }

        rowDiv.appendChild(cellDiv);
      });
      boardDiv.appendChild(rowDiv);
    });
    this.#htmlElement.appendChild(boardDiv);
  }
}
