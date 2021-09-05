const { app, BrowserWindow } = require('electron');
const path = require('path');

const urls = [
  "http://192.168.1.240/"
]

const createWindow = () =>{
  win = new BrowserWindow({
      center: true,
      resizable: true,
      title: "Octoprint Desktop",
      webPreferences:{
          nodeIntegration: false,
          show: false
      }
  });
  win.maximize();
  win.webContents.openDevTools();
  //win.webContents.
  console.log(urls[0]);

  win.loadURL(urls[0]);
  // win.loadURL(url.format({
  //     pathname: path.join(__dirname,"index.html"),
  //     protocol: 'file',
  //     slashes: true
  // }));
  win.once('ready-to-show',()=>{
      win.show()
  });

  win.on('closed',()=>{
      win = null;
  });
}

app.on('ready', createWindow);