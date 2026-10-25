import {useState,useEffect,useRef} from 'react'
export default function CameraContainer(){
    const videoRef = useRef(null);
    const imageCaptureRef = useRef(null);
    const [cameraReady,setCameraReady]=useState(false);

    useEffect(() => {
    if (!cameraReady) return;

    const interval = setInterval(async ()=>{
      console.log('interval')
      try{
        const buffer = await ClickPhoto()
        savePhoto(buffer)
      }catch(err){
        console.log(err)
      }
    },5000)

    return () => {
      clearInterval(interval)
    }

  }, [cameraReady]);

  async function getCamera() {
    const videoData = await navigator.mediaDevices.getUserMedia({
      video: true,
    });

    // videoRef.current.srcObject = videoData;

    const track = videoData.getVideoTracks()[0]
    imageCaptureRef.current = new ImageCapture(track);

    console.log(track)

    setCameraReady(true);
  }

  async function ClickPhoto(){
    const blob = await imageCaptureRef.current.takePhoto();
    const buffer = await blob.arrayBuffer();
    return buffer
  };

  async function savePhoto(arrayBuffer){
    console.log(arrayBuffer)
    await window.electronAPI.savePhoto(arrayBuffer)
  }

    return (
      <div 
      className="permission-item"
      >

        <div className="permission-icon">↗</div>
          <div className="permission-content">
            <h3>Configure Camera</h3>
            <p>Kindly configure Camera to attempt quiz/contests.</p>
            <div className="action-row">
              <button onClick={getCamera} className="btn btn-dark">
                Get Camera Access
              </button>
            </div>
            {/* {cameraReady && <div className="camera-space" />} */}
          </div>
        </div>
    )
}