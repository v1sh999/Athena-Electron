export default async function getFullscreen(setFullScreen) {
    await window.electronAPI.setFullScreen();
    setFullScreen(true)
  }