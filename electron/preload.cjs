const {contextBridge,ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('electronAPI',{
    getCamera: () => ipcRenderer.invoke('get-camera'),
    setFullScreen: () => ipcRenderer.invoke("full-screen"),
});