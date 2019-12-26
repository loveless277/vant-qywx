<template>
  <div class="about" :style="{height:height-60+'px'}">
    <van-sidebar style="width:20%" v-model="activeKey">
      <van-sidebar-item
        v-for="(categoryName,index) in machineData"
        :key="index"
        :title="categoryName.name"
      />
    </van-sidebar>
    <div style="width:65%">
      <van-button
        style="margin:10px"
        v-for="categoryName in machineData[activeKey].categoryArray"
        :key="categoryName"
        size="small"
        type="primary"
      >{{categoryName}}</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
      height: 0,
      machineData: [
        {
          name: "类型",
          categoryArray: [
            "江门 电信11",
            "江门 电信12",
            "江门 电信13",
            "江门 电信14",
            "江门 电信15"
          ]
        },
        {
          name: "地点",
          categoryArray: ["江门", "惠州", "鹤山", "中山", "测试"]
        },
        {
          name: "楼层",
          categoryArray: ["1-2", "1-3", "1-4", "1-5", "1-6"]
        }
      ]
    };
  },
  created() {
    this.height = window.innerHeight;
  },
  methods: {}
};
</script>

<style scoped >
.about {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
/* .nth{
  position: absolute;
  top:50%;
  transform:translateY(-50%);
} */
</style>