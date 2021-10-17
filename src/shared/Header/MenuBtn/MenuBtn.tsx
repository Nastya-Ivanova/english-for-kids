import React from 'react';
import './MenuBtn.style.scss';
import { MenuBtnProps } from './MenuBtn.types';

export const MenuBtn: React.FC<MenuBtnProps> = ({ classes, onClick }) => (
  <button className={classes} onClick={onClick} />
);
