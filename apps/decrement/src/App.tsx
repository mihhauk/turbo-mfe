import React from 'react';

import { Count } from 'ui';
import { Decrement } from './Decrement';

function App() {
  return (
    <div>
      <Count />
      <Decrement />
      <h2>other stuff</h2>
    </div>
  );
}

export default App;
