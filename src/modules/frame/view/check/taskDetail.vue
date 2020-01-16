<template>
  <div class="task-detail">
    <nav-bar title-name="盘点设备信息" back-path="/myTask"/>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        ref="list"
        v-model="listloading"
        :finished="finished"
        :immediate-check="false"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <fix-table :table-data="taskDetailData" :height="'50'">
          <el-table-column
            align="center"
            width="120">
            <template slot="header">
              <span>机房</span><br>
              <span style="color:#6F5CC2;">设备编码</span>
            </template>
            <template slot-scope="scope">
              <div>{{ scope.row.cityname }} / {{ scope.row.house }} / {{ scope.row.floor }}F</div>
              <div style="color:#6F5CC2;">{{ scope.row.sn }}</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="position"
            label="机柜"/>

          <el-table-column
            align="center"
            prop="rackid"
            label="机架号"
            width="60"/>
          <el-table-column
            align="center"
            label="状态"
            width="60">
            <template slot-scope="scope">
              <van-icon :name="scope.row.serverstatus | statusFilter" :color="scope.row.serverstatus | statusColorFilter" size="20"/>
            </template>
          </el-table-column>
        </fix-table>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import FixTable from '@/components/FixTable'
import { getDevice } from '@/api/table'

var initQuery = {
  page: 1,
  limit: 10
}

export default {
  components: {
    FixTable
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        '2': 'passed',
        '1': 'close'
      }
      return statusMap[status]
    },
    statusColorFilter(status) {
      const statusMap = {
        '2': '#60D87C',
        '1': '#ffa39e'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      taskDetailData: [],
      isLoading: false,
      listloading: false,
      finished: false,
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  created() {
    this.getlist()
  },
  methods: {
    getlist() {
      getDevice(initQuery).then(res => {
        this.taskDetailData = res.data.items
        this.listQuery.page++
      })
    },
    async onLoad() {
      await getDevice(this.listQuery).then(res => {
        var result = this.taskDetailData.concat(res.data.items)
        this.taskDetailData = result
        this.listloading = false
        if (res.data.items.length !== 0) {
          this.listQuery.page++
        } else {
          this.finished = true
        }
      })
    },
    onRefresh() {
      getDevice(initQuery).then((res) => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.taskDetailData = res.data.items
        this.listQuery.page = 1
        this.listQuery.page++
        this.finished = false
      })
    }
  }
}
</script>
