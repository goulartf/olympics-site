(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/olympic-site/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("v-container",{attrs:{fluid:!0}},[a("v-row",[a("v-col",{attrs:{md:"3"}},[a("h1",[t._v("Brasil Agenda")]),a("h1",[t._v("Hoje ("+t._s(t.date.getDate()+"-"+(t.date.getMonth()+1))+") "),a("a",{attrs:{href:"#"},on:{click:t.handleClick}},[t._v("Proximo")])]),a("v-timeline",{attrs:{"align-top":"",dense:""}},[t._l(t.agenda.future,(function(e,n){return a("v-timeline-item",{key:n,attrs:{color:"blue",small:""}},[a("v-row",{staticClass:"pt-1"},[a("v-col",{attrs:{cols:"3"}},[a("strong",[t._v(t._s(e.startHour))])]),a("v-col",[a("strong",[t._v(t._s(e.sport.name+" - "+e.category.name))]),a("div",{staticClass:"text-caption"},t._l(e.participants,(function(e,n){return a("p",{key:n},[t._v(" "+t._s(e.popularName)+" ")])})),0),a("div",{staticClass:"text-caption"},[a("a",{attrs:{href:"https://futebolplayhd.com/assistir-sportv-ao-vivo-hd-24-horas-online-gratis/",target:"_blank"}},[t._v("Assistir")])])])],1)],1)})),t._l(t.agenda.now,(function(e,n){return a("v-timeline-item",{key:n,attrs:{color:"green",small:""}},[a("v-row",{staticClass:"pt-1"},[a("v-col",{attrs:{cols:"3"}},[a("strong",[t._v(t._s(e.startHour))])]),a("v-col",[a("strong",[t._v(t._s(e.sport.name+" - "+e.category.name))]),a("div",{staticClass:"text-caption"},t._l(e.participants,(function(e,n){return a("p",{key:n},[t._v(" "+t._s(e.popularName)+" ")])})),0)])],1)],1)})),t._l(t.agenda.past,(function(e,n){return a("v-timeline-item",{key:n,attrs:{color:"gray",small:""}},[a("v-row",{staticClass:"pt-1"},[a("v-col",{attrs:{cols:"3"}},[a("strong",[t._v(t._s(e.startHour))])]),a("v-col",[a("strong",[t._v(t._s(e.sport.name+" - "+e.category.name))]),a("div",{staticClass:"text-caption"},t._l(e.participants,(function(e,n){return a("p",{key:n},[t._v(" "+t._s(e.popularName)+" ")])})),0)])],1)],1)}))],2)],1),a("v-col",{attrs:{md:"4"}},[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-center"},[t._v(" # ")]),a("th",{staticClass:"text-left"},[t._v(" Country ")]),a("th",{staticClass:"text-center"},[t._v(" Gold ")]),a("th",{staticClass:"text-center"},[t._v(" Silver ")]),a("th",{staticClass:"text-center"},[t._v(" Bronze ")]),a("th",{staticClass:"text-center"},[t._v(" Total ")])])]),a("tbody",t._l(t.medalTable,(function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(e.ranking))]),a("td",{staticClass:"text-left"},[a("img",{attrs:{src:e.country.flag.svg.url,width:"20",height:"20"}}),t._v(" "+t._s(e.country.name)+" ")]),a("td",[t._v(t._s(e.gold))]),a("td",[t._v(t._s(e.silver))]),a("td",[t._v(t._s(e.bronze))]),a("td",[t._v(t._s(e.total))])])})),0)]},proxy:!0}])})],1),a("v-col",{attrs:{md:"4"}},t._l(t.items,(function(e){return a("a",{key:e.id,attrs:{href:e.content.url,target:"_blank"}},[a("v-card",[e.content.image.sizes?a("v-img",{attrs:{height:"250",src:e.content.image.sizes.L.url}}):t._e(),a("v-card-title",{staticClass:"mb-5"},[t._v(t._s(e.content.title))])],1)],1)})),0)],1)],1)],1)],1)},s=[],o=a("1da1"),i=(a("96cf"),a("99af"),a("bc3a")),c=a.n(i),l={name:"App",components:{},data:function(){return{items:[],medalTable:{},agenda:{},date:new Date}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("https://falkor-cda.bastian.globo.com/tenants/ge/instances/bc4d10b9-ed92-49c4-accb-ca14e4a1dd3e/posts/page/1");case 2:return a=e.sent,e.next=5,c.a.get("https://goulartf.com/api/test.php?date=".concat(t.date.getDate(),"-").concat(t.date.getMonth()+1));case 5:return n=e.sent,e.next=8,c.a.get("https://goulartf.com/api/testmedalTable.php");case 8:r=e.sent,t.items=a.data.items,t.medalTable=r.data.data.medalTable,t.agenda=n.data.data.brazilOlympicAgenda,t.agenda.past.reverse(),t.agenda.now.reverse();case 14:case"end":return e.stop()}}),e)})))()},methods:{handleClick:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.date.setDate(t.date.getDate()+1),e.next=3,c.a.get("https://goulartf.com/api/test.php?date=".concat(t.date.getDate(),"-").concat(t.date.getMonth()+1));case 3:a=e.sent,t.agenda=a.data.data.brazilOlympicAgenda,t.agenda.past.reverse(),t.agenda.now.reverse();case 7:case"end":return e.stop()}}),e)})))()}}},u=l,p=(a("034f"),a("2877")),d=a("6544"),v=a.n(d),f=a("7496"),g=a("b0af"),m=a("99d9"),_=a("62ad"),h=a("a523"),b=a("adda"),y=a("f6c4"),w=a("0fd9"),x=a("1f4f"),C=a("8414"),k=a("1e06"),O=Object(p["a"])(u,r,s,!1,null,null,null),j=O.exports;v()(O,{VApp:f["a"],VCard:g["a"],VCardTitle:m["a"],VCol:_["a"],VContainer:h["a"],VImg:b["a"],VMain:y["a"],VRow:w["a"],VSimpleTable:x["a"],VTimeline:C["a"],VTimelineItem:k["a"]});var T=a("f309");n["a"].use(T["a"]);var V=new T["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:V,render:function(t){return t(j)}}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.b5a8ca24.js.map