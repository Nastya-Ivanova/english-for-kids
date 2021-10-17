import * as AUDIO from 'asset/audio';
import { PageCategoryAudio, ValueElementInScore } from './PageCategory.types';

export const shuffle = (arr: { eng: string; rus: string }[]) => {
  const shuffleArr = arr;

  for (let i = shuffleArr.length - 1; i > 0; i -= 1) {
    const tmp = shuffleArr[i];
    const rnd = Math.floor(Math.random() * (i + 1));
    shuffleArr[i] = shuffleArr[rnd];
    shuffleArr[rnd] = tmp;
  }

  return shuffleArr;
};

export const playAudio = (engWord: string) => {
  if (!engWord) return;
  const audio = new Audio();
  audio.src = `${(AUDIO as PageCategoryAudio)[engWord]}`;
  audio.play();
};

export const playSuccessError = (name: string) => {
  const audio = new Audio();
  audio.src = `${(AUDIO as PageCategoryAudio)[name]}`;
  audio.play();
};

export const getCountErrors = (valueElementInScore: number[]) =>
  valueElementInScore.filter(
    (valueElement) => valueElement === ValueElementInScore.failedTry
  ).length;
