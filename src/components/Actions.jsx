import {useState} from 'react'
export default function BottomActions(){
  const [started,setStarted] = useState(false);
  async function getRules(){
    await window.electronAPI.showRules();
    setStarted(true)
  }

    return (
      <div className="bottom-actions">
          <button  className="btn btn-light-blue">
            Go To Test
          </button>
          <button onClick={getRules} className="btn btn-outline">Need Help?</button>
        </div>
    )
}