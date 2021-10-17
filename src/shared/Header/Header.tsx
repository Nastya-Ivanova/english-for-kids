import { ToggleBtn } from './ToggleBtn';
import './Header.style.scss';
import { MenuWrapper } from './MenuWrapper/MenuWrapper';
import { HeaderProps } from './Header.types';

export const Header: React.FC<HeaderProps> = ({
  setIsGameMode,
  gameMode,
  setIsStartGame,
}) => (
  <div className="header">
    <MenuWrapper
      setIsGameMode={setIsGameMode}
      setIsStartGame={setIsStartGame}
    />
    <ToggleBtn
      setIsGameMode={setIsGameMode}
      gameMode={gameMode}
      setIsStartGame={setIsStartGame}
    />
  </div>
);
