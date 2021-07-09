/**
 * Topic: Learning React
 * Student name: Nguyen Truong Thinh
 * Created At: 9/ 7 / 2021
 * Section: User Interfaces and React
*/
import logo from './logo.svg';
import './App.css';
import React from 'react';

import Sparkle from './Sparkle';

function App() {
  const name = 'Thinh'
  const now = String(new Date())
  return (
    <div className="App">
      <p>Hello {name}!</p>
      <p> The current time is {now}</p>
      <p>Two plus two is {2 + 2}</p>
      <Sparkle/>
    </div>
  );
}

export default App;
