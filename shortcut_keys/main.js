var app = require('app');
var BrowserWindow = require('browser-window');
var globalShortcut = require('global-shortcut');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadUrl('file://' + __dirname + '/index.html')

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  var displayWindow = true;

  var ret = globalShortcut.register('Ctrl + Shift +x', function() {
    if (displayWindow) {
      mainWindow.hide();
      displayWindow = false;
    } else {
      mainWindow.show();
      displayWindow = true;
    }
  });

  if (!ret) {
    console.log('registration fails');
  }
});
