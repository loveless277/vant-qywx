<template>
  <div>
      <!-- <van-nav-bar title="查看工单" left-text="返回" left-arrow @click-left="$router.push('/home/audit')" />
    <van-field v-model="orderName"  label="工单名称" disabled />
    <van-field label="时间" :value="orderTime" placeholder="选择时间" disabled />
    <van-field label="工单类型" :value="orderType" placeholder="选择工单类型" disabled />
    <van-field label="工单所属客户" :value="orderCustom" placeholder="选择所属客户" disabled />
    <van-field label="审核人" :value="auditor" placeholder="选择审核人" disabled />
    <van-field label="负责人" :value="principal" placeholder="选择负责人" disabled />
    <van-field label="执行人(多个)" :value="executor.join(',')" placeholder="选择执行人(重复选择多个)" disabled />
    <van-field label="抄送(多个)" :value="copyTo.join(',')" placeholder="选择抄送(重复选择多个)" disabled />
    <p v-for="item in fileArr" :key="item.file.lastModified">{{item.file.name}}</p>
    <van-field v-model="message" rows="3" disabled label="留言" type="textarea" placeholder="请输入留言" /> -->

    <order-message></order-message>

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
      executor: ['老王','老李'], //执行人
      copyTo: ['老陈','老潘'], //抄送
      message: "没有备注", //备注
      auditOpinion:'',  //审核意见
    };
  },
  methods:{
      refuseAudit(){
          this.$router.push('/home/audit')
      },
      passAudit(){
          this.$router.push('/home/audit')
      }
  }
};
</script>

<style>
</style>