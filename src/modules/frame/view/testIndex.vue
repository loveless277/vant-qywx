<template>
  <div>
    <!-- 模块主页内容 -->
    <!-- 页面可自行看情况添加文件或文件夹 -->
    <!-- 这里页面内容只是用来测试相关插件 -->
    <svg-icon icon-class="user" style="color:red"/>test
    <div ref="myChart" style="width:100%;height:300px;"/>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  data() {
    return {
      chart: null
    }
  },
  created() {
    getList()
    console.log(this.wx)
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      this.chart = this.$echarts.init(this.$refs.myChart, 'macarons')
      this.setOptions()
    },
    setOptions() {
      this.chart.setOption({
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script>
