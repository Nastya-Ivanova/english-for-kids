import './ToggleBtn.style.scss';
import { ToggleBtnProps } from './ToggleBtn.types';
import { getToggleBtnClassName } from './ToggleBtn.utils';

export const ToggleBtn: React.FC<ToggleBtnProps> = ({
  setIsGameMode,
  gameMode,
  setIsStartGame,
}) => (
  <div className="toggle">
    <button
      onClick={() => {
        setIsGameMode(false);
        setIsStartGame(false);
      }}
      className={getToggleBtnClassName(!gameMode)}
    >
      Train
    </button>
    <button
      onClick={() => setIsGameMode(true)}
      className={getToggleBtnClassName(gameMode)}
    >
      Play
    </button>
  </div>
);
