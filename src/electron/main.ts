import { app, BrowserWindow } from "electron";
import { isDev } from "./util.js"; // Added .js extension
import path from "path";

let mainWindow: BrowserWindow;

app.on("ready", () => {
  if (isDev()) {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL("http://www.google.com");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }
});
