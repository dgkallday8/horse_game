import { APP_ID } from "../main"
import { Board } from "./board"
import { Html } from "./html"

export class Game {
  #counter = 0
  #currentRow: number | null = null
  #currentCol: number | null = null

  constructor(
    private _board: Board, 
    private _html: Html,
  ) {
    this._html.render(this._board)
    this.listenBoard()
   }

  listenBoard() {
    document.getElementById(APP_ID)?.addEventListener('click', event => {
      const target = event.target as HTMLElement;

      if (!target.classList.contains('cell')) return
      
      const rowIdx = target.dataset.rowIdx ? Number(target.dataset.rowIdx) : null;
      const colIdx = target.dataset.colIdx ? Number(target.dataset.colIdx) : null;
      
      if (rowIdx === null || colIdx === null) return;

      if (!this._board.isEmptyCell(rowIdx, colIdx)) return

      if (!this.isValidMove(rowIdx, colIdx)) return

      this.moveHorse(rowIdx, colIdx)
    })
  }

  moveHorse(rowIdx: number, colIdx: number) {
    this.#counter += 1;
    this.#currentRow = rowIdx;
    this.#currentCol = colIdx;
    this._board.setCell(rowIdx, colIdx, this.#counter)
    this._html.render(this._board, this.#counter)
  }

  isValidMove(row: number, col: number) {
    if (this.#currentRow !== null && this.#currentCol !== null) {
      const deltaRow = Math.abs(row - this.#currentRow);
      const deltaCol = Math.abs(col - this.#currentCol);
      
      return (deltaRow === 2 && deltaCol === 1) || (deltaRow === 1 && deltaCol === 2);
    }

    return true;
  }
}