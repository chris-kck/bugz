import 'tachyons';
import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import { Link, withRouter } from "react-router-dom";
const Url = "http://worldtimeapi.org/api/ip";


function Home() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getit();
  }, []);

  var getit = async () => {
    const response = await axios.get(Url);
    setUserData(response.data);
  };

  return (
    <div className="home">
      <div class="container">
        <div class="tc ">
          
          <div className="tc dib">
          
            <p>
              Welcome to the 24-hr time travelling machine
            </p>
            <Link to="/Travel">
              <button>Travel!</button>
            </Link>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>Current Time Position:</h2>
      <div className="url-container">
        <h5 className="info-item">Time Zone: {userData.timezone}</h5>
        <h5 className="info-item">IP : {userData.client_ip}</h5>
        <h5 className="info-item">DateTime: {userData.datetime}</h5>
        <h5 className="info-item">UTC Offset: {userData.utc_offset}</h5>
      
      </div>
      </div>
    </div>
  );
}

export default Home;