import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import TimeClientInstance from './Adapter/timeapi';
import TimezoneList from "./components/timezones";
import Timezonesdropdown from "./components/timezonesdropdown";
import TabExampleDefaultActiveIndex from "./components/tabs";


const ButtonExampleButton = () => <Button>Click Here Haha</Button>

function App() {
  return (
    <div className="App" >
      {/*<header className="App-header" style={{'background-color':'grey'}}>*/}
      {/*</header>*/}
        <TabExampleDefaultActiveIndex></TabExampleDefaultActiveIndex>
        <ButtonExampleButton></ButtonExampleButton>
    </div>
  );
}

export default App;
