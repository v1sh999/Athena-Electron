export default async function getLaspedTime(setTime) {
    const currTime = await window.electronAPI.getRemainingTime();
    setTime(currTime);
  };