<template>
  <div class="findEquipment">
    <nav-bar title-name="查找设备" back-path="/index"/>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="filterBox" style="background-color:white;">
        <van-search
          v-model="findStr"
          placeholder="请输入 设备编号/客户/状态/机房/机柜"
          show-action
          @search="onSearch"
        >
          <div slot="action" @click="onSearch"><van-button type="info" size="small">搜索</van-button></div>
        </van-search>
        <div class="moreSearch" >
          <van-dropdown-menu active-color="white" style="border: none;height: 35px;background-color: #3385ff;">
            <van-dropdown-item ref="item" title="高级搜索">
              <van-search v-model="moreSearch.value1" placeholder="按机房搜索" readonly @click="changePicker(1)"/>
              <van-search v-model="moreSearch.value2" placeholder="按所属客户搜索" readonly @click="changePicker(2)"/>
              <van-search v-model="moreSearch.value3" placeholder="按使用客户搜索" readonly @click="changePicker(3)"/>
              <van-search v-model="moreSearch.value4" placeholder="按状态搜索" readonly @click="changePicker(4)"/>
              <van-search v-model="moreSearch.value5" placeholder="按设备类型搜索" readonly @click="changePicker(5)"/>
              <van-search v-model="moreSearch.value6" placeholder="按使用类型搜索" readonly @click="changePicker(6)"/>
              <van-search v-model="moreSearch.value7" placeholder="按标签状态搜索" readonly @click="changePicker(7)"/>
              <van-popup v-model="showPicker" position="bottom">
                <van-picker
                  :columns="columns"
                  show-toolbar
                  @cancel="showPicker = false"
                  @confirm="onConfirm"
                />
              </van-popup>
              <div style="display:flex;">
                <van-button block type="info" style="border-right: 1px solid #fff;" @click="onMoreSearch">确认</van-button>
                <van-button block type="info" style="border-left: 1px solid #fff;" @click="clearOptions">清空</van-button>
              </div>
            </van-dropdown-item>
          </van-dropdown-menu>
        </div>

      </div>
      <div class="countBar">
        <div>总数：<span style="color:#3388FF">{{ count[0] }}台</span></div>
        <div>服务器：<span style="color:#3388FF">{{ count[1] }}台</span></div>
        <div>网络设备：<span style="color:#3388FF">{{ count[2] }}台</span></div>
      </div>
      <van-list
        ref="list"
        v-model="listloading"
        :finished="finished"
        :immediate-check="false"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <fix-table :table-data="equipData" :height="'140'">
          <el-table-column
            align="center"
            prop="sn"
            width="90"
            label="编号"/>
          <el-table-column
            align="center"
            width="120"
            label="机房/机柜/客户"
          >
            <!-- <template slot="header">
          <span>机房/机柜</span><br>
          <span>客户</span>
        </template> -->
            <template slot-scope="scope">
              <div>{{ scope.row.cityname }} / {{ scope.row.house }} / {{ scope.row.floor }}F<br>{{ scope.row.position }}</div>
              <div>{{ scope.row.customname }}</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="状态">
            <template slot-scope="scope">
              <van-tag
                v-if="scope.row.serverstatus==1"
                type="success">{{ scope.row.serverstatusmsg }}</van-tag>
              <van-tag
                v-if="scope.row.serverstatus==2"
              >{{ scope.row.serverstatusmsg }}</van-tag>
              <van-tag
                v-if="scope.row.serverstatus==3"
                type="danger">{{ scope.row.serverstatusmsg }}</van-tag>
              <van-tag v-if="scope.row.serverstatus==0">{{ scope.row.serverstatusmsg }}</van-tag>
              <!-- 打标签状态 start -->
              <van-tag
                v-if="scope.row.printlabel==0"
              >未打标签</van-tag>
              <van-tag
                v-if="scope.row.printlabel==1"
                type="success">已打标签</van-tag>
                <!-- 打标签状态 end -->
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作">
            <router-link to="equipDetail"><van-button type="info" size="small">详情</van-button></router-link>
          </el-table-column>
        </fix-table>
      </van-list>
  </van-pull-refresh></div>
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
  data() {
    return {
      findStr: null,
      count: [2020, 1034, 986],
      equipData: [],
      showPicker: false,
      columns: [],
      currentPick: null,
      moreSearch: {
      },
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
        this.equipData = res.data.items
        this.listQuery.page++
      })
    },
    async onLoad() {
      await getDevice(this.listQuery).then(res => {
        var result = this.equipData.concat(res.data.items)
        this.equipData = result
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
        this.equipData = res.data.items
        this.listQuery.page = 1
        this.listQuery.page++
        this.finished = false
      })
    },
    onSearch() {},
    onMoreSearch() {
      this.$refs.item.toggle()
      console.log(this.moreSearch)
    },
    clearOptions() {
      this.moreSearch = {}
    },
    onConfirm(value) {
      this.moreSearch[this.currentPick] = value
      this.showPicker = false
    },
    changePicker(val) {
      this.showPicker = true
      if (val === 1) {
        this.currentPick = 'value1'
        this.columns = ['杭州', '宁波', '温州', '嘉兴', '湖州']
      } else if (val === 2) {
        this.currentPick = 'value2'
        this.columns = ['1', '2', '3']
      } else if (val === 3) {
        this.currentPick = 'value3'
        this.columns = ['4', '5', '6']
      } else if (val === 4) {
        this.currentPick = 'value4'
        this.columns = ['7', '8', '9']
      } else if (val === 5) {
        this.currentPick = 'value5'
        this.columns = ['10', '11', '12']
      } else if (val === 6) {
        this.currentPick = 'value6'
        this.columns = ['13', '14', '15']
      } else if (val === 7) {
        this.currentPick = 'value7'
        this.columns = ['16', '17', '18']
      }
    }
  }
}
</script>

<style lang="scss">
  .findEquipment{
    .countBar{
      display: flex;
      justify-content: space-around;
      background-color: #EAEDF5;
      height: 40px;
      line-height: 40px;
      width: 100%;
      font-size: 14px;
    }
    .moreSearch{
      width: 110px;
      margin-left: 12px;
      padding-bottom: 10px;
      .van-dropdown-menu__title{
        color: white;
      }
    }
    .el-table tbody .cell{
      font-size:11px;
    }
  }
</style>
