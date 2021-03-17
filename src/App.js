import React from "react";
import "antd/dist/antd.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; // or 'antd/dist/antd.less'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/not_found";
import LocationTime from "./components/LocationTime";
import Locations from "./components/Locations";

// function fixTime(messedUpTime){
//   // Takes the messed up time and returns it fixed
//   let start = messedUpTime.toString().indexOf('T');
//   return messedUpTime.toString().substr(start + 1, 5)
// }

function App() {
  // useEffect(() => {
  //   fetch(`http://worldtimeapi.org/api/timezone/${location}`)
  //     .then(response => response.json())
  //     .then((item) => fixTime(item.datetime))
  //     .then(setTime)
  //     .catch((a) => console.log(a));

  // }, [location, refresh]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/locations">
              <Locations />
            </Route>
            <Route path="/location/:id/:city">
              <LocationTime />
            </Route>
            <Route>
              <NotFound path="*" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
