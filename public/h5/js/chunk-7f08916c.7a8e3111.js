(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f08916c"],{"5f10":function(t,s,n){t.exports=n.p+"h5/img/noCoupon.e524084b.png"},edc1:function(t,s,n){"use strict";n.r(s);var e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{ref:"container"},[t.couponsList.length>0?n("div",{staticClass:"coupon-list"},t._l(t.couponsList,function(s,e){return n("div",{key:e,staticClass:"item acea-row row-center-wrapper"},[n("div",{staticClass:"money",class:0===s._type?"moneyGray":""},[t._v("\n        ￥"),n("span",{staticClass:"num"},[t._v(t._s(s.coupon_price))])]),n("div",{staticClass:"text"},[n("div",{staticClass:"condition line1"},[t._v(t._s(s.coupon_title))]),n("div",{staticClass:"data acea-row row-between-wrapper"},[0===s._end_time?n("div",[t._v("不限时")]):n("div",[t._v(t._s(s._add_time)+"-"+t._s(s._end_time))]),0===s._type?n("div",{staticClass:"bnt gray"},[t._v(t._s(s._msg))]):n("div",{staticClass:"bnt bg-color-green"},[t._v(t._s(s._msg))])])])])}),0):t._e(),0===t.couponsList.length&&!0===t.loading?n("div",{staticClass:"noCommodity"},[t._m(0)]):t._e()])},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"noPictrue"},[e("img",{staticClass:"image",attrs:{src:n("5f10")}})])}],i=(n("7f7f"),n("c24f")),a="UserCoupon",c={name:"UserCoupon",components:{},props:{},data:function(){return{couponsList:[],loading:!1}},watch:{$route:function(t){var s=this;t.name===a&&s.getUseCoupons()}},mounted:function(){this.getUseCoupons()},methods:{getUseCoupons:function(){var t=this,s=0;Object(i["q"])(s).then(function(s){t.couponsList=s.data,t.loading=!0})}}},r=c,u=n("2877"),l=Object(u["a"])(r,e,o,!1,null,null,null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-7f08916c.7a8e3111.js.map