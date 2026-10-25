import {useState,useEffect,useRef} from 'react'
import CameraContainer from './components/Camera';
import FullScreenContainer from './components/FullScreen';
import BottomActions from './components/Actions';
import TimerContaianer from './components/Timer';
import "./App.css";

function App() {
  const videoRef = useRef(null);
  const imageCaptureRef = useRef(null);
  const [cameraReady,setCameraReady]=useState(false);
  
  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        className={cameraReady ? "video-preview" : "hidden-video"}
      />

      <div className="page-container">
        <div className="header-section">
          <h1>Hi User!</h1>
          <p>Kindly Allow the following Permissions to Start the test:</p>
        </div>
        
        <CameraContainer videoRef={videoRef} imageCaptureRef={imageCaptureRef} cameraReady={cameraReady} setCameraReady={setCameraReady}/>
        <FullScreenContainer />

        <BottomActions />

        <TimerContaianer />
      </div>
    </>
  );
};

export default App;