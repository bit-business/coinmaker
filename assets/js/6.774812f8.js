(window.webpackJsonp=window.webpackJsonp||[]).push([[6,16,17],{262:function(t,e,s){},284:function(t,e,s){"use strict";s(262)},374:function(t,e,s){"use strict";s.r(e);var n={name:"Footer"},a=s(15),o=Object(a.a)(n,(function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"footer",attrs:{fluid:""}},[e("b-row",{staticClass:"bg-dark text-light py-4"},[e("b-col",{attrs:{lg:"12",xl:"8","offset-xl":"2"}},[e("b-row",[e("b-col",{attrs:{lg:"4"}},[e("b-list-group",{attrs:{flush:""}},[e("b-list-group-item",{staticClass:"text-light",attrs:{href:"https://crypto-studio.net/"}},[t._v("\n                                Crypto Studio\n                            ")]),t._v(" "),e("b-list-group-item",{staticClass:"text-light",attrs:{to:"/docs/"}},[t._v("\n                                Documentation\n                            ")])],1)],1),t._v(" "),e("b-col",{attrs:{lg:"4"}},[e("b-list-group",{attrs:{flush:""}},[e("b-list-group-item",{staticClass:"text-warning",attrs:{to:"/create-token/"}},[t._v("\n                                Create BSC Token\n                            ")]),t._v(" "),e("b-list-group-item",{staticClass:"text-light",attrs:{href:"https://polygon.crypto-studio.net/",target:"_blank"}},[t._v("\n                                Create Polygon Token\n                            ")]),t._v(" "),e("b-list-group-item",{staticClass:"text-light",attrs:{to:"/"}},[t._v("\n                                Create Ethereum Token\n                            ")])],1)],1),t._v(" "),e("b-col",{attrs:{lg:"4"}},[e("b-list-group",{attrs:{flush:""}},[e("b-list-group-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-terms",modifiers:{"modal-terms":!0}}]},[e("small",[t._v("Terms of Use")])]),t._v(" "),e("b-list-group-item",{staticClass:"text-light",attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLScfsLa4mXu476eZg43GPJUcUx-RB_GzNuvYBpkP7E-YY7SXRA/viewform?usp=sf_link",target:"_blank"}},[e("small",[t._v("Contact Us")])])],1)],1)],1)],1),t._v(" "),e("b-col",{attrs:{lg:"12",xl:"8","offset-xl":"2"}},[e("hr"),t._v(" "),e("b-list-group",{attrs:{flush:""}},[e("b-list-group-item",[e("small",[t._v("\n                            All rights reserved © 2022\n                            "),e("b-link",{staticClass:"text-warning text-center",attrs:{href:"https://crypto-studio.net/",target:"_blank"}},[t._v("\n                                Crypto Studio\n                            ")])],1)])],1)],1)],1),t._v(" "),e("b-modal",{attrs:{id:"modal-feedback",title:"Contact Us",size:"lg",centered:"","hide-footer":""}},[e("b-embed",{attrs:{type:"iframe",aspect:"4by3",src:"https://docs.google.com/forms/d/e/1FAIpQLScfsLa4mXu476eZg43GPJUcUx-RB_GzNuvYBpkP7E-YY7SXRA/viewform?usp=sf_link",allow:"accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture",allowfullscreen:""}})],1),t._v(" "),e("b-modal",{attrs:{id:"modal-terms",title:"Terms of Use",size:"lg",centered:"","hide-footer":""}},[e("b-embed",{attrs:{type:"iframe",aspect:"4by3",src:"https://crypto-studio.net/termsofuse",allow:"accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture",allowfullscreen:""}})],1)],1)}),[],!1,null,null,null);e.default=o.exports},375:function(t,e,s){"use strict";s.r(e);var n=s(283),a=s(269),o=s.n(a),r={name:"Header",mixins:[n.a],props:{page:{type:String,default:null}},mounted(){this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{async initDapp(){this.network.current=this.network.list[this.currentNetwork];try{await this.initWeb3(this.currentNetwork,!0),this.initService(this.currentNetwork)}catch(t){console.log(t),this.makeToast("Some errors occurred",t,"danger")}},async connectmetamaskbutton(){if("Disconnect"===this.$refs.btnToggle.innerText){if(this.$refs.btnToggle.innerText="Connect",this.$refs.btnToggle.className="btn btn-outline-warning","undefined"!=typeof window){const t=s(242);let e=new t;const n=new o.a({infuraId:"bcd0880dd3d14b5abb743a63ce403e36",rpc:{97:"https://data-seed-prebsc-1-s1.binance.org:8545/",56:"https://bsc-dataseed1.binance.org/"},bridge:"https://bridge.walletconnect.org"});e=new t(n),await n.disconnect()}this.makeToast("Disconnected","Wallet disconnected!","info")}else this.web3.eth.net.getId().then(t=>{switch(t){case 1:console.log("This is 1"),"undefined"!=typeof window&&provider.disconnect();break;case 56:if(console.log("This is the bsc mainnet."),"undefined"!=typeof window){new o.a({infuraId:"bcd0880dd3d14b5abb743a63ce403e36",rpc:{97:"https://data-seed-prebsc-1-s1.binance.org:8545/",56:"https://bsc-dataseed1.binance.org/"},bridge:"https://bridge.walletconnect.org"}).enable()}this.$refs.btnToggle.innerText="Disconnect",this.$refs.btnToggle.className="button primary-btn",this.makeToast("Connected","Wallet connected!","success");break;case 97:"undefined"!=typeof window&&provider.enable(),console.log("This is the ropsten test network."),this.$refs.btnToggle.innerText="Disconnect",this.$refs.btnToggle.className="button primary-btn",this.makeToast("Connected","Wallet connected to Binance TEST network!","success");break;default:this.makeToast("Warning",`Your Wallet in on the wrong network. Please switch on ${this.network.current.name} and try again!`,"warning"),this.$refs.btnToggle.innerText="Connect",this.$refs.btnToggle.className="btn btn-outline-warning","undefined"!=typeof window&&provider.disconnect(),console.log("This is an unknown network.")}}).catch(t=>{console.log(t)})}}},i=s(15),l=Object(i.a)(r,(function(){var t=this,e=t._self._c;return e("b-navbar",{attrs:{type:"dark",variant:"dark"}},[e("b-navbar-brand",{attrs:{target:"_self",href:"https://crypto-studio.net/"}},[e("button",{staticClass:"btn btn-white",attrs:{type:"button"}},[e("img",{attrs:{height:"18",width:"110",src:"/assets/images/headerlogo.svg"}})])]),t._v(" "),e("b-navbar-nav",{staticClass:"ml-auto justify: center;",staticStyle:{"overflow-x":"auto"}},[e("b-nav-item",{attrs:{to:"/create-token/",active:"Generator"===t.page}},[e("button",{staticClass:"btn btn-link btn-rounded",attrs:{type:"button"}},[e("img",{attrs:{height:"18",width:"70",src:"/assets/images/bsc.png"}})])]),t._v(" "),e("b-nav-item",{attrs:{target:"_self",href:"https://polybuilder.crypto-studio.net/"}},[e("button",{staticClass:"btn btn-link btn-rounded",attrs:{type:"button"}},[e("img",{attrs:{height:"18",width:"70",src:"/assets/images/polygon.png"}})])]),t._v(" "),e("b-nav-item",{attrs:{target:"_self"},on:{click:function(e){return t.$bvToast.show("my-toast")}}},[e("button",{staticClass:"btn btn-link btn-rounded",attrs:{type:"button"}},[e("img",{attrs:{height:"18",width:"70",src:"/assets/images/ethereumgray.png"}})])]),t._v(" "),e("b-nav-item",[e("button",{ref:"btnToggle",staticClass:"btn btn-outline-warning",attrs:{type:"button"},on:{click:t.connectmetamaskbutton}},[t._v("\n\n                                    Connect")])]),t._v(" "),e("b-toast",{attrs:{id:"my-toast",variant:"info",solid:""},scopedSlots:t._u([{key:"toast-title",fn:function(){return[e("div",{staticClass:"d-flex flex-grow-1 align-items-baseline"},[e("strong",{staticClass:"mr-auto"},[t._v("ETHEREUM - Coming soon!")]),t._v(" "),e("small",{staticClass:"text-muted mr-2"},[t._v("1 sec ago")])])]},proxy:!0}])},[t._v("\n     Creator for ETHEREUM network is nearly finished. If you need it, please contact us by contact form and we will send you a link to BETA version.\n    ")])],1)],1)}),[],!1,null,null,null);e.default=l.exports},636:function(t,e,s){"use strict";s.r(e);var n=s(375),a=s(374),o={components:{SiteHeader:n.default,SiteFooter:a.default},computed:{page(){return this.$page.frontmatter.component||null}}},r=(s(284),s(15)),i=Object(r.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"page-wrapper"},[t("site-header",{attrs:{page:this.page}}),this._v(" "),t("transition",{attrs:{name:"fade",mode:"out-in"}},[this.page?t(this.page,{key:this.page,tag:"component"}):this._e()],1),this._v(" "),t("site-footer")],1)}),[],!1,null,null,null);e.default=i.exports}}]);