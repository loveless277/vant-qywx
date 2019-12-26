<template>
  <div class="home">
    <van-sticky>
      <van-button
        class="topButton"
        :style="{color:(($route.path).indexOf('/home/create'))>=0?'#1989fa':''}"
        to="/home/create"
        type="default"
      >
        我创建
        <i class="istyle">{{userState[0]==0?null:userState[0]}}</i>
      </van-button>
      <van-button
        class="topButton"
        :style="{color:(($route.path).indexOf('/home/audit'))>=0?'#1989fa':''}"
        to="/home/audit"
        type="default"
      >我审核
        <i class="istyle">{{userState[1]==0?'':userState[1]}}</i>
      </van-button>
      <van-button
        class="topButton"
        :style="{color:(($route.path).indexOf('/home/charge'))>=0?'#1989fa':''}"
        to="/home/charge"
        type="default"
      >我负责
        <i class="istyle">{{userState[2]==0?'':userState[2]}}</i>
      </van-button>
      <van-button
        class="topButton"
        :style="{color:(($route.path).indexOf('/home/dispose'))>=0?'#1989fa':''}"
        to="/home/dispose"
        type="default"
      >我处理
        <i class="istyle">{{userState[3]==0?'':userState[3]}}</i>
      </van-button>
      <van-button
        class="topButton"
        :style="{color:(($route.path).indexOf('/home/copyTo'))>=0?'#1989fa':''}"
        to="/home/copyTo"
        type="default"
      >抄送我
        <i class="istyle">{{userState[4]==0?'':userState[4]}}</i>
      </van-button>
    </van-sticky>
    <router-view />
  </div>
</template>

<script>
export default{
  data(){
    return{
      userState:[9,99,0,1,2]
    }
  }
}
</script>
<style scoped >
.topButton {
  width: 20%;
  padding: 0px;
}
.istyle {
  position: absolute;
  font-style: inherit;
  top: 0;
  right: 0;
  box-sizing: border-box;
  min-width: 14px;
  padding: 0 3px;
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  background-color: #ee0a24;
  /* border: 1px solid #fff; */
  border-radius: 16px;
}
</style>
