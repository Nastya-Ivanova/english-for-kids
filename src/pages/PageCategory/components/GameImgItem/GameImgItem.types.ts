export type GameImgItemProps = {
  eng: string;
  compareAudioToWord: (eng: string, disabledImg: () => void) => void;
};

export type GameItemImg = {
  [index: string]: string;
};
