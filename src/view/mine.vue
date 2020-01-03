<template>
  <div class="my-info">
    <nav-bar title-name="我的信息"/>
    <van-cell v-for="item in list" :key="item.text" :to="item.path" is-link>
      <span class="custom-title">{{ item.text }}</span>
      <span style="margin-left:30px;color:#969799">详细信息</span>
    </van-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          text: '外出',
          path: ''
        },
        {
          text: '出差',
          path: ''
        },
        {
          text: '费用',
          path: ''
        },
        {
          text: '任务单',
          path: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .my-info{
    .van-cell{
      margin-top: 20px;
      .custom-title{
        display: inline-block;
        width: 50px;
        text-align: right;
      }
    }
  }
</style>

