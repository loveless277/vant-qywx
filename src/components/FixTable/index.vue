<template>
  <el-table
    :data="tableData"
    :class="{'tb-fixed':isfixed}"
    style="width: 100%">
    <!-- :size="size" -->
    <slot/>
  </el-table>
</template>

<script>

export default {
  name: 'FixTable',
  props: {
    tableData: {
      type: Array,
      required: true
    },
    height: {
      type: String,
      required: true
    }
    // size: {
    //   type: String,
    //   default: 'small'
    // }
  },
  data() {
    return {
      isfixed: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      if (window.scrollY >= this.height) {
        this.isfixed = true
      } else {
        this.isfixed = false
      }
    }
  }
}
</script>
