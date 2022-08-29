import React from 'react';

import { useSharedState } from 'ui';
export const Increment = () => {
  const { increment } = useSharedState();

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={increment}>INCREMENT</button>
    </div>
  );
};
