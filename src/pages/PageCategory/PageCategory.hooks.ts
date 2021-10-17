import { useCallback, useState } from 'react';
import { ValueElementInScore } from './PageCategory.types';

export const useValueElementInScore = () => {
  const [valueElementInScore, setValueElementInScore] = useState<number[]>([]);

  const addSuccessTry = useCallback(() => {
    setValueElementInScore(() => [
      ...valueElementInScore,
      ValueElementInScore.successTry,
    ]);
  }, [valueElementInScore]);

  const addFailedTry = useCallback(() => {
    setValueElementInScore(() => [
      ...valueElementInScore,
      ValueElementInScore.failedTry,
    ]);
  }, [valueElementInScore]);

  return {
    valueElementInScore,
    setValueElementInScore,
    addSuccessTry,
    addFailedTry,
  };
};
