import { useState } from 'react'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <button onClick={()=>{setCount(count + 1)}}>{count}</button>
      {/* <video
        ref={videoRef}
        autoPlay
        muted
        className={cameraReady && !started ? "video-preview" : "hidden-video"}
      /> */}

      <div className="page-container">
        <div className="header-section">
          <h1>Hi User!</h1>
          <p>Kindly Allow the following Permissions to Start the test:</p>
        </div>

        <div className="card-container">
          <div className="permission-item">
            <div className="permission-icon">↗</div>
            <div className="permission-content">
              <h3>Configure Camera</h3>
              <p>Kindly configure Camera to attempt quiz/contests.</p>
              <div className="action-row">
                <button  className="btn btn-dark">
                  Get Camera Access
                </button>
              </div>
              {/* {cameraReady && <div className="camera-space" />} */}
            </div>
          </div>

          <div className="divider" />

          {/* Fullscreen */}

          <div className="permission-item">
            <div className="permission-icon">⛶</div>

            <div className="permission-content">
              <h3>Switch to full screen</h3>

              <p>Kindly close all tabs and switch to full screen.</p>

              <button  className="btn btn-light-blue">
                Give Full Screen Permissions
              </button>
            </div>
          </div>
        </div>

        <div className="bottom-actions">
          <button  className="btn btn-light-blue">
            Go To Test
          </button>
          <button className="btn btn-outline">Need Help?</button>
        </div>
        <p>Time Left : xxx</p>
      </div>
    </>
  );
}

export default App
