import * as React from 'react';
import { useSharedState } from './useSharedState';

export const Count: React.FC = () => {
  const { count } = useSharedState();

  return <h1>Current Count: {count}</h1>;
};
