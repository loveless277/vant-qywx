(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-213195bd"],{"385c":function(t,e,a){"use strict";var i=a("69d9"),n=a.n(i);n.a},"69d9":function(t,e,a){},d676:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{"font-weight":"1000","font-size":"20px"}},[t._v("未完成")]),t._l(t.result,(function(e,i){return a("div",{key:i,staticClass:"listBox"},[a("p",{staticStyle:{width:"20%","font-size":"50px"}},[t._v(t._s(e.month))]),a("div",{staticStyle:{width:"80%"}},t._l(e.taskArray,(function(e){return a("div",{key:e.day,staticStyle:{"border-left":"1px solid black"}},[a("p",{staticStyle:{"text-align":"left"}},[t._v(t._s(e.day))]),t._l(e.task,(function(e){return a("tr",{key:e.taskName},[a("td",{staticStyle:{"text-align":"left",width:"70%"}},[a("p",[t._v(t._s(e.taskName))])]),a("td",[a("van-tag",{attrs:{type:"danger",size:"large"}},[t._v("待处理")]),a("van-button",{staticStyle:{margin:"10px 0"},attrs:{type:"info",size:"small"},on:{click:function(e){return t.$router.push("/home/disposeDetail")}}},[t._v("查看")]),a("van-button",{attrs:{type:"info",size:"small"},on:{click:function(e){t.dialogShow=!0}}},[t._v("反馈")])],1)])}))],2)})),0)])})),a("h1",{staticStyle:{"font-weight":"1000","font-size":"20px",color:"green"}},[t._v("已完成")]),a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e,i){return a("div",{key:i,staticClass:"listBox"},[a("p",{staticStyle:{width:"20%","font-size":"50px"}},[t._v(t._s(e.month))]),a("div",{staticStyle:{width:"80%"}},t._l(e.taskArray,(function(e){return a("div",{key:e.day,staticStyle:{"border-left":"1px solid black"}},[a("p",{staticStyle:{"text-align":"left"}},[t._v(t._s(e.day))]),t._l(e.task,(function(e){return a("tr",{key:e.taskName},[a("td",{staticStyle:{"text-align":"left",width:"70%"}},[a("p",[t._v(t._s(e.taskName))])]),a("td",[a("van-button",{attrs:{type:"info",size:"small"},on:{click:function(e){return t.$router.push("/home/disposeDetail")}}},[t._v("查看")])],1)])}))],2)})),0)])})),0),a("van-dialog",{attrs:{title:"反馈工单",showCancelButton:""},model:{value:t.dialogShow,callback:function(e){t.dialogShow=e},expression:"dialogShow"}},[a("h2",[t._v("上传图片")]),a("van-uploader",{attrs:{"preview-size":95,multiple:"","before-read":t.asyncBeforeRead},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}}),a("van-field",{attrs:{rows:"3",label:"备注",type:"textarea",autosize:"",placeholder:"请输入备注"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],2)},n=[],s=(a("96cf"),a("3b8d")),l={data:function(){return{list:[],dialogShow:!1,result:[{month:"11月",taskArray:[{day:"21日",task:[{taskName:"下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器",status:"审核中"},{taskName:"下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器",status:"审核中"}]},{day:"22日",task:[{taskName:"下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器下架服务器",status:"审核中"}]}]}],fileList:[{url:"https://img.yzcdn.cn/vant/leaf.jpg"}]}},methods:{onLoad:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:setTimeout((function(){for(var t=0;t<10;t++)e.list.push(e.result[0]);e.loading=!1,e.list.length>=60&&(e.finished=!0)}),1e3);case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),beforeRead:function(t){return"image/jpeg"===t.type||(Toast("请上传 jpg 格式图片"),!1)},asyncBeforeRead:function(t){var e=this;return new Promise((function(a,i){"image/jpeg"!==t.type?(e.$toast("请上传 jpg 格式图片"),i()):a()}))}}},o=l,r=(a("385c"),a("2877")),c=Object(r["a"])(o,i,n,!1,null,"2c70a064",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-213195bd.7af4279d.js.map