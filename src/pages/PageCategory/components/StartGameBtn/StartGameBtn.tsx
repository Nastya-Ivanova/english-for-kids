import React from 'react';
import './StartGameBtn.style.scss';
import { StartGameBtnProps } from './StartGameBtn.types';

export const StartGameBtn: React.FC<StartGameBtnProps> = ({ startGame }) => (
  <button className="start-game-btn" onClick={startGame}>
    Start Game
  </button>
);
