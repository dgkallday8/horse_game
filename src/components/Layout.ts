import { Board } from './Board';

export class Layout {
  static APP_ID = 'app';
  static TOOLBAR_ID = 'toolbar';
  #htmlElement!: HTMLElement;
  #resetButton!: HTMLButtonElement;
  #select!: HTMLSelectElement | null;

  constructor() {
    const el = document.getElementById(Layout.APP_ID);

    if (!el) {
      throw new Error('app element not found');
    }

    this.#htmlElement = el;
    this.createToolbar();
  }

  render(
    board: Board,
    activeIdx = 0,
    possibleMoves: { row: number; col: number }[] = []
  ) {
    this.#htmlElement.textContent = '';
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

        if (
          activeIdx &&
          activeIdx === cell &&
          Math.pow(board.getSize(), 2) !== activeIdx
        ) {
          cellDiv.classList.add('active');
        }

        if (
          possibleMoves.some(
            (move) => move.row === rowIdx && move.col === colIdx
          )
        ) {
          cellDiv.classList.add('possible_move');
        }

        if (
          possibleMoves.length === 0 &&
          activeIdx &&
          grid.flat().some((cell) => cell === 0)
        ) {
          boardDiv.classList.add('fail');
        }

        rowDiv.appendChild(cellDiv);
      });
      boardDiv.appendChild(rowDiv);
    });
    this.#htmlElement.appendChild(boardDiv);
  }

  createToolbar() {
    const toolbar = document.getElementById(Layout.TOOLBAR_ID);

    if (!toolbar) return;

    if (!this.#resetButton) {
      this.#resetButton = document.createElement('button');
      this.#resetButton.textContent = 'Сбросить';
      toolbar.appendChild(this.#resetButton);
    }

    if (!this.#select) {
      this.#select = document.createElement('select');
      for (let i = 5; i <= 10; i++) {
        const option = document.createElement('option');
        option.value = i.toString();
        option.textContent = `${i}x${i}`;
        this.#select.appendChild(option);
      }
      toolbar.appendChild(this.#select);
    }
  }

  resetBtn(callbackFn: () => void) {
    if (this.#resetButton) {
      this.#resetButton.onclick = callbackFn;
    }
  }

  onBoardSizeChange(callbackFn: (size: number) => void) {
    if (this.#select) {
      this.#select.onchange = (event) => {
        const target = event.target as HTMLSelectElement;
        const newSize = Number(target.value);
        callbackFn(newSize);
      };
    }
  }
}
