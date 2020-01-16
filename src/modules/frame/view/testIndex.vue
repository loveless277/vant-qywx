<template>
  <div>
    <!-- 模块主页内容 -->
    <!-- 页面可自行看情况添加文件或文件夹 -->
    <!-- 这里页面内容只是用来测试相关插件 -->
    <svg-icon icon-class="user" style="color:red"/>test
    <div ref="myChart" style="width:100%;height:300px;"/>
    <van-picker :columns="columns" show-toolbar @change="onChange" @confirm="onConfirm"/>
    <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
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
          :class="{'tb-fixed':isfixed}"
          style="width: 100%"
          fit>
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
    </van-pull-refresh> -->
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
      },
      isfixed: false
    }
  },
  computed: {
    date() {
      var year = new Date().getFullYear()
      var season = ['请选择', '第一季度', '第二季度', '第三季度', '第四季度']
      const yearArr = ['请选择', year, year - 1, year - 2, year - 3, year - 4]
      const obj = {}
      for (let i = 0, j = yearArr.length; i < j; i++) {
        const element = yearArr[i]
        obj[element] = season
      }
      return obj
    },
    columns() {
      const column = this.date
      return [
        {
          values: Object.keys(column).reverse(),
          className: 'column1'
        },
        {
          values: column[Object.keys(column)[0]],
          className: 'column2',
          defaultIndex: 0
        }
      ]
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
    window.addEventListener('scroll', this.onScroll)
    this.$on('hook:destroyed', () => {
      window.removeEventListener('scroll', this.onScroll)
    })
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
    },
    onScroll() {
      if (window.scrollY >= 300) {
        this.isfixed = true
      } else {
        this.isfixed = false
      }
    },
    onConfirm(val) {
      console.log(val)
      if (val[0] === '请选择') {
        this.$toast('请选择年份')
      }
      if (val[1] === '请选择') {
        this.$toast('请选择季度')
      }
      if (val[0] === val[1]) {
        this.$toast('请选择年份和季度')
      }
    },
    onChange(picker, values) {
      picker.setColumnValues(1, this.date[values[0]])
    }
  }
}
</script>

