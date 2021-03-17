import Search from './Search';
import Time from './Time';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
const Url = "http://worldtimeapi.org/api/ip";
const places = "http://worldtimeapi.org/api/timezone"


function Travel() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getit();
  }, []);

  var getit = async () => {
    const response = await axios.get(Url);
    setUserData(response.data);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h2>Day Time Travel</h2>
      </header>
      <div className="body">
        <Search/>
        {/*<ul>
         {places.map((places) => (
           <li key={places.id}>{places.name}</li>
         ))}
        </ul>*/}
        <br/>
        <br/>
        <Time/>
        
      </div>
      
    </div>
  );
}

export default withRouter(Travel);
