<template>
  <div>
    <van-nav-bar title="新建工单" left-text="返回" left-arrow @click-left="$router.push('/home')" />
    <van-cell-group>
      <van-field v-model="orderName" required label="工单名称" />
      <van-field
        label="时间"
        :value="orderTime"
        placeholder="选择时间"
        required
        @focus="timePicker = true"
        right-icon="cross"
        @click-right-icon="orderTime=''"
      />
      <van-field
        label="工单类型"
        :value="orderType"
        placeholder="选择工单类型"
        required
        @focus="orderTypePicker = true"
        right-icon="cross"
        @click-right-icon="orderType=''"
      />
      <van-field
        label="工单所属客户"
        :value="orderCustom"
        placeholder="选择所属客户"
        required
        @focus="orderCustomPicker = true"
        right-icon="cross"
        @click-right-icon="orderCustom=''"
      />
      <van-field
        label="审核人"
        :value="auditor"
        placeholder="选择审核人"
        required
        @focus="auditorPicker = true"
        right-icon="cross"
        @click-right-icon="auditor=''"
      />
      <van-field
        label="负责人"
        :value="principal"
        placeholder="选择负责人"
        required
        @focus="principalPicker = true"
        right-icon="cross"
        @click-right-icon="principal=''"
      />

      <van-field
        label="抄送(多个)"
        :value="copyTo.join(',')"
        placeholder="选择抄送(重复选择多个)"
        required
        @focus="copyToPicker = true"
        right-icon="cross"
        @click-right-icon="copyTo=[]"
      />
      <div>
        <van-uploader :after-read="afterReadOther" accept="*" result-type="file">
          <van-button size="small" type="info">上传文件</van-button>
        </van-uploader>
        <p v-for="item in otherFileArr" :key="item.file.lastModified">{{item.file.name}}</p>
      </div>
      <div>
        <van-uploader
          style="margin-top:10px"
          :after-read="afterReadData"
          accept="*"
          result-type="file"
        >
          <van-button size="small" type="info">上传数据文件</van-button>
        </van-uploader>
        <p>{{(dataFile.file.name)?(dataFile.file.name):''}}</p>
      </div>
      <van-field v-model="message" autosize label="留言" type="textarea" placeholder="请输入留言" />
    </van-cell-group>
    <van-button type="primary" @click="affirmAdd()">确认创建</van-button>
    <!-- 弹出框内容 -->
    <van-popup v-model="timePicker" position="bottom">
      <van-datetime-picker
        v-model="nowTime"
        type="date"
        @cancel="timePicker=false"
        @confirm="timeChange"
      />
    </van-popup>
    <van-popup v-model="orderTypePicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="orderTypecolumns"
        @cancel="orderTypePicker = false"
        @confirm="orderTypeConfirm"
      />
    </van-popup>
    <van-popup v-model="orderCustomPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="orderCustomcolumns"
        @cancel="orderCustomPicker = false"
        @confirm="orderCustomConfirm"
      />
    </van-popup>
    <van-popup v-model="auditorPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="auditorPicker = false"
        @confirm="auditorConfirm"
        @change="onChange"
      />
    </van-popup>
    <van-popup v-model="principalPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="principalPicker = false"
        @confirm="principalConfirm"
        @change="onChange"
      />
    </van-popup>

    <van-popup v-model="copyToPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="copyToPicker = false"
        @confirm="copyToConfirm"
        @change="onChange"
      />
    </van-popup>
    <!-- 弹出框内容 -->
  </div>
</template>

<script>
import { async } from "q";
const citys = {
  运维部: ["运维老王", "运维二王", "运维三王", "运维四王", "运维五王"],
  技术部: ["技术老王", "技术二王", "运维三王", "运维四王", "运维五王"],
  销售部: ["销售老王", "销售2王", "销售3王", "销售4王", "销售5王"]
};
export default {
  data() {
    return {
      orderName: "", //工单名称
      nowTime: new Date(), //当前时间
      orderTime: "", //工单时间
      orderType: "", //工单类型
      orderCustom: "", //工单所属客户
      auditor: "", //审核人
      principal: "", //负责人
      executor: [], //执行人
      copyTo: [], //抄送
      timePicker: false, //时间选择框
      orderTypePicker: false, //工单类型选择框
      orderCustomPicker: false, //工单所属客户选择框
      auditorPicker: false, //审核人选择框
      principalPicker: false, //负责人选择框
      copyToPicker: false, //抄送选择框
      message: "", //备注
      otherFileArr: [], //上传文件数组
      dataFile: { file: { name } }, //上传数据文件
      orderTypecolumns: ["测试机申请单", "上架设备单", "下架设备单", "其它"], //工单类型
      orderCustomcolumns: ["中国移动", "中国电信", "中国联通"], //工单所属客户数组
      columns: [
        {
          values: Object.keys(citys),
          className: "column1"
        },
        {
          values: citys[Object.keys(citys)[0]],
          className: "column2"
        }
      ],
      jieguo:''
    };
  },
  methods: {
    //改变多重数列时调用
    onChange(picker, values) {
      console.log(values);
      picker.setColumnValues(1, citys[values[0]]);
    },
    // 改变工单时间
    timeChange(selectTime) {
      this.timePicker = false;
      this.orderTime =
        selectTime.getFullYear() +
        "-" +
        (selectTime.getMonth() + 1) +
        "-" +
        selectTime.getDate();
    },
    //改变工单客户
    orderCustomConfirm(value) {
      this.orderCustom = value;
      this.orderCustomPicker = false;
    },
    //改变工单类型
    orderTypeConfirm(value) {
      this.orderType = value;
      this.orderTypePicker = false;
    },
    auditorConfirm(value) {
      this.auditor = value[1];
      this.auditorPicker = false;
    },
    principalConfirm(value) {
      this.principal = value[1];
      this.principalPicker = false;
    },
    executorConfirm(value) {
      this.executor.push(value[1]);
      this.executorPicker = false;
    },
    copyToConfirm(value) {
      this.copyTo.push(value[1]);
      this.copyToPicker = false;
    },
    afterReadOther(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.otherFileArr.push(file);
      console.log(this.fileArr);
    },
    afterReadData(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.dataFile = file;
    },
    async affirmAdd() {
      var reader = new FileReader();
      let that = this;
      console.log(this.jieguo)
      reader.readAsDataURL(this.dataFile.file);
      reader.onload = function(e) {
        console.log(this.result)
        // let param = new URLSearchParams({
        //   file: that.dataFile.file,
        //   // userData: this.result
        // });
        let fd =new FormData()
        fd.append('file',that.dataFile.file)
        that.jieguo=this.result
        that.$axios
          .post("http://192.168.10.231:8080/other/upload", fd)
          .then(function(response) {
            alert(response.data);
            // this.$router.push("/home");
            that.$toast("上传成功");
            alert("上传成功了");
            that.$router.push("/home");
            console.log(response);
          })
          .catch(function(error) {
            that.$toast("上传失败");
            console.log(error);
          });
      };
      console.log(this.jieguo)
      //   let config = {
      //   //添加请求头
      //   headers: { "Content-Type": "multipart/form-data" },
      //   //添加上传进度监听事件
      //   onUploadProgress: e => {
      //     var completeProgress = ((e.loaded / e.total * 100) | 0) + "%";
      //     this.progress = completeProgress;
      //   }
      // };
    }
  }
};
</script>

<style>
</style>