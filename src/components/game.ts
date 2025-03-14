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
      
      const rowIdx = Number(target.dataset.rowIdx) || 0
      const colIdx = Number(target.dataset.colIdx) || 0

      if (!this._board.isEmptyCell(rowIdx, colIdx)) return

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
}