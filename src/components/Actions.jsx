import getRules from "../utils/DisplayRulesUtils";

export default function BottomActions(){
    return (
      <div className="bottom-actions">
          <button  className="btn btn-light-blue">
            Go To Test
          </button>
          <button onClick={getRules} className="btn btn-outline">Need Help?</button>
        </div>
    )
}