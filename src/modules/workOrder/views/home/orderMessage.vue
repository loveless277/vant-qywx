<template>
  <div>
    <van-sticky>
      <van-nav-bar title="查看工单" left-text="返回" left-arrow @click-left="$router.go(-1)" />
    </van-sticky>
    <van-field v-model="orderName" label="工单名称" disabled />
    <van-field label="时间" :value="orderTime" placeholder="选择时间" disabled />
    <van-field label="工单类型" :value="orderType" placeholder="选择工单类型" disabled />
    <van-field label="工单所属客户" :value="orderCustom" placeholder="选择所属客户" disabled />
    <van-field label="审核人" :value="auditor" placeholder="选择审核人" disabled />
    <van-field label="负责人" :value="principal" placeholder="选择负责人" disabled />
    <van-field label="执行人(多个)" :value="executor.join(',')" placeholder="选择执行人(重复选择多个)" disabled />
    <van-field label="抄送(多个)" :value="copyTo.join(',')" placeholder="选择抄送(重复选择多个)" disabled />
    <van-field v-model="message" autosize disabled label="备注" type="textarea" placeholder="请输入留言" />
    <van-field v-model="auditmessage" autosize disabled label="审核意见" type="textarea" />
    <div>
    <h2>附件(点击查看)：</h2>
    <p v-for="item in fileArr" :key="item.name" @click="fileClick(item)">{{item.name}}</p>
    </div>
    <div>
    <h2>执行反馈：</h2>
    <van-steps direction="vertical" :active="0">
      <van-step v-for="item in disposeFileArr" :key="item.message" style="border-bottom:10px solid #eaedf5">
        <table style="border-spacing:0px 15px">
        <tr>
          <td style="width:30%">时间：</td>
          <td>2019-12-24</td>
        </tr>
        <tr>
          <td>图片：</td>
          <td>
            <van-grid :border="false" :column-num="2">
              <van-grid-item v-for="url in item.url" :key="url">
                <van-image @click="picClick(url)" :src="url" />
              </van-grid-item>
            </van-grid>
          </td>
        </tr>
        <tr>
          <td>备注：</td>
          <td>{{item.message}}</td>
        </tr>
        <tr>
          <td>运维人员：</td>
          <td>运超哥</td>
        </tr>
        </table>
        <!-- <p  style="width:100%;"><b style="width:30%;position:absolute;left:0">时间：</b>
            <span style="width:70%">absolute</span></p>
        <van-grid :border="false" :column-num="3">
            
          <van-grid-item v-for="url in item.url" :key="url">
            <van-image @click="picClick(url)" :src="url" />
          </van-grid-item>
          <p style="width:100%;">备注：{{item.message}}</p>
          <p style="width:100%;">运维人员：超哥</p>
        </van-grid>-->
      </van-step>
    </van-steps>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from "vant";
export default {
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
      auditmessage:
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
      ],
      disposeFileArr: [
        {
          message: "已经完成了",
          url: [
            "https://img.yzcdn.cn/vant/apple-1.jpg",
            "https://img.yzcdn.cn/vant/apple-1.jpg",
            "https://img.yzcdn.cn/vant/apple-2.jpg",
            "https://img.yzcdn.cn/vant/apple-3.jpg"
          ]
        },
        {
          message:
            "已经完成了已经完成了已经完成了已经完成了已经完成了已经完成了",
          url: [
            "https://img.yzcdn.cn/vant/apple-1.jpg",
            "https://img.yzcdn.cn/vant/apple-1.jpg",
            "https://img.yzcdn.cn/vant/apple-3.jpg"
          ]
        },
        {
          message: "已经完成了",
          url: ["https://img.yzcdn.cn/vant/apple-1.jpg"]
        }
      ]
    };
  },
  methods: {
    fileClick(item) {
      console.log(item.url.slice(-3));
      if (item.url.slice(-3) == ("png" || "jpg")) {
        ImagePreview({
          images: [item.url],
          showIndex: false,
          closeOnPopstate: true
        });
      } else {
        window.location.href = item.url;
      }
    },
    picClick(url) {
      ImagePreview({
        images: [url],
        showIndex: false,
        closeOnPopstate: true
      });
    }
  }
};
</script>

<style scoped>
tr{
    margin: 5px 0;
}
</style>