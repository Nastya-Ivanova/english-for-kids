import './Menu.style.scss';
import onClickOutside from 'react-onclickoutside';
import { NavLink } from 'react-router-dom';
import { getPath } from 'shared/utils/getPath';
import { categories } from './Menu.data';
import { MenuProps } from './Menu.types';

const Menu: React.FC<MenuProps> = ({
  closeMenu,
  setIsGameMode,
  setIsStartGame,
}) => {
  return (
    <nav className="menu-wrapper__menu">
      <NavLink
        exact to="/"
        className="menu-wrapper__NavLink"
        onClick={() => {
          closeMenu();
          setIsGameMode(false);
          setIsStartGame(false);
        }}
      >
        Main Page
      </NavLink>

      {categories.map((category, index) => (
        <NavLink
          to={getPath(category)}
          key={index}
          className="menu-wrapper__NavLink"
          onClick={() => {
            closeMenu();
            setIsGameMode(false);
            setIsStartGame(false);
          }}
        >
          {category}
        </NavLink>
      ))}
    </nav>
  );
};

export default onClickOutside(Menu);
