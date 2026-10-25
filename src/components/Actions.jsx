export default function BottomActions(){
  async function getRules(){
    await window.electronAPI.showRules();
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