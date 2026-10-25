import CameraContainer from './components/Camera';
import FullScreenContainer from './components/FullScreen';
import BottomActions from './components/Actions';
import TimerContaianer from './components/Timer';
import "./App.css";

function App() {
  
  return (
    <>
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
        
        <CameraContainer />
        <FullScreenContainer />

        <BottomActions />

        <TimerContaianer />
      </div>
    </>
  );
};

export default App;