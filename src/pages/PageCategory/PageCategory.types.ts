export type PageCategoryProps = {
  categoryName: string;
  gameMode: boolean;
  isStartGame: boolean;
  setIsStartGame: (value: boolean) => void;
  resetGameMode: (value: boolean) => void;
};

export type PageCategoryAudio = {
  [index: string]: string;
};

export type Category = {
  name: string;
  words: {
    eng: string;
    rus: string;
  }[];
};

export type Words = {
  eng: string;
  rus: string;
};

export enum ValueElementInScore {
  successTry = 1,
  failedTry = 0,
}

export enum TrackName {
  successTrack = 'success',
  failureTrack = 'failure',
  correctTrack = 'correct',
  errorTrack = 'error',
}
