import { Board } from './components/Board';
import { Layout } from './components/Layout';
import { Game } from './components/Game';
import './style.css';

const board = new Board();
const layout = new Layout();
new Game(board, layout);
