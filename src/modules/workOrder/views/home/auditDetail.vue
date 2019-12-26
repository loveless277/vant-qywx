<template>
  <div>
    <!-- <van-sticky>
      <van-nav-bar
        title="审核工单"
        left-text="返回"
        left-arrow
        @click-left="$router.push('/home/audit')"
      />
    </van-sticky> -->
    <order-message></order-message>
    <!-- <van-field v-model="orderName" label="工单名称" disabled />
    <van-field label="时间" :value="orderTime" placeholder="选择时间" disabled />
    <van-field label="工单类型" :value="orderType" placeholder="选择工单类型" disabled />
    <van-field label="工单所属客户" :value="orderCustom" placeholder="选择所属客户" disabled />
    <van-field label="审核人" :value="auditor" placeholder="选择审核人" disabled />
    <van-field label="负责人" :value="principal" placeholder="选择负责人" disabled />
    <van-field label="执行人(多个)" :value="executor.join(',')" placeholder="选择执行人(重复选择多个)" disabled />
    <van-field label="抄送(多个)" :value="copyTo.join(',')" placeholder="选择抄送(重复选择多个)" disabled />
    <van-field v-model="message" autosize disabled label="备注" type="textarea" placeholder="请输入留言" />
    <van-button type="info" size="small" @click="tableShow=true">查看表格</van-button>
    <h2>附件：</h2>
    <p v-for="item in fileArr" :key="item.name">
      <a :href="item.url">{{item.name}}</a>
    </p> -->
    <!-- 表格 -->

    <!-- 审核意见 -->
    <van-field
      style="border-top:1px dotted black;margin:10px 0"
      required
      v-model="auditOpinion"
      rows="3"
      label="审核意见"
      type="textarea"
      placeholder="请输入意见"
    />
    <div style="display:inline-block;width:50%">
      <van-button @click="refuseAudit" type="info">审核驳回</van-button>
    </div>
    <div style="display:inline-block;width:50%">
      <van-button @click="passAudit" type="info">审核通过</van-button>
    </div>
  </div>
</template>

<script>
import orderMessage from "./orderMessage";
export default {
  components: {
    orderMessage
  },
  data() {
    return {
      orderName: "第一张工单", //工单名称
      orderTime: "2019-12-12", //工单时间
      orderType: "测试机申请单", //工单类型
      orderCustom: "中国电信", //工单所属客户
      auditor: "老王", //审核人
      principal: "老王", //负责人
      executor: ["老王", "老李"], //执行人
      copyTo: ["老陈", "老潘"], //抄送
      message:
        "没有备注没有备注没有备注没有备注没有备注没有备注没有备注没有备注没有备注没有备注没有备注没有备注没有备注没有备注", //备注
      auditOpinion: "", //审核意见
      tableShow: false, //打开表格
      fileArr: [
        {
          name: "图片。。。",
          url: "http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071315.png"
        },
        {
          name: "文件111",
          url: "http://121.12.89.205:9001/download/ExportServerInfo.xls"
        }
      ]
    };
  },
  methods: {
    refuseAudit() {
      this.$router.push("/home/audit");
    },
    passAudit() {
      this.$router.push("/home/audit");
    }
  }
};
</script>

<style scoped>
.van-dialog /deep/ .van-dialog__content {
  height: 500px;
  overflow: scroll;
}
</style>