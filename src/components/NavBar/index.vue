<template>
  <van-nav-bar :title="title" left-text="返回" left-arrow v-on="$listeners" @click-left="backPath==''?$router.back():$router.push(backPath)"/>
</template>

<script>

export default {
  name: 'NavBar',
  props: {
    titleName: {
      type: String,
      required: true
    },
    backPath: {
      type: String,
      default: ''
    }
  },
  computed: {
    title() {
      return this.titleName
    }
  }
}
</script>
