<template>
  <div class="findCabinet">
    <nav-bar title-name="查找机柜" back-path="/index"/>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="filterBox" style="margin-bottom:10px;">
        <van-search v-model="cabinetVal" placeholder="选择机房" @click="cabinetVal==''?showPicker = true:showPicker = false"/>
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            :columns="columns"
            show-toolbar
            title="选择机房"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
        <van-search
          v-model="findStr"
          placeholder="请输入 机柜编号/地区/刻度使用率"
          show-action
          @search="onSearch"
        >
          <div slot="action" @click="onSearch"><van-button type="info" size="small">搜索</van-button></div>
        </van-search>
      </div>
      <van-list
        ref="list"
        v-model="listloading"
        :finished="finished"
        :immediate-check="false"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <fix-table :table-data="cabinetData" :height="'120'">
          <el-table-column
            align="center"
            prop="cityname"
            label="地区"/>
          <el-table-column
            align="center"
            prop="position"
            label="机柜编号"/>
          <el-table-column
            align="center"
            prop="useDimensionSizePercent"
            label="刻度使用率">
            <template slot-scope="scope">
              {{ scope.row.useDimensionSizePercent }}%
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作">
            <router-link to="cabinetDetail"><van-button type="info" size="small">详情</van-button></router-link>
          </el-table-column>
        </fix-table>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import FixTable from '@/components/FixTable'
import { getCabinet } from '@/api/table'

var initQuery = {
  page: 1,
  limit: 10
}

export default {
  components: {
    FixTable
  },
  data() {
    return {
      cabinetVal: null, // 选择机房值
      findStr: null, // 关键字
      cabinetData: [
      ],
      listQuery: {
        page: 1,
        limit: 10
      },
      isLoading: false, // 刷新load status
      listloading: false, // 上拉加载load status
      finished: false,
      showPicker: false,
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    }
  },
  created() {
    this.getlist()
  },
  mounted() {
    // console.log(this.$refs.filter.clientHeight)
  },
  methods: {
    onSearch() {},
    getlist() {
      getCabinet(initQuery).then(res => {
        this.cabinetData = res.data.items
        this.listQuery.page++
      })
    },
    async onLoad() {
      await getCabinet(this.listQuery).then(res => {
        var result = this.cabinetData.concat(res.data.items)
        this.cabinetData = result
        this.listloading = false
        if (res.data.items.length !== 0) {
          this.listQuery.page++
        } else {
          this.finished = true
        }
      })
    },
    onConfirm(value) {
      this.cabinetVal = value
      this.showPicker = false
    },
    onRefresh() {
      getCabinet(initQuery).then((res) => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.cabinetData = res.data.items
        this.listQuery.page = 1
        this.listQuery.page++
        this.finished = false
      })
    }
  }
}
</script>
