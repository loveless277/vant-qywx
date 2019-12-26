<template>
  <div>
    <div style="font-weight:1000;font-size:20px">未完成</div>
    <div class="listBox" v-for="(item,index) in result" :key="index">
      <p style="width:20%;font-size:50px">{{item.month}}</p>
      <div style="width:80%;">
        <div
          style="border-left:1px solid black"
          v-for="taskArray in item.taskArray"
          :key="taskArray.day"
        >
          <p style="text-align:left;">{{taskArray.day}}</p>
          <tr v-for="taskData in taskArray.task" :key="taskData.taskName">
            <td style="text-align:left;width:70%">
              <p>{{taskData.taskName}}</p>
            </td>
            <td>
                <van-tag type="danger" size="large">未完成</van-tag>

              <van-button type="info" style="margin:10px 0" size="small" @click="$router.push('/home/copyToDetail')">查看</van-button>
            </td>
          </tr>
        </div>
      </div>
    </div>
    <h1 style="font-weight:1000;font-size:20px;color:green">已完成</h1>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="listBox" v-for="(item,index) in list" :key="index">
        <p style="width:20%;font-size:50px">{{item.month}}</p>
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
                <van-tag type="success" size="large">已完成</van-tag>
                <van-button style="margin:10px 0" type="info" size="small" @click="$router.push('/home/copyToDetail')">查看</van-button>
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
                  taskName:
                    "下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器",
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
      ]
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
</style>