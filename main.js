const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow () {
	// create browser window
	mainWindow = new BrowserWindow({width: 800, height: 600});

	// load index.html
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

	mainWindow.on('closed', () => {
		mainWindow = null
	});
}

// when electron initializes and is ready to create browser windows
app.on('ready', createWindow);

// for all OS's aside from OS X, menu closes last tab closed
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

// when click on icon 
app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});