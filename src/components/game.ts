import { APP_ID } from "../main"
import { Board } from "./board"
import { Html } from "./html"

export class Game {
  #counter = 0

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
      
      const x = Number(target.dataset.x || '0')
      const y = Number(target.dataset.y || '0')

      if (!this._board.isEmptyCell(x, y)) return

      this.#counter += 1;
      this._board.setCell(x, y, this.#counter)
      this._html.render(this._board)
    })
  }
}