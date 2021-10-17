import React from 'react';
import { RepeatBtnProps } from './RepeatBtn.types';
import './RepeatBtn.style.scss';

export const RepeatBtn: React.FC<RepeatBtnProps> = ({ repeatAudio }) => (
  <button className="repeat-btn" onClick={repeatAudio} />
);
