(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9811a654"],{"0b12":function(e,t,i){},"3ab7":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"cabinet-detail"},[i("nav-bar",{attrs:{"title-name":"机柜详情","back-path":"/findCabinet"}}),i("van-tabs",{staticStyle:{"margin-top":"10px"},attrs:{color:"#3388FF"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[i("van-tab",{attrs:{title:"机柜详细"}},[i("van-cell",[i("span",{staticStyle:{"margin-right":"15px"}},[e._v("上线："),i("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","background-color":"#41E041","border-radius":"10px"}})]),i("span",{staticStyle:{"margin-right":"15px"}},[e._v("停机："),i("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","background-color":"#F4B239","border-radius":"10px"}})]),i("span",{staticStyle:{"margin-right":"15px"}},[e._v("下架："),i("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","background-color":"#F44E39","border-radius":"10px"}})]),i("span",{staticStyle:{"margin-right":"15px"}},[e._v("插入：∇")])]),i("table",{staticClass:"frametable"},[i("tr",[i("td",[i("table",[i("thead",[i("tr",[i("th",{staticStyle:{width:"28px","text-align":"right"}}),i("th",{staticStyle:{width:"28px","text-align":"right"}}),i("th",{staticStyle:{width:"120px","text-align":"left"}}),i("th",{staticStyle:{width:"120px","text-align":"left"}})])]),e._l(e.reverseNum,(function(t){return[i("tr",{key:t},[t%3==0&&1!=t?i("td",{staticStyle:{width:"28px","text-align":"right",border:"1px solid black"},style:e.getRulerColor(t),attrs:{rowspan:"3"}},[e._v(e._s(t/3)+"U\n                  ")]):e._e(),i("td",{staticStyle:{width:"28px","text-align":"right",border:"1px solid black"},attrs:{border:"1"}},[e._v(e._s(t)+"□\n                  ")]),-1!==e.needDrawList.indexOf(t)&&0==e.deviceDrawData[e.needDrawList.indexOf(t)].site?[i("td",{staticClass:"currentCustomerClass",attrs:{rowspan:e.deviceDrawData[e.needDrawList.indexOf(t)].span,colspan:"2"},on:{click:function(t){return e.$router.push("/index")}}},[1==e.deviceDataList[e.needDrawList.indexOf(t)].serverstatus?i("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","background-color":"#41E041","border-radius":"10px"}}):e._e(),2==e.deviceDataList[e.needDrawList.indexOf(t)].serverstatus?i("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","background-color":"#F4B239","border-radius":"10px"}}):e._e(),3==e.deviceDataList[e.needDrawList.indexOf(t)].serverstatus?i("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","background-color":"#F44E39","border-radius":"10px"}}):e._e(),e._v("\n                      "+e._s(e.deviceDataList[e.needDrawList.indexOf(t)].sn)+"\n                      ("+e._s(e.deviceDataList[e.needDrawList.indexOf(t)].size)+"U)\n                      "),i("parent-server-table",{attrs:{childcount:e.deviceDataList[e.needDrawList.indexOf(t)].childcount,childlist:e.deviceDataList[e.needDrawList.indexOf(t)].childsequenceList}})],1)]:e._e(),-1!==e.needDrawList.indexOf(t)&&1==e.deviceDrawData[e.needDrawList.indexOf(t)].site?[i("td",{staticClass:"currentCustomerClass",attrs:{rowspan:e.deviceDrawData[e.needDrawList.indexOf(t)].span,colspan:"1"},on:{click:function(t){return e.$router.push("/index")}}},[1==e.deviceDataList[e.needDrawList.indexOf(t)].serverstatus?i("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","background-color":"#41E041","border-radius":"10px"}}):e._e(),2==e.deviceDataList[e.needDrawList.indexOf(t)].serverstatus?i("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","background-color":"#F4B239","border-radius":"10px"}}):e._e(),3==e.deviceDataList[e.needDrawList.indexOf(t)].serverstatus?i("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","background-color":"#F44E39","border-radius":"10px"}}):e._e(),e._v("\n                      "+e._s(e.deviceDataList[e.needDrawList.indexOf(t)].sn)+"\n                      ("+e._s(e.deviceDataList[e.needDrawList.indexOf(t)].size)+"U)\n\n                      "),i("parent-server-table",{attrs:{childcount:e.deviceDataList[e.needDrawList.indexOf(t)].childcount,childlist:e.deviceDataList[e.needDrawList.indexOf(t)].childsequenceList}})],1),-1!==e.needDrawList.indexOf(t,e.needDrawList.indexOf(t)+1)?i("td",{staticClass:"currentCustomerClass",attrs:{rowspan:e.deviceDrawData[e.needDrawList.indexOf(t)].span,colspan:"1"},on:{click:function(t){return e.$router.push("/index")}}},[1==e.deviceDataList[e.needDrawList.indexOf(t)].serverstatus?i("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","background-color":"#41E041","border-radius":"10px"}}):e._e(),2==e.deviceDataList[e.needDrawList.indexOf(t)].serverstatus?i("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","background-color":"#F4B239","border-radius":"10px"}}):e._e(),3==e.deviceDataList[e.needDrawList.indexOf(t)].serverstatus?i("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","background-color":"#F44E39","border-radius":"10px"}}):e._e(),e._v("\n                      "+e._s(e.deviceDataList[e.needDrawList.indexOf(t,e.needDrawList.indexOf(t)+1)].sn)+"\n                      ("+e._s(e.deviceDataList[e.needDrawList.indexOf(t,e.needDrawList.indexOf(t)+1)].size)+"U)\n\n                      "),i("parent-server-table",{attrs:{childcount:e.deviceDataList[e.needDrawList.indexOf(t)].childcount,childlist:e.deviceDataList[e.needDrawList.indexOf(t)].childsequenceList}})],1):e._e()]:e._e(),-1!==e.needDrawList.indexOf(t)&&2==e.deviceDrawData[e.needDrawList.indexOf(t)].site?[-1==e.needDrawList.indexOf(t,e.needDrawList.indexOf(t)+1)&&1==e.deviceDrawData[e.needDrawList.indexOf(t)].tail?i("td"):e._e(),-1!==e.needDrawList.indexOf(t,e.needDrawList.indexOf(t)+1)?i("td",{staticClass:"currentCustomerClass",attrs:{rowspan:e.deviceDrawData[e.needDrawList.indexOf(t,e.needDrawList.indexOf(t)+1)].span,colspan:"1"},on:{click:function(t){return e.$router.push("/index")}}},[1==e.deviceDataList[e.needDrawList.indexOf(t,e.needDrawList.indexOf(t)+1)].serverstatus?i("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","background-color":"#41E041","border-radius":"10px"}}):e._e(),2==e.deviceDataList[e.needDrawList.indexOf(t,e.needDrawList.indexOf(t)+1)].serverstatus?i("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","background-color":"#F4B239","border-radius":"10px"}}):e._e(),3==e.deviceDataList[e.needDrawList.indexOf(t,e.needDrawList.indexOf(t)+1)].serverstatus?i("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","background-color":"#F44E39","border-radius":"10px"}}):e._e(),e._v("\n                      "+e._s(e.deviceDataList[e.needDrawList.indexOf(t,e.needDrawList.indexOf(t)+1)].sn)+"\n                      ("+e._s(e.deviceDataList[e.needDrawList.indexOf(t,e.needDrawList.indexOf(t)+1)].size)+"U)\n                      "),i("parent-server-table",{attrs:{childcount:e.deviceDataList[e.needDrawList.indexOf(t,e.needDrawList.indexOf(t)+1)].childcount,childlist:e.deviceDataList[e.needDrawList.indexOf(t,e.needDrawList.indexOf(t)+1)].childsequenceList}})],1):e._e(),i("td",{staticClass:"currentCustomerClass",attrs:{rowspan:e.deviceDrawData[e.needDrawList.indexOf(t)].span,colspan:"1"},on:{click:function(t){return e.$router.push("/index")}}},[1==e.deviceDataList[e.needDrawList.indexOf(t)].serverstatus?i("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","background-color":"#41E041","border-radius":"10px"}}):e._e(),2==e.deviceDataList[e.needDrawList.indexOf(t)].serverstatus?i("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","background-color":"#F4B239","border-radius":"10px"}}):e._e(),3==e.deviceDataList[e.needDrawList.indexOf(t)].serverstatus?i("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","background-color":"#F44E39","border-radius":"10px"}}):e._e(),e._v("\n                      "+e._s(e.deviceDataList[e.needDrawList.indexOf(t)].sn)+"\n                      ("+e._s(e.deviceDataList[e.needDrawList.indexOf(t)].size)+"U)\n\n                      "),i("parent-server-table",{attrs:{childcount:e.deviceDataList[e.needDrawList.indexOf(t)].childcount,childlist:e.deviceDataList[e.needDrawList.indexOf(t)].childsequenceList}})],1)]:e._e()],2)]}))],2)]),i("td",[i("table",[i("thead",[i("tr",[i("th",{staticStyle:{width:"28px","text-align":"right"}})])]),e._l(e.reverseNum,(function(t){return i("tr",{key:t},[i("td",{staticStyle:{width:"28px","text-align":"left",border:"1px solid black"}},[e._v("□"+e._s(t))]),t%3==0&&1!=t?i("td",{staticStyle:{width:"28px","text-align":"left",border:"1px solid black"},style:e.getRulerColor(t),attrs:{rowspan:"3"}},[e._v(e._s(t/3)+"U")]):e._e()])}))],2)])])])],1),i("van-tab",{attrs:{title:"机柜图片"}},[i("div",{staticClass:"image-container"},[i("div",{staticClass:"image-wrap"},[i("van-uploader",{attrs:{"after-read":e.afterRead,multiple:""}}),e._l(e.fileList,(function(t){return i("div",{key:t.url,staticClass:"image-box"},[i("van-image",{attrs:{src:t.url,width:"80",height:"80",fit:"cover"},on:{click:function(i){return e.showImagePreview(t.url)}}}),i("i",{staticClass:"van-icon van-icon-clear van-uploader__preview-delete",on:{click:e.confirmDelImg}})],1)}))],2)])])],1)],1)},n=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[2==e.childcount?i("table",{staticStyle:{border:"1px solid black"}},[i("tr",e._l(e.twoTable,(function(t){return i("td",{key:t,staticStyle:{border:"1px solid black"}},[-1!=e.childlist.indexOf(t)?[e._v(e._s(t))]:e._e(),-1==e.childlist.indexOf(t)?[e._v("  ")]:e._e()],2)})),0)]):e._e(),4==e.childcount?i("table",{staticStyle:{border:"1px solid black"}},[i("tr",e._l(e.fourTable,(function(t,s){return s<=1?i("td",{key:s,staticStyle:{border:"1px solid black"}},[-1!=e.childlist.indexOf(t)?[e._v(e._s(t))]:e._e(),-1==e.childlist.indexOf(t)?[e._v("  ")]:e._e()],2):e._e()})),0),i("tr",e._l(e.fourTable,(function(t,s){return s>1?i("td",{key:t,staticStyle:{border:"1px solid black"}},[-1!=e.childlist.indexOf(t)?[e._v(e._s(t))]:e._e(),-1==e.childlist.indexOf(t)?[e._v("  ")]:e._e()],2):e._e()})),0)]):e._e(),8==e.childcount?i("table",{staticStyle:{border:"1px solid black"}},[i("tr",e._l(e.eightTable,(function(t,s){return s<=1?i("td",{key:s,staticStyle:{border:"1px solid black"}},[-1!=e.childlist.indexOf(t)?[e._v(e._s(t))]:e._e(),-1==e.childlist.indexOf(t)?[e._v("  ")]:e._e()],2):e._e()})),0),i("tr",e._l(e.eightTable,(function(t,s){return s>1&&s<=3?i("td",{key:t,staticStyle:{border:"1px solid black"}},[-1!=e.childlist.indexOf(t)?[e._v(e._s(t))]:e._e(),-1==e.childlist.indexOf(t)?[e._v("  ")]:e._e()],2):e._e()})),0),i("tr",e._l(e.eightTable,(function(t,s){return s>3&&s<=5?i("td",{key:t,staticStyle:{border:"1px solid black"}},[-1!=e.childlist.indexOf(t)?[e._v(e._s(t))]:e._e(),-1==e.childlist.indexOf(t)?[e._v("  ")]:e._e()],2):e._e()})),0),i("tr",e._l(e.eightTable,(function(t,s){return s>5&&s<=7?i("td",{key:t,staticStyle:{border:"1px solid black"}},[-1!=e.childlist.indexOf(t)?[e._v(e._s(t))]:e._e(),-1==e.childlist.indexOf(t)?[e._v("  ")]:e._e()],2):e._e()})),0)]):e._e(),16==e.childcount?i("table",{staticStyle:{border:"1px solid black"}},[i("tr",e._l(e.sixteenTable,(function(t,s){return s<=7?i("td",{key:t,staticStyle:{border:"1px solid black"}},[-1!=e.childlist.indexOf(t)?[e._v(e._s(t))]:e._e(),-1==e.childlist.indexOf(t)?[e._v("  ")]:e._e()],2):e._e()})),0),i("tr",e._l(e.sixteenTable,(function(t,s){return s>7?i("td",{key:t,staticStyle:{border:"1px solid black"}},[-1!=e.childlist.indexOf(t)?[e._v(e._s(t))]:e._e(),-1==e.childlist.indexOf(t)?[e._v("  ")]:e._e()],2):e._e()})),0)]):e._e()])},r=[],d={props:["childcount","childlist"],data:function(){return{twoTable:[1,2],fourTable:[1,3,2,4],eightTable:[1,5,2,6,3,7,4,8],sixteenTable:[1,2,3,4,9,10,11,12,5,6,7,8,13,14,15,16]}}},l=d,c=(i("e3cf"),i("2877")),o=Object(c["a"])(l,a,r,!1,null,"0cb167cc",null),p=o.exports,u=i("28a2"),_={components:{"parent-server-table":p},data:function(){return{active:0,needDrawList:[93,81,72,63,54,45,36,27,18],deviceDataList:[{servertype:1,purpose:"",frameid:113,person2_tel:"",serverstatus:1,onlinetime:"2000-01-01 00:00:00",memo:"",person_tel:"",person_idcode:"",childsequenceList:[],spec:"",devicetype:1,parentSN:null,childcount:null,ippool_id:0,printlabel:0,person2_idcode:"",sn:"2102350GTU10G2000049",brand:"华为CE5855-48T4S2Q-EI",plugnum:1,usecustom:"白山",os:"",custom_id:40,offlinetime:null,person_name:"",server_id:2216,customsn:"",enddimension:93,startdimension:91,childserversequence:null,size:1,customname:"白山",person2_name:"",insertflag:0,updatetime:"2019-12-11 15:25:42",rackid:"1"},{servertype:1,purpose:"CDN",frameid:113,person2_tel:"",serverstatus:1,onlinetime:"2000-01-01 00:00:00",memo:"",person_tel:"",person_idcode:"",childsequenceList:[],spec:"",devicetype:1,parentSN:null,childcount:null,ippool_id:0,printlabel:0,person2_idcode:"",sn:"BSRGD3X",brand:"DELL R510",plugnum:1,usecustom:"白山",os:"",custom_id:40,offlinetime:null,person_name:"",server_id:2217,customsn:"",enddimension:81,startdimension:76,childserversequence:null,size:2,customname:"白山",person2_name:"",insertflag:0,updatetime:"2019-12-11 15:25:42",rackid:"2"},{servertype:1,purpose:"CDN",frameid:113,person2_tel:"",serverstatus:1,onlinetime:"2000-01-01 00:00:00",memo:"",person_tel:"",person_idcode:"",childsequenceList:[],spec:"",devicetype:1,parentSN:null,childcount:null,ippool_id:0,printlabel:0,person2_idcode:"",sn:"GM2933X",brand:"DELL R510",plugnum:1,usecustom:"白山",os:"",custom_id:40,offlinetime:null,person_name:"",server_id:2218,customsn:"",enddimension:72,startdimension:67,childserversequence:null,size:2,customname:"白山",person2_name:"",insertflag:0,updatetime:"2019-12-11 15:25:42",rackid:"3"},{servertype:1,purpose:"CDN",frameid:113,person2_tel:"",serverstatus:1,onlinetime:"2000-01-01 00:00:00",memo:"",person_tel:"",person_idcode:"",childsequenceList:[],spec:"",devicetype:1,parentSN:null,childcount:null,ippool_id:0,printlabel:0,person2_idcode:"",sn:"5FX713X",brand:"DELL R510",plugnum:1,usecustom:"白山",os:"",custom_id:40,offlinetime:null,person_name:"",server_id:2219,customsn:"",enddimension:63,startdimension:58,childserversequence:null,size:2,customname:"白山",person2_name:"",insertflag:0,updatetime:"2019-12-11 15:25:42",rackid:"4"},{servertype:1,purpose:"CDN",frameid:113,person2_tel:"",serverstatus:1,onlinetime:"2000-01-01 00:00:00",memo:"",person_tel:"",person_idcode:"",childsequenceList:[],spec:"",devicetype:1,parentSN:null,childcount:null,ippool_id:0,printlabel:0,person2_idcode:"",sn:"CSRGD3X",brand:"DELL R510",plugnum:1,usecustom:"白山",os:"",custom_id:40,offlinetime:null,person_name:"",server_id:2220,customsn:"",enddimension:54,startdimension:49,childserversequence:null,size:2,customname:"白山",person2_name:"",insertflag:0,updatetime:"2019-12-11 15:25:42",rackid:"5"},{servertype:1,purpose:"CDN",frameid:113,person2_tel:"",serverstatus:1,onlinetime:"2000-01-01 00:00:00",memo:"",person_tel:"",person_idcode:"",childsequenceList:[],spec:"",devicetype:1,parentSN:null,childcount:null,ippool_id:0,printlabel:0,person2_idcode:"",sn:"61V713X",brand:"DELL R510",plugnum:1,usecustom:"白山",os:"",custom_id:40,offlinetime:null,person_name:"",server_id:2221,customsn:"",enddimension:45,startdimension:40,childserversequence:null,size:2,customname:"白山",person2_name:"",insertflag:0,updatetime:"2019-12-11 15:25:42",rackid:"6"},{servertype:1,purpose:"CDN",frameid:113,person2_tel:"",serverstatus:1,onlinetime:"2000-01-01 00:00:00",memo:"",person_tel:"",person_idcode:"",childsequenceList:[],spec:"",devicetype:1,parentSN:null,childcount:null,ippool_id:0,printlabel:0,person2_idcode:"",sn:"HRDJY2X",brand:"DELL R510",plugnum:1,usecustom:"白山",os:"",custom_id:40,offlinetime:null,person_name:"",server_id:2222,customsn:"",enddimension:36,startdimension:31,childserversequence:null,size:2,customname:"白山",person2_name:"",insertflag:0,updatetime:"2019-12-11 15:25:42",rackid:"7"},{servertype:1,purpose:"CDN",frameid:113,person2_tel:"",serverstatus:1,onlinetime:"2000-01-01 00:00:00",memo:"",person_tel:"",person_idcode:"",childsequenceList:[],spec:"",devicetype:1,parentSN:null,childcount:null,ippool_id:0,printlabel:0,person2_idcode:"",sn:"6RJW73X",brand:"DELL R510",plugnum:1,usecustom:"白山",os:"",custom_id:40,offlinetime:null,person_name:"",server_id:2223,customsn:"",enddimension:27,startdimension:22,childserversequence:null,size:2,customname:"白山",person2_name:"",insertflag:0,updatetime:"2019-12-11 15:25:42",rackid:"8"},{servertype:1,purpose:"CDN",frameid:113,person2_tel:"",serverstatus:1,onlinetime:"2000-01-01 00:00:00",memo:"",person_tel:"",person_idcode:"",childsequenceList:[],spec:"",devicetype:1,parentSN:null,childcount:null,ippool_id:0,printlabel:0,person2_idcode:"",sn:"4MJW73X",brand:"DELL R510",plugnum:1,usecustom:"白山",os:"",custom_id:40,offlinetime:null,person_name:"",server_id:2224,customsn:"",enddimension:18,startdimension:13,childserversequence:null,size:2,customname:"白山",person2_name:"",insertflag:0,updatetime:"2019-12-11 15:25:42",rackid:"9"}],deviceDrawData:[{end:93,site:0,span:3,tail:0},{end:81,site:0,span:6,tail:0},{end:72,site:0,span:6,tail:0},{end:63,site:0,span:6,tail:0},{end:54,site:0,span:6,tail:0},{end:45,site:0,span:6,tail:0},{end:36,site:0,span:6,tail:0},{end:27,site:0,span:6,tail:0},{end:18,site:0,span:6,tail:0}],rulerSize:180,fileList:[{url:"https://img.yzcdn.cn/vant/leaf.jpg"},{url:"https://img.yzcdn.cn/vant/tree.jpg"}]}},computed:{reverseNum:function(){for(var e=[],t=this.rulerSize;t>0;t--)e.push(t);return e}},methods:{getRulerColor:function(e){var t=e,i={};return i["background-color"]=t/3%2===0?"#C5F6C5":"#FCD4D5",i},showImagePreview:function(e){Object(u["a"])({images:[e],showIndex:!1})},afterRead:function(e){var t=this;console.log(e);var i=this.$toast.loading({duration:0,forbidClick:!0,message:"上传中，请稍后.."}),s=setInterval((function(){e.length--,e.length?i.message="剩余".concat(e.length,"张"):(clearInterval(s),t.$toast.success("上传成功"))}),1e3)},confirmDelImg:function(){this.$dialog.confirm({title:"确认删除该图片？"}).then((function(){})).catch((function(){}))}}},x=_,h=(i("a431"),Object(c["a"])(x,s,n,!1,null,"77bbe406",null));t["default"]=h.exports},a431:function(e,t,i){"use strict";var s=i("0b12"),n=i.n(s);n.a},e3cf:function(e,t,i){"use strict";var s=i("ecc5"),n=i.n(s);n.a},ecc5:function(e,t,i){}}]);
//# sourceMappingURL=chunk-9811a654.de44f9dd.js.map