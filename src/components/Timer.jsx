import {useState,useEffect} from 'react'

export default function TimerContaianer(){
    const [time,setTime] = useState(null);

    useEffect(() => {

    const interval = setInterval(() => {
      getLaspedTime();
    }, 1000);

    return () => clearInterval(interval);
  },[]);


    async function getLaspedTime() {
    const currTime = await window.electronAPI.getRemainingTime();
    setTime(currTime);
  };

    function formatTimeLeft(ms) {
    const seconds = Math.floor((ms / 1000) % 60)
      .toString()
      .padStart(2, "0");

    const minutes = Math.floor((ms / (1000 * 60)) % 60)
      .toString()
      .padStart(2, "0");

    const hours = Math.floor(ms / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

    return (
        <div className="timer-container">
            <p>Time Left : {time === null ? '--:--:--' : formatTimeLeft(time)}</p>
        </div>
    )
}