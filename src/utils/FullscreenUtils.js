export default async function getFullscreen() {
    await window.electronAPI.setFullScreen();
  }