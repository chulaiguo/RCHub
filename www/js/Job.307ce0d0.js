(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Job"],{"028a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"job-detail"},[n("div",{staticClass:"page-header"},[n("mt-header",{staticClass:"container",attrs:{title:"Time Sheet Detail"}},[n("router-link",{attrs:{slot:"left",to:{name:"JobTimesheetList"}},slot:"left"},[n("mt-button",{attrs:{icon:"back"}},[t._v("Back")])],1),n("span",{attrs:{slot:"right"},on:{click:t.onSave},slot:"right"},[n("font-awesome-icon",{attrs:{icon:"save",size:"2x"}})],1)],1)],1),n("div",{staticClass:"page-body container"},[n("mt-field",{attrs:{disabled:"",label:"DateTime",type:"text",readonly:"readonly"},model:{value:t.entity.DateTime,callback:function(e){t.$set(t.entity,"DateTime",e)},expression:"entity.DateTime"}}),n("mt-field",{attrs:{disabled:"",label:"JobNumber",type:"text",readonly:"readonly"},model:{value:t.entity.JobNumber,callback:function(e){t.$set(t.entity,"JobNumber",e)},expression:"entity.JobNumber"}}),n("mt-field",{attrs:{label:"EmpID",type:"text",placeholder:"please enter here"},model:{value:t.entity.EmpID,callback:function(e){t.$set(t.entity,"EmpID",e)},expression:"entity.EmpID"}}),n("c-time-picker",{attrs:{"field-label":"PostIn","field-value":t.entity.PostIn},on:{selectedChanged:t.onPostInChanged}}),n("c-time-picker",{attrs:{"field-label":"PostOut","field-value":t.entity.PostOut},on:{selectedChanged:t.onPostOutChanged}}),n("c-time-picker",{attrs:{"field-label":"CheckIn","field-value":t.entity.CheckIn},on:{selectedChanged:t.onCheckInChanged}}),n("c-time-picker",{attrs:{"field-label":"CheckOut","field-value":t.entity.CheckOut},on:{selectedChanged:t.onCheckOutChanged}}),t.hasPhotoIn?n("div",{staticClass:"photo"},[n("p",[t._v(t._s(t.photoInTitle))]),n("img",{attrs:{src:"data:image/jpeg;base64,"+t.entity.PhotoIn}})]):t._e(),t.hasPhotoOut?n("div",{staticClass:"photo"},[n("p",[t._v(t._s(t.photoOutTitle))]),n("img",{attrs:{src:"data:image/jpeg;base64,"+t.entity.PhotoOut}})]):t._e(),n("mt-field",{attrs:{label:"Break1In",type:"text",readonly:"readonly"},model:{value:t.entity.Break1In,callback:function(e){t.$set(t.entity,"Break1In",e)},expression:"entity.Break1In"}}),n("mt-field",{attrs:{label:"Break1Out",type:"text",readonly:"readonly"},model:{value:t.entity.Break1Out,callback:function(e){t.$set(t.entity,"Break1Out",e)},expression:"entity.Break1Out"}}),n("mt-field",{attrs:{label:"Break2In",type:"text",readonly:"readonly"},model:{value:t.entity.Break2In,callback:function(e){t.$set(t.entity,"Break2In",e)},expression:"entity.Break2In"}}),n("mt-field",{attrs:{label:"Break2Out",type:"text",readonly:"readonly"},model:{value:t.entity.Break2Out,callback:function(e){t.$set(t.entity,"Break2Out",e)},expression:"entity.Break2Out"}}),n("mt-field",{attrs:{label:"Break3In",type:"text",readonly:"readonly"},model:{value:t.entity.Break3In,callback:function(e){t.$set(t.entity,"Break3In",e)},expression:"entity.Break3In"}}),n("mt-field",{attrs:{label:"Break3Out",type:"text",readonly:"readonly"},model:{value:t.entity.Break3Out,callback:function(e){t.$set(t.entity,"Break3Out",e)},expression:"entity.Break3Out"}}),t.isNew?t._e():n("mt-button",{attrs:{size:"large",type:"danger"},on:{click:t.onDelete}},[n("font-awesome-icon",{attrs:{icon:"trash"}})],1)],1)])},i=[],o=(n("f751"),n("ac4d"),n("8a81"),n("ac6a"),n("ac02")),r=(n("ed08"),n("7cd3")),s={name:"JobTimesheetDetail",components:{"c-time-picker":r["a"]},data:function(){return{isNew:!1,entity:{PostIn:"",PostOut:"",CheckIn:"",CheckOut:""}}},computed:{hasPhotoIn:function(){return!(!this.entity||!this.entity.PhotoIn)&&this.entity.PhotoIn.length>0},photoInTitle:function(){return this.entity&&this.entity.PhotoInSize?"Photo In("+this.entity.PhotoInSize+")":"Photo In"},hasPhotoOut:function(){return!(!this.entity||!this.entity.PhotoOut)&&this.entity.PhotoOut.length>0},photoOutTitle:function(){return this.entity&&this.entity.PhotoOutSize?"Photo Out("+this.entity.PhotoOutSize+")":"Photo Out"}},methods:{onSave:function(){var t=this,e=JSON.stringify(this.entity);this.isNew?(this.$showLoading(),o["a"].InsertJobTimeSheet(e).then(function(e){if(t.$closeLoading(),e.data.OK){var n=e.data.Result;t.$store.state.jobTimeSheetList.length>0&&t.$store.state.jobTimeSheetList.push(n),t.$router.push({name:"JobTimesheetList"})}else t.$alert(e.data.Error,"Error"),console.log(e.data.Error)}).catch(function(e){t.showNetworkError(),console.log(e),t.$closeLoading()})):(this.$showLoading(),o["a"].UpdateJobTimeSheet(e).then(function(e){if(t.$closeLoading(),e.data.OK){var n=e.data.Result,a=!0,i=!1,o=void 0;try{for(var r,s=t.$store.state.jobTimeSheetList[Symbol.iterator]();!(a=(r=s.next()).done);a=!0){var c=r.value;if(c.HRTimeSheetPK==t.entity.HRTimeSheetPK){Object.assign(c,n);break}}}catch(l){i=!0,o=l}finally{try{a||null==s.return||s.return()}finally{if(i)throw o}}t.$router.push({name:"JobTimesheetList"})}else t.$alert(e.data.Error,"Error"),console.log(e.data.Error)}).catch(function(e){t.showNetworkError(),console.log(e),t.$closeLoading()}))},onDelete:function(){var t=this;this.$confirm("Are you sure to delete this item?","Question").then(function(e){t.$showLoading(),o["a"].DeleteJobTimeSheet(t.entity.HRTimeSheetPK).then(function(e){if(t.$closeLoading(),e.data.OK){for(var n=t.$store.state.jobTimeSheetList,a=n.length-1;a>=0;a--)if(n[a].HRTimeSheetPK==t.entity.HRTimeSheetPK){n.splice(a,1);break}t.$router.push({name:"JobTimesheetList"})}else t.$alert(e.data.Error,"Error"),console.log(e.data.Error)}).catch(function(e){t.showNetworkError(),console.log(e),t.$closeLoading()})}).catch(function(t){})},onPostInChanged:function(t){this.entity.PostIn=t},onPostOutChanged:function(t){this.entity.PostOut=t},onCheckInChanged:function(t){this.entity.CheckIn=t},onCheckOutChanged:function(t){this.entity.CheckOut=t}},mounted:function(){var t=this,e=this.$route.params.PK;if(this.isNew=!e||"0"==e,this.isNew){var n=this.$route.params.JobNumber,a=this.$route.params.DateTime;this.$showLoading(),o["a"].CreateJobTimeSheet(n,a).then(function(e){e.data.OK?t.entity=e.data.Result:(t.$alert(e.data.Error,"Error"),console.log(e.data.Error)),t.$closeLoading()}).catch(function(e){t.showNetworkError(),console.log(e),t.$closeLoading()})}else this.$showLoading(),o["a"].GetJobTimeSheet(e).then(function(e){e.data.OK?t.entity=e.data.Result:(t.$alert(e.data.Error,"Error"),console.log(e.data.Error)),t.$closeLoading()}).catch(function(e){t.showNetworkError(),console.log(e),t.$closeLoading()})}},c=s,l=(n("ccc7"),n("6112"),n("2877")),u=Object(l["a"])(c,a,i,!1,null,"1e3c06f1",null);u.options.__file="JobTimesheetDetail.vue";e["default"]=u.exports},"1d7f":function(t,e,n){},"25d6":function(t,e,n){"use strict";var a=n("3e0d"),i=n.n(a);i.a},"37c8":function(t,e,n){e.f=n("2b4c")},"386d":function(t,e,n){n("214f")("search",1,function(t,e,n){return[function(n){"use strict";var a=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,a):new RegExp(n)[e](String(a))},n]})},"3a72":function(t,e,n){var a=n("7726"),i=n("8378"),o=n("2d00"),r=n("37c8"),s=n("86cc").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:a.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:r.f(t)})}},"3e0d":function(t,e,n){},"494f":function(t,e,n){"use strict";var a=n("fd24"),i=n.n(a);i.a},"5b54":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},i=[],o={name:"JobLayout"},r=o,s=(n("5ff2"),n("2877")),c=Object(s["a"])(r,a,i,!1,null,"23ea9fb6",null);c.options.__file="JobLayout.vue";e["default"]=c.exports},"5ff2":function(t,e,n){"use strict";var a=n("ccb2"),i=n.n(a);i.a},6112:function(t,e,n){"use strict";var a=n("a3a6"),i=n.n(a);i.a},"67ab":function(t,e,n){var a=n("ca5a")("meta"),i=n("d3f4"),o=n("69a8"),r=n("86cc").f,s=0,c=Object.isExtensible||function(){return!0},l=!n("79e5")(function(){return c(Object.preventExtensions({}))}),u=function(t){r(t,a,{value:{i:"O"+ ++s,w:{}}})},h=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,a)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[a].i},d=function(t,e){if(!o(t,a)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[a].w},f=function(t){return l&&m.NEED&&c(t)&&!o(t,a)&&u(t),t},m=t.exports={KEY:a,NEED:!1,fastKey:h,getWeak:d,onFreeze:f}},"7bbc":function(t,e,n){var a=n("6821"),i=n("9093").f,o={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return r.slice()}};t.exports.f=function(t){return r&&"[object Window]"==o.call(t)?s(t):i(a(t))}},"7cd3":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-field",{attrs:{label:t.fieldLabel,type:"text",readonly:"readonly"},nativeOn:{click:function(e){t.pickerVisible=!0}},model:{value:t.fieldValue,callback:function(e){t.fieldValue=e},expression:"fieldValue"}}),n("mt-popup",{staticStyle:{width:"100%"},attrs:{position:"bottom"},model:{value:t.pickerVisible,callback:function(e){t.pickerVisible=e},expression:"pickerVisible"}},[n("mt-picker",{attrs:{slots:t.pickerSlots,showToolbar:!0},on:{change:t.onChange}},[n("div",{staticClass:"picker-toolbar-title"},[n("div",{staticClass:"picker-btn-cancel",on:{click:t.onChangedCancel}},[t._v("Cancel")]),n("div",{},[t._v(t._s(t.pickerTitle))]),n("div",{staticClass:"picker-btn-sure",on:{click:t.onChangedOK}},[t._v("OK")])])])],1)],1)},i=[],o={name:"TimePicker",props:{fieldLabel:{type:String,required:!0},fieldValue:{type:String,required:!0},pickerTitle:{type:String,default:""}},data:function(){return{selectedTime:"",pickerVisible:!1}},computed:{pickerSlots:function(){return[{flex:1,values:["0","1","2","3","4","5","6","7","8","9","10","11","12"],className:"slot1",textAlign:"center",defaultIndex:this.getDefaultHourIndex()},{divider:!0,content:"",className:"slot2"},{flex:1,values:["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29",,"30","31","32","33","34","35","36","37","38","39","40","41","42","43","44",,"45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"],className:"slot3",textAlign:"center",defaultIndex:this.getDefaultMinuteIndex()},{divider:!0,content:"",className:"slot4"},{flex:1,values:["AM","PM"],className:"slot5",textAlign:"center",defaultIndex:this.getDefaultAMPMIndex()}]}},methods:{getDefaultHourIndex:function(){return!this.fieldValue||this.fieldValue.length<2?0:parseInt(this.fieldValue.substring(0,2))},getDefaultMinuteIndex:function(){return!this.fieldValue||this.fieldValue.length<5?0:parseInt(this.fieldValue.substring(3,5))},getDefaultAMPMIndex:function(){return!this.fieldValue||this.fieldValue.length<8?0:"PM"==this.fieldValue.substring(6,8)?1:0},onChange:function(t,e){e.length>=3&&(this.selectedTime=e[0]+":"+e[1]+" "+e[2])},onChangedOK:function(){this.selectedTime.length>0&&this.$emit("selectedChanged",this.selectedTime),this.pickerVisible=!1},onChangedCancel:function(){this.pickerVisible=!1}}},r=o,s=(n("25d6"),n("2877")),c=Object(s["a"])(r,a,i,!1,null,"0440a47c",null);c.options.__file="TimePicker.vue";e["a"]=c.exports},"8a81":function(t,e,n){"use strict";var a=n("7726"),i=n("69a8"),o=n("9e1e"),r=n("5ca1"),s=n("2aba"),c=n("67ab").KEY,l=n("79e5"),u=n("5537"),h=n("7f20"),d=n("ca5a"),f=n("2b4c"),m=n("37c8"),p=n("3a72"),b=n("d4c0"),g=n("1169"),k=n("cb7c"),y=n("d3f4"),v=n("6821"),S=n("6a99"),O=n("4630"),w=n("2aeb"),$=n("7bbc"),T=n("11e9"),C=n("86cc"),L=n("0d58"),I=T.f,E=C.f,P=$.f,x=a.Symbol,D=a.JSON,N=D&&D.stringify,A="prototype",M=f("_hidden"),J=f("toPrimitive"),B={}.propertyIsEnumerable,_=u("symbol-registry"),R=u("symbols"),j=u("op-symbols"),K=Object[A],V="function"==typeof x,H=a.QObject,W=!H||!H[A]||!H[A].findChild,z=o&&l(function(){return 7!=w(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,n){var a=I(K,e);a&&delete K[e],E(t,e,n),a&&t!==K&&E(K,e,a)}:E,F=function(t){var e=R[t]=w(x[A]);return e._k=t,e},G=V&&"symbol"==typeof x.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof x},q=function(t,e,n){return t===K&&q(j,e,n),k(t),e=S(e,!0),k(n),i(R,e)?(n.enumerable?(i(t,M)&&t[M][e]&&(t[M][e]=!1),n=w(n,{enumerable:O(0,!1)})):(i(t,M)||E(t,M,O(1,{})),t[M][e]=!0),z(t,e,n)):E(t,e,n)},U=function(t,e){k(t);var n,a=b(e=v(e)),i=0,o=a.length;while(o>i)q(t,n=a[i++],e[n]);return t},Y=function(t,e){return void 0===e?w(t):U(w(t),e)},Q=function(t){var e=B.call(this,t=S(t,!0));return!(this===K&&i(R,t)&&!i(j,t))&&(!(e||!i(this,t)||!i(R,t)||i(this,M)&&this[M][t])||e)},X=function(t,e){if(t=v(t),e=S(e,!0),t!==K||!i(R,e)||i(j,e)){var n=I(t,e);return!n||!i(R,e)||i(t,M)&&t[M][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=P(v(t)),a=[],o=0;while(n.length>o)i(R,e=n[o++])||e==M||e==c||a.push(e);return a},tt=function(t){var e,n=t===K,a=P(n?j:v(t)),o=[],r=0;while(a.length>r)!i(R,e=a[r++])||n&&!i(K,e)||o.push(R[e]);return o};V||(x=function(){if(this instanceof x)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===K&&e.call(j,n),i(this,M)&&i(this[M],t)&&(this[M][t]=!1),z(this,t,O(1,n))};return o&&W&&z(K,t,{configurable:!0,set:e}),F(t)},s(x[A],"toString",function(){return this._k}),T.f=X,C.f=q,n("9093").f=$.f=Z,n("52a7").f=Q,n("2621").f=tt,o&&!n("2d00")&&s(K,"propertyIsEnumerable",Q,!0),m.f=function(t){return F(f(t))}),r(r.G+r.W+r.F*!V,{Symbol:x});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)f(et[nt++]);for(var at=L(f.store),it=0;at.length>it;)p(at[it++]);r(r.S+r.F*!V,"Symbol",{for:function(t){return i(_,t+="")?_[t]:_[t]=x(t)},keyFor:function(t){if(!G(t))throw TypeError(t+" is not a symbol!");for(var e in _)if(_[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),r(r.S+r.F*!V,"Object",{create:Y,defineProperty:q,defineProperties:U,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),D&&r(r.S+r.F*(!V||l(function(){var t=x();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))})),"JSON",{stringify:function(t){var e,n,a=[t],i=1;while(arguments.length>i)a.push(arguments[i++]);if(n=e=a[1],(y(e)||void 0!==t)&&!G(t))return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!G(e))return e}),a[1]=e,N.apply(D,a)}}),x[A][J]||n("32e9")(x[A],J,x[A].valueOf),h(x,"Symbol"),h(Math,"Math",!0),h(a.JSON,"JSON",!0)},"8c8e":function(t,e,n){},a3a6:function(t,e,n){},ac4d:function(t,e,n){n("3a72")("asyncIterator")},ac6a:function(t,e,n){for(var a=n("cadf"),i=n("0d58"),o=n("2aba"),r=n("7726"),s=n("32e9"),c=n("84f2"),l=n("2b4c"),u=l("iterator"),h=l("toStringTag"),d=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=i(f),p=0;p<m.length;p++){var b,g=m[p],k=f[g],y=r[g],v=y&&y.prototype;if(v&&(v[u]||s(v,u,d),v[h]||s(v,h,g),c[g]=d,k))for(b in a)v[b]||o(v,b,a[b],!0)}},c28e:function(t,e,n){"use strict";e["a"]={methods:{getTimeSheetBreakStatus:function(t){var e={Work:"Work",BreakOut:"BreakOut"};return 0==t.CheckIn.length?e.Work:t.CheckOut.length>0?e.Work:t.Break1In.length>0&&0==t.Break1Out.length?e.BreakOut:t.Break2In.length>0&&0==t.Break2Out.length?e.BreakOut:t.Break3In.length>0&&0==t.Break3Out.length?e.BreakOut:e.Work},getTimeSheetStatusStatus:function(t){var e={Empty:"Empty",Work:"Work",Sick:"Sick",Vacation:"Vacation",Absent:"Absent",Terminate:"Terminate"};return 0==t.PostIn.length||0==t.PostOut.length?e.Empty:"0000"==t.PostIn&&"0000"==t.PostOut?e.Empty:0==t.CheckIn.length||0==t.CheckOut.length?e.Work:"041"==t.PayCode?e.Sick:"048"==t.PayCode?e.Vacation:t.CheckIn==t.CheckOut&&t.CheckIn==t.PostIn?e.Absent:t.CheckIn==t.CheckOut&&t.CheckIn==t.PostOut?e.Terminate:e.Work}}}},c3bb:function(t,e,n){"use strict";var a=n("8c8e"),i=n.n(a);i.a},ccb2:function(t,e,n){},ccc7:function(t,e,n){"use strict";var a=n("1d7f"),i=n.n(a);i.a},d4c0:function(t,e,n){var a=n("0d58"),i=n("2621"),o=n("52a7");t.exports=function(t){var e=a(t),n=i.f;if(n){var r,s=n(t),c=o.f,l=0;while(s.length>l)c.call(t,r=s[l++])&&e.push(r)}return e}},dcb9:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"job-list"},[n("div",{staticClass:"page-header"},[n("mt-header",{staticClass:"container",attrs:{title:t.manager.SearchJobNumber+" / "+t.manager.SearchDateTime}},[n("span",{attrs:{slot:"left"},on:{click:t.onShowMenu},slot:"left"},[n("font-awesome-icon",{attrs:{icon:"bars",size:"2x"}})],1),n("span",{attrs:{slot:"right"},on:{click:t.onAddNew},slot:"right"},[n("font-awesome-icon",{attrs:{icon:"plus",size:"2x"}})],1)])],1),n("div",{staticClass:"page-body container"},[t._l(t.listArray,function(e,a){return n("div",{key:e.HRTimeSheetPK,staticClass:"wrapper"},[n("mt-cell",[n("span",{attrs:{slot:"title"},on:{click:function(n){t.onDetail(e.HRTimeSheetPK)}},slot:"title"},[n("span",{staticClass:"dateTime"},[t._v(t._s(e.FirstName+" "+e.LastName))]),n("br"),n("span",{staticClass:"postInOut"},[n("font-awesome-icon",{attrs:{icon:"calendar"}}),t._v("\n            "+t._s(e.PostIn+" - "+e.PostOut)+"\n          ")],1),n("br"),n("span",{staticClass:"checkInOut"},[n("font-awesome-icon",{attrs:{icon:"clock"}}),t._v("\n            "+t._s(e.CheckIn+" - "+e.CheckOut)+"\n          ")],1)]),n("span",{staticClass:"functions",on:{click:function(e){t.onCheckInOut(a)}}},[n("font-awesome-icon",{attrs:{icon:"clock",size:"2x"}})],1),n("span",{staticClass:"functions",on:{click:function(e){t.OnBreak(a)}}},[n("font-awesome-icon",{attrs:{icon:t.getBreakIcon(a),size:"2x"}})],1),n("span",{staticClass:"functions",on:{click:function(e){t.onStatus(a)}}},[n("font-awesome-icon",{attrs:{icon:t.getStatusIcon(a),size:"2x"}})],1)])],1)}),n("mt-actionsheet",{attrs:{actions:t.command.actions,cancelText:"Cancel"},model:{value:t.command.visible,callback:function(e){t.$set(t.command,"visible",e)},expression:"command.visible"}}),n("mt-popup",{staticClass:"menu",attrs:{position:"left"},model:{value:t.popupMenu.visible,callback:function(e){t.$set(t.popupMenu,"visible",e)},expression:"popupMenu.visible"}},[n("ul",[t.isRegionManager?n("li",{on:{click:t.onRegion}},[n("font-awesome-icon",{attrs:{icon:"city"}}),n("span",[t._v("Region")])],1):t._e(),t.isRegionManager?n("li",{on:{click:t.onEquipmentRepair}},[n("font-awesome-icon",{attrs:{icon:"hammer"}}),n("span",[t._v("Repair")])],1):t._e(),n("li",{on:{click:t.onLogout}},[n("font-awesome-icon",{attrs:{icon:"sign-out-alt"}}),n("span",[t._v("Louout")])],1)])]),n("mt-popup",{ref:"search",staticClass:"search",model:{value:t.popupSearch.visible,callback:function(e){t.$set(t.popupSearch,"visible",e)},expression:"popupSearch.visible"}},[n("mt-field",{attrs:{label:"JobNumber",type:"text",placeholder:"please enter here"},model:{value:t.popupSearch.jobNumber,callback:function(e){t.$set(t.popupSearch,"jobNumber",e)},expression:"popupSearch.jobNumber"}}),n("mt-field",{attrs:{label:"Date",type:"text",readonly:"readonly"},nativeOn:{click:function(e){return t.onShowDatePicker(e)}},model:{value:t.popupSearch.date,callback:function(e){t.$set(t.popupSearch,"date",e)},expression:"popupSearch.date"}}),n("div",{staticClass:"button-group"},[n("mt-button",{attrs:{size:"large",type:"primary"},on:{click:t.onSearch}},[n("font-awesome-icon",{attrs:{icon:"search"}})],1),n("mt-button",{attrs:{size:"large",type:"default"},on:{click:t.onSearchCancel}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1)],1)],1),n("mt-datetime-picker",{ref:"picker",attrs:{type:"date",cancelText:"Cancel",confirmText:"OK",startDate:t.startDate,endDate:t.endDate},on:{confirm:t.onPickerConfirm,"visible-change":t.onPickerVisibleChange},model:{value:t.popupSearch.pickerDate,callback:function(e){t.$set(t.popupSearch,"pickerDate",e)},expression:"popupSearch.pickerDate"}})],2),n("div",{staticClass:"tabbar-wrapper"},[n("mt-tabbar",{staticClass:"container"},[n("mt-tab-item",[n("span",{on:{click:t.onShowSearch}},[n("font-awesome-icon",{attrs:{icon:"search",size:"2x"}})],1)])],1)],1)])},i=[],o=(n("f751"),n("386d"),n("cadf"),n("551c"),n("097d"),n("ac02")),r=n("ed08"),s=n("c28e"),c={name:"JobTimesheetList",mixins:[s["a"]],data:function(){return{listArray:[],manager:{},command:{actions:[],visible:!1,selectedIndex:0},popupSearch:{jobNumber:"",date:"",pickerDate:new Date,visible:!1},popupMenu:{visible:!1}}},computed:{startDate:function(){return this.manager?new Date(Date.parse(this.manager.MinDateTime)):new Date},endDate:function(){return this.manager?new Date(Date.parse(this.manager.MaxDateTime)):new Date},isRegionManager:function(){return!!this.manager&&(this.manager.IsCompanyManager||this.manager.IsDivisionManager||this.manager.IsRegionManager)}},methods:{getBreakIcon:function(t){var e=this.getTimeSheetBreakStatus(this.listArray[t]);switch(e){case"Work":return"user";case"BreakOut":return"coffee";default:return"user"}},getStatusIcon:function(t){var e=this.getTimeSheetStatusStatus(this.listArray[t]);switch(e){case"Empty":return"calendar-times";case"Work":return"check-circle";case"Sick":return"hospital";case"Vacation":return"plane";case"Absent":return"question";case"Terminate":return"ban";default:return"calendar-times"}},onShowSearch:function(){this.popupSearch.jobNumber=this.manager.SearchJobNumber,this.popupSearch.date=this.manager.SearchDateTime,this.popupSearch.pickerDate=new Date(Date.parse(this.manager.SearchDateTime)),this.popupSearch.visible=!0},onShowDatePicker:function(){this.$refs.search.close(),this.$refs.picker.open()},onPickerConfirm:function(t){this.popupSearch.date=this.$formatDate(t,"MM/dd/yyyy")},onPickerVisibleChange:function(t){t||(this.$refs.picker.close(),this.$refs.search.open())},onSearchCancel:function(){this.popupSearch.visible=!1},onSearch:function(){this.popupSearch.visible=!1,this.getList(this.popupSearch.jobNumber,this.popupSearch.date)},getList:function(t,e){var n=this;t&&e&&(this.$showLoading(),o["a"].GetJobTimeSheetList(t,e).then(function(a){a.data.OK?(n.listArray=a.data.Result,n.$store.commit("setJobTimeSheetList",n.listArray),r["a"].setJobNumber(t),n.manager.SearchJobNumber=t,n.manager.SearchDateTime=e,r["a"].setUserSettings(n.manager)):(n.$alert(a.data.Error,"Error"),console.log(a.data.Error)),n.$closeLoading()}).catch(function(t){n.showNetworkError(),console.log(t),n.$closeLoading()}))},onAddNew:function(){this.$router.push({name:"JobTimesheetDetail",params:{PK:"0",JobNumber:this.manager.SearchJobNumber,DateTime:this.manager.SearchDateTime}})},onShowMenu:function(){this.popupMenu.visible=!0},onRegion:function(){this.$router.push({name:"RegionTimesheetList"})},onEquipmentRepair:function(){this.$router.push({name:"EquipmentRepairList"})},onLogout:function(){r["a"].logout(),this.$router.push({name:"Login"})},onDetail:function(t){this.$router.push({name:"JobTimesheetDetail",params:{PK:t}})},checkInOut:function(t){var e=this;this.$takeCameraPicture(function(n){e.$showLoading(),o["a"].JobClock(t.HRTimeSheetPK,n).then(function(n){if(n.data.OK){var a=n.data.Result;Object.assign(t,a)}else e.$alert(n.data.Error,"Error"),console.log(n.data.Error);e.$closeLoading()}).catch(function(t){e.showNetworkError(),console.log(t),e.$closeLoading()})})},onCheckInOut:function(t){var e=this,n=this.listArray[t],a=this.manager.SearchJobNumber;try{navigator.geolocation.getCurrentPosition(function(t){e.$showLoading(),console.log(t.coords),o["a"].IsInJobSite(a,t.coords.latitude,t.coords.longitude).then(function(t){e.$closeLoading(),t.data.OK?e.checkInOut(n):(e.$alert("You are not near by the job site.","Error"),console.log(t.data.Error))}).catch(function(t){e.showNetworkError(),console.log(t),e.$closeLoading()})},function(t){e.$alert("The location service must be enabled.","Error"),console.log(t)},{timeout:1e3,enableHighAccuracy:!0,maximumAge:3e3})}catch(i){this.$alert("The location service must be enabled.","Error")}},OnBreak:function(t){var e=this;this.$showLoading();var n=this.listArray[t];o["a"].JobBreak(n.HRTimeSheetPK).then(function(t){if(t.data.OK){var a=t.data.Result;Object.assign(n,a)}else e.$alert(t.data.Error,"Error"),console.log(t.data.Error);e.$closeLoading()}).catch(function(t){e.showNetworkError(),console.log(t),e.$closeLoading()})},onStatus:function(t){this.command.selectedIndex=t,this.command.actions=[],this.command.actions.push({name:"Mark As Sick",method:this.MarkAsSick}),this.command.actions.push({name:"Mark As Vacation",method:this.MarkAsVacation}),this.command.actions.push({name:"Mark As Work",method:this.MarkAsWork}),this.command.actions.push({name:"Mark As Absent",method:this.MarkAsAbsent}),this.command.actions.push({name:"Mark As Terminate",method:this.MarkAsTerminate});var e=this.getTimeSheetStatusStatus(this.listArray[t]);switch(e){case"Work":this.command.actions.splice(2,1);break;case"Sick":this.command.actions.splice(0,1);break;case"Vacation":this.command.actions.splice(1,1);break;case"Absent":this.command.actions.splice(3,1);break;case"Terminate":this.command.actions.splice(4,1);break}this.command.visible=!0},MarkAsSick:function(){var t=this;this.$showLoading();var e=this.listArray[this.command.selectedIndex];o["a"].JobMarkAsSick(e.HRTimeSheetPK).then(function(n){if(n.data.OK){var a=n.data.Result;Object.assign(e,a)}else t.$alert(n.data.Error,"Error"),console.log(n.data.Error);t.$closeLoading()}).catch(function(e){t.showNetworkError(),console.log(e),t.$closeLoading()})},MarkAsVacation:function(){var t=this;this.$showLoading();var e=this.listArray[this.command.selectedIndex];o["a"].JobMarkAsVacation(e.HRTimeSheetPK).then(function(n){if(n.data.OK){var a=n.data.Result;Object.assign(e,a)}else t.$alert(n.data.Error,"Error"),console.log(n.data.Error);t.$closeLoading()}).catch(function(e){t.showNetworkError(),console.log(e),t.$closeLoading()})},MarkAsWork:function(){var t=this;this.$showLoading();var e=this.listArray[this.command.selectedIndex];o["a"].JobMarkAsWork(e.HRTimeSheetPK).then(function(n){if(n.data.OK){var a=n.data.Result;Object.assign(e,a)}else t.$alert(n.data.Error,"Error"),console.log(n.data.Error);t.$closeLoading()}).catch(function(e){t.showNetworkError(),console.log(e),t.$closeLoading()})},MarkAsAbsent:function(){var t=this;this.$showLoading();var e=this.listArray[this.command.selectedIndex];o["a"].JobMarkAsAbsent(e.HRTimeSheetPK).then(function(n){if(n.data.OK){var a=n.data.Result;Object.assign(e,a)}else t.$alert(n.data.Error,"Error"),console.log(n.data.Error);t.$closeLoading()}).catch(function(e){t.showNetworkError(),console.log(e),t.$closeLoading()})},MarkAsTerminate:function(){var t=this;this.$prompt("Please input reason").then(function(e){var n=e.value;e.action;t.$showLoading();var a=t.listArray[t.command.selectedIndex];o["a"].JobMarkAsTerminate(a.HRTimeSheetPK,n).then(function(e){if(e.data.OK){var n=e.data.Result;Object.assign(a,n)}else t.$alert(e.data.Error,"Error"),console.log(e.data.Error);t.$closeLoading()}).catch(function(e){t.showNetworkError(),console.log(e),t.$closeLoading()})}).catch(function(t){})}},mounted:function(){this.manager=r["a"].getUserSettings(),this.$store.state.jobTimeSheetList.length>0?this.listArray=this.$store.state.jobTimeSheetList:this.getList(this.manager.SearchJobNumber,this.manager.SearchDateTime)}},l=c,u=(n("494f"),n("c3bb"),n("2877")),h=Object(u["a"])(l,a,i,!1,null,"1b5d08ac",null);h.options.__file="JobTimesheetList.vue";e["default"]=h.exports},fd24:function(t,e,n){}}]);
//# sourceMappingURL=Job.307ce0d0.js.map