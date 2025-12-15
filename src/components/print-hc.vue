<template>
  <div>
      <div ref="printContent" class="print-content" v-show="false"> 
          <div style="width: 205px;">
            <div  style="font-size: 15px;width: 200px;margin-bottom: 5px;float: left;">日期:{{  commitData[0].date }}</div>
            <div style="font-size: 15px; width: 200px;float: left;margin-bottom: 5px; float: left;">单号:{{  commitData[0].orders }}</div>
          </div>
          <div style=" width: 160px;margin-top: -25px;font-size: 27px; float: left;">工作号:{{ fenzi }}/{{ fenmu }}</div>
            
            
            <!-- 半码 -->
            <div  style=" float: left;width: 360px;height: 70px;font-size: 135px;margin-top:15px;
                line-height: 75px;text-align: center;" v-if="type=='正常'">{{ radiusOrder }}
            </div>
             <div style=" float: left;width: 360px;height: 70px;font-size: 80px;margin-top:15px;
                line-height: 75px;text-align: center;" v-if="type=='谷仓'">{{ radiusOrder }}
            </div>
             <div style=" float: left;width: 360px;height: 70px;font-size: 85px;margin-top:15px;
                line-height: 75px;text-align: center;" v-if="type=='TK'">{{ radiusOrder }}
            </div>
            <!-- 板数 -->
            <div style="float:left; padding-top: 38px; width:370px">
              <div  style=" float: left;font-size: 27px;">板数:第{{ board }}板</div>
              <div>
                <span  style=" display: inline-block;margin-left: 10px;width: 32px;height: 32px;border: 2px solid #000; margin:0px 0 5px 20px"></span>
                <span  style=" display: inline-block;margin-left: 10px;width: 32px;height: 32px;border: 2px solid #000; margin:0px 0 5px 20px"></span>
                <span  style=" display: inline-block;margin-left: 10px;width: 32px;height: 32px;border: 2px solid #000; margin:0px 0 5px 20px"></span>
              </div>
            </div>
                
            <!-- 箱数 -->
            <div  style="float: left;width: 370px;height: 40px;font-size: 20px;
                          line-height: 40px;margin-bottom: 5px;margin-top:5px;">
              <div style="float:left;font-size:28px">箱数:共
                <span  style=" display: inline-block;width: 32px;height: 32px;border: 2px solid #000; margin:px 0 5px 20px"></span>
                
                箱</div>
              <div>
                <span  style=" display: inline-block;margin-left: 19px;width: 32px;height: 32px;border: 2px solid #000; margin:px 0 5px 20px"></span>
                <span  style=" display: inline-block;margin-left: 19px;width: 32px;height: 32px;border: 2px solid #000; margin:px 0 5px 20px"></span>
                <span  style=" display: inline-block;margin-left: 19px;width: 32px;height: 32px;border: 2px solid #000; margin:px 0 5px 20px"></span>
              </div>
              
            </div>
            
              <div style="display:inline-block;width: 330px;font-size: 17px;height:48px;
              margin-top: 5px; border: 1px solid #000;margin-top: 10px; padding: 5px;" >备注：<br/>
                  {{boradRemark}}
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
          <div style=" width: 160px;margin-top: -25px;font-size: 27px; float: left;">工作号:{{ fenzi }}/{{ fenmu }}</div>
            
            
            <!-- 半码 -->
            <div  style=" float: left;width: 360px;height: 70px;font-size: 135px;margin-top:15px;
                line-height: 75px;text-align: center;" v-if="type=='正常'">{{ radiusOrder }}
            </div>
             <div style=" float: left;width: 360px;height: 70px;font-size: 80px;margin-top:15px;
                line-height: 75px;text-align: center;" v-if="type=='谷仓'">{{ radiusOrder }}
            </div>
           <div style=" float: left;width: 360px;height: 70px;font-size: 85px;margin-top:15px;
                line-height: 75px;text-align: center;" v-if="type=='TK'">{{ radiusOrder }}
            </div>
                
            <!-- 箱数 -->
            <div  style="float: left;width: 370px;height: 40px;font-size: 20px;
                          line-height: 40px;margin-bottom: 5px;margin-top:35px;">
              <div style="float:left;font-size:28px">箱数:这是第{{ boxindex }}箱</div>
              
              
            </div>
            
              <div style="display:inline-block;width: 330px;font-size: 17px;height:58px;
              margin-top: 5px; border: 1px solid #000;margin-top: 10px; padding: 5px;" >备注：<br/>
                  {{boxRemark}}
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
                <el-input v-model="board" placeholder="请输入板数" @input="validateNumber('board')" disabled></el-input>
            </span>
            <span class="number">
                <el-input v-model="boxindex" placeholder="请输入箱数" @input="validateNumber('box')" disabled=""></el-input>
            </span>
            
        </div>
        <div>
            <span class="number">请输入工作号</span>
        </div>
        <div>
            <span class="number">
                <el-input v-model="fenzi" placeholder="分子" @input="validateNumber2('fenzi')"></el-input>
            </span>
            <span class="number">
                <el-input v-model="fenmu" placeholder="分母" @input="validateNumber2('fenmu')"></el-input>
            </span>
        </div>
        <div>
          <div>备注：</div>
              <el-checkbox-group v-model="remarks">
                <el-checkbox label="加急" size="large" />
                <el-checkbox label="无吊牌" size="large" />
                <el-checkbox label="挂吊牌" size="large" />
                <el-checkbox label="TK加急" size="large" />
              </el-checkbox-group>
              <el-radio-group v-model="type">
                <el-radio label="正常" size="large" />
                <el-radio label="谷仓" size="large" />
                <el-radio label="TK" size="large" />
              </el-radio-group>
          </div>
          
              <el-button type="primary" @click="borardPrint">打印板贴</el-button>
              <el-button type="primary" @click="boxPrint">打印箱贴</el-button>
    </div>

  </div>
</template>

<script setup>
    import { nextTick, ref,watch } from "vue";
    import { ElMessage } from "element-plus";

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
    const board = ref(1);
    const fenzi = ref("");
    const fenmu = ref("");
    const boxindex = ref(1);
    const radiusOrder = ref("");
    const boxRemark = ref("");
    const boradRemark = ref("");
    const type = ref("正常");
    watch(() => commitData.value[0].orders, (newVal, oldVal) => { 
        if (newVal !== oldVal) {
                boxindex.value = 1;
                board.value = 1;
            }
    })



  //获取时间
  function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }


  // 板数打印
  const borardPrint = async () => {
    if(type.value=="正常"){
      radiusOrder.value = commitData.value[0].orders.slice(-4);
    }else{
      radiusOrder.value = commitData.value[0].orders;
    }    
    commitData.value[0].date = getCurrentDateTime();
    boradRemark.value = remarks.value.join('/');
    try{

        await nextTick();
        window.electronAPI.sendPrintHTML(printContent.value.innerHTML);
        board.value = board.value+1;
        ElMessage.success("打印成功");
    }catch(e){
      console.log(e);
    }
  };
  // 箱数打印
  const boxPrint = async () => {
    if(type.value=="正常"){
      radiusOrder.value = commitData.value[0].orders.slice(-4);
    }else{
      radiusOrder.value = commitData.value[0].orders;
    }
    commitData.value[0].date = getCurrentDateTime();
    boxRemark.value = remarks.value.join('/');
    try{
      await nextTick();
      window.electronAPI.sendPrintHTML(printContent2.value.innerHTML);
      boxindex.value = boxindex.value+1;
      ElMessage.success("打印成功");
    }catch(e){
      console.log(e);
    }
  };
  //过滤非数字
  const validateNumber = (type) => {
    if (type === 'board') {
      board.value = board.value.replace(/[^\d]/g, '');
    } else {
      box.value = box.value.replace(/[^\d]/g, '');
    }
  };
  //过滤非数字
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
      margin-top: -20px;
  }
  #box > div{
      margin-top: 17px;
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
