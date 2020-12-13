import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import logo from './logo.svg';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentTime = new Date();
      setTime(currentTime.toLocaleString());
      if (currentTime.getSeconds() === 0) {
        confetti.create(document.getElementById('canvas'), {
          resize: true,
          useWorker: true,
        })({
          particleCount: 100,
          spread: 160,
        });
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [time, setTime]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Current local time is {time}.</p>
      </header>
    </div>
  );
}

export default App;
