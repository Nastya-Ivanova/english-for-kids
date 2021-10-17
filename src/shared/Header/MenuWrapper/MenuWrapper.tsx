import React from 'react';
import Menu from '../Menu/Menu';
import { MenuBtn } from '../MenuBtn/MenuBtn';
import { getMenuBtnClassName } from '../MenuBtn/MenuBtn.utils';
import { MenuWrapperProps, MenuWrapperState } from './MenuWrapper.types';

export class MenuWrapper extends React.Component<
  MenuWrapperProps,
  MenuWrapperState
> {
  state = {
    isMenuShow: false,
  };

  closeMenu = () => this.setState({ isMenuShow: false });

  render() {
    const className = getMenuBtnClassName(this.state.isMenuShow);

    return (
      <nav className="menu-wrapper">
        <MenuBtn
          classes={className}
          onClick={() => {
            this.setState({ isMenuShow: !this.state.isMenuShow });
          }}
        />
        {this.state.isMenuShow && (
          <Menu
            handleClickOutside={this.closeMenu}
            closeMenu={this.closeMenu}
            setIsGameMode={this.props.setIsGameMode}
            setIsStartGame={this.props.setIsStartGame}
          />
        )}
      </nav>
    );
  }
}
