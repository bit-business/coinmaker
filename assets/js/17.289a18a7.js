(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{374:function(t,e,n){"use strict";n.r(e);var s=n(282),a=(n(268),{name:"Header",mixins:[s.a],props:{page:{type:String,default:null}},mounted(){this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{async initDapp(){if(void 0===t)var t=globalThis;this.network.current=this.network.list[this.currentNetwork];try{await this.initWeb3(this.currentNetwork,!0),this.initService(this.currentNetwork)}catch(t){console.log(t),this.makeToast("Some errors occurred",t,"danger")}},async connectmetamaskbutton(){"Disconnect"===this.$refs.btnToggle.innerText&&(this.$refs.btnToggle.innerText="Connect",this.$refs.btnToggle.className="button primary-btn",await provider.disconnect(),this.makeToast("Disconnected","Wallet disconnected!","info"));try{const t=new WalletConnectProvider({infuraId:"bcd0880dd3d14b5abb743a63ce403e36",injected:{display:{logo:"data:image/gif;base64,INSERT_BASE64_STRING",name:"Injected",description:"Connect with the provider in your Browser"},package:null},rpc:{97:"https://data-seed-prebsc-1-s1.binance.org:8545/",56:"https://bsc-dataseed1.binance.org/"},bridge:"https://bridge.walletconnect.org"});await t.enable()}catch(t){console.log(t)}this.web3.eth.net.getId().then(t=>{switch(t){case 1:console.log("This is 1"),provider.disconnect();break;case 56:console.log("This is the bsc mainnet."),this.$refs.btnToggle.innerText="Disconnect",this.$refs.btnToggle.className="button primary-btn",this.makeToast("Connected","Wallet connected!","success");break;case 97:console.log("This is the ropsten test network."),this.$refs.btnToggle.innerText="Disconnect",this.$refs.btnToggle.className="button primary-btn",this.makeToast("Connected","Wallet connected to Binance TEST network!","success");break;default:this.makeToast("Warning",`Your Wallet in on the wrong network. Please switch on ${this.network.current.name} and try again!`,"warning"),this.$refs.btnToggle.innerText="Connect",provider.disconnect(),console.log("This is an unknown network.")}}).catch(t=>{console.log(t)})}}}),o=n(15),i=Object(o.a)(a,(function(){var t=this,e=t._self._c;return e("b-navbar",{attrs:{type:"dark",variant:"dark"}},[e("b-navbar-brand",{attrs:{target:"_self",href:"https://crypto-studio.net/"}},[e("button",{staticClass:"btn btn-white",attrs:{type:"button"}},[e("img",{attrs:{height:"18",width:"110",src:"/assets/images/headerlogo.svg"}})])]),t._v(" "),e("b-navbar-nav",{staticClass:"ml-auto justify: center;",staticStyle:{"overflow-x":"auto"}},[e("b-nav-item",{attrs:{to:"/create-token/",active:"Generator"===t.page}},[e("button",{staticClass:"btn btn-link btn-rounded",attrs:{type:"button"}},[e("img",{attrs:{height:"18",width:"70",src:"/assets/images/bsc.png"}})])]),t._v(" "),e("b-nav-item",{attrs:{target:"_self",href:"https://polybuilder.crypto-studio.net/"}},[e("button",{staticClass:"btn btn-link btn-rounded",attrs:{type:"button"}},[e("img",{attrs:{height:"18",width:"70",src:"/assets/images/polygon.png"}})])]),t._v(" "),e("b-nav-item",{attrs:{target:"_self"},on:{click:function(e){return t.$bvToast.show("my-toast")}}},[e("button",{staticClass:"btn btn-link btn-rounded",attrs:{type:"button"}},[e("img",{attrs:{height:"18",width:"70",src:"/assets/images/ethereumgray.png"}})])]),t._v(" "),e("b-nav-item",[e("button",{ref:"btnToggle",staticClass:"btn btn-outline-warning",attrs:{type:"button"},on:{click:t.connectmetamaskbutton}},[t._v("\n\n                                    Connect")])]),t._v(" "),e("b-toast",{attrs:{id:"my-toast",variant:"info",solid:""},scopedSlots:t._u([{key:"toast-title",fn:function(){return[e("div",{staticClass:"d-flex flex-grow-1 align-items-baseline"},[e("strong",{staticClass:"mr-auto"},[t._v("ETHEREUM - Coming soon!")]),t._v(" "),e("small",{staticClass:"text-muted mr-2"},[t._v("1 sec ago")])])]},proxy:!0}])},[t._v("\n     Creator for ETHEREUM network is nearly finished. If you need it, please contact us by contact form and we will send you a link to BETA version.\n    ")])],1)],1)}),[],!1,null,null,null);e.default=i.exports}}]);