import { Board } from './components/board';
import { Game } from './components/game';
import { Html } from './components/html';
import './style.css';

const board = new Board();
const html = new Html();
new Game(board, html);
