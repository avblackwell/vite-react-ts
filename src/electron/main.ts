// const { app, BrowserWindow } = require('electron')
// const { join } = require('path')

// // Check both NODE_ENV and mode for environment detection
// const isDevelopment = process.env.NODE_ENV === 'development'

// const createWindow = () => {
//   const win = new BrowserWindow({
//     width: 1200,
//     height: 800,
//     frame: false,
//     titleBarStyle: 'hidden', // Hide the default title bar
//     webPreferences: {
//       nodeIntegration: true,
//       contextIsolation: false,
//     },
//   })

//   // In development, load from Vite dev server
//   if (isDevelopment) {
//     win.loadURL('http://localhost:5173')
//   } else {
//     // In production, load the built file
//     win.loadFile(join(__dirname, '../../dist/index.html'))
//   }
// }

// app.whenReady().then(() => {
//   createWindow()

//   app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//       createWindow()
//     }
//   })
// })

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })
