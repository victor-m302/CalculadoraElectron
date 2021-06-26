const electron = require('electron')
const url = require('url')
const path = require('path')

const {app, BrowserWindow} = electron

let mainWindow

app.on('ready', function(){
    mainWindow = new BrowserWindow({ 
        width: 330,
        height: 540,
        transparent: true,
        vibrancy: 'ultra-dark',
    })
    
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainW.html'),
        protocol: 'file:',
        slashes: true
    }))
} )