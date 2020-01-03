<template>
  <van-nav-bar :title="title" left-text="返回" left-arrow v-on="$listeners" @click-left="$router.back()"/>
</template>

<script>

export default {
  name: 'NavBar',
  props: {
    titleName: {
      type: String,
      required: true
    }
  },
  computed: {
    title() {
      return this.titleName
    }
  }
}
</script>

<style scoped>
</style>
