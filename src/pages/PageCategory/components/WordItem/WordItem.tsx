import './WordItem.style.scss';
import * as IMAGES from 'asset';
import React, { useCallback, useState } from 'react';
import { playAudio } from 'pages/PageCategory/PageCategory.utils';
import { WordItemImg, WordItemProps } from './WordItem.types';
import { getWordItemClassName } from './WordItem.utils';

export const WordItem: React.FC<WordItemProps> = ({ eng, rus }) => {
  const [isBackSideCard, setIsBackSideCard] = useState(false);

  const setBackStateCard = () => setIsBackSideCard(!isBackSideCard);

  const clickByFrontWordItem = useCallback(() => playAudio(eng), [eng]);

  const classNameFront = getWordItemClassName(
    'words-list__item-wrap words-list__item-wrap--front',
    isBackSideCard
  );
  const classNameBack = getWordItemClassName(
    'words-list__item-wrap words-list__item-wrap--back',
    isBackSideCard
  );

  return (
    <div className="words-list__item">
      <div
        className={classNameFront}
        onClick={clickByFrontWordItem}
        onKeyPress={clickByFrontWordItem}
        role="presentation"
      >
        <img
          className="words-list__img"
          src={(IMAGES as WordItemImg)[eng]}
          alt=""
        />
        <p className="words-list__text">
          {eng}
          <button
            className="words-list__btn-rotate"
            onClick={setBackStateCard}
          ></button>
        </p>
      </div>

      <div
        className={classNameBack}
        onMouseLeave={setBackStateCard}
        onBlur={setBackStateCard}
      >
        <img
          className="words-list__img"
          src={(IMAGES as WordItemImg)[eng]}
          alt=""
        />
        <p className="words-list__text">{rus}</p>
      </div>
    </div>
  );
};
