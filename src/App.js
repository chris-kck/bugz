import './App.css';
import React, {useEffect, useState} from 'react';
import { select } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'



function fixTime(messedUpTime){
  // Takes the messed up time and returns it fixed
  let start = messedUpTime.toString().indexOf('T');
  return messedUpTime.toString().substr(start + 1, 5)
}

// function getTime(){
//   var timeObj = fetch('http://worldtimeapi.org/api/timezone/Africa/Johannesburg')
//   .then(response => response.json().datetime)
//   .then(mTime => fixTime(mTime))
//   return timeObj;
// }


function App() {


  const [time, setTime] = useState('--:--');
  const [location, setLocation] = useState('Africa/Johannesburg')

  useEffect(() => {
    fetch(`http://worldtimeapi.org/api/timezone/${location}`)
      .then(response => response.json())
      .then((item) => fixTime(item.datetime))
      .then(setTime);
  }, [location]);

  
  

  return (
    <div>
      <h1> Time Buddy</h1>
      <main>
        <h2>Current time:</h2>
        
        <select defaultValue="Africa/Johannesburg">
          <option>Africa/Johannesburg</option>
          <option>America/Denver</option>
          <option>Pacific/Galapagos</option>
        </select>
        <button type="primary">{time}</button>
      </main>
    </div>
  );
}

export default App;
