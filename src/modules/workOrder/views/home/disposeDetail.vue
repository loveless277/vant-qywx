<template>
  <div>
    <!-- <van-sticky>
      <van-nav-bar
        title="查看工单"
        left-text="返回"
        left-arrow
        @click-left="$router.push('/home/dispose')"
      />
    </van-sticky> -->
    <!-- <van-field v-model="orderName" label="工单名称" disabled />
    <van-field label="时间" :value="orderTime" placeholder="选择时间" disabled />
    <van-field label="工单类型" :value="orderType" placeholder="选择工单类型" disabled />
    <van-field label="工单所属客户" :value="orderCustom" placeholder="选择所属客户" disabled />
    <van-field label="审核人" :value="auditor" placeholder="选择审核人" disabled />
    <van-field label="负责人" :value="principal" placeholder="选择负责人" disabled />
    <van-field label="执行人(多个)" :value="executor.join(',')" placeholder="选择执行人(重复选择多个)" disabled />
    <van-field label="抄送(多个)" :value="copyTo.join(',')" placeholder="选择抄送(重复选择多个)" disabled />
    <van-field v-model="message" autosize disabled label="留言" type="textarea" placeholder="请输入留言" />
    <van-button type="info" size="small" @click="tableShow=true">查看表格</van-button>
    <h2>附件：</h2>
    <p v-for="item in fileArr" :key="item.name">
      <a :href="item.url">{{item.name}}</a>
    </p> -->
    <order-message></order-message>
    <!-- 表格 -->
    <van-dialog v-model="tableShow" title="标题" :show-cancel-button="false">
      <table
        border="1"
        cellspacing="0"
        cellpadding="0"
        id="orderTable"
        style="margin:0 auto;width:90%;"
      >
        <tr>
          <td>业务类型</td>
          <td colspan="3">(下架设备)</td>
        </tr>
        <tr>
          <td>概要</td>
          <td colspan="3">(下架设备)</td>
        </tr>
        <tr>
          <td>详细内容</td>
          <td colspan="3">
            (下架设备)
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <br />
            <br />
            <br />
            <br />
          </td>
        </tr>
        <tr>
          <td>商务联系人及电话</td>
          <td></td>
          <td>技术联系人及电话</td>
          <td>值班客服：18933635855</td>
        </tr>
        <tr>
          <td>期望下架时间</td>
          <td>2019年09月23日</td>
          <td>实际完工时间</td>
          <td>2019年09月23日</td>
        </tr>
        <tr>
          <td>运维签名和日期</td>
          <td>超，荣，均</td>
          <td>客户签名和日期</td>
          <td></td>
        </tr>
        <tr>
          <td colspan="4">任务明细记录</td>
        </tr>
        <tr>
          <td>存入仓库</td>
          <td colspan="3">(下架设备)</td>
        </tr>
        <tr>
          <td>包装</td>
          <td colspan="3">(下架设备)</td>
        </tr>
        <tr>
          <td>寄件</td>
          <td colspan="3">(下架设备)</td>
        </tr>
        <tr>
          <td>机柜系统的服务器信息更新</td>
          <td colspan="3">(下架设备)</td>
        </tr>
        <tr>
          <td>机柜系统的机柜数量增减确认</td>
          <td colspan="3">(下架设备)</td>
        </tr>
        <tr>
          <td>客户信息文件更新</td>
          <td colspan="3">(下架设备)</td>
        </tr>
        <tr>
          <td>机房平面图更新</td>
          <td colspan="3">(下架设备)</td>
        </tr>
        <tr>
          <td>其他</td>
          <td colspan="3">(下架设备)</td>
        </tr>
        <tr>
          <td>快递公司、运单号、备注</td>
          <td colspan="3">(下架设备)</td>
        </tr>
      </table>
    </van-dialog>
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
      message: "没有备注", //备注
      auditOpinion: "", //审核意见
      tableShow: false, //表格
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
  methods: {}
};
</script>

<style scoped>
.van-dialog /deep/ .van-dialog__content {
  height: 500px;
  overflow: scroll;
}
</style>