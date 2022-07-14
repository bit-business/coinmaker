(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{236:function(e,t,a){"use strict";t.a={data:()=>({tokenDetails:[{name:"HelloBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!1,supplyType:"100k",accessType:"Ownable",mintable:!1,burnable:!1,operable:!1,tokenRecover:!1,removeCopyright:!1,originalPrice:0,price:0,gas:1330639},{name:"SimpleBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!1,supplyType:"Fixed",accessType:"Ownable",mintable:!1,burnable:!1,operable:!1,tokenRecover:!1,removeCopyright:!1,originalPrice:.5,price:.015,gas:1333276},{name:"StandardBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Fixed",accessType:"Ownable",mintable:!1,burnable:!1,operable:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:.75,price:.05,gas:1260139},{name:"BurnableBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Fixed",accessType:"Ownable",mintable:!1,burnable:!0,operable:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:.1,price:.1,gas:1444650},{name:"MintableBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Capped",accessType:"Ownable",mintable:!0,burnable:!1,operable:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:1,price:.1,gas:1524151},{name:"CommonBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Capped",accessType:"Ownable",mintable:!0,burnable:!0,operable:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:1.25,price:.15,gas:1708581},{name:"UnlimitedBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Unlimited",accessType:"Ownable",mintable:!0,burnable:!0,operable:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:1.5,price:.3,gas:1637163},{name:"AmazingBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Unlimited",accessType:"Ownable",mintable:!0,burnable:!0,operable:!0,tokenRecover:!0,removeCopyright:!0,originalPrice:2,price:.5,gas:2254686}]})}},255:function(e,t,a){"use strict";a.r(t);var n=a(237),i=a(236),s={name:"Docs",mixins:[n.a,i.a],data:()=>({loading:!0,currentNetwork:null,tokenType:"SimpleBEP20",token:{}}),computed:{controlFlow:function(){return`https://github.com/bit-business/coinmaker/blob/v${this.token.version}/analysis/control-flow/${this.contracts.token.contractName}.png`},inheritanceTree:function(){return`https://github.com/bit-business/coinmaker/blob/v${this.token.version}/analysis/inheritance-tree/${this.contracts.token.contractName}.png`},uml:function(){return`https://github.com/bit-business/coinmaker/blob/v${this.token.version}/analysis/uml/${this.contracts.token.contractName}.svg`}},mounted(){this.initDapp()},methods:{async initDapp(){try{await this.loadToken()}catch(e){console.log(e),this.makeToast("Some error occurred",e,"danger")}},async loadToken(){this.initToken(this.tokenType),this.token=this.tokenDetails.find(e=>e.name===this.tokenType),this.loading=!1}}},r=a(15),o=Object(r.a)(s,(function(){var e=this,t=e._self._c;return t("div",[t("b-jumbotron",{staticClass:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-400",attrs:{"text-variant":"white",header:"",fluid:""},scopedSlots:e._u([{key:"lead",fn:function(){return[t("h1",{staticClass:"mt-1 text-5xl font-bold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"},[t("br"),e._v("BEP20 Token Documentation\n  ")]),e._v(" "),t("br"),e._v("\n            Discover more details about different BEP20 Token Types, ABI, source code and analysis report of created tokens.\n        ")]},proxy:!0}])}),e._v(" "),t("b-row",{staticClass:"mx-0",attrs:{id:"token-docs"}},[t("b-col",{staticClass:"mb-3 p-0",attrs:{lg:"10","offset-lg":"1"}},[e.loading?t("div",{staticClass:"text-center p-5"},[t("ui--loader",{attrs:{loading:!0}})],1):e._e(),e._v(" "),e.loading?e._e():t("b-card",{attrs:{"bg-variant":"transparent","border-variant":"0"}},[t("b-row",[t("b-col",{attrs:{lg:"8"}},[t("b-card",{staticClass:"mt-3",attrs:{header:"Token Type","header-bg-variant":"dark","header-text-variant":"white"}},[t("b-form-group",{attrs:{description:"Choose your Token.",label:"Token Type *","label-for":"tokenType"}},[t("b-form-select",{attrs:{id:"tokenType",size:"lg"},on:{input:e.loadToken},model:{value:e.tokenType,callback:function(t){e.tokenType=t},expression:"tokenType"}},e._l(e.tokenList,(function(a,n){return t("option",{domProps:{value:n}},[e._v(e._s(a.contractName))])})),0)],1)],1),e._v(" "),t("b-card",{staticClass:"mt-3",attrs:{"no-body":"","bg-variant":"light",header:"Token Details","header-bg-variant":"dark","header-text-variant":"white"}},[t("b-list-group",{attrs:{flush:""}},[t("b-list-group-item",{staticClass:"py-4"},[e._v("\n                                    Contract Name: "),t("b",[e._v(e._s(e.contracts.token.contractName))])]),e._v(" "),t("b-list-group-item",{staticClass:"py-4"},[e._v("\n                                    Compiler: "),t("b",[e._v(e._s(e.contracts.token.compiler.version))])]),e._v(" "),t("b-list-group-item",{staticClass:"py-4"},[e._v("\n                                    Optimization: "),t("b",[e._v("Yes")])]),e._v(" "),t("b-list-group-item",{staticClass:"py-4"},[e._v("\n                                    Runs (Optimizer): "),t("b",[e._v("200")])]),e._v(" "),t("b-list-group-item",{staticClass:"py-4"},[t("div",{staticClass:"form-group"},[t("label",[e._v("ABI:")]),e._v(" "),t("b-form-textarea",{attrs:{readonly:"","no-resize":"",rows:"5"},model:{value:e.contracts.token.stringifiedAbi,callback:function(t){e.$set(e.contracts.token,"stringifiedAbi",t)},expression:"contracts.token.stringifiedAbi"}})],1)])],1)],1)],1),e._v(" "),t("b-col",{attrs:{lg:"4"}},[t("b-card",{staticClass:"mt-3",attrs:{"no-body":"","bg-variant":"light",header:"Token Features","header-bg-variant":"dark","header-text-variant":"white"}},[t("b-list-group",{attrs:{flush:""}},[t("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t("div",[e._v("\n                                        BEP20 Compliant"),t("br"),e._v(" "),t("small",{staticClass:"text-muted"},[e._v("\n                                            Your Token will be compliant with the BEP20 Standard.\n                                        ")])]),e._v(" "),t("ui--checkmark",{attrs:{value:e.token.standard}})],1),e._v(" "),t("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t("div",[e._v("\n                                        Verified Source Code"),t("br"),e._v(" "),t("small",{staticClass:"text-muted"},[e._v("\n                                            Your Token Source Code will be automatically verified on BscScan.\n                                        ")])]),e._v(" "),t("ui--checkmark",{attrs:{value:e.token.verified}})],1),e._v(" "),t("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t("div",[e._v("\n                                        Detailed"),t("br"),e._v(" "),t("small",{staticClass:"text-muted"},[e._v("\n                                            Your Token will have name, symbol and decimal amount.\n                                        ")])]),e._v(" "),t("ui--checkmark",{attrs:{value:e.token.detailed}})],1),e._v(" "),t("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t("div",[e._v("\n                                        Customizable Decimals"),t("br"),e._v(" "),t("small",{staticClass:"text-muted"},[e._v("\n                                            You can customize the decimal amount. 18 otherwise.\n                                        ")])]),e._v(" "),t("ui--checkmark",{attrs:{value:e.token.customizeDecimals}})],1),e._v(" "),t("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t("div",[e._v("\n                                        Remove Copyright"),t("br"),e._v(" "),t("small",{staticClass:"text-muted"},[e._v("\n                                            Remove the link pointing to this page from your contract.\n                                        ")])]),e._v(" "),t("ui--checkmark",{attrs:{value:e.token.removeCopyright}})],1),e._v(" "),t("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t("div",[e._v("\n                                        Supply Type"),t("br"),e._v(" "),t("small",{staticClass:"text-muted"},[e._v("\n                                            Choose between 100k, Fixed, Unlimited or Capped.\n                                        ")])]),e._v(" "),t("b-badge",{attrs:{variant:"Capped"===e.token.supplyType?"success":"Unlimited"===e.token.supplyType?"info":"Fixed"===e.token.supplyType?"warning":"danger"}},[e._v("\n                                        "+e._s(e.token.supplyType)+"\n                                    ")])],1),e._v(" "),t("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t("div",[e._v("\n                                        Accesss Type"),t("br"),e._v(" "),t("small",{staticClass:"text-muted"},[e._v("\n                                            Choose between None, Ownable or Role Based.\n                                        ")])]),e._v(" "),t("b-badge",{attrs:{variant:"Role Based"===e.token.accessType?"success":"Ownable"===e.token.accessType?"info":"warning"}},[e._v("\n                                        "+e._s(e.token.accessType)+"\n                                    ")])],1),e._v(" "),t("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t("div",[e._v("\n                                        Burnable"),t("br"),e._v(" "),t("small",{staticClass:"text-muted"},[e._v("\n                                            Your Token can be burnt.\n                                        ")])]),e._v(" "),t("ui--checkmark",{attrs:{value:e.token.burnable}})],1),e._v(" "),t("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t("div",[e._v("\n                                        Mintable"),t("br"),e._v(" "),t("small",{staticClass:"text-muted"},[e._v("\n                                            You will be able to generate tokens by minting them.\n                                        ")])]),e._v(" "),t("ui--checkmark",{attrs:{value:e.token.mintable}})],1),e._v(" "),t("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t("div",[e._v("\n                                        Operable"),t("br"),e._v(" "),t("small",{staticClass:"text-muted"},[e._v("\n                                            The Operable Token is a BEP20 compatible Token that can make a callback on\n                                            the receiver contract. Operable Token is derived by ERC1363.\n                                        ")])]),e._v(" "),t("ui--checkmark",{attrs:{value:e.token.operable}})],1),e._v(" "),t("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t("div",[e._v("\n                                        Token Recover"),t("br"),e._v(" "),t("small",{staticClass:"text-muted"},[e._v("\n                                            It allows the contract owner to recover any BEP20 token sent into the\n                                            contract for error.\n                                        ")])]),e._v(" "),t("ui--checkmark",{attrs:{value:e.token.tokenRecover}})],1),e._v(" "),t("b-list-group-item",{staticClass:"justify-content-between align-items-center text-center py-3",attrs:{variant:"warning",to:{path:"/create-token/",query:{tokenType:e.token.name}}}},[e._v("\n                                    Create\n                                ")])],1)],1)],1),e._v(" "),t("b-col",{attrs:{lg:"12"}},[t("b-card",{staticClass:"mt-3",attrs:{header:"Methods","header-bg-variant":"dark","header-text-variant":"white"}},e._l(e.contracts.token.abi,(function(a,n){return a.name?t("b-card",{key:n,staticClass:"mt-4",attrs:{"no-body":"","bg-variant":"light"}},[t("b-card-header",[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"stretched-link text-reset text-decoration-none",attrs:{href:"#method-"+n},on:{click:function(e){e.preventDefault()}}},[e._v("\n                                        "+e._s(a.name)+"\n                                    ")])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"method-"+n}},[t("b-card-sub-title",[e._v("\n                                        Type: "+e._s(a.type)+"\n                                    ")]),e._v(" "),a.stateMutability?t("b-card-text",[e._v("\n                                        State Mutability: "+e._s(a.stateMutability)+"\n                                    ")]):e._e(),e._v(" "),a.inputs&&a.inputs.length>0?t("b-card-text",[t("p",[e._v("Inputs:")]),e._v(" "),t("ul",e._l(a.inputs,(function(a,n){return t("li",{key:n},[t("b",[e._v(e._s(a.type))]),e._v(" "+e._s(a.name)+"\n                                            ")])})),0)]):e._e(),e._v(" "),a.outputs&&a.outputs.length>0?t("b-card-text",[t("p",[e._v("Outputs:")]),e._v(" "),t("ul",e._l(a.outputs,(function(a,n){return t("li",{key:n},[t("b",[e._v(e._s(a.type))]),e._v(" "+e._s(a.name)+"\n                                            ")])})),0)]):e._e()],1)],1):e._e()})),1)],1)],1)],1)],1)],1),e._v(" "),t("b-row",{staticClass:"bg-light text-dark mx-0"},[t("b-col",{staticClass:"mb-3 text-center",attrs:{lg:"10","offset-lg":"1"}},[t("h2",{staticClass:"pt-5 mb-4 font-weight-lighter text-dark"},[e._v("Ready to deploy your BEP20 Token?")]),e._v(" "),t("p",{staticClass:"font-weight-light"},[e._v("\n                Try building your BEP20 Token in less than a minute. You can try on Test Network before to go live.\n            ")]),e._v(" "),t("b-button",{staticClass:"my-5 py-3 px-5 text-uppercase",attrs:{to:"/create-token/",size:"lg",variant:"success"}},[e._v("\n                Create BEP20 Token\n            ")])],1)],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);