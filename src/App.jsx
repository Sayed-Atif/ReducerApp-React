import React from 'react';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="app">
      <h1 className="title">React Counter App</h1>
      <hr />
      <Counter />
    </div>
  );
};

export default App;