<template>

  <div>
    <!-- 二合一 -->
    <table
      v-if="childcount ==2"
      style="border:1px solid black;">
      <tr>
        <td
          v-for="item in twoTable"
          :key="item"
          style="border: 1px solid black;">
          <template v-if="childlist.indexOf(item)!=-1">{{ item }}</template>
          <template v-if="childlist.indexOf(item)==-1">&nbsp;&nbsp;</template>
        </td>
      </tr>
    </table>
    <!-- 四合一 -->
    <table
      v-if="childcount ==4"
      style="border:1px solid black;">
      <tr>
        <td
          v-for="(i,index) in fourTable"
          v-if="index <= 1 "
          :key="index"
          style="border: 1px solid black;">
          <template v-if="childlist.indexOf(i)!=-1">{{ i }}</template>
          <template v-if="childlist.indexOf(i)==-1">&nbsp;&nbsp;</template>
        </td>
      </tr>
      <tr>
        <td
          v-for="(i,index) in fourTable"
          v-if="index > 1 "
          :key="i"
          style="border: 1px solid black;">
          <template v-if="childlist.indexOf(i)!=-1">{{ i }}</template>
          <template v-if="childlist.indexOf(i)==-1">&nbsp;&nbsp;</template>
        </td>
      </tr>
    </table>
    <!-- 8 -->
    <table
      v-if="childcount ==8"
      style="border:1px solid black;">
      <tr>
        <td
          v-for="(i,index) in eightTable"
          v-if="index <= 1 "
          :key="index"
          style="border: 1px solid black;">
          <template v-if="childlist.indexOf(i)!=-1">{{ i }}</template>
          <template v-if="childlist.indexOf(i)==-1">&nbsp;&nbsp;</template>
        </td>
      </tr>
      <tr>
        <td
          v-for="(i,index) in eightTable"
          v-if="index > 1 && index <=3"
          :key="i"
          style="border: 1px solid black;">
          <template v-if="childlist.indexOf(i)!=-1">{{ i }}</template>
          <template v-if="childlist.indexOf(i)==-1">&nbsp;&nbsp;</template>
        </td>
      </tr>
      <tr>
        <td
          v-for="(i,index) in eightTable"
          v-if="index > 3 && index <=5"
          :key="i"
          style="border: 1px solid black;">
          <template v-if="childlist.indexOf(i)!=-1">{{ i }}</template>
          <template v-if="childlist.indexOf(i)==-1">&nbsp;&nbsp;</template>
        </td>
      </tr>
      <tr>
        <td
          v-for="(i,index) in eightTable"
          v-if="index > 5 && index <=7"
          :key="i"
          style="border: 1px solid black;">
          <template v-if="childlist.indexOf(i)!=-1">{{ i }}</template>
          <template v-if="childlist.indexOf(i)==-1">&nbsp;&nbsp;</template>
        </td>
      </tr>
    </table>
    <!-- 16 -->
    <table
      v-if="childcount ==16"
      style="border:1px solid black;">
      <tr>
        <td
          v-for="(i,index) in sixteenTable"
          v-if="index <= 7"
          :key="i"
          style="border: 1px solid black;">
          <template v-if="childlist.indexOf(i)!=-1">{{ i }}</template>
          <template v-if="childlist.indexOf(i)==-1">&nbsp;&nbsp;</template>
        </td>
      </tr>
      <tr>
        <td
          v-for="(i,index) in sixteenTable"
          v-if="index > 7"
          :key="i"
          style="border: 1px solid black;">
          <template v-if="childlist.indexOf(i)!=-1">{{ i }}</template>
          <template v-if="childlist.indexOf(i)==-1">&nbsp;&nbsp;</template>
        </td>
      </tr>

    </table>

  </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['childcount', 'childlist'],
  data() {
    return {
      twoTable: [1, 2],
      fourTable: [1, 3, 2, 4],
      eightTable: [1, 5, 2, 6, 3, 7, 4, 8],
      sixteenTable: [1, 2, 3, 4, 9, 10, 11, 12, 5, 6, 7, 8, 13, 14, 15, 16]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-main {
  margin-top: 15px;
}
td {
  width: 20px;
  text-align: center;
}
</style>
