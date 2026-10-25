const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs')

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

let end_time = Date.now() + 60 * 60 * 60;
ipcMain.handle("get-time", () => {
  return end_time - Date.now();
});

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

ipcMain.handle('save-photo',(event,arrayBuffer)=>{
  const filePath = path.join(__dirname,'captures',`photo - ${Date.now()}.jpeg`)
  const buffer = Buffer.from(arrayBuffer)

  fs.writeFileSync(filePath,buffer)
});

app.whenReady().then(() => {
  createWindow()
});