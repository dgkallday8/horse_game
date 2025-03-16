import { Board } from './components/Board';
import { Game } from './components/Game';
import { Layout } from './components/Layout';
import './style.css';

const board = new Board();
const layout = new Layout();
new Game(board, layout);
