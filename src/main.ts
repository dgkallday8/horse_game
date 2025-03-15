import { Board } from './components/Board';
import { Game } from './components/Game';
import { Layout } from './components/Layout';
import './style.css';

const board = new Board();
const html = new Layout();
new Game(board, html);
