<template>
  <div style="display:flex" :style="{height:height-60+'px'}">
    <van-grid clickable :column-num="2" :gutter="10">
      <van-grid-item icon="home-o" text="查找设备" to="/" />
      <van-grid-item icon="search" text="查找机柜" to="/searchEquipment" />
      <van-grid-item icon="search" text="下架设备" url="/vant/mobile.html" />
      <van-grid-item icon="search" text="盘点" url="/vant/mobile.html" />
      <van-grid-item icon="search" text="我的信息" url="/vant/mobile.html" />
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: 0,
      codeUrl: ""
    };
  },
  created() {
    this.height = window.innerHeight;
  },
};
</script>

<style  scoped>
</style>