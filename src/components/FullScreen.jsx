export default function FullScreenContainer(){
  async function getFullscreen() {
    return await window.electronAPI.setFullScreen();
  }
    return (
      <div className="card-container">
          

          <div className="divider" />

          {/* Fullscreen */}

          <div className="permission-item">
            <div className="permission-icon">⛶</div>

            <div className="permission-content">
              <h3>Switch to full screen</h3>

              <p>Kindly close all tabs and switch to full screen.</p>

              <button  onClick={getFullscreen} className="btn btn-light-blue">
                Give Full Screen Permissions
              </button>
            </div>
          </div>
        </div>
    )
}