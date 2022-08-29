import React from 'react';

import { useSharedState } from 'ui';
export const Decrement = () => {
  const { decrement } = useSharedState();

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={decrement}>DECREMENT</button>
    </div>
  );
};
