import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navi from './Navi';
import Travel from './Travel'; 
import  Home from './Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Navi/>
        <Switch>
          <Route path="/" exact component={() => <Home/>} />
          <Route path="/Travel" exact component={() => <Travel/>} />
        </Switch>
       
      </Router>
    </div>
  );
}

export default App;
