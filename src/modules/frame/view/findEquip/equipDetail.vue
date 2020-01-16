<template>
  <div class="equipDetail">
    <nav-bar title-name="设备详情" back-path="/findEquip"/>
    <van-tabs v-model="activeName" color="#3388FF" style="margin-top:10px;" >
      <van-tab title="设备信息" name="info" class="info-block">
        <van-cell-group >
          <van-field :value="form.server_id" label="ID" disabled label-align="right" label-width="120"/>
          <van-field :value="form.sn" label="设备编号" disabled label-align="right" label-width="120"/>
          <van-field :value="form.customname" label="客户" disabled label-align="right" label-width="120"/>
          <van-field :value="form.serverstatusmsg" label="状态" disabled label-align="right" label-width="120"/>
          <van-field :value="form.cityname+' / '+form.house+' / '+form.floor+'F'" label="机房" disabled label-align="right" label-width="120"/>
          <van-field :value="form.position" label="机柜" disabled label-align="right" label-width="120"/>
          <van-field :value="form.rackid" label="机架" disabled label-align="right" label-width="120"/>
          <van-field :value="form.rackid" label="刻度" disabled label-align="right" label-width="120"/>
          <van-field :value="form.memo" label="备注" disabled label-align="right" label-width="120"/>
          <van-field :value="form.rackid" label="设备类型" disabled label-align="right" label-width="120"/>
          <van-field :value="form.brand" label="品牌" disabled label-align="right" label-width="120"/>
          <van-field :value="form.size" label="(大小)U数" disabled label-align="right" label-width="120"/>
          <van-field :value="form.spec" label="规格" disabled label-align="right" label-width="120"/>
          <van-field :value="form.os" label="操作系统" disabled label-align="right" label-width="120"/>
          <van-field :value="form.plugnum" label="电插数" disabled label-align="right" label-width="120"/>
          <van-field :value="form.customsn" label="资产编号" disabled label-align="right" label-width="120"/>
          <van-field :value="form.printlabel | printStatusFilter" label="已打标签?" disabled label-align="right" label-width="120"/>
        </van-cell-group>
        <div class="split-bar">业务信息</div>
        <van-cell-group>
          <van-field :value="form.customname" label="所属客户" disabled label-align="right" label-width="120"/>
          <van-field :value="form.usecustom" label="使用客户" disabled label-align="right" label-width="120"/>
          <van-field :value="form.rackid" label="使用类型" disabled label-align="right" label-width="120"/>
          <van-field :value="form.purpose" label="用途" disabled label-align="right" label-width="120"/>
        </van-cell-group>
        <div class="split-bar">负责人信息</div>
        <van-cell-group>
          <van-field :value="form.person_name" label="第一负责人" disabled label-align="right" label-width="120"/>
          <van-field :value="form.person_tel" label="第一负责人电话" disabled label-align="right" label-width="120"/>
          <van-field :value="form.person_idcode" label="第一负责人身份证" disabled label-align="right" label-width="120"/>
          <van-field :value="form.person2_name" label="第二负责人" disabled label-align="right" label-width="120"/>
          <van-field :value="form.person2_tel" label="第二负责人电话" disabled label-align="right" label-width="120"/>
          <van-field :value="form.person2_idcode" label="第二负责人身份证" disabled label-align="right" label-width="120"/>
          <van-field :value="form.memo" label="备注" disabled label-align="right" label-width="120"/>
        </van-cell-group>
      </van-tab>
      <van-tab title="设备日志" name="log">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list
            ref="list"
            v-model="listloading"
            :finished="finished"
            :immediate-check="false"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <fix-table :table-data="logData" :height="'100'">

              <el-table-column
                align="center"
                prop="statusmsg"
                label="状态"/>

              <el-table-column
                align="center">
                <template slot="header">
                  <span>内容/</span><br>
                  <span>发生时间</span>
                </template>
                <template slot-scope="scope">
                  <div>{{ scope.row.domemo }}</div>
                  <div>{{ scope.row.dotime }}</div>
                </template>
              </el-table-column>

              <el-table-column
                align="center"
                prop="frameid"
                label="机房"/>

              <el-table-column
                align="center"
                prop="rackid"
                label="机架"/>
            </fix-table>
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import FixTable from '@/components/FixTable'
import { getLog } from '@/api/table'

var initQuery = {
  page: 1,
  limit: 10
}

export default {
  components: {
    FixTable
  },
  filters: {
    printStatusFilter(status) {
      const statusMap = {
        '0': '未打标签',
        '1': '已打标签'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      activeName: 'info',
      form: {
        'server_id': '3309',
        'sn': '13VQ43X',
        'cityname': '江门',
        'serverstatusmsg': '停机',
        'house': '联通',
        'floor': '3',
        'position': 'IDC-27',
        'rackid': '12',
        'devicetype': '1',
        'brand': 'DELL R510',
        'size': '2',
        'spec': '300G/SAS+300G/SSD*2+2T/HDD*9',
        'os': '',
        'plugnum': '1',
        'customsn': '',
        'printlabel': '0',
        'customname': '白山',
        'usecustom': '白山',
        'servertype': '1',
        'purpose': 'CDN视频和网站',
        'person_name': '',
        'person_tel': '',
        'person_idcode': '',
        'person2_name': '',
        'person2_tel': '',
        'person2_idcode': '',
        'memo': ''
      },
      logData: [],
      isLoading: false,
      listloading: false,
      finished: false,
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
      if (val === 'log') {
        getLog(initQuery).then((res) => {
          this.isLoading = false
          this.logData = res.data.items
          this.listQuery.page = 1
          this.listQuery.page++
          this.finished = false
        })
      }
    }
  },
  methods: {
    getLogList() {
      getLog(initQuery).then(res => {
        this.logData = res.data.items
        this.listQuery.page++
      })
    },
    async onLoad() {
      await getLog(this.listQuery).then(res => {
        var result = this.logData.concat(res.data.items)
        this.logData = result
        this.listloading = false
        if (res.data.items.length !== 0) {
          this.listQuery.page++
        } else {
          this.finished = true
        }
      })
    },
    onRefresh() {
      getLog(initQuery).then((res) => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.logData = res.data.items
        this.listQuery.page = 1
        this.listQuery.page++
        this.finished = false
      })
    }
  }
}
</script>

<style lang="scss">
.equipDetail{
  .split-bar{
    background-color: #EAEDF5;
    text-align: center;
    width: 100%;
    height: 36px;
    line-height: 36px;
  }
  .info-block{
    .van-cell__title{
      margin-right: 20px;
    }
  }
}
</style>
