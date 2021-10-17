import React, { useCallback, useEffect, useState } from 'react';
import { WordsList } from './components/WordsList';
import { categories } from './PageCategory.data';
import {
  Category,
  PageCategoryProps,
  Words,
  TrackName,
} from './PageCategory.types';
import './PageCategory.style.scss';
import {
  getCountErrors,
  playAudio,
  playSuccessError,
  shuffle,
} from './PageCategory.utils';
import { GamePartOfWordList } from './components/GamePartOfWordList';
import { WinMessage } from './components/WinMessage';
import { useValueElementInScore } from './PageCategory.hooks';

export const PageCategory: React.FC<PageCategoryProps> = ({
  categoryName,
  gameMode,
  isStartGame,
  setIsStartGame,
  resetGameMode,
}) => {
  const category = categories.find(
    ({ name }) => name === categoryName
  ) as Category;

  const [currentTrackNumber, setCurrentTrackNumber] = useState(0);
  const [shuffledWords, setShuffledWords] = useState<Words[]>([]);
  const [shuffledTracks, setShuffledTracks] = useState<Words[]>([]);
  const [showWinMessage, setShowWinMessage] = useState(false);
  const {
    valueElementInScore,
    setValueElementInScore,
    addSuccessTry,
    addFailedTry,
  } = useValueElementInScore();

  useEffect(() => {
    const shuffleWords = shuffle(category.words);
    setShuffledTracks(shuffle([...shuffleWords]));
    setShuffledWords(shuffleWords);
  }, [category]);

  const startGame = useCallback(() => {
    const currentTrack = 0;
    setCurrentTrackNumber(currentTrack);

    setValueElementInScore([]);

    setIsStartGame(true);
    playAudio(shuffledTracks[currentTrack].eng);
  }, [playAudio, shuffledTracks]);

  const stopGame = useCallback(() => {
    setShowWinMessage(true);
    setIsStartGame(false);
    if (getCountErrors(valueElementInScore) === 0) {
      playSuccessError(TrackName.successTrack);
    } else {
      playSuccessError(TrackName.failureTrack);
    }
    resetGameMode(false);
  }, [playSuccessError, valueElementInScore]);

  const compareAudioToWord = useCallback(
    (eng: string, disabledImg: () => void) => {
      if (!isStartGame) return;

      if (eng === shuffledTracks[currentTrackNumber].eng) {
        disabledImg();
        playSuccessError(TrackName.correctTrack);
        setCurrentTrackNumber((prevCount) => prevCount + 1);
        setTimeout(
          () => playAudio(shuffledTracks[currentTrackNumber + 1].eng),
          1500
        );
        addSuccessTry();
      } else {
        playSuccessError(TrackName.errorTrack);
        addFailedTry();
      }

      if (shuffledTracks.length - 1 === currentTrackNumber) {
        stopGame();
      }
    },
    [
      isStartGame,
      playSuccessError,
      addSuccessTry,
      addFailedTry,
      shuffledTracks,
      currentTrackNumber,
    ]
  );

  return (
    <div className="page-category">
      <h3 className="page-category__header">{categoryName}</h3>
      {!showWinMessage && shuffledTracks.length && (
        <div className="words-list-wrap">
          <WordsList
            words={shuffledWords}
            gameMode={gameMode}
            compareAudioToWord={compareAudioToWord}
          />
          {gameMode && (
            <GamePartOfWordList
              isStartGame={isStartGame}
              startGame={startGame}
              valueElementInScore={valueElementInScore}
              eng={shuffledTracks[currentTrackNumber].eng}
            />
          )}
        </div>
      )}
      {showWinMessage ? (
        <WinMessage
          getCountErrors={() => getCountErrors(valueElementInScore)}
        />
      ) : null}
    </div>
  );
};
