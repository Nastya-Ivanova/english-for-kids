import React from 'react';
import './Score.style.scss';
import { ScoreProps } from './Score.types';

export const Score: React.FC<ScoreProps> = ({ numStar }) => (
  <div className="score">
    {numStar.map((item, index) =>
      item ? (
        <span key={index} className="score__circle" />
      ) : (
        <span key={index} className="score__circle score__circle--zero" />
      )
    )}
  </div>
);
