(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59ee995c"],{"00fd":function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"d",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return u});n("a481");var i=n("f8b7"),a=n("cba2"),r=n("74f9");function s(t){return new Promise(function(e,n){a["a"].confirm({mes:"确认取消该订单?",opts:function(){Object(i["a"])(t).then(function(t){a["a"].success("取消成功"),e(t)}).catch(function(t){a["a"].error("取消失败"),n(t)})}})})}function o(t){return new Promise(function(e,n){Object(i["n"])(t).then(function(t){a["a"].success("收货成功"),e(t)}).catch(function(t){a["a"].error("收货失败"),n(t)})})}function c(t){return new Promise(function(e,n){a["a"].confirm({mes:"确认删除该订单?",opts:function(){Object(i["c"])(t).then(function(t){a["a"].success("删除成功"),e(t)}).catch(function(t){a["a"].error("删除失败"),n(t)})}})})}function u(t,e,n){return new Promise(function(s,o){a["a"].loading.open(""),Object(i["j"])(t,e,n).then(function(t){var e=t.data;switch(a["a"].loading.close(),e.status){case"WECHAT_H5_PAY":location.replace(e.result.jsConfig.mweb_url),o(e);break;case"ORDER_EXIST":case"EXTEND_ORDER":case"PAY_ERROR":case"PAY_DEFICIENCY":a["a"].toast({mes:t.msg}),o(e);break;case"SUCCESS":a["a"].success(t.msg),s(e);break;case"WECHAT_PAY":Object(r["pay"])(e.result.jsConfig).then(function(){s(e)})}}).catch(function(t){a["a"].loading.close(),a["a"].toast({mes:t.msg||"订单支付失败"})})})}},"2a23":function(t,e,n){"use strict";var i=n("fde3"),a=n.n(i);a.a},"46d6":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",staticClass:"my-order"},[n("div",{staticClass:"header bg-color-green"},[n("div",{staticClass:"picTxt acea-row row-between-wrapper"},[n("div",{staticClass:"text"},[n("div",{staticClass:"name"},[t._v("订单信息")]),n("div",[t._v("\n          累计订单："+t._s(t.orderData.order_count||0)+" 总消费：￥"+t._s(t.orderData.sum_price||0)+"\n        ")])]),t._m(0)])]),n("div",{staticClass:"nav acea-row row-around"},[n("div",{staticClass:"item",class:{on:0===t.type},on:{click:function(e){return t.$router.replace({path:"/order/list/0"})}}},[n("div",[t._v("待付款")]),n("div",{staticClass:"num"},[t._v(t._s(t.orderData.unpaid_count||0))])]),n("div",{staticClass:"item",class:{on:1===t.type},on:{click:function(e){return t.$router.replace({path:"/order/list/1"})}}},[n("div",[t._v("待发货")]),n("div",{staticClass:"num"},[t._v(t._s(t.orderData.unshipped_count||0))])]),n("div",{staticClass:"item",class:{on:2===t.type},on:{click:function(e){return t.$router.replace({path:"/order/list/2"})}}},[n("div",[t._v("待收货")]),n("div",{staticClass:"num"},[t._v(t._s(t.orderData.received_count||0))])]),n("div",{staticClass:"item",class:{on:3===t.type},on:{click:function(e){return t.$router.replace({path:"/order/list/3"})}}},[n("div",[t._v("待评价")]),n("div",{staticClass:"num"},[t._v(t._s(t.orderData.evaluated_count||0))])]),n("div",{staticClass:"item",class:{on:4===t.type},on:{click:function(e){return t.$router.replace({path:"/order/list/4"})}}},[n("div",[t._v("已完成")]),n("div",{staticClass:"num"},[t._v(t._s(t.orderData.complete_count||0))])])]),n("div",{staticClass:"list"},t._l(t.orderList,function(e){return n("div",{key:e.id,staticClass:"item"},[n("div",{staticClass:"title acea-row row-between-wrapper"},[n("div",{staticClass:"acea-row row-middle"},[e.combination_id>0?n("span",{staticClass:"sign cart-color-green acea-row row-center-wrapper"},[t._v("拼团")]):t._e(),e.seckill_id>0?n("span",{staticClass:"sign cart-color-green acea-row row-center-wrapper"},[t._v("秒杀")]):t._e(),e.bargain_id>0?n("span",{staticClass:"sign cart-color-green acea-row row-center-wrapper"},[t._v("砍价")]):t._e(),t._v("\n          "+t._s(e._add_time)+"\n        ")]),n("div",{staticClass:"font-color-green"},[t._v(t._s(t.getStatus(e)))])]),n("div",{on:{click:function(n){return t.$router.push({path:"/order/detail/"+e.order_id})}}},t._l(e.cartInfo,function(e){return n("div",{key:e.id,staticClass:"item-info acea-row row-between row-top"},[n("div",{staticClass:"pictrue"},[0===e.combination_id&&0===e.bargain_id&&0===e.seckill_id?n("img",{attrs:{src:e.productInfo.image},on:{click:function(n){return n.stopPropagation(),t.$router.push({path:"/detail/"+e.productInfo.id})}}}):e.combination_id>0?n("img",{attrs:{src:e.productInfo.image},on:{click:function(n){return n.stopPropagation(),t.$router.push({path:"/activity/group_detail/"+e.combination_id})}}}):e.bargain_id>0?n("img",{attrs:{src:e.productInfo.image},on:{click:function(n){return n.stopPropagation(),t.$router.push({path:"/activity/dargain_detail/"+e.bargain_id})}}}):e.seckill_id>0?n("img",{attrs:{src:e.productInfo.image},on:{click:function(n){return n.stopPropagation(),t.$router.push({path:"/activity/seckill_detail/"+e.seckill_id})}}}):t._e()]),n("div",{staticClass:"text acea-row row-between"},[n("div",{staticClass:"name line2"},[t._v("\n              "+t._s(e.productInfo.store_name)+"\n            ")]),n("div",{staticClass:"money"},[n("div",[t._v("\n                ￥"+t._s(e.productInfo.attrInfo?e.productInfo.attrInfo.price:e.productInfo.price)+"\n              ")]),n("div",[t._v("x"+t._s(e.cart_num))])])])])}),0),n("div",{staticClass:"totalPrice"},[t._v("\n        共"+t._s(e.cartInfo.length||0)+"件商品，总金额\n        "),n("span",{staticClass:"money font-color-orange"},[t._v("￥"+t._s(e.pay_price))])]),n("div",{staticClass:"bottom acea-row row-right row-middle"},[0===e._status._type?[n("div",{staticClass:"bnt cancelBnt",on:{click:function(n){return t.cancelOrder(e)}}},[t._v("\n            取消订单\n          ")]),n("div",{staticClass:"bnt bg-color-green",on:{click:function(n){return t.paymentTap(e)}}},[t._v("\n            立即付款\n          ")])]:t._e(),1===e._status._type||9===e._status._type?[n("div",{staticClass:"bnt bg-color-green",on:{click:function(n){return t.$router.push({path:"/order/detail/"+e.order_id})}}},[t._v("\n            查看详情\n          ")])]:t._e(),2===e._status._type?[n("div",{staticClass:"bnt default",on:{click:function(n){return t.$router.push({path:"/order/logistics/"+e.order_id})}}},[t._v("\n            查看物流\n          ")]),n("div",{staticClass:"bnt bg-color-green",on:{click:function(n){return t.takeOrder(e)}}},[t._v("\n            确认收货\n          ")])]:t._e(),3===e._status._type?["express"===e.delivery_type?n("div",{staticClass:"bnt default",on:{click:function(n){return t.$router.push({path:"/order/logistics/"+e.order_id})}}},[t._v("\n            查看物流\n          ")]):t._e(),n("div",{staticClass:"bnt bg-color-green",on:{click:function(n){return t.$router.push({path:"/order/detail/"+e.order_id})}}},[t._v("\n            去评价\n          ")])]:t._e(),4===e._status._type?[n("div",{staticClass:"bnt bg-color-green",on:{click:function(n){return t.$router.push({path:"/order/detail/"+e.order_id})}}},[t._v("\n            查看订单\n          ")])]:t._e()],2)])}),0),0===t.orderList.length&&t.page>1?n("div",{staticClass:"noCart"},[t._m(1)]):t._e(),n("Loading",{attrs:{loaded:t.loaded,loading:t.loading}}),n("Payment",{attrs:{types:t.payType,balance:t.userInfo.now_money},on:{checked:t.toPay},model:{value:t.pay,callback:function(e){t.pay=e},expression:"pay"}})],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pictrue"},[i("img",{attrs:{src:n("ab32")}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pictrue"},[i("img",{attrs:{src:n("530f")}})])}],r=(n("7f7f"),n("f8b7")),s=n("00fd"),o=n("3a5e"),c=n("92b7"),u=n("2f62"),d=n("ed08"),l=["待付款","待发货","待收货","待评价","已完成","","","","","待付款"],f="MyOrder",p={name:f,data:function(){return{offlinePayStatus:2,orderData:{},type:parseInt(this.$route.params.type)||0,page:1,limit:20,loaded:!1,loading:!1,orderList:[],pay:!1,payType:["yue","weixin"],from:Object(d["d"])()?"weixin":"weixinh5"}},components:{Loading:o["a"],Payment:c["a"]},computed:Object(u["b"])(["userInfo"]),watch:{$route:function(t){if(t.name===f){var e=parseInt(this.$route.params.type)||0;this.type!==e&&this.changeType(e),this.getOrderData()}}},methods:{setOfflinePayStatus:function(t){var e=this;e.offlinePayStatus=t,1===t&&e.payType.indexOf("offline")<0&&e.payType.push("offline")},getOrderData:function(){var t=this;Object(r["f"])().then(function(e){t.orderData=e.data})},takeOrder:function(t){var e=this;Object(s["d"])(t.order_id).finally(function(){e.reload(),e.getOrderData()})},reload:function(){this.changeType(this.type)},changeType:function(t){this.type=t,this.orderList=[],this.page=1,this.loaded=!1,this.loading=!1,this.getOrderList()},getOrderList:function(){var t=this;if(!this.loading&&!this.loaded){this.loading=!0;var e=this.page,n=this.limit,i=this.type;Object(r["g"])({page:e,limit:n,type:i}).then(function(e){t.orderList=t.orderList.concat(e.data),t.page++,t.loaded=e.data.length<t.limit,t.loading=!1})}},getStatus:function(t){return l[t._status._type]},cancelOrder:function(t){var e=this;Object(s["a"])(t.order_id).then(function(){e.orderList.splice(e.orderList.indexOf(t),1)}).catch(function(){e.reload()})},paymentTap:function(t){var e=this,n=this;t.combination_id>0||t.bargain_id>0||t.seckill_id>0||n.setOfflinePayStatus(t.offlinePayStatus),this.pay=!0,this.toPay=function(i){Object(s["c"])(t.order_id,i,n.from).then(function(){var t=parseInt(e.$route.params.type)||0;n.changeType(t),n.getOrderData()}).catch(function(){var t=parseInt(n.$route.params.type)||0;n.changeType(t),n.getOrderData()})}},toPay:function(){}},mounted:function(){var t=this;this.getOrderData(),this.getOrderList(),this.$scroll(this.$refs.container,function(){!t.loading&&t.getOrderList()})}},v=p,_=(n("ee52"),n("2877")),h=Object(_["a"])(v,i,a,!1,null,"4773537b",null);e["default"]=h.exports},"530f":function(t,e,n){t.exports=n.p+"h5/img/noOrder.90017ce2.png"},"92b7":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"payment",class:!0===t.value?"on":""},[n("div",{staticClass:"title acea-row row-center-wrapper"},[t._v("\n      选择付款方式"),n("span",{staticClass:"iconfont icon-guanbi",on:{click:t.close}})]),-1!==t.types.indexOf("weixin")?n("div",{staticClass:"item acea-row row-between-wrapper",on:{click:function(e){return t.checked("weixin")}}},[t._m(0),n("div",{staticClass:"iconfont icon-xiangyou"})]):t._e(),-1!==t.types.indexOf("alipay")?n("div",{staticClass:"item acea-row row-between-wrapper",on:{click:function(e){return t.checked("alipay")}}},[t._m(1),n("div",{staticClass:"iconfont icon-xiangyou"})]):t._e(),-1!==t.types.indexOf("yue")?n("div",{staticClass:"item acea-row row-between-wrapper",on:{click:function(e){return t.checked("yue")}}},[n("div",{staticClass:"left acea-row row-between-wrapper"},[n("div",{staticClass:"iconfont icon-yuezhifu"}),n("div",{staticClass:"text"},[n("div",{staticClass:"name"},[t._v("余额支付")]),n("div",{staticClass:"info"},[t._v("\n            当前可用余额："),n("span",{staticClass:"money"},[t._v(t._s(t.balance))])])])]),n("div",{staticClass:"iconfont icon-xiangyou"})]):t._e(),-1!==t.types.indexOf("offline")?n("div",{staticClass:"item acea-row row-between-wrapper",on:{click:function(e){return t.checked("offline")}}},[t._m(2),n("div",{staticClass:"iconfont icon-xiangyou"})]):t._e()]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"mask",on:{click:t.close}})])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left acea-row row-between-wrapper"},[n("div",{staticClass:"iconfont icon-weixinzhifu"}),n("div",{staticClass:"text"},[n("div",{staticClass:"name"},[t._v("微信支付")]),n("div",{staticClass:"info"},[t._v("使用微信快捷支付")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left acea-row row-between-wrapper"},[n("div",{staticClass:"iconfont icon-zhifubao"}),n("div",{staticClass:"text"},[n("div",{staticClass:"name"},[t._v("支付宝支付")]),n("div",{staticClass:"info"},[t._v("使用线上支付宝支付")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left acea-row row-between-wrapper"},[n("div",{staticClass:"iconfont icon-yuezhifu1"}),n("div",{staticClass:"text"},[n("div",{staticClass:"name"},[t._v("线下支付")]),n("div",{staticClass:"info"},[t._v("选择线下付款方式")])])])}],r=(n("c5f6"),{name:"Payment",props:{value:{type:Boolean,default:!1},balance:{type:[Number,String],default:0},types:{type:Array,default:function(){return["weixin","alipay","yue","offline"]}}},data:function(){return{}},mounted:function(){},methods:{checked:function(t){this.$emit("checked",t),this.close()},close:function(){this.$emit("input",!1)}}}),s=r,o=(n("2a23"),n("2877")),c=Object(o["a"])(s,i,a,!1,null,"54b2b916",null);e["a"]=c.exports},ab32:function(t,e,n){t.exports=n.p+"h5/img/orderTime.6b998f3f.png"},d91e:function(t,e,n){},ee52:function(t,e,n){"use strict";var i=n("d91e"),a=n.n(i);a.a},f8b7:function(t,e,n){"use strict";n.d(e,"l",function(){return a}),n.d(e,"k",function(){return r}),n.d(e,"e",function(){return s}),n.d(e,"b",function(){return o}),n.d(e,"f",function(){return c}),n.d(e,"g",function(){return u}),n.d(e,"a",function(){return d}),n.d(e,"i",function(){return l}),n.d(e,"h",function(){return f}),n.d(e,"m",function(){return p}),n.d(e,"n",function(){return v}),n.d(e,"c",function(){return _}),n.d(e,"d",function(){return h}),n.d(e,"j",function(){return m});var i=n("b775");function a(t){return i["a"].post("/order/confirm",{cartId:t})}function r(t,e){return i["a"].post("/order/computed/"+t,e)}function s(t){return i["a"].get("/coupons/order/"+(parseFloat(t)||0))}function o(t,e){return i["a"].post("/order/create/"+t,e||{})}function c(){return i["a"].get("/order/data")}function u(t){return i["a"].get("/order/list",t)}function d(t){return i["a"].post("/order/cancel",{id:t})}function l(t){return i["a"].get("/order/detail/"+t)}function f(){return i["a"].get("/order/refund/reason")}function p(t){return i["a"].post("/order/refund/verify",t)}function v(t){return i["a"].post("/order/take",{uni:t})}function _(t){return i["a"].post("/order/del",{uni:t})}function h(t){return i["a"].get("order/express/"+t)}function m(t,e,n){return i["a"].post("order/pay",{uni:t,paytype:e,from:n})}},fde3:function(t,e,n){}}]);
//# sourceMappingURL=chunk-59ee995c.2e6de881.js.map