(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],d=0,v=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/olympics-site/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("v-app-bar",{staticClass:"text-center",attrs:{app:""}},[a("h1",{staticClass:"text-center",staticStyle:{width:"100%"}},[t._v("Tóquio 2020")])]),a("v-container",{attrs:{fluid:!0}},[a("v-row",[a("v-col",{attrs:{sm:"4",md:"4"}},[a("Agenda",{attrs:{height:t.setDynamicHeight}})],1),a("v-col",{attrs:{sm:"4",md:"4"}},[a("h1",[t._v("Quadro Medalhas")]),a("h1"),a("div",{staticClass:"overflow-y-auto",style:{height:t.setDynamicHeight+"px"}},[t.isLoading?a("div",t._l([1,2,3,4,5,7,8,9,10],(function(t){return a("v-skeleton-loader",{key:t,staticClass:"my-5",attrs:{type:"table-heading: heading, text"}})})),1):a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-center"},[t._v(" # ")]),a("th",{staticClass:"text-left"},[t._v(" País ")]),a("th",{staticClass:"text-center"},[t._v(" Ouro ")]),a("th",{staticClass:"text-center"},[t._v(" Prata ")]),a("th",{staticClass:"text-center"},[t._v(" Bronze ")]),a("th",{staticClass:"text-center"},[t._v(" Total ")])])]),a("tbody",[a("tr",[a("td",[t._v(t._s(t.getMedalTable.first.ranking))]),a("td",{staticClass:"text-left"},[a("img",{attrs:{src:t.getMedalTable.first.country.flag.svg.url,width:"20",height:"20"}}),t._v(" "+t._s(t.getMedalTable.first.country.name)+" ")]),a("td",[t._v(t._s(t.getMedalTable.first.gold))]),a("td",[t._v(t._s(t.getMedalTable.first.silver))]),a("td",[t._v(t._s(t.getMedalTable.first.bronze))]),a("td",[t._v(t._s(t.getMedalTable.first.total))])]),t._l(t.getMedalTable.data,(function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(e.ranking))]),a("td",{staticClass:"text-left"},[a("img",{attrs:{src:e.country.flag.svg.url,width:"20",height:"20"}}),t._v(" "+t._s(e.country.name)+" ")]),a("td",[t._v(t._s(e.gold))]),a("td",[t._v(t._s(e.silver))]),a("td",[t._v(t._s(e.bronze))]),a("td",[t._v(t._s(e.total))])])}))],2)]},proxy:!0}])})],1)]),a("v-col",{attrs:{sm:"4",md:"4"}},[a("h1",[t._v("Últimas Notícias")]),a("h1"),a("div",{staticClass:"overflow-y-auto",style:{height:t.setDynamicHeight+"px"}},[t.isLoading?a("div",t._l([1,2,3,4,5,7,8,9,10],(function(t){return a("v-skeleton-loader",{key:t,staticClass:"my-5",attrs:{type:"card"}})})),1):t._l(t.items,(function(e){return a("a",{key:e.id,attrs:{href:e.content.url,target:"_blank"}},[a("v-card",[e.content.image.sizes?a("v-img",{attrs:{height:"250",src:e.content.image.sizes.L.url}}):t._e(),a("v-card-title",{staticClass:"mb-5"},[t._v(t._s(e.content.title))])],1)],1)}))],2)])],1)],1)],1)],1)},s=[],i=a("1da1"),o=(a("7db0"),a("4de4"),a("96cf"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"mb-5"},[a("v-btn",{staticClass:"mr-1",attrs:{elevation:"2",small:"",fab:""},on:{click:function(e){return t.handleClick(-1)}}},[a("v-icon",[t._v(" mdi-chevron-left ")])],1),t._v(" Dia "+t._s(t.date.getDate()+"-"+(t.date.getMonth()+1))+" "),a("v-btn",{staticClass:"ml-1",attrs:{elevation:"2",small:"",fab:""},on:{click:function(e){return t.handleClick(1)}}},[a("v-icon",[t._v(" mdi-chevron-right ")])],1)],1),a("h3",[t._v("Horário de Brasilia")]),a("v-tabs",{attrs:{"align-with-title":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tabs-slider",{attrs:{color:"yellow"}}),a("v-tab",{key:"tab-all"},[t._v(" Todos ")]),a("v-tab",{key:"tab-brasil"},[t._v(" Brasil ")])],1),a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("div",{staticClass:"overflow-y-auto",style:Object.assign({},t.setDynamicHeight)},[a("v-tab-item",{key:"tab-all"},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[t.isLoading?a("div",t._l([1,2,3,4,5],(function(t){return a("v-skeleton-loader",{key:t,staticClass:"my-5",attrs:{type:"list-item-avatar, divider"}})})),1):a("div",[a("v-expansion-panels",t._l({now:t.allEvents.now,future:t.allEvents.future,past:t.allEvents.past},(function(e,n,r){return a("v-expansion-panel",{key:r},[e.length>0?a("v-expansion-panel-header",{class:t.getEventsInformation(n).styleClass,attrs:{color:t.getEventsInformation(n).color}},[a("strong",[t._v(t._s(t.getEventsInformation(n).title+" - ("+e.length+")"))])]):t._e(),a("v-expansion-panel-content",[a("AgendaEvent",{attrs:{color:"green",type:n,height:t.setDynamicHeight,events:e}})],1)],1)})),1)],1)])],1)],1),a("v-tab-item",{key:"tab-brasil"},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[t.isLoading?a("div",t._l([1,2,3,4,5],(function(t){return a("v-skeleton-loader",{key:t,staticClass:"my-5",attrs:{type:"list-item-avatar, divider"}})})),1):a("div",[a("v-expansion-panels",t._l({now:t.allBrazilEvents.now,future:t.allBrazilEvents.future,past:t.allBrazilEvents.past},(function(e,n,r){return a("v-expansion-panel",{key:r},[e.length>0?a("v-expansion-panel-header",{class:t.getEventsInformation(n).styleClass,attrs:{color:t.getEventsInformation(n).color}},[a("strong",[t._v(t._s(t.getEventsInformation(n).title+" - ("+e.length+")"))])]):t._e(),a("v-expansion-panel-content",[a("AgendaEvent",{attrs:{color:"green",type:n,height:t.setDynamicHeight,events:e}})],1)],1)})),1)],1)])],1)],1)],1)])],1)}),c=[],l=a("5530"),u=(a("a9e3"),a("2f62")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-timeline",{attrs:{"align-top":"",dense:""}},t._l(t.events,(function(e,n){return a("v-timeline-item",{key:n,attrs:{color:"grey","icon-color":"grey lighten-2",small:""}},[a("v-row",{staticClass:"pt-1"},[a("v-col",{attrs:{cols:"12",md:"3"}},[a("strong",[t._v(t._s("match"in e?e.match.startHour:e.startHour))])]),a("v-col",[a("p",{staticClass:"mb-1"},[a("strong",[t._v(t._s(e.sport.name+" - "+e.category.name))]),a("br"),e.modality?a("strong",[t._v(t._s(""+e.modality.name))]):t._e(),a("br"),a("strong",[t._v(t._s(""+e.stage))])]),a("div",{staticClass:"text-caption"},t._l(e.participants,(function(e,n){return a("div",{key:n,staticClass:"mb-0"},[e.flag?a("div",{staticClass:"d-flex justify-center align-center"},[a("img",{attrs:{src:e.flag.svg.url,width:"20",height:"20",alt:e.name,title:e.name}}),a("p",{staticClass:"ml-1 mb-0 text-uppercase"},[t._v(" "+t._s(e.code)+" ")])]):t._e(),e.represents?a("div",{staticClass:"d-flex justify-center align-center"},[a("img",{attrs:{src:e.represents.flag.svg.url,width:"20",height:"20",alt:e.represents.name,title:e.represents.name}}),a("p",{staticClass:"ml-1 mb-0 text-uppercase"},[t._v(" "+t._s(e.popularName)+" ")])]):t._e()])})),0)]),t.isTypeNow?a("v-col",{attrs:{cols:"12",md:"3"}},[a("div",{staticClass:"mb-5"},[a("a",{attrs:{href:"https://futebolplayhd.com/assistir-sportv-ao-vivo-hd-24-horas-online-gratis/",target:"_blank"}},[a("strong",[t._v("Assistir 1")])])]),a("div",{},[a("a",{attrs:{href:"https://assistironlinehd.org/tv/",target:"_blank"}},[a("strong",[t._v("Assistir 2")])])])]):t._e()],1)],1)})),1)],1)},v=[],f={name:"AgendaEvent",props:{events:Array,type:String,height:Number},computed:{isTypeNow:function(){return"now"===this.type}}},g=f,p=(a("cc6c"),a("2877")),h=a("6544"),m=a.n(h),b=a("62ad"),_=a("0fd9"),y=a("8414"),w=a("1e06"),x=Object(p["a"])(g,d,v,!1,null,null,null),k=x.exports;m()(x,{VCol:b["a"],VRow:_["a"],VTimeline:y["a"],VTimelineItem:w["a"]});var C={name:"Agenda",components:{AgendaEvent:k},props:{height:Number},data:function(){return{date:new Date,tab:null}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchEvents(t.date);case 2:case"end":return e.stop()}}),e)})))()},computed:Object(l["a"])(Object(l["a"])({},Object(u["c"])(["allEvents","allBrazilEvents","isLoading"])),{},{setDynamicHeight:function(){return window.innerWidth<=768?{minHeight:"176px"}:{height:this.height-98+"px"}}}),methods:Object(l["a"])(Object(l["a"])({},Object(u["b"])(["fetchEvents"])),{},{handleClick:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.date.setDate(e.date.getDate()+t),a.next=3,e.fetchEvents(e.date);case 3:case"end":return a.stop()}}),a)})))()},getEventsInformation:function(t){var e="",a="",n="";switch(t){case"now":e="Agora",a="green",n="white--text";break;case"past":e="Eventos já realizados";break;case"future":e="Próximos eventos";break}return{title:e,styleClass:n,color:a}}})},E=C,j=a("8336"),O=a("b0af"),T=a("99d9"),V=a("cd55"),A=a("49e2"),D=a("c865"),M=a("0393"),H=a("132d"),z=a("3129"),B=a("71a3"),P=a("c671"),S=a("fe57"),L=a("aac8"),I=a("9a96"),R=Object(p["a"])(E,o,c,!1,null,null,null),N=R.exports;m()(R,{VBtn:j["a"],VCard:O["a"],VCardText:T["a"],VExpansionPanel:V["a"],VExpansionPanelContent:A["a"],VExpansionPanelHeader:D["a"],VExpansionPanels:M["a"],VIcon:H["a"],VSkeletonLoader:z["a"],VTab:B["a"],VTabItem:P["a"],VTabs:S["a"],VTabsItems:L["a"],VTabsSlider:I["a"]});a("99af");var $=a("bc3a"),q=a.n($),F={fetchAgenda:function(t){return q.a.get("https://goulartf.com/api/test.php?date=".concat(t.getDate(),"-").concat(t.getMonth()+1))},fetchMedalTable:function(){return q.a.get("https://goulartf.com/api/testmedalTable.php")},fetchNews:function(){return q.a.get("https://falkor-cda.bastian.globo.com/tenants/ge/instances/bc4d10b9-ed92-49c4-accb-ca14e4a1dd3e/posts/page/1")}},J={name:"App",components:{Agenda:N},data:function(){return{items:[],medalTable:{first:{},data:[]},loading:!0,height:300}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,F.fetchNews();case 3:return a=e.sent,e.next=6,F.fetchMedalTable();case 6:n=e.sent,t.items=a.data.items,t.medalTable.data=n.data.data.medalTable,t.loading=!1;case 10:case"end":return e.stop()}}),e)})))()},computed:{getMedalTable:function(){var t=this.medalTable;return t.first=t.data.find((function(t){return"BRA"===t.country.code})),t.data=t.data.filter((function(t){return"BRA"!==t.country.code})),t},isLoading:function(){return this.loading},setDynamicHeight:function(){var t=138;return window.innerWidth<=768&&(t=200),window.innerHeight-t}}},W=J,Q=(a("034f"),a("7496")),G=a("40dc"),K=a("a523"),U=a("adda"),X=a("f6c4"),Y=a("1f4f"),Z=Object(p["a"])(W,r,s,!1,null,null,null),tt=Z.exports;m()(Z,{VApp:Q["a"],VAppBar:G["a"],VCard:O["a"],VCardTitle:T["b"],VCol:b["a"],VContainer:K["a"],VImg:U["a"],VMain:X["a"],VRow:_["a"],VSimpleTable:Y["a"],VSkeletonLoader:z["a"]});var et=a("f309");n["a"].use(et["a"]);var at=new et["a"]({}),nt=a("2909"),rt=(a("d81d"),a("4e827"),a("ac1f"),a("466d"),{events:[],brazilEvents:[],loading:!1}),st={allBrazilEvents:function(t){return t.brazilEvents},allEvents:function(t){return t.events},isLoading:function(t){return t.loading}},it={setBrazilEvents:function(t,e){return t.brazilEvents=e},setEvents:function(t,e){return t.events=e},setLoadingEvents:function(t,e){return t.loading=e}},ot={fetchEvents:function(t,e){return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r,s,i,o,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,n("setLoadingEvents",!0),a.next=4,F.fetchAgenda(e);case 4:r=a.sent,s=r.data.data,i=s.brazilOlympicAgenda,o=s.olympicAgenda,c={future:[],now:[],past:[]},o.map((function(t){c.future=[].concat(Object(nt["a"])(c.future),Object(nt["a"])(t.future)),c.now=[].concat(Object(nt["a"])(c.now),Object(nt["a"])(t.now)),c.past=[].concat(Object(nt["a"])(c.past),Object(nt["a"])(t.past))})),c.now=c.now.filter((function(t){return t})).sort(ct),c.future=c.future.filter((function(t){return t})).sort(ct),c.past=c.past.filter((function(t){return t})).sort(ct),n("setBrazilEvents",i),n("setEvents",c),n("setLoadingEvents",!1);case 14:case"end":return a.stop()}}),a)})))()}},ct=function(t,e){var a="match"in t?t.match.startDate:t.startDate,n="match"in t?t.match.startHour:t.startHour,r="match"in e?e.match.startDate:e.startDate,s="match"in e?e.match.startHour:e.startHour,i=new Date("".concat(a," ").concat(n)),o=new Date("".concat(r," ").concat(s));return i<o?-1:i>o?1:0},lt={state:rt,getters:st,actions:ot,mutations:it};n["a"].use(u["a"]);var ut=new u["a"].Store({modules:{agenda:lt}}),dt=a("9483");console.log("production"),Object(dt["a"])("".concat("/olympics-site/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,new n["a"]({store:ut,vuetify:at,render:function(t){return t(tt)}}).$mount("#app")},"85ec":function(t,e,a){},cc6c:function(t,e,a){"use strict";a("e9de")},e9de:function(t,e,a){}});
//# sourceMappingURL=app.9a4d4256.js.map