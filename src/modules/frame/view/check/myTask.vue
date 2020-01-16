<template>
  <div class="my-task-page">
    <nav-bar title-name="我的任务" back-path="/check"/>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        ref="list"
        v-model="listloading"
        :finished="finished"
        :immediate-check="false"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <fix-table :table-data="taskData" :height="'50'">
          <el-table-column
            align="center"
            width="120">
            <template slot="header">
              <span>机房</span><br>
              <span style="color:#6F5CC2;">名称</span>
            </template>
            <template slot-scope="scope">
              <div>{{ scope.row.cityname }} / {{ scope.row.house }} / {{ scope.row.floor }}F</div>
              <div style="color:#6F5CC2;">{{ scope.row.purpose }}</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center">
            <template slot="header">
              <span>客户</span><br>
              <span style="color:#6F5CC2;">时间</span>
            </template>
            <template slot-scope="scope">
              <div>{{ scope.row.customname }}</div>
              <div style="color:#6F5CC2;">{{ scope.row.updatetime }}</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="状态"
            width="60">
            <template slot-scope="scope">
              <van-icon :name="scope.row.serverstatus | statusFilter" :color="scope.row.serverstatus | statusColorFilter" size="20"/>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            width="90">
            <router-link to="taskDetail"><van-button type="info" size="small">详情</van-button></router-link>
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
      taskData: [],
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
        this.taskData = res.data.items
        this.listQuery.page++
      })
    },
    async onLoad() {
      await getDevice(this.listQuery).then(res => {
        var result = this.taskData.concat(res.data.items)
        this.taskData = result
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
        this.taskData = res.data.items
        this.listQuery.page = 1
        this.listQuery.page++
        this.finished = false
      })
    }
  }
}
</script>
