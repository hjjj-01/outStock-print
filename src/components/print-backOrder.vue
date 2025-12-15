<template>
  <div>
      <div ref="printContent" class="print-content" v-show="false"> 
          <div style="width: 205px;">
            <div  style="font-size: 15px;width: 200px;margin-bottom: 5px;float: left;">日期:{{  commitData[0].statusTime }}</div>
            <div style="font-size: 15px; width: 200px;float: left;margin-bottom: 5px; float: left;">单号:{{  commitData[0].orderNo }}</div>
          </div>
          <div style=" width: 160px;margin-top: -25px;font-size: 27px; float: left;">工作号:{{ commitData[0].workNo }}</div>
            
            
            <!-- 半码 -->
            <div style=" float: left;width: 360px;height: 70px;font-size: 132px;margin-top:15px;
                line-height: 75px;text-align: center;">*{{ radiusOrder }}*
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
                  {{remark}}
              </div>
              <div style="font-size: 17px;width: 370px;text-align:left;margin-top: 5px;padding-right: 10px">
                <span style="width: 300px;display: inline-block;">拣货人员：{{ person }}</span>
                板贴
              </div>
      </div>
    <div ref="printContent2" class="print-content" v-show="false"> 
          <div style="width: 205px;">
            <div  style="font-size: 15px;width: 200px;margin-bottom: 5px;float: left;">日期:{{  commitData[0].statusTime }}</div>
            <div style="font-size: 15px; width: 200px;float: left;margin-bottom: 5px; float: left;">单号:{{  commitData[0].orderNo }}</div>
          </div>
          <div style=" width: 160px;margin-top: -25px;font-size: 27px; float: left;">工作号:{{ commitData[0].workNo }}</div>
            
            
            <!-- 半码 -->
            <div style=" float: left;width: 360px;height: 70px;font-size: 132px;margin-top:35px;
                line-height: 75px;text-align: center;">*{{ radiusOrder }}*
            </div>
           
                
            <!-- 箱数 -->
            <div  style="float: left;width: 370px;height: 40px;font-size: 20px;
                          line-height: 40px;margin-bottom: 5px;margin-top:35px;">
              <div style="float:left;font-size:28px">箱数:这是第{{ boxindex }}箱</div>
              
              
            </div>
            
              <div style="display:inline-block;width: 330px;font-size: 17px;height:58px;
              margin-top: 5px; border: 1px solid #000;margin-top: 10px; padding: 5px;" >备注：<br/>
                  {{remark}}
              </div>  
              <div style="font-size: 17px;width: 370px;text-align:left;margin-top: 10px;padding-right: 10px">
                <span style="width: 300px;display: inline-block;">拣货人员：{{ person }}</span>
                箱贴
              </div>
            
    </div>
    <div id="box">
        <div>订单号</div>
        <div>
            <el-input v-model="commitData[0].orderNo" placeholder="请输入订单号" ></el-input>
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
        <div>
            <span class="number">
                <el-input v-model="fenzi" placeholder="分子" @input="validateNumber2('fenzi')"></el-input>
            </span>
            <span class="number">
                <el-input v-model="fenmu" placeholder="分母" @input="validateNumber2('fenmu')"></el-input>
            </span>
        </div>
        <!-- <div> -->
          <!-- <div>备注：</div>
              <el-checkbox-group v-model="remarks">
                <el-checkbox label="加急" size="large" />
                <el-checkbox label="无吊牌" size="large" />
                <el-checkbox label="挂吊牌" size="large" />
                <el-checkbox label="TK加急" size="large" />
              </el-checkbox-group>
          </div> -->
              <el-button type="primary" @click="Print">回单</el-button><br/>
              <el-button type="primary" @click="SupPrint">补检回单</el-button><br/>
    </div>

  </div>
</template>

<script setup>
    import { nextTick, ref,watch } from "vue";
    import { ElMessage } from "element-plus";
    import axios from "axios";

    const printContent = ref(null);
    const printContent2 = ref(null);
    const commitData = ref([
            {
                orderNo:'',
                workNo:'',
                statusTime:'',
            }
    ])
    const remark = ref([]);
    const box = ref("");
    const board = ref("");
    const fenzi = ref("");
    const fenmu = ref("");
    const boxindex = ref(1);
    const radiusOrder = ref("");
    const person = ref("");
  watch(() => commitData.value[0].orderNo, (newVal, oldVal) => { 
      if (newVal !== oldVal) {
              boxindex.value = 1;
              board.value = '';
               box.value = '';
               fenmu.value = '';
               fenzi.value = '';
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


  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  // 打印
  const Print = async () => {
    radiusOrder.value = commitData.value[0].orderNo.slice(-4);
    commitData.value[0].statusTime = getCurrentDateTime();
    commitData.value[0].workNo = `${fenzi.value}/${fenmu.value}`;
    // console.log(commitData.value[0]);

    try {
        // 等待axios请求完成
        const res = await axios.post('http://134.175.18.3:8080/api/Orders/backOrders', commitData.value[0]);
        
        // 只有请求成功才会执行到这里
        ElMessage.success('回单成功');
        // console.log(res.data.data);
        person.value = res.data.data.person;
        remark.value = res.data.data.remark;
        // console.log(person.value);

        // 延迟后执行打印
        await delay(1000);
        
        for (let i = 1; i <= board.value; i++) {
            await nextTick();
            window.electronAPI.sendPrintHTML(printContent.value.innerHTML);
        }
        
        await delay(1000);
        
        for (let i = 1; i <= box.value; i++) {
            boxindex.value = i;
            await nextTick();
            window.electronAPI.sendPrintHTML(printContent2.value.innerHTML);
        }
        
        ElMessage.success("打印成功");
    } catch (err) {
        // 请求失败时不会执行打印
        ElMessage.error('回单失败' + (err.response?.data?.message || err.message));
        // console.log(err);
    }
};
  const SupPrint = async () => {
    radiusOrder.value = commitData.value[0].orderNo.slice(-4);
    commitData.value[0].statusTime = getCurrentDateTime();
    console.log(commitData.value[0]);

    try{
      const res = await axios.post('http://134.175.18.3:8080/api/Orders/backSupOrders', commitData.value[0])
          ElMessage.success('回单成功');
          // console.log(res.data.data);
          person.value = res.data.data.person;
          remark.value = res.data.data.remark;
          commitData.value[0].workNo = "补检";
          // console.log(person.value);
     
      await delay(1000);

      for (let i = 1; i <= board.value; i++) {
          await nextTick();
          window.electronAPI.sendPrintHTML(printContent.value.innerHTML);
      }
      
      await delay(1000);
      
      for (let i = 1; i <= box.value; i++) {
          boxindex.value = i;
          await nextTick();
          window.electronAPI.sendPrintHTML(printContent2.value.innerHTML);
      }
      
      ElMessage.success("打印成功");
    }catch(e){
      ElMessage.error('回单失败' + (e.response?.data?.message || e.message));
      // console.log(e);
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
  }
  #box > div{
      margin-top: 10px;
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
