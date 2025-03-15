import { Board } from './components/Board';
import { Layout } from './components/Layout';
import { Game } from './components/Game';
import './style.css';

const board = new Board();
const html = new Layout();
new Game(board, html);
