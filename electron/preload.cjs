const {contextBridge,ipcRenderer} = require('electron')

contextBridge.executeInMainWorld('electronAPI',{
    getCamera: () => ipcRenderer.invoke('get-camera'),
});