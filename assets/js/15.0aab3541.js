(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{379:function(t,e,n){"use strict";n.r(e);var a=n(36),s=n(66),r=(n(93),{name:"Header",mixins:[n(375).a],props:{page:{type:String,default:null}},mounted:function(){this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{initDapp:function(){var t=this;return Object(s.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.network.current=t.network.list[t.currentNetwork],e.prev=1,e.next=4,t.initWeb3(t.currentNetwork,!0);case 4:t.initService(t.currentNetwork),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0),t.makeToast("Some errors occurred",e.t0,"danger");case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))()},connectmetamaskbutton:function(){var t=this;return Object(s.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.web3Provider.request({method:"eth_requestAccounts"});case 3:e.next=10;break;case 5:e.prev=5,e.t0=e.catch(0),t.show=!t.show,t.$refs.btnToggle.innerText="Connect",t.$refs.btnToggle.className="btn btn-outline-warning";case 10:t.metamask.installed?56===t.metamask.netId||97===t.metamask.netId?(t.$refs.btnToggle.innerText="Connected",t.$refs.btnToggle.className="btn btn-success"):(t.makeToast("Warning","Your MetaMask in on the wrong network. Please switch on ".concat(t.network.current.name," and try again!"),"warning"),t.$refs.btnToggle.innerText="Connect",t.$refs.btnToggle.className="btn btn-outline-warning"):window.location.href="https://metamask.app.link/dapp/crypto-studio.net/create-token/",ethereum.on("chainChanged",(function(){document.location.reload()}));case 12:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}}),o=n(65),i=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{target:"_self",href:"https://crypto-studio.net/"}},[n("button",{staticClass:"btn btn-white",attrs:{type:"button"}},[n("img",{attrs:{height:"18",width:"110",src:"/assets/images/headerlogo.svg"}})])]),t._v(" "),n("b-navbar-nav",{staticClass:"ml-auto justify: center;",staticStyle:{"overflow-x":"auto"}},[n("b-nav-item",{attrs:{to:"/create-token/",active:"Generator"===t.page}},[n("button",{staticClass:"btn btn-link btn-rounded",attrs:{type:"button"}},[n("img",{attrs:{height:"18",width:"70",src:"/assets/images/bsc.png"}})])]),t._v(" "),n("b-nav-item",{attrs:{target:"_self",href:"https://polygon.crypto-studio.net/"}},[n("button",{staticClass:"btn btn-link btn-rounded",attrs:{type:"button"}},[n("img",{attrs:{height:"18",width:"70",src:"/assets/images/polygon.png"}})])]),t._v(" "),n("b-nav-item",{attrs:{target:"_self"},on:{click:function(e){return t.$bvToast.show("my-toast")}}},[n("button",{staticClass:"btn btn-link btn-rounded",attrs:{type:"button"}},[n("img",{attrs:{height:"18",width:"70",src:"/assets/images/ethereumgray.png"}})])]),t._v(" "),t.isMobile()?t._e():n("my-component",[n("b-nav-item",[n("button",{ref:"btnToggle",staticClass:"btn btn-outline-warning",attrs:{type:"button"},on:{click:t.connectmetamaskbutton}},[t._v("\n\n                                    Connect")])])],1),t._v(" "),t.isMobile()?n("my-mobile-component"):t._e(),t._v(" "),n("b-toast",{attrs:{id:"my-toast",variant:"info",solid:""},scopedSlots:t._u([{key:"toast-title",fn:function(){return[n("div",{staticClass:"d-flex flex-grow-1 align-items-baseline"},[n("strong",{staticClass:"mr-auto"},[t._v("ETHEREUM - Coming soon!")]),t._v(" "),n("small",{staticClass:"text-muted mr-2"},[t._v("1 sec ago")])])]},proxy:!0}])},[t._v("\n     Creator for ETHEREUM network is nearly finished. If you need it, please contact us by contact form and we will send you a link to BETA version.\n    ")])],1)],1)}),[],!1,null,null,null);e.default=i.exports}}]);