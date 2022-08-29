import React from 'react';
import './App.css';
import { Count } from 'ui';
import { Increment } from 'increment/Increment';
import { Decrement } from 'decrement/Decrement';

function App() {
  return (
    <div className="App">
      <h2>shell app</h2>
      <Count />
      <div>
        <Decrement />
        <Increment />
      </div>
    </div>
  );
}

export default App;
