import { Board } from './components/board';
import { Game } from './components/game';
import { Html } from './components/html';
import './style.css';

export const APP_ID = 'app';

const board = new Board();
const html = new Html(APP_ID);
new Game(board, html);
