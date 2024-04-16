import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleButtonClick = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <h1><b>Background color change</b></h1>
      <button onClick={() => handleButtonClick('red')}>Red</button>
      <button onClick={() => handleButtonClick('blue')}>Blue</button>
      <button onClick={() => handleButtonClick('green')}>Green</button>
      <button onClick={() => handleButtonClick('orange')}>Orange</button>
      <button onClick={() => handleButtonClick('yellow')}>Yellow</button>

    </div>
  );
}

export default App;