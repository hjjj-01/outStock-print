<template>
    <div class="calculator-container">
      <el-tabs v-model="activeTab" class="calculator-tabs">
        
        <el-tab-pane label="取单" name="GETORDERprint">
          <printGetOrder />
        </el-tab-pane>
        <el-tab-pane label="回单" name="printBackOrder">
          <printBackOrder />
        </el-tab-pane>
        <el-tab-pane label="异常" name="printYc">
          <printYc />
        </el-tab-pane>
        <el-tab-pane label="正常" name="print">
          <print />
        </el-tab-pane>
        <el-tab-pane label="好春" name="HCprint">
          <printHc />
        </el-tab-pane>
      </el-tabs>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    import printHc from './print-hc.vue';
    import printGetOrder from './print-getOrder.vue';
    import printYc from './print-yc.vue'  
    import print from './print.vue'  
    import printBackOrder from './print-backOrder.vue'
    
    const activeTab = ref('GETORDERprint');
  </script>
  
  <style scoped>
  .calculator-tabs {
    width: 100%;
  }

  
  :deep(.el-tabs__header) {
    margin-bottom: 15px;
  }
  
  :deep(.el-tabs__item) {
    font-size: 16px;
  }
  el-tab-pane{
    background-color: aqua;
    padding-left: 10%;
  }
  </style>