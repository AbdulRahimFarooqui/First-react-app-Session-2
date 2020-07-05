import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Assalaamualaikum, Dear Zone Zone!!! <br/> <code></code>
        </p>
        <h1>Say Mashaa' Allah</h1>
        <p><b>Mujhay khud nahin pata ye kaisay bana, lekin aap idher say kuch dekh saktay hain Inshaa' Allah....</b></p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lekin click here to know SOMETHING
        </a>
      </header>
    </div>
  );
}

export default App;
