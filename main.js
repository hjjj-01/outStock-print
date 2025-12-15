//主进程
    const { app, BrowserWindow, ipcMain, screen } = require('electron') 
    const path = require('path')
    const { windowMove } = require('./src/assets/js/move.js')

    const preloadPath = path.join(__dirname, 'preload/index.js');

    const createWindow = () => {
        // 清除所有缓存数据
        const { session } = require('electron');
        session.defaultSession.clearStorageData({
            storages: ['appcache', 'cookies', 'localstorage', 'sessionstorage', 'websql', 'indexdb']
        });

    
        const win = new BrowserWindow({
            width: 290,
            height: 560,
            frame: false,
            resizable: false,
            webPreferences: {
                preload: preloadPath,
                nodeIntegration: false,
                contextIsolation: true,
                // 禁用缓存
                cache: false,
                // cors 跨域
                webSecurity: false
                
            }
        });

        
    

        const timestamp = new Date().getTime();
        // win.loadURL(`http://134.175.18.3:9988/?t=${timestamp}`)
        win.loadURL(`http://localhost:5173/?t=${timestamp}`)

        // win.webContents.openDevTools({ mode: 'detach' })

        // 最小化
        ipcMain.on('minimize-app', () => {
            if (!win.isMinimized()) {
                win.minimize();
            }
        });
        // 最大化
        ipcMain.on('maximize-app', () => {
            if (win.isMaximized()) {
                win.unmaximize();
            } else {
                win.maximize();
            }
        });
        

        ipcMain.on('do-silent-print', (event, htmlContent) => {
            const printWindow = new BrowserWindow({
                width: 400,
                height: 330,
                show: false,
                webPreferences: {
                    preload: preloadPath,
                    offscreen: true,
                    nodeIntegration: false,
                    contextIsolation: true,
                    webSecurity: false // 禁用同源策略，解决CORS问题
                },
            });

            printWindow.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(htmlContent)}`);

            printWindow.webContents.on('did-finish-load', async() => {
                await new Promise(r => setTimeout(r, 500));
                printWindow.webContents.print(
                {
                    silent: true,
                    printBackground: true,
                    margins: { marginType: 'none' },
                    pageSize: { width: 100000, height: 100000 }, // 100mm x 100mm
                },
                (success, errorType) => {
                    if (!success) console.error('打印失败:', errorType);
                    printWindow.close(); 
                }
                );
            });
        });
        





        ipcMain.on('close-app', () => {
            win.close();
        });

        windowMove(win); 
    }


    ipcMain.handle('sent-event', (_, params) => {
        console.log('接收来自渲染进程的消息:', params)
        return '1111'
    })
    

    app.whenReady()
    .then(() => {
        createWindow()
    })

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })
