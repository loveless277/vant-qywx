<template>
  <div>
    <!-- 模块主页内容 -->
    <!-- 页面可自行看情况添加文件或文件夹 -->
    <!-- 这里页面内容只是用来测试相关插件 -->
    <svg-icon icon-class="user" style="color:red"/>test
    <div ref="myChart" style="width:100%;height:300px;"/>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        ref="list"
        v-model="loading"
        :finished="finished"
        :immediate-check="false"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <el-table
          :data="tableData"
          fit
          style="width: 100%">
          <el-table-column
            align="center"
            prop="date"
            label="日期"/>
          <el-table-column
            align="center"
            prop="name"
            label="姓名"/>
          <el-table-column
            align="center"
            prop="title"
            label="地址"/>
        </el-table>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
var initQuery = {
  page: 1,
  limit: 10
}

import { getList } from '@/api/table'

export default {
  data() {
    return {
      chart: null,
      tableData: [],
      isLoading: false,
      loading: false,
      finished: false,
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  created() {
    // console.log(this.wx)
    getList(initQuery).then(res => {
      this.tableData = res.data.items
      this.listQuery.page++
    })
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
    },
    // 下拉刷新
    onRefresh() {
      getList(initQuery).then((res) => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.tableData = res.data.items
        this.listQuery.page = 1
        this.listQuery.page++
        this.finished = false
      })
      // setTimeout(() => {
      // }, 500)
    },
    // 上拉加载
    async onLoad() {
      // 异步更新数据
      await getList(this.listQuery).then(res => {
        var result = this.tableData.concat(res.data.items)
        this.tableData = result
        this.loading = false
        if (res.data.items.length !== 0) {
          this.listQuery.page++
        } else {
          this.finished = true
        }
      })
      // setTimeout(() => {
      //   for (let i = 0; i < 5; i++) {
      //     this.tableData.push({
      //       date: this.tableData.length + '',
      //       name: '王小虎',
      //       address: '上海市普陀区金沙江路 1518 弄'
      //     })
      //   }
      //   // 加载状态结束
      //   this.loading = false

      //   // 数据全部加载完成
      //   if (this.tableData.length >= 80) {
      //     this.finished = true
      //   }
      // }, 500)
    }
  }
}
</script>
