import getRules from "../utils/DisplayRulesUtils";

export default function BottomActions({
  started,
  setStarted,
  fullscreen,
  cameraReady
}) {

  function startTest() {
    if (fullscreen && cameraReady) {
      setStarted(true);
    }
  }

  return (
    <div className="bottom-actions">
      {started ? (
        <p className="test-started">
          ✓ Test has started!
        </p>
      ) : (
        <>
          <button
            onClick={startTest}
            className="btn btn-light-blue"
            disabled={!fullscreen || !cameraReady}
          >
            Go To Test
          </button>

          <button
            onClick={getRules}
            className="btn btn-outline"
          >
            Need Help?
          </button>
        </>
      )}
    </div>
  );
}