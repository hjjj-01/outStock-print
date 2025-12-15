<template>
  <div>
    <header class="header" @mousedown="moveApp()" @mouseup="unmoveApp()">
      <div class="title">
        打印取单系统-出库
      </div>
      <!-- <img src="./assets/hjj.png" alt="" style="height: 18px;"> -->
      <button @click="minimizeApp()"><el-icon><Minus/></el-icon></button>
      <button @click="maximizeApp()"><el-icon><CopyDocument /></el-icon></button>
      <button @click="closeApp()"><el-icon><CloseBold /></el-icon></button>
    </header>
    <main>
      <Main />
    </main>
  </div>
  
 
</template>
<script setup>
import {Minus,CopyDocument,CloseBold} from '@element-plus/icons-vue'
import Main from './components/main.vue'

const moveApp = () =>{
  if (window.myApi) {
    window.myApi.windowMove()
  }
}
const unmoveApp = () =>{
  if (window.myApi) {
    window.myApi.windowUnmove()
  }
}
// 定义最小化应用的方法
const minimizeApp = () => {
  if (window.myApi) {
    window.myApi.minimizeApp()
    console.log('最小化');
  } else {
    console.error('window.myApi is not defined');
  }
}
const maximizeApp = () => {
  if (window.myApi) {
    window.myApi.maximizeApp()
    console.log('最大化');
  } else {
    console.error('window.myApi is not defined');
  }
}

const closeApp = () =>{
  if (window.myApi) {
    window.myApi.closeApp()
    console.log('关闭');
  }
}


</script>
<style scoped>
header {
  display: flex;
  justify-content: flex-end;
  align-items:center;
  background-color: #e4e9e9;

}
header button {
  height: 25px;
  width: 35px;
  border: none;
  background-color: #e4e9e9;
  color: rgb(255, 255, 255);
}
header button:hover{
  background-color: #8a9c9c;
}
.el-icon{
  color: black;
  padding-top: 4px;
}
.calculator-tabs {
  width: 100%;
}

:deep(.el-tabs__header) {
  margin-bottom: 15px;
}

:deep(.el-tabs__item) {
  font-size: 16px;
}
.title{
  font-size: 13px;
  /* font-weight: bold; */
  font-family: '微软雅黑';
  margin-right: auto;
}
</style>
