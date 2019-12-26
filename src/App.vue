<template>
  <div id="app">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item
        replace
        to="/index"
        icon="apps-o"
      >
        应用中心
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/comroom"
        icon="cluster-o"
      >
        机房
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/user"
        icon="todo-list-o"
      >
        运维工单
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
</style>
