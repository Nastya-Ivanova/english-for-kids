import { WordItem } from '../WordItem';
import { WordsListProps } from './WordsList.types';
import './WordsList.style.scss';
import { GameImgItem } from '../GameImgItem';

export const WordsList: React.FC<WordsListProps> = ({
  words,
  gameMode,
  compareAudioToWord,
}) => {
  return (
    <div className="words-list">
      {words.map((word) => {
        return gameMode ? (
          <GameImgItem
            key={word.eng}
            eng={word.eng}
            compareAudioToWord={compareAudioToWord}
          />
        ) : (
          <WordItem key={word.eng} eng={word.eng} rus={word.rus} />
        );
      })}
    </div>
  );
};
