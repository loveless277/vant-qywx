<template>
  <div>
    <div class="select-form">
      <van-field
        :value="form.date"
        readonly
        clickable
        label="时间"
        label-align="center"
        placeholder="选择年份季度"
        @click="changePicker(1)"
      />
      <van-field
        :value="form.cabinet"
        readonly
        clickable
        label="机房"
        label-align="center"
        placeholder="选择机房"
        @click="changePicker(2)"
      />
      <van-field
        :value="form.charger"
        readonly
        clickable
        label="负责人"
        label-align="center"
        placeholder="选择负责人"
        @click="changePicker(3)"
      />
      <van-cell><van-button type="info" size="small" @click="onAdd">添加</van-button></van-cell>
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          :columns="columns"
          show-toolbar
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
    </div>
    <div class="list">
      <el-table
        :data="tableData"
        :max-height="height"
        style="width: 100%">
        <el-table-column
          prop="date"
          align="center"
          width="80"
          label="时间"/>
        <el-table-column
          prop="cabinet"
          label="机房"
          align="center"
          width="120"/>
        <el-table-column
          prop="charger"
          align="center"
          label="负责人"/>
        <el-table-column
          align="center"
          label="操作">
          <template slot-scope="{row}">
            <van-button size="small" color="#ff7875" @click="confirmDel(row)">删除</van-button>
          </template>
        </el-table-column>
      </el-table>
      <van-cell style="padding:8px 16px;"><van-button type="info" style="width:120px;height:35px;line-height:35px;" @click="onAddAll">确认发布</van-button></van-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      showPicker: false,
      columns: ['请选择'],
      currentPick: null,
      tableData: []
    }
  },
  computed: {
    height() {
      return (window.innerHeight - 400)
    },
    date() {
      var year = new Date().getFullYear()
      var season = ['请选择', '第一季度', '第二季度', '第三季度', '第四季度']
      const yearArr = ['请选择', year, year - 1, year - 2, year - 3, year - 4]
      const obj = {}
      for (let i = 0, j = yearArr.length; i < j; i++) {
        var element
        if (yearArr[i] === '请选择') {
          element = yearArr[i]
        } else {
          element = yearArr[i] + '年'
        }
        obj[element] = season
      }
      return obj
    },
    columnDate() {
      const column = this.date
      return [
        {
          values: Object.keys(column),
          className: 'year'
        },
        {
          values: column[Object.keys(column)[0]],
          className: 'season',
          defaultIndex: 0
        }
      ]
    }
  },
  methods: {
    changePicker(val) {
      this.showPicker = true
      if (val === 1) {
        this.currentPick = 'date'
        this.columns = this.columnDate
      } else if (val === 2) {
        this.currentPick = 'cabinet'
        const arr = ['1', '2', '3']
        this.columns = ['请选择', ...arr]
      } else if (val === 3) {
        this.currentPick = 'charger'
        const arr = ['4', '5', '6']
        this.columns = ['请选择', ...arr]
      }
    },
    onConfirm(value) {
      if (!(value instanceof Array)) {
        if (value === '请选择' && !this.form[this.currentPick]) {
          this.$toast('请选择相应数据')
          return
        } else if (value === '请选择') {
          this.form[this.currentPick] = ''
          this.showPicker = false
          return
        }
        this.form[this.currentPick] = value
        this.showPicker = false
      } else {
        if (value[0] === value[1]) {
          if (!this.form[this.currentPick]) {
            this.$toast('请选择年份和季度')
            return
          } else {
            this.form[this.currentPick] = ''
            this.showPicker = false
            return
          }
        }
        if (value[0] === '请选择') {
          this.$toast('请选择年份')
          return
        }
        if (value[1] === '请选择') {
          this.$toast('请选择季度')
          return
        }
        this.form[this.currentPick] = value[0] + '-' + value[1]
        this.showPicker = false
      }
    },
    onAdd() {
      console.log(this.form)
      const obj = { ...this.form }
      this.tableData.push(obj)
    },
    onAddAll() {
      console.log(this.tableData)
    },
    confirmDel(row) {
      this.$dialog
        .confirm({
          title: '确认删除该条任务？'
        })
        .then(() => {
          // on confirm
          const index = this.tableData.indexOf(row)
          this.tableData.splice(index, 1)
        }).catch(() => {
          // on cancel
        })
    }
  }
}
</script>

<style lang="scss">
.select-form{
        border-bottom: 10px solid #EAEDF5;
      }
      .select-form,.list{
        .van-cell__value.van-cell__value--alone{
          text-align: center;
        }
      }
</style>
