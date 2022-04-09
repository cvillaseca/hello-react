import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Switch from "./components/Switch";

function App() {
  const [value, setValue] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Switch
        isOn={value}
        handleToggle={() => setValue(!value)}
      />

    </div>
  );
}

export default App;
