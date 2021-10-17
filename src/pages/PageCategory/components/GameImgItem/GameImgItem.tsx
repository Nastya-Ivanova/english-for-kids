import React, { useCallback, useState } from 'react';
import * as IMAGES from 'asset';
import { GameImgItemProps, GameItemImg } from './GameImgItem.types';
import './GameImgItem.style.scss';
import { getGameImgItemClassName } from './GameImgItem.utils';

export const GameImgItem: React.FC<GameImgItemProps> = ({
  eng,
  compareAudioToWord,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const clickByImg = useCallback(() => {
    compareAudioToWord(eng, () => setIsDisabled(true));
  }, [eng, compareAudioToWord]);

  const className = getGameImgItemClassName(isDisabled);

  return (
    <div className="game-img">
      <img
        className={className}
        src={(IMAGES as GameItemImg)[eng]}
        onClick={clickByImg}
        onKeyPress={clickByImg}
        role="presentation"
        alt=""
      />
    </div>
  );
};
