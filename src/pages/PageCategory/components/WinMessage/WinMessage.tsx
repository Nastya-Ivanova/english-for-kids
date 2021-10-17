import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './WinMessage.style.scss';
import { WinMessageProps } from './WinMessage.type';

export const WinMessage: React.FC<WinMessageProps> = ({ getCountErrors }) => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => history.push('/'), 3000);
  }, []);

  return (
    <div>
      {getCountErrors() === 0 && (
        <div className="stop-game stop-game--success">Win!</div>
      )}
      {getCountErrors() > 0 && (
        <div className="stop-game stop-game--failure">
          {getCountErrors()} errors
        </div>
      )}
    </div>
  );
};
