<template>
  <div>
      <div ref="printContent" class="print-content" v-show="false"> 
          <div style="width: 205px;">
            <div  style="font-size: 15px;width: 200px;margin-bottom: 5px;float: left;">日期:{{  commitData[0].date }}</div>
            <div style="font-size: 15px; width: 200px;float: left;margin-bottom: 5px; float: left;">单号:{{  commitData[0].orders }}</div>
          </div>
            
            
            <!-- 半码 -->
            <div style=" float: left;width: 360px;height: 70px;font-size: 135px;margin-top:15px;
                line-height: 75px;text-align: center;">{{ radiusOrder }}
            </div>
            <!-- 板数 -->
            <div style="float:left; padding-top: 38px; width:370px">
              <div  style=" float: left;font-size: 27px;">板数:共{{ board }}板</div>
              <div>
                <span  style=" display: inline-block;margin-left: 10px;width: 32px;height: 32px;border: 2px solid #000; margin:0px 0 5px 20px"></span>
                <span  style=" display: inline-block;margin-left: 10px;width: 32px;height: 32px;border: 2px solid #000; margin:0px 0 5px 20px"></span>
                <span  style=" display: inline-block;margin-left: 10px;width: 32px;height: 32px;border: 2px solid #000; margin:0px 0 5px 20px"></span>
              </div>
            </div>
                
            <!-- 箱数 -->
            <div  style="float: left;width: 370px;height: 40px;font-size: 20px;
                          line-height: 40px;margin-bottom: 5px;margin-top:5px;">
              <div style="float:left;font-size:28px">箱数: 共{{box}}箱</div>
              <div>
                <span  style=" display: inline-block;margin-left: 19px;width: 32px;height: 32px;border: 2px solid #000; margin:px 0 5px 20px"></span>
                <span  style=" display: inline-block;margin-left: 19px;width: 32px;height: 32px;border: 2px solid #000; margin:px 0 5px 20px"></span>
                <span  style=" display: inline-block;margin-left: 19px;width: 32px;height: 32px;border: 2px solid #000; margin:px 0 5px 20px"></span>
              </div>
              
            </div>
            
              <div style="display:inline-block;width: 330px;font-size: 17px;height:48px;
              margin-top: 5px; border: 1px solid #000;margin-top: 10px; padding: 5px;" >备注：<br/>
                  <span style="font-size: 21px;">补拣</span>
              </div>
              <div style="font-size: 17px;width: 370px;text-align:right;margin-top: 5px;padding-right: 10px">
                板贴
              </div>
      </div>
    <div ref="printContent2" class="print-content" v-show="false"> 
          <div style="width: 205px;">
            <div  style="font-size: 15px;width: 200px;margin-bottom: 5px;float: left;">日期:{{  commitData[0].date }}</div>
            <div style="font-size: 15px; width: 200px;float: left;margin-bottom: 5px; float: left;">单号:{{  commitData[0].orders }}</div>
          </div>
            
            
            <!-- 半码 -->
            <div style=" float: left;width: 360px;height: 70px;font-size: 135px;margin-top:35px;
                line-height: 75px;text-align: center;">{{ radiusOrder }}
            </div>
           
                
            <!-- 箱数 -->
            <div  style="float: left;width: 370px;height: 40px;font-size: 20px;
                          line-height: 40px;margin-bottom: 5px;margin-top:35px;">
              <div style="float:left;font-size:28px">箱数:这是第{{ boxindex }}箱</div>
              
              
            </div>
            
              <div style="display:inline-block;width: 330px;font-size: 17px;height:58px;
              margin-top: 5px; border: 1px solid #000;margin-top: 10px; padding: 5px;" >备注：<br/>
                  <span style="font-size: 21px;">补拣</span>
              </div>  
              <div style="font-size: 17px;width: 370px;text-align:right;margin-top: 10px;padding-right: 10px">
                箱贴
              </div>
            
    </div>
    <div id="box">
        <div>订单号</div>
        <div>
            <el-input v-model="commitData[0].orders" placeholder="请输入订单号" ></el-input>
        </div>
        <div>
            <span class="number">板数</span>
            <span class="number">箱数</span>
        </div>
        <div>
            <span class="number">
                <el-input v-model="board" placeholder="请输入板数" @input="validateNumber('board')"></el-input>
            </span>
            <span class="number">
                <el-input v-model="box" placeholder="请输入箱数" @input="validateNumber('box')" ></el-input>
            </span>
            
        </div>
        <div>
            <span class="number">请输入工作号</span>
        </div>
        
        
              <el-button type="primary" @click="borardPrint">打印板贴</el-button>
              <el-button type="primary" @click="boxPrint">打印箱贴</el-button>
    </div>

  </div>
</template>

<script setup>
    import { nextTick, ref,watch } from "vue";
    import { ElMessage } from "element-plus";

    const orderNumber = ref("ORD20231001");
    const printContent = ref(null);
    const printContent2 = ref(null);
    const commitData = ref([
            {
                orders:'',
                number1:'',
                date:'',
            }
    ])
    const remarks = ref([]);
    const box = ref("");
    const board = ref("");
    const fenzi = ref("");
    const fenmu = ref("");
    const boxindex = ref(1);
    const boxRemark = ref("");
    const boardRemark = ref("");
    const radiusOrder = ref("");
  watch(() => commitData.value[0].orders, (newVal, oldVal) => { 
      if (newVal !== oldVal) {
              boxindex.value = 1;
              board.value = '';
               box.value = '';
               fenmu.value = '';
               fenzi.value = '';
               remarks.value = [];
          }
   })

  function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }


  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  const borardPrint = async () => {
    radiusOrder.value = commitData.value[0].orders.slice(-4);
    commitData.value[0].date = getCurrentDateTime();
    boardRemark.value = remarks.value.join('/');
    try{
      for (let i = 1; i <= board.value; i++) {
          await nextTick();
          window.electronAPI.sendPrintHTML(printContent.value.innerHTML);
      }
   
      ElMessage.success("打印成功");
    }catch(e){
      console.log(e);
    }
  };
  // 箱数打印
  const boxPrint = async () => {
    radiusOrder.value = commitData.value[0].orders.slice(-4);
    commitData.value[0].date = getCurrentDateTime();
    boxRemark.value = remarks.value.join('/');
    try{
      
      for (let i = 1; i <= box.value; i++) {
          boxindex.value = i;
          await nextTick();
          window.electronAPI.sendPrintHTML(printContent2.value.innerHTML);
      }
      
      ElMessage.success("打印成功");
    }catch(e){
      console.log(e);
    }
  };
  const validateNumber = (type) => {
    if (type === 'board') {
      board.value = board.value.replace(/[^\d]/g, '');
    } else {
      box.value = box.value.replace(/[^\d]/g, '');
    }
  };
  const validateNumber2 = (type) => {
    if (type === 'fenzi') {
      fenzi.value = fenzi.value.replace(/[^\d]/g, '');
    } else {
      fenmu.value = fenmu.value.replace(/[^\d]/g, '');
    }
  };



</script>

<style scoped>
  .print-content {
    width: 400px;
    /* height: 330px; */
    background: #fff;
    border: 2px solid #4e4747;
  }
  #box{
      text-align: center;
  }
  #box > div{
      margin-top: 20px;
  }
  .el-button{
      margin-top: 20px;
  }
  .el-input{
      width: 100%;
  }
  .number{
      display: inline-block;
      width: 50%;
  }
  .number > .el-input{
      widows: 50%;
  }


</style>
