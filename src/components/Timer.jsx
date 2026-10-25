import {useState,useEffect} from 'react'
import formatTimeLeft from '../utils/FormatTimeUtils';
import getLaspedTime from '../utils/TimerUtils';


export default function TimerContaianer(){
  const [time,setTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      getLaspedTime(setTime);
    }, 1000);

    return () => clearInterval(interval);
  },[]);

  return (
      <div className="timer-container">
          <p>Time Left : {time === null ? '--:--:--' : formatTimeLeft(time)}</p>
      </div>
  )
}