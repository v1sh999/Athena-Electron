const {contextBridge,ipcRenderer, ipcMain} = require('electron')

contextBridge.exposeInMainWorld('electronAPI',{
    getCamera: () => ipcRenderer.invoke('get-camera'),
    setFullScreen: () => ipcRenderer.invoke("full-screen"),
    showRules: () => ipcRenderer.invoke('show-rules'),
    savePhoto: (arrayBuffer) => ipcRenderer.invoke('save-photo', arrayBuffer),
    getRemainingTime:() => ipcRenderer.invoke('get-time'),

});