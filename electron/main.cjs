const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');

let win = null;

const createWindow = () => {
  win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
    }
  })

  win.loadURL('http://localhost:5173/')
};

ipcMain.handle('full-screen', () => {
  win.kiosk = true;
});

ipcMain.handle('show-rules',()=>{
  dialog.showMessageBox(win, {
    type: "info",
    title: "Exam Rules",
    message: "please follow this things",
    detail: `
    1. Do not open any new tab
    2. You will get 0 marks if you cheat
    `,
    buttons: ["Accept","Cancel"],
  });
});

app.whenReady().then(() => {
  createWindow()
});