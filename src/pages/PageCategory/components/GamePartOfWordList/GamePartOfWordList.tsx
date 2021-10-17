import { playAudio } from 'pages/PageCategory/PageCategory.utils';
import { RepeatBtn } from '../RepeatBtn';
import { Score } from '../Score';
import { StartGameBtn } from '../StartGameBtn';
import { GamePartOfWordListProps } from './GamePartOfWordList.type';
import './GamePartOfWordList.style.scss';

export const GamePartOfWordList: React.FC<GamePartOfWordListProps> = ({
  isStartGame,
  startGame,
  valueElementInScore,
  eng,
}) => {
  return !isStartGame ? (
    <StartGameBtn startGame={startGame} />
  ) : (
    <div className="score-repeat-wrap">
      <Score numStar={valueElementInScore} />
      <RepeatBtn repeatAudio={() => playAudio(eng)} />
    </div>
  );
};
