export default function CameraContainer(){
    return (
      <div 
      className="permission-item"
      >

        <div className="permission-icon">↗</div>
          <div className="permission-content">
            <h3>Configure Camera</h3>
            <p>Kindly configure Camera to attempt quiz/contests.</p>
            <div className="action-row">
              <button className="btn btn-dark">
                Get Camera Access
              </button>
            </div>
            {/* {cameraReady && <div className="camera-space" />} */}
          </div>
        </div>
    )
}