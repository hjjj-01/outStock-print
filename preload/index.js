//预加载文件
const { contextBridge, ipcRenderer } = require('electron') 

  //定义异步函数，用于向主进程发送消息并返回响应
  const handleSend = async (params) => {
    //ipcRenderer.invoke('sent-event', params)会返回主进程的响应
    let fallback = await ipcRenderer.invoke('sent-event', params)
    return fallback
  }

  // 定义最小化应用的函数
  const minimizeApp = () => {
    ipcRenderer.send('minimize-app')
  }
  // 定义最大化应用的函数
  const maximizeApp = () => {
    ipcRenderer.send('maximize-app')
  }
  // 定义拖动窗口的函数
  const windowMove = () => {
    ipcRenderer.send('window-move-evt',({move:true}))
  }
  const windowUnmove = () => {
    ipcRenderer.send('window-move-evt',({move:false}))
  }


  // 定义关掉程序的函数
  const closeApp = () => {
    ipcRenderer.send('close-app')
  }

  contextBridge.exposeInMainWorld('myApi', {
    handleSend: handleSend,
    minimizeApp: minimizeApp,
    maximizeApp: maximizeApp,
    closeApp: closeApp,
    windowMove: windowMove, // 暴露 windowMove 函数给渲染进程使用，用于拖动窗口
    windowUnmove: windowUnmove, // 暴露 windowUnmove 函数给渲染进程使用，用于拖动窗口
  })
  contextBridge.exposeInMainWorld('electronAPI', {
    sendPrintHTML: (html) => ipcRenderer.send('do-silent-print', html),
    minimize: () => ipcRenderer.send('minimize-app'),
    maximize: () => ipcRenderer.send('maximize-app'),
    close: () => ipcRenderer.send('close-app')
  });
  contextBridge.exposeInMainWorld('electronAPI', {
    sendPrintHTML: (html) => ipcRenderer.send('do-silent-print', html),
    previewPrintHTML: (html) => ipcRenderer.send('do-print-preview', html), // 新增预览方法
    minimize: () => ipcRenderer.send('minimize-app'),
    maximize: () => ipcRenderer.send('maximize-app'),
    close: () => ipcRenderer.send('close-app')
  });
