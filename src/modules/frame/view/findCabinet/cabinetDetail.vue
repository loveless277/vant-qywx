<template>
  <div class="cabinet-detail">
    <nav-bar title-name="机柜详情" back-path="/findCabinet"/>
    <van-tabs v-model="active" color="#3388FF" style="margin-top:10px;">
      <van-tab title="机柜详细">
        <van-cell>
          <span style="margin-right:15px">上线：<span style="display:inline-block;width:10px;height:10px;background-color:#41E041;border-radius:10px;"/></span>
          <span style="margin-right:15px">停机：<span style="display:inline-block;width:10px;height:10px;background-color:#F4B239;border-radius:10px;"/></span>
          <span style="margin-right:15px">下架：<span style="display:inline-block;width:10px;height:10px;background-color:#F44E39;border-radius:10px;"/></span>
          <span style="margin-right:15px">插入：∇</span>
        </van-cell>
        <table class="frametable">
          <tr>
            <td>
              <table>
                <thead>
                  <tr>
                    <th style="width:28px;text-align:right;"/>
                    <th style="width:28px;text-align:right;"/>
                    <th style="width:120px;text-align:left;"/>
                    <th style="width:120px;text-align:left;"/>
                  </tr>
                </thead>
                <template
                  v-for="o in reverseNum"
                  class="text item">
                  <tr :key="o">
                    <td
                      v-if="(o) %3 == 0 &&o !=1"
                      :style="getRulerColor(o)"
                      rowspan="3"
                      style="width:28px;text-align:right;border:1px solid black;">{{ o /3 }}U
                    </td>
                    <td
                      border="1"
                      style="width:28px;text-align:right;border:1px solid black;">{{ o }}□
                    </td>
                    <!--  单个的情况 -->
                    <template v-if="needDrawList.indexOf(o) !==-1 && deviceDrawData[needDrawList.indexOf(o)].site == 0">
                      <td
                        :rowspan="deviceDrawData[needDrawList.indexOf(o)].span"
                        colspan="2"
                        class="currentCustomerClass"
                        @click="$router.push('/index')">
                        <span
                          v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 1"
                          style="display:inline-block;width:10px;height:10px;background-color:#41E041;border-radius:10px;"/>
                        <span
                          v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 2"
                          style="display:inline-block;width:10px;height:10px;background-color:#F4B239;border-radius:10px;"/>
                        <span
                          v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 3"
                          style="display:inline-block;width:10px;height:10px;background-color:#F44E39;border-radius:10px;"/>
                        {{ deviceDataList[needDrawList.indexOf(o)].sn }}
                        ({{ deviceDataList[needDrawList.indexOf(o)].size }}U)
                        <parent-server-table
                          :childcount="deviceDataList[needDrawList.indexOf(o)].childcount"
                          :childlist="deviceDataList[needDrawList.indexOf(o)].childsequenceList"/>
                          <!-- <parent-server-table :childcount="2":childlist="childlist"></parent-server-table> -->
                      </td>
                    </template>
                    <!--  并排，不同高 -->
                    <!-- 左边 -->
                    <template v-if="needDrawList.indexOf(o) !==-1 && deviceDrawData[needDrawList.indexOf(o)].site == 1">
                      <td
                        :rowspan="deviceDrawData[needDrawList.indexOf(o)].span"
                        colspan="1"
                        class="currentCustomerClass"
                        @click="$router.push('/index')">
                        <span
                          v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 1"
                          style="display:inline-block;width:10px;height:10px;background-color:#41E041;border-radius:10px;"/>
                        <span
                          v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 2"
                          style="display:inline-block;width:10px;height:10px;background-color:#F4B239;border-radius:10px;"/>
                        <span
                          v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 3"
                          style="display:inline-block;width:10px;height:10px;background-color:#F44E39;border-radius:10px;"/>
                        {{ deviceDataList[needDrawList.indexOf(o)].sn }}
                        ({{ deviceDataList[needDrawList.indexOf(o)].size }}U)

                        <parent-server-table
                          :childcount="deviceDataList[needDrawList.indexOf(o)].childcount"
                          :childlist="deviceDataList[needDrawList.indexOf(o)].childsequenceList"/>

                      </td>
                      <!-- 如果右边也有的话同时打一个右边 -->
                      <td
                        v-if="needDrawList.indexOf(o,needDrawList.indexOf(o)+1) !==-1 "
                        :rowspan="deviceDrawData[needDrawList.indexOf(o)].span"
                        colspan="1"
                        class="currentCustomerClass"
                        @click="$router.push('/index')">
                        <span
                          v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 1"
                          style="display:inline-block;width:10px;height:10px;background-color:#41E041;border-radius:10px;"/>
                        <span
                          v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 2"
                          style="display:inline-block;width:10px;height:10px;background-color:#F4B239;border-radius:10px;"/>
                        <span
                          v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 3"
                          style="display:inline-block;width:10px;height:10px;background-color:#F44E39;border-radius:10px;"/>
                        {{ deviceDataList[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].sn }}
                        ({{ deviceDataList[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].size }}U)

                        <!-- 2 -->
                        <parent-server-table
                          :childcount="deviceDataList[needDrawList.indexOf(o)].childcount"
                          :childlist="deviceDataList[needDrawList.indexOf(o)].childsequenceList"/>
                      </td>
                    </template>
                    <!-- 如果是只有右边，或者先给右边 -->
                    <template v-if="needDrawList.indexOf(o) !==-1 && deviceDrawData[needDrawList.indexOf(o)].site == 2">
                      <!-- 如果左边为空 -->
                      <td v-if="needDrawList.indexOf(o,needDrawList.indexOf(o)+1) ==-1 &&deviceDrawData[needDrawList.indexOf(o)].tail ==1"/>
                      <!-- 如果左边有，但后面才给 -->
                      <td
                        v-if="needDrawList.indexOf(o,needDrawList.indexOf(o)+1) !==-1 "
                        :rowspan="deviceDrawData[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].span"
                        colspan="1"
                        class="currentCustomerClass"
                        @click="$router.push('/index')">
                        <span
                          v-if=" deviceDataList[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].serverstatus == 1"
                          style="display:inline-block;width:10px;height:10px;background-color:#41E041;border-radius:10px;"/>
                        <span
                          v-if=" deviceDataList[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].serverstatus == 2"
                          style="display:inline-block;width:10px;height:10px;background-color:#F4B239;border-radius:10px;"/>
                        <span
                          v-if=" deviceDataList[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].serverstatus == 3"
                          style="display:inline-block;width:10px;height:10px;background-color:#F44E39;border-radius:10px;"/>
                        {{ deviceDataList[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].sn }}
                        ({{ deviceDataList[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].size }}U)
                        <parent-server-table
                          :childcount="deviceDataList[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].childcount"
                          :childlist="deviceDataList[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].childsequenceList"/>

                      </td>
                      <td
                        :rowspan="deviceDrawData[needDrawList.indexOf(o)].span"
                        colspan="1"
                        class="currentCustomerClass"
                        @click="$router.push('/index')">
                        <span
                          v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 1"
                          style="display:inline-block;width:10px;height:10px;background-color:#41E041;border-radius:10px;"/>
                        <span
                          v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 2"
                          style="display:inline-block;width:10px;height:10px;background-color:#F4B239;border-radius:10px;"/>
                        <span
                          v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 3"
                          style="display:inline-block;width:10px;height:10px;background-color:#F44E39;border-radius:10px;"/>
                        {{ deviceDataList[needDrawList.indexOf(o)].sn }}
                        ({{ deviceDataList[needDrawList.indexOf(o)].size }}U)

                        <parent-server-table
                          :childcount="deviceDataList[needDrawList.indexOf(o)].childcount"
                          :childlist="deviceDataList[needDrawList.indexOf(o)].childsequenceList"/>
                      </td>
                    </template>
                  </tr>
                </template>
              </table>
            </td>
            <td>
              <!-- 表格里面嵌套表格 -->
              <table>
                <thead>
                  <tr>
                    <th style="width:28px;text-align:right;"/>
                  </tr>
                </thead>
                <tr v-for="o in reverseNum " :key="o">
                  <td style="width:28px;text-align:left;border:1px solid black;">□{{ o }}</td>
                  <td
                    v-if="(o) %3 == 0 &&o !=1"
                    :style="getRulerColor(o)"
                    rowspan="3"
                    style="width:28px;text-align:left;border:1px solid black;">{{ (o) /3 }}U</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </van-tab>

      <van-tab title="机柜图片">
        <div class="image-container">
          <div class="image-wrap">
            <van-uploader :after-read="afterRead" multiple/>
            <div
              v-for="item in fileList"
              :key="item.url"
              class="image-box">
              <van-image
                :src="item.url"
                width="80"
                height="80"
                fit="cover"
                @click="showImagePreview(item.url)"
              />
              <i class="van-icon van-icon-clear van-uploader__preview-delete" @click="confirmDelImg"/>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ParentServerTableVue from './ParentServerTable.vue'
import { ImagePreview } from 'vant'
export default {
  components: {
    'parent-server-table': ParentServerTableVue
  },
  data() {
    return {
      active: 0,
      needDrawList: [93, 81, 72, 63, 54, 45, 36, 27, 18],
      deviceDataList: [
        {
          'servertype': 1,
          'purpose': '',
          'frameid': 113,
          'person2_tel': '',
          'serverstatus': 1,
          'onlinetime': '2000-01-01 00:00:00',
          'memo': '',
          'person_tel': '',
          'person_idcode': '',
          'childsequenceList': [
          ],
          'spec': '',
          'devicetype': 1,
          'parentSN': null,
          'childcount': null,
          'ippool_id': 0,
          'printlabel': 0,
          'person2_idcode': '',
          'sn': '2102350GTU10G2000049',
          'brand': '华为CE5855-48T4S2Q-EI',
          'plugnum': 1,
          'usecustom': '白山',
          'os': '',
          'custom_id': 40,
          'offlinetime': null,
          'person_name': '',
          'server_id': 2216,
          'customsn': '',
          'enddimension': 93,
          'startdimension': 91,
          'childserversequence': null,
          'size': 1,
          'customname': '白山',
          'person2_name': '',
          'insertflag': 0,
          'updatetime': '2019-12-11 15:25:42',
          'rackid': '1'
        },
        {
          'servertype': 1,
          'purpose': 'CDN',
          'frameid': 113,
          'person2_tel': '',
          'serverstatus': 1,
          'onlinetime': '2000-01-01 00:00:00',
          'memo': '',
          'person_tel': '',
          'person_idcode': '',
          'childsequenceList': [
          ],
          'spec': '',
          'devicetype': 1,
          'parentSN': null,
          'childcount': null,
          'ippool_id': 0,
          'printlabel': 0,
          'person2_idcode': '',
          'sn': 'BSRGD3X',
          'brand': 'DELL R510',
          'plugnum': 1,
          'usecustom': '白山',
          'os': '',
          'custom_id': 40,
          'offlinetime': null,
          'person_name': '',
          'server_id': 2217,
          'customsn': '',
          'enddimension': 81,
          'startdimension': 76,
          'childserversequence': null,
          'size': 2,
          'customname': '白山',
          'person2_name': '',
          'insertflag': 0,
          'updatetime': '2019-12-11 15:25:42',
          'rackid': '2'
        },
        {
          'servertype': 1,
          'purpose': 'CDN',
          'frameid': 113,
          'person2_tel': '',
          'serverstatus': 1,
          'onlinetime': '2000-01-01 00:00:00',
          'memo': '',
          'person_tel': '',
          'person_idcode': '',
          'childsequenceList': [
          ],
          'spec': '',
          'devicetype': 1,
          'parentSN': null,
          'childcount': null,
          'ippool_id': 0,
          'printlabel': 0,
          'person2_idcode': '',
          'sn': 'GM2933X',
          'brand': 'DELL R510',
          'plugnum': 1,
          'usecustom': '白山',
          'os': '',
          'custom_id': 40,
          'offlinetime': null,
          'person_name': '',
          'server_id': 2218,
          'customsn': '',
          'enddimension': 72,
          'startdimension': 67,
          'childserversequence': null,
          'size': 2,
          'customname': '白山',
          'person2_name': '',
          'insertflag': 0,
          'updatetime': '2019-12-11 15:25:42',
          'rackid': '3'
        },
        {
          'servertype': 1,
          'purpose': 'CDN',
          'frameid': 113,
          'person2_tel': '',
          'serverstatus': 1,
          'onlinetime': '2000-01-01 00:00:00',
          'memo': '',
          'person_tel': '',
          'person_idcode': '',
          'childsequenceList': [
          ],
          'spec': '',
          'devicetype': 1,
          'parentSN': null,
          'childcount': null,
          'ippool_id': 0,
          'printlabel': 0,
          'person2_idcode': '',
          'sn': '5FX713X',
          'brand': 'DELL R510',
          'plugnum': 1,
          'usecustom': '白山',
          'os': '',
          'custom_id': 40,
          'offlinetime': null,
          'person_name': '',
          'server_id': 2219,
          'customsn': '',
          'enddimension': 63,
          'startdimension': 58,
          'childserversequence': null,
          'size': 2,
          'customname': '白山',
          'person2_name': '',
          'insertflag': 0,
          'updatetime': '2019-12-11 15:25:42',
          'rackid': '4'
        },
        {
          'servertype': 1,
          'purpose': 'CDN',
          'frameid': 113,
          'person2_tel': '',
          'serverstatus': 1,
          'onlinetime': '2000-01-01 00:00:00',
          'memo': '',
          'person_tel': '',
          'person_idcode': '',
          'childsequenceList': [
          ],
          'spec': '',
          'devicetype': 1,
          'parentSN': null,
          'childcount': null,
          'ippool_id': 0,
          'printlabel': 0,
          'person2_idcode': '',
          'sn': 'CSRGD3X',
          'brand': 'DELL R510',
          'plugnum': 1,
          'usecustom': '白山',
          'os': '',
          'custom_id': 40,
          'offlinetime': null,
          'person_name': '',
          'server_id': 2220,
          'customsn': '',
          'enddimension': 54,
          'startdimension': 49,
          'childserversequence': null,
          'size': 2,
          'customname': '白山',
          'person2_name': '',
          'insertflag': 0,
          'updatetime': '2019-12-11 15:25:42',
          'rackid': '5'
        },
        {
          'servertype': 1,
          'purpose': 'CDN',
          'frameid': 113,
          'person2_tel': '',
          'serverstatus': 1,
          'onlinetime': '2000-01-01 00:00:00',
          'memo': '',
          'person_tel': '',
          'person_idcode': '',
          'childsequenceList': [
          ],
          'spec': '',
          'devicetype': 1,
          'parentSN': null,
          'childcount': null,
          'ippool_id': 0,
          'printlabel': 0,
          'person2_idcode': '',
          'sn': '61V713X',
          'brand': 'DELL R510',
          'plugnum': 1,
          'usecustom': '白山',
          'os': '',
          'custom_id': 40,
          'offlinetime': null,
          'person_name': '',
          'server_id': 2221,
          'customsn': '',
          'enddimension': 45,
          'startdimension': 40,
          'childserversequence': null,
          'size': 2,
          'customname': '白山',
          'person2_name': '',
          'insertflag': 0,
          'updatetime': '2019-12-11 15:25:42',
          'rackid': '6'
        },
        {
          'servertype': 1,
          'purpose': 'CDN',
          'frameid': 113,
          'person2_tel': '',
          'serverstatus': 1,
          'onlinetime': '2000-01-01 00:00:00',
          'memo': '',
          'person_tel': '',
          'person_idcode': '',
          'childsequenceList': [
          ],
          'spec': '',
          'devicetype': 1,
          'parentSN': null,
          'childcount': null,
          'ippool_id': 0,
          'printlabel': 0,
          'person2_idcode': '',
          'sn': 'HRDJY2X',
          'brand': 'DELL R510',
          'plugnum': 1,
          'usecustom': '白山',
          'os': '',
          'custom_id': 40,
          'offlinetime': null,
          'person_name': '',
          'server_id': 2222,
          'customsn': '',
          'enddimension': 36,
          'startdimension': 31,
          'childserversequence': null,
          'size': 2,
          'customname': '白山',
          'person2_name': '',
          'insertflag': 0,
          'updatetime': '2019-12-11 15:25:42',
          'rackid': '7'
        },
        {
          'servertype': 1,
          'purpose': 'CDN',
          'frameid': 113,
          'person2_tel': '',
          'serverstatus': 1,
          'onlinetime': '2000-01-01 00:00:00',
          'memo': '',
          'person_tel': '',
          'person_idcode': '',
          'childsequenceList': [
          ],
          'spec': '',
          'devicetype': 1,
          'parentSN': null,
          'childcount': null,
          'ippool_id': 0,
          'printlabel': 0,
          'person2_idcode': '',
          'sn': '6RJW73X',
          'brand': 'DELL R510',
          'plugnum': 1,
          'usecustom': '白山',
          'os': '',
          'custom_id': 40,
          'offlinetime': null,
          'person_name': '',
          'server_id': 2223,
          'customsn': '',
          'enddimension': 27,
          'startdimension': 22,
          'childserversequence': null,
          'size': 2,
          'customname': '白山',
          'person2_name': '',
          'insertflag': 0,
          'updatetime': '2019-12-11 15:25:42',
          'rackid': '8'
        },
        {
          'servertype': 1,
          'purpose': 'CDN',
          'frameid': 113,
          'person2_tel': '',
          'serverstatus': 1,
          'onlinetime': '2000-01-01 00:00:00',
          'memo': '',
          'person_tel': '',
          'person_idcode': '',
          'childsequenceList': [
          ],
          'spec': '',
          'devicetype': 1,
          'parentSN': null,
          'childcount': null,
          'ippool_id': 0,
          'printlabel': 0,
          'person2_idcode': '',
          'sn': '4MJW73X',
          'brand': 'DELL R510',
          'plugnum': 1,
          'usecustom': '白山',
          'os': '',
          'custom_id': 40,
          'offlinetime': null,
          'person_name': '',
          'server_id': 2224,
          'customsn': '',
          'enddimension': 18,
          'startdimension': 13,
          'childserversequence': null,
          'size': 2,
          'customname': '白山',
          'person2_name': '',
          'insertflag': 0,
          'updatetime': '2019-12-11 15:25:42',
          'rackid': '9'
        }
      ],
      deviceDrawData: [
        {
          'end': 93,
          'site': 0,
          'span': 3,
          'tail': 0
        },
        {
          'end': 81,
          'site': 0,
          'span': 6,
          'tail': 0
        },
        {
          'end': 72,
          'site': 0,
          'span': 6,
          'tail': 0
        },
        {
          'end': 63,
          'site': 0,
          'span': 6,
          'tail': 0
        },
        {
          'end': 54,
          'site': 0,
          'span': 6,
          'tail': 0
        },
        {
          'end': 45,
          'site': 0,
          'span': 6,
          'tail': 0
        },
        {
          'end': 36,
          'site': 0,
          'span': 6,
          'tail': 0
        },
        {
          'end': 27,
          'site': 0,
          'span': 6,
          'tail': 0
        },
        {
          'end': 18,
          'site': 0,
          'span': 6,
          'tail': 0
        }
      ],
      rulerSize: 180,
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        { url: 'https://img.yzcdn.cn/vant/tree.jpg' }
      ]
    }
  },
  computed: {
    reverseNum() {
      const arr = []
      for (let index = this.rulerSize; index > 0; index--) {
        arr.push(index)
      }
      return arr
    }
  },
  methods: {
    getRulerColor(index) {
      var i = index
      var styleObj = {}
      if ((i / 3) % 2 === 0) {
        styleObj['background-color'] = '#C5F6C5'
      } else {
        styleObj['background-color'] = '#FCD4D5'
      }
      return styleObj
    },
    showImagePreview(url) {
      ImagePreview({
        images: [url],
        showIndex: false
      })
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
      const toast = this.$toast.loading({
        duration: 0,
        forbidClick: true,
        message: '上传中，请稍后..'
      })
      const timer = setInterval(() => {
        file.length--
        if (file.length) {
          toast.message = `剩余${file.length}张`
        } else {
          clearInterval(timer)
          this.$toast.success('上传成功')
        }
      }, 1000)
    },
    confirmDelImg() {
      this.$dialog
        .confirm({
          title: '确认删除该图片？'
        })
        .then(() => {
          // on confirm
        }).catch(() => {
          // on cancel
        })
    }
  }
}
</script>

<style lang="scss" scoped>
/* 机柜可视图的样式 start */
.frametable {
  border: 1px dashed black;
  padding: 5px;
  font-size: 12px;
  background-color: white;
}
/* .frametable > tr > td:first-child {
  border: 1px solid black;
} */
.currentCustomerClass {
  /* border: 2px solid #41e041; */
  background-color: #c5f6c5;
}
.otherCustomerClass {
  border: 2px solid #f44e39;
}
/* 机柜可视图的样式 end */

.image-container{
  padding: 35px 50px 0;
  .image-wrap{
    display: flex;
    flex-wrap: wrap;
    .image-box{
      position: relative;
      margin: 0 8px 8px 0;
    }
  }
}
</style>
