(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-242cc04d"],{"149c":function(t,e,a){"use strict";var r=a("4221");a.n(r).a},"24d0":function(t,e,a){t.exports=a.p+"img/kspng.68ab7744.png"},"36f9":function(t,e,a){"use strict";a.r(e);var r=a("6f2f").a,s=(a("149c"),a("17cc")),o=Object(s.a)(r,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h1",[t._v(t._s(t.createtitle))]),r("v-layout",{staticClass:"create_wrapper",attrs:{"align-start":"","justify-space-around":""}},[t.kscard?r("div",{staticClass:"kscard",on:{click:function(e){return t.kscreate()}}},[r("img",{attrs:{src:a("24d0"),alt:""}}),r("h2",[t._v("By Keystore")])]):t._e(),t.pkcard?r("div",{staticClass:"pkcard",on:{click:function(e){return t.pkcreate()}}},[r("img",{attrs:{src:a("11d7"),alt:""}}),r("h2",[t._v("By Privatekey")])]):t._e()]),t.kslayout?r("div",{staticClass:"kslayout"},[r("v-layout",{attrs:{"align-start":"","justify-space-between":""}},[r("div",{staticClass:"ksWrap"},[r("v-text-field",{staticClass:"input-password",attrs:{outline:"","single-line":"",clearable:"","append-icon":t.showpwd?"visibility":"visibility_off",type:t.showpwd?"text":"password",label:"input password"},on:{"click:append":function(e){t.showpwd=!t.showpwd}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),r("v-progress-linear",{ref:"cksProgress",staticClass:"cksProgress",attrs:{indeterminate:t.progressRunning,color:t.cksProgressColor,"background-color":"indigo"}})],1),r("v-tooltip",{attrs:{bottom:"",dark:"",color:"indigo"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-btn",t._g({attrs:{dark:"",fab:"",color:"indigo"},on:{click:t.createAccountByKeystore}},a),[r("i",{staticClass:"mdi mdi-account-arrow-right ibig"})])]}}],null,!1,2843463204)},[r("span",[t._v("Create New Wallet!")])])],1),r("a",{directives:[{name:"show",rawName:"v-show",value:t.downable,expression:"downable"}],ref:"downlink",staticClass:"downlink animated fadeInUpBig",attrs:{href:"",target:"_blank",download:"keystore"}}),r("div",{staticClass:"backbtn"},[r("v-btn",{attrs:{outline:"",fab:"",color:"indigo"},on:{click:t.back}},[r("v-icon",[t._v("arrow_back")])],1)],1)],1):t._e(),t.pklayout?r("div",{staticClass:"pklayout"},[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[r("img",t._g({ref:"ani",staticClass:"dice",attrs:{src:a("cd3d"),alt:""},on:{click:t.randompk}},s))]}}],null,!1,1216835752)},[r("span",[t._v("Click to throw the Dice!")])]),r("v-layout",{attrs:{"align-start":"","justify-space-between":""}},[r("div",{staticClass:"pkWrap"},[r("v-text-field",{attrs:{outline:"","single-line":"","append-icon":t.showpwd?"visibility":"visibility_off",type:t.showpwd?"text":"password",label:"Throw the Dice for a random Privatekey",readonly:""},on:{"click:append":function(e){t.showpwd=!t.showpwd}},model:{value:t.privatekey,callback:function(e){t.privatekey=e},expression:"privatekey"}}),r("v-progress-linear",{ref:"cpkProgress",staticClass:"cpkProgress",attrs:{indeterminate:t.progressRunning,color:t.cpkProgressColor,"background-color":"indigo"}})],1),r("v-tooltip",{attrs:{bottom:"",dark:"",color:"indigo"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-btn",t._g({attrs:{dark:"",fab:"",color:"indigo"},on:{click:t.createAccountByPrivatekey}},a),[r("i",{staticClass:"mdi mdi-account-arrow-right ibig"})])]}}],null,!1,3767106870)},[r("span",[t._v("Create New Wallet!")])])],1),r("div",{staticClass:"backbtn"},[r("v-btn",{attrs:{outline:"",fab:"",color:"indigo"},on:{click:t.back}},[r("v-icon",[t._v("arrow_back")])],1)],1)],1):t._e()],1)},[],!1,null,"2b074585",null);e.default=o.exports},4221:function(t,e,a){},"6f2f":function(t,e,a){"use strict";(function(t){a("b5aa");var r=a("2c46"),s=(a("5c07"),a("53da"),a("2556"),a("d0f8"),a("ac2a"),a("5ea9")),o=a.n(s),n=(a("ffd9"),"http://154.8.215.126:4000");e.a={name:"CreateAccount",data:function(){return{showpwd:!1,password:"",privatekey:"",downUrl:"",downable:!1,pkcard:!0,kscard:!0,pklayout:!1,kslayout:!1,progressRunning:!1,cpkProgressColor:"rgb(0,255,255)",cksProgressColor:"rgb(0,255,184)",createtitle:"Create A New Wallet"}},computed:{progress:function(){return Math.min(100,10*this.value.length)},color:function(){return["error","warning","success"][Math.floor(this.progress/40)]}},methods:{pkcreate:function(){this.createtitle="Create Wallet By Privatekey",this.pkcard=!1,this.kscard=!1,this.pklayout=!0},kscreate:function(){this.createtitle="Create Wallet By Keystore",this.kscard=!1,this.pkcard=!1,this.kslayout=!0},back:function(){this.createtitle="Create A New Wallet",this.password="",this.privatekey="",this.pkcard=!0,this.kscard=!0,this.pklayout=!1,this.kslayout=!1,this.downable=!1,this.progressRunning=!1},randompk:function(){var t=this;this.$refs.ani.classList.add("animated","wobble"),setTimeout(function(){t.$refs.ani.classList.remove("animated","wobble")},2e3);var e=a("8554").getweb3().utils.randomHex(32);this.cpkProgressColor="rgb(0,255,255)",this.progressRunning=!0,setTimeout(function(){t.progressRunning=!1,t.privatekey=e,o.a.warning({title:"Caution",message:"请妥善保存好私钥 !",displayMode:2,timeout:1500,position:"bottomCenter"})},1e3)},createAccountByKeystore:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var a,r,s,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this,""!==this.password){e.next=4;break}return o.a.info({message:"请输入密码 !",timeout:2e3,displayMode:1,color:"red",position:"bottomCenter"}),e.abrupt("return");case 4:return this.progressRunning=!0,r="".concat(n,"/users/createaccountbyks"),e.prev=6,s=function(){a.progressRunning=!1,o.a.success({title:"OK",message:"钱包创建成功 !",timeout:2e3,position:"bottomCenter"});var t=i.data.info.fileName;a.$refs.downlink.href="keystore/".concat(t),a.downable=!0;var e=a.$refs.downlink;o.a.warning({timeout:1e4,position:"center",image:"https://i.loli.net/2019/03/13/5c87e0e3dc02c.png",imageWidth:55,displayMode:2,resetOnHover:!0,progressBarColor:"rgb(0, 255, 184)",transitionIn:"flipInX",transitionOut:"flipOutX",color:"grey",theme:"dark",buttons:[["<button><b>下载KeyStore</b></button>",function(t,e){t.hide({},e)}]],onClosing:function(){e.click()}});var r=i.data.info.account.address;a.$store.commit("setAccountAddr",r);var s=i.data.info.account.privateKey;a.$store.state.globalPrivatekey=s,a.$store.state.accountBalance="0.00"},e.next=10,t({method:"POST",url:r,data:{password:this.password}});case 10:i=e.sent,setTimeout(function(){s()},2e3),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(6),o.a.info({title:"Error",message:"钱包创建失败 !",color:"red",timeout:2e3});case 18:case"end":return e.stop()}},e,this,[[6,14]])}));return function(){return e.apply(this,arguments)}}(),createAccountByPrivatekey:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var a,r,s,i,c=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=this.privatekey){e.next=3;break}return o.a.warning({message:"请先生成私钥 !",timeout:1500}),e.abrupt("return");case 3:return this.cpkProgressColor="rgb(0,255,184)",this.progressRunning=!0,a="".concat(n,"/users/createaccountbypk"),e.prev=6,e.next=9,t({method:"POST",url:a,data:{privatekey:this.privatekey}});case 9:r=e.sent,setTimeout(function(){c.progressRunning=!1,o.a.success({title:"OK",message:"钱包创建成功 !",timeout:1250,position:"bottomCenter"})},2e3),s=r.data.info.account.address,this.$store.commit("setAccountAddr",s),i=r.data.info.account.privateKey,this.$store.state.globalPrivatekey=i,this.$store.state.accountBalance="0.00",setTimeout(function(){o.a.show({message:"稍后自动跳转至首页,请尽快保存私钥 !",timeout:2e4,position:"bottomCenter",buttons:[["<button><b>点击跳转</b></button>",function(t,e){t.hide({transitionOut:"fadeOut"},e,"button")}]],displayMode:2,theme:"dark",onClosing:function(){c.$store.state.headerTabs[0].click()}})},3e3),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(6),this.progressRunning=!1,o.a.info({title:"Error",message:"钱包创建失败 !",color:"red",timeout:2e3});case 24:case"end":return e.stop()}},e,this,[[6,20]])}));return function(){return e.apply(this,arguments)}}()}}}).call(this,a("7f43e"))},ac2a:function(t,e,a){},cd3d:function(t,e,a){t.exports=a.p+"img/dice.77703e29.png"}}]);