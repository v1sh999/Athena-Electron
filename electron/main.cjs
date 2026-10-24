const { app, BrowserWindow } = require('electron')
let win = null;
const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
    }
  })

  win.loadURL('http://localhost:5173/')
}

app.whenReady().then(() => {
  createWindow()
})