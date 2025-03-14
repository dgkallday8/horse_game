import { APP_ID } from "../main"
import { Board } from "./board"
import { Html } from "./html"

export class Game {
  private counter = 0

  constructor(
    private _board: Board, 
    private _html: Html,
  ) { }

  listenBoard() {
    document.getElementById(APP_ID)?.addEventListener('click', event => {
      const target = event.target as HTMLElement;
      const x = target.dataset.x || '0'
      const y = target.dataset.y || '0'

      this.counter += 1;

      this._board.setCell(+x, +y, this.counter)
      this._html.render(this._board)
    })
  }

  startGame() {
    this.listenBoard()
    this._html.render(this._board)
  }
}