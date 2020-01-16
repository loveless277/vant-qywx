<template>
  <div class="normal" style="text-align:center;background-color:#fff;">
    <van-field
      v-model="form.name"
      label="任务名称"
      label-align="center"
      placeholder="请输入任务名称"
    />
    <van-field
      :value="form.customer"
      readonly
      clickable
      label="客户"
      label-align="center"
      placeholder="选择客户"
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
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        :columns="columns"
        show-toolbar
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <van-button type="info" style="width:120px;height:35px;line-height:35px;margin:20px;">导入盘点数据</van-button>
    <van-button type="info" style="width:120px;height:35px;line-height:35px;margin:20px;" @click="onPublish">确认发布</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      showPicker: false,
      columns: [],
      currentPick: null
    }
  },
  methods: {
    changePicker(val) {
      this.showPicker = true
      if (val === 1) {
        this.currentPick = 'customer'
        this.columns = ['杭州', '宁波', '温州', '嘉兴', '湖州']
      } else if (val === 2) {
        this.currentPick = 'cabinet'
        this.columns = ['1', '2', '3']
      } else if (val === 3) {
        this.currentPick = 'charger'
        this.columns = ['4', '5', '6']
      }
    },
    onConfirm(value) {
      this.form[this.currentPick] = value
      this.showPicker = false
    },
    onPublish() {}
  }
}
</script>
