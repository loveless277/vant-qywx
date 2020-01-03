<template>
  <div>
    <van-button class="scanblock" icon="scan" size="large">
      扫描设备码
    </van-button>
    <div class="menuvlock">
      <van-col
        v-for="item in menus"
        :key="item.icon"
        span="12"
        @click="$router.push(item.path)"
      >
        <svg-icon :icon-class="item.icon" />
        <span>{{ item.text }}</span>
      </van-col>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          icon: 'device',
          text: '查找设备',
          path: ''
        },
        {
          icon: 'cabinet',
          text: '查找机柜',
          path: ''
        },
        {
          icon: 'mine',
          text: '我的信息',
          path: '/mine'
        },
        {
          icon: 'check',
          text: '盘点',
          path: ''
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixin.scss";
  .scanblock{
    width: 370px;
    height: 95px;
    background-color: $thColor;
    color: white;
    border-radius:10px;
    @include flex-center;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    margin: 10px auto;
    font-size: 18px;
    }
  .van-button__icon{
    font-size: 30px;
    margin-right: 10px;
  }
  .menuvlock{
    background-color: white;
    margin: 10px;
    .van-col {
      height: 120px;
      display: inline-block;
      float: none;
      text-align: center;
      vertical-align: middle;
      border: 1px solid #f8f8f8;
      span {
        display: block;
        height: 36px;
        margin: -4px 0 4px;
        padding: 0 5px;
        font-size: 12px;
        line-height: 18px;
      }
      .svg-icon {
        margin: 24px 0 24px;
        font-size: 24px;
      }
    }
  }
</style>
