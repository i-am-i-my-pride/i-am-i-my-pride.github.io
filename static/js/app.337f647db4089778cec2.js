webpackJsonp([1],{"0IpB":function(t,e,n){"use strict";var i=n("iiiI"),s=n.n(i),r=n("MvXZ");var a=function(t){n("hOlp")},o=n("VU/8")(s.a,r.a,!1,a,"data-v-2701eaa4",null);e.default=o.exports},"34KM":function(t,e){},A1IV:function(t,e){},"C8o/":function(t,e){},H4cY:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    排行页面\n")])},staticRenderFns:[]};e.a=i},Kjo5:function(t,e,n){"use strict";var i=n("L4OO"),s=n.n(i),r=n("H4cY");var a=function(t){n("dXVo")},o=n("VU/8")(s.a,r.a,!1,a,"data-v-4066aa29",null);e.default=o.exports},L4OO:function(t,e){},MvXZ:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    歌手页面\n")])},staticRenderFns:[]};e.a=i},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("j1ja");var i=n("/5sW"),s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-header"},[e("div",{staticClass:"icon"}),this._v(" "),e("h1",{staticClass:"text"},[this._v("MUSIC APP")])])}]};var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab"},[e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/recommend"}},[e("span",{staticClass:"tab-link"},[this._v("推荐")])]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/singer"}},[e("span",{staticClass:"tab-link"},[this._v("歌手")])]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/rank"}},[e("span",{staticClass:"tab-link"},[this._v("排行\n    ")])]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/search"}},[e("span",{staticClass:"tab-link"},[this._v("搜索")])])],1)},staticRenderFns:[]};var a={components:{MHeader:n("VU/8")({},s,!1,function(t){n("eGUE")},"data-v-1fdcc50c",null).exports,Tab:n("VU/8")({},r,!1,function(t){n("fokP")},"data-v-444b8290",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("m-header"),this._v(" "),e("tab"),this._v(" "),e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var c=n("VU/8")(a,o,!1,function(t){n("fU4q")},"data-v-7a636f3c",null).exports,l=n("/ocq"),d=n("43Vb"),u=n.n(d);function h(t,e){if(!function(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)}(t,e)){var n=t.className.split(" ");n.push(e),t.className=n.join(" ")}}var f={data:function(){return{dots:[],currentPageIndex:0}},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:2e3}},mounted:function(){var t=this;setTimeout(function(){t._setSliderWidth(),t._initDots(),t._initSlider(),t.autoPlay&&t.play()},20),window.addEventListener("resize",function(){t.slider&&(t._setSliderWidth(!0),t.slider.refresh())})},methods:{_setSliderWidth:function(t){this.children=this.$refs.sliderGround.children;for(var e=0,n=this.$refs.slider.clientWidth,i=0;i<this.children.length;i++){var s=this.children[i];h(s,"slider-item"),s.style.width=n+"px",e+=n}this.loop&&!t&&(e+=2*n),this.$refs.sliderGround.style.width=e+"px"},_initDots:function(){this.dots=new Array(this.children.length)},_initSlider:function(){var t=this;this.slider=new u.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400}),this.slider.on("scrollEnd",function(){var e=t.slider.getCurrentPage().pageX;t.loop&&(e-=1),t.currentPageIndex=e,t.autoPlay&&(clearTimeout(t.timer),t.play())})},play:function(){var t=this,e=this.currentPageIndex+1;this.loop&&(e+=1),this.timer=setTimeout(function(){t.slider.goToPage(e,0,400)},this.interval)}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"slider",staticClass:"slider"},[n("div",{ref:"sliderGround",staticClass:"slider-group"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"dots"},t._l(t.dots,function(e,i){return n("span",{staticClass:"dot",class:{active:t.currentPageIndex===i}})}))])},staticRenderFns:[]};var m=n("VU/8")(f,v,!1,function(t){n("h7N/")},"data-v-0a5ba9e6",null).exports,p=n("woOf"),_=n.n(p),C=n("//Fk"),g=n.n(C),b=n("hU7x"),k=n.n(b);function x(t,e,n){return t+=(t.indexOf("?")<0?"?":"&")+function(t){var e="";for(var n in t){var i=void 0!==t[n]?t[n]:"";e+="&"+n+"="+encodeURIComponent(i)}return e?e.substring(1):""}(e),new g.a(function(e,i){k()(t,n,function(t,n){t?i(t):e(n)})})}var y={g_tk:5381,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},U={param:"jsonpCallback"};n("mtWM");var w={data:function(){return{recommends:[]}},created:function(){this._getRecommend()},methods:{_getRecommend:function(){var t=this;x("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",_()({},y,{platform:"h5",uin:0,needNewCode:1}),U).then(function(e){0===e.code&&(t.recommends=e.data.slider)})}},components:{Slider:m}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"recommend"},[e("div",{staticClass:"recommend-content"},[this.recommends.length?e("div",{staticClass:"slider-wrapper"},[e("slider",this._l(this.recommends,function(t){return e("div",[e("a",{attrs:{href:t.linkUrl}},[e("img",{attrs:{src:t.picUrl,alt:""}})])])}))],1):this._e(),this._v(" "),this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"recommend-list"},[e("h1",{staticClass:"list-title"},[this._v("热门歌单推荐")]),this._v(" "),e("ul")])}]};var $=n("VU/8")(w,E,!1,function(t){n("C8o/")},"data-v-6cc289ba",null).exports,P=n("0IpB"),O=n("Kjo5"),V=n("YOyO");i.a.use(l.a);var I=new l.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",component:$},{path:"/singer",component:P.default},{path:"/rank",component:O.default},{path:"/search",component:V.default}]}),R=n("v5o6"),j=n.n(R);n("34KM");j.a.attach(document.body),new i.a({el:"#app",render:function(t){return t(c)},router:I})},YOyO:function(t,e,n){"use strict";var i=n("A1IV"),s=n.n(i),r=n("jr1z");var a=function(t){n("oZYQ")},o=n("VU/8")(s.a,r.a,!1,a,"data-v-a633ef96",null);e.default=o.exports},dXVo:function(t,e){},eGUE:function(t,e){},fU4q:function(t,e){},fokP:function(t,e){},"h7N/":function(t,e){},hOlp:function(t,e){},iiiI:function(t,e){},jr1z:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    搜索页面\n")])},staticRenderFns:[]};e.a=i},oZYQ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.337f647db4089778cec2.js.map