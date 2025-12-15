<template>
  <div>

    <div id="box">
        <div>订单号</div>
        <div>
            <el-input v-model="commitData[0].orderNo" placeholder="请输入订单号" ></el-input>
        </div>
         <div>取单人</div>
        <div>
            <el-input v-model="commitData[0].person" placeholder="请输入取单人" ></el-input>
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
        <!-- <div>
          <div>备注：</div>
              <el-checkbox-group v-model="remarks">
                <el-checkbox label="加急" size="large" />
                <el-checkbox label="无吊牌" size="large" />
                <el-checkbox label="挂吊牌" size="large" />
                <el-checkbox label="TK加急" size="large" />
              </el-checkbox-group>
          </div> -->
              <el-button type="primary" @click="getOrder()">取单</el-button><br/>
              <el-button type="primary" @click="getSupOrder()">补检取单</el-button><br/>
    </div>

  </div>
</template>

<script setup>
    import { nextTick, ref,watch } from "vue";
    import { ElMessage } from "element-plus";
    import axios from 'axios';

    const commitData = ref([
            {
                orderNo:'', 
                person:'',
                workNo:'',
                statusTime:'',
            }]
    )
    const fenzi = ref("");
    const fenmu = ref("");
    const boxindex = ref(1);
    watch(() => commitData.value[0].orderNo, (newVal, oldVal) => { 
        if (newVal !== oldVal) {
                commitData.value[0].person='';
                fenmu.value = '';
                fenzi.value = '';
                // remarks.value = [];
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
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  const getOrder = () =>{
    if (commitData.value[0].orderNo === '' || commitData.value[0].person === '' || fenzi.value === '' || fenmu.value === '') {
      ElMessage.error('请输入所有信息');
      return;
    }
    commitData.value[0].statusTime = getCurrentDateTime();
    commitData.value[0].workNo = `${fenzi.value}/${fenmu.value}`;
    // console.log(commitData.value[0]);
    axios.post('http://134.175.18.3:8080/api/Orders/getOrders', commitData.value[0])
    .then(res => {
        ElMessage.success('取单成功');
    })
    .catch(err => {
      ElMessage.error('取单失败');
    })
    
  }
  const getSupOrder = () =>{
    if (commitData.value[0].orderNo === '' || commitData.value[0].person === '' ) {
      ElMessage.error('请输入订单号和取单人');
      return;
    }
    commitData.value[0].statusTime = getCurrentDateTime();
    // console.log(commitData.value[0]);
    axios.post('http://134.175.18.3:8080/api/Orders/getSupOrders', commitData.value[0])
    .then(res => {
        ElMessage.success('补检取单成功');
    })
    .catch(err => {
      ElMessage.error('补检取单失败');
    })
    
  }

  

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
      width: 50%;
  }


</style>
