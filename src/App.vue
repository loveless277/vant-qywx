<template>
  <div id="app">
    <router-view />
    <div style="padding-top:50px;">
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
        <van-tabbar-item :style="{color:(($route.path).substr(0,5))=='/home'?'#1989fa':''}" replace to="/home" icon="todo-list-o" info="9" >运维工单</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<style>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
</style>
