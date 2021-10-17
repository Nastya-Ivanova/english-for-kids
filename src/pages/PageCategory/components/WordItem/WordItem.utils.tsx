export const getWordItemClassName = (
  className: string,
  isBackSideCard: boolean
): string => {
  return `${className} ${isBackSideCard ? 'rotate' : ''}`;
};
