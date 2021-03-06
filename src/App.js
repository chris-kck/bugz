import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import TimeClientInstance from './Adapter/timeapi';

const ButtonExampleButton = () => <Button>Click Here</Button>

  TimeClientInstance.getTimeZones()
      .then(res=>{
        const tz = res;
        console.log(tz.data);
      });


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonExampleButton></ButtonExampleButton>

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
    </div>
  );
}

export default App;
