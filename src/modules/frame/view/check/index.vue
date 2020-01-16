<template>
  <div class="check">
    <nav-bar title-name="盘点" back-path="/index"/>
    <div class="content">
      <router-link to="myTask">
        <van-circle
          v-model="currentRate"
          :color="tastColor"
          size="190"
          text="我的任务"
          fill="#fff"
          class="my-task"
        />
      </router-link>
      <router-link to="publish">
        <van-circle
          v-model="currentRate"
          :color="gradientColor"
          size="190"
          text="设备盘点发布"
          fill="#fff"
          class="publish-task"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRate: 0,
      tastColor: {
        '0%': '#4DF3FF',
        '100%': '#176CFF'
      },
      gradientColor: {
        '0%': '#4DF3FF',
        '100%': '#219E03'
      }
    }
  }
}
</script>

<style lang="scss">
  .check{
    .content{
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 560px;
      justify-content: space-evenly;
      .van-circle{
        .van-circle__text{
          font-size: 26px;
        }
      }
      .my-task{
        .van-circle__text{
          color: #3388ff;
        }
      }
      .publish-task{
        .van-circle__text{
          color: #05B92F;
        }
      }
    }
  }
</style>
