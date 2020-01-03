<template>
  <div class="cabinet-index">
    <van-panel title="监控房" class="monitor">
      <div class="content">
        <div style="border-right:1px solid #EAEDF5">
          <div class="ctx_text" >流量报警</div>
          <div class="ctx_num" style="color:#039725">0</div>
        </div>
        <div style="border-right:1px solid #EAEDF5">
          <div class="ctx_text">IP报警</div>
          <div class="ctx_num" style="color:#FF6600">1</div>
        </div>
        <div>
          <div class="ctx_text">端口异常</div>
          <div class="ctx_num" style="color:#FF6DD8">12</div>
        </div>
      </div>
    </van-panel>
    <van-panel title="机房" class="cabinet-btn">
      <div class="content">
        <van-row gutter="20">
          <van-col
            v-for="item in cabinetArr"
            :key="item"
            span="8"
          >
            <router-link to="/testIndex" class="van-button">{{ item }}</router-link>
          </van-col>
        </van-row>
      </div>
    </van-panel>
    <van-panel title="设备统计图" >
      <div class="content">
        <div ref="MChart" style="width:100%;height:150px;margin-bottom: 20px;"/>
        <div ref="TChart" style="width:100%;height:150px;"/>
      </div>
    </van-panel>
  </div>
</template>

<script>
const animationDuration = 1500

export default {
  data() {
    return {
      cabinetArr: [
        'IDC-30', '公司小机房', '鹤山', '中山', '测试', '江门 电信11'
      ],
      mon_chart: null,
      type_chart: null
    }
  },
  created() {
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      this.mon_chart = this.$echarts.init(this.$refs.MChart, 'macarons')
      this.type_chart = this.$echarts.init(this.$refs.TChart, 'macarons')
      this.setOptions()
    },
    setOptions() {
      this.mon_chart.setOption({
        legend: {
          data: ['月截止设备数量'],
          left: 'right'
        },
        color: ['#70ABFF'],
        grid: {
          top: 35,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          axisTick: { show: false },
          data: ['2019/11', '2019/12', '2019/01']
        },
        yAxis: {
          // type: 'value'
          splitArea: {
            show: false
          }
        },
        series: [{
          name: '月截止设备数量',
          type: 'bar',
          barWidth: '30%',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: [1097, 1067, 1061],
          animationDuration
        }]
      })
      this.type_chart.setOption({
        legend: {
          data: ['上架设备数量', '下架设备数量'],
          left: 'right'
        },
        color: ['#32C5E9', '#7CE4D5'],
        grid: {
          top: 35,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          axisTick: { show: false },
          data: ['2019/11', '2019/12', '2019/01']
        },
        yAxis: {
          // type: 'value'
          splitArea: {
            show: false
          }
        },
        series: [
          {
            name: '上架设备数量',
            type: 'bar',
            barWidth: '30%',
            barGap: 0,
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: [95, 173, 190],
            animationDuration
          },
          {
            name: '下架设备数量',
            type: 'bar',
            barWidth: '30%',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: [154, 263, 62],
            animationDuration
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";

$title:#F7F8FA;
.cabinet-index{
  background-color: #EAEDF5;
  .van-panel{
    &:not(:last-of-type){
      margin-bottom: 20px;
    }
    .van-panel__header{
      background-color: $title;
    }
    .van-panel__content{
      padding: 10px 16px 10px;
    }
  }
  .monitor{
    .content{
      border: 1px solid #EAEDF5;
      @include flex-nocenter-around;
      margin-top: 10px;
      &>div{
        @include flex-center-around;
        flex-direction: column;
        height: 90px;
        width: 33.3%;
      }
    }
  }
  .cabinet-btn{
    .content{
      margin-top: 10px;
    }
    .van-col {
      margin-bottom: 10px;
      text-align: center;
      .van-button{
        height: 35px;
        line-height: 35px;
      }
      &>*{
        color: white;
        background-color: #70ABFF;
        display: inline-block;
        width: -webkit-fill-available;
        border: none;
        outline: none;
      }
    }
  }
}
</style>
