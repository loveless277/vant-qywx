<template>
  <div>
    <div style="display:flex;justify-content: flex-end;">
      <van-button type="info" size="small" to="/home/createdOrder">新建工单</van-button>
      <b style="width:50%;text-align:right">状态</b>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
      <div class="listBox" v-for="item in list" :key="item.month">
        <p style="width:20%;font-size:50px">{{item.month}}{{index}}</p>
        <div style="width:80%;">
          <div
            style="border-left:1px solid black"
            v-for="taskArray in item.taskArray"
            :key="taskArray.day"
          >
            <p style="text-align:left">{{taskArray.day}}</p>
            <tr v-for="taskData in taskArray.task" :key="taskData.taskName">
              <td style="text-align:left;width:70%">
                <p>{{taskData.taskName}}</p>
              </td>
              <td>
                <van-tag type="danger" size="large">{{taskData.status}}</van-tag>
                <van-button style="margin:10px 0" type="info" size="small" @click="$router.push('/home/disposeDetail')">查看</van-button>
                <van-button
                  type="info"
                  @click="recall()"
                  size="small"
                >撤回工单</van-button>
              </td>
            </tr>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "chuLi",
  data() {
    return {
      list: [],
      result: [
        {
          month: "11月",
          taskArray: [
            {
              day: "21日",
              task: [
                {
                  taskName:
                    "下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器",
                  status: "审核中"
                },
                {
                  taskName: "上架服务器",
                  status: "审核中"
                }
              ]
            },
            {
              day: "22日",
              task: [
                {
                  taskName:
                    "下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器",
                  status: "审核中"
                }
              ]
            }
          ]
        }
      ],
      loading: false,
      finished: false
    };
  },

  methods: {
    async onLoad() {
      // 异步更新数据
      // let response = await web.ajax({
      //   exec: "IDCCustomeFind",
      //   data: {
      //     finance_state: 1,
      //     rows: 9999
      //   }
      // });
      // console.log(response);
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.result[0]);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 60) {
          this.finished = true;
        }
      }, 1000);
    },
    recall() {
      this.$dialog
        .confirm({
          title: "提示",
          message: "确认撤回此工单?"
        })
        .then(() => {
            this.$toast('此工单已撤回')
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style scoped>
.listBox {
  font-size: 20px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}
.monthCss {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>