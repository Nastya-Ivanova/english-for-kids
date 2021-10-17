export type WordsListProps = {
  words: {
    eng: string;
    rus: string;
  }[];
  gameMode: boolean;
  compareAudioToWord: (eng: string, disabledImg: () => void) => void;
};

export type WordsListAudio = {
  [index: string]: string;
};
