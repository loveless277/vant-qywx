<template>
  <div class="publish-page">
    <nav-bar title-name="设备盘点发布" back-path="/check"/>
    <div class="content">
      <div class="select-type">
        <div style="margin:0 20px;">盘点类型</div>
        <van-dropdown-menu>
          <van-dropdown-item v-model="type" :options="typeOption" />
        </van-dropdown-menu>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'normal',
      typeOption: [
        { text: '普通', value: 'normal' },
        { text: '季度', value: 'quarter' }
      ]

    }
  },
  watch: {
    type(val) {
      this.$router.push(`/publish/${val}`)
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
  .publish-page{
    .content{
      .select-type{
        height: 60px;
        background-color: #EAEDF5;
        display: flex;
        align-items: center;
        .van-dropdown-menu{
          width: 250px;
          height: 35px;
          background-color: #F7F8FA;
          .van-dropdown-item__content {
            left: 104px;
            width: 250px;
          }
        }
      }
    }
  }
</style>
