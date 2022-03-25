(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{357:function(e,t,n){"use strict";var a=n(2),r=n(358);a({target:"String",proto:!0,forced:n(359)("link")},{link:function(e){return r(this,"a","href",e)}})},358:function(e,t,n){var a=n(3),r=n(32),o=n(18),s=/"/g,i=a("".replace);e.exports=function(e,t,n,a){var l=o(r(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+i(o(a),s,"&quot;")+'"'),c+">"+l+"</"+t+">"}},359:function(e,t,n){var a=n(4);e.exports=function(e){return a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},360:function(e,t,n){"use strict";var a=n(2),r=n(3),o=n(32),s=n(56),i=n(18),l=r("".slice),c=Math.max,u=Math.min;a({target:"String",proto:!0,forced:!"".substr||"b"!=="ab".substr(-1)},{substr:function(e,t){var n,a,r=i(o(this)),d=r.length,p=s(e);return p===1/0&&(p=0),p<0&&(p=c(d+p,0)),(n=void 0===t?d:s(t))<=0||n===1/0||p>=(a=u(p+n,d))?"":l(r,p,a)}})},379:function(e,t,n){"use strict";n.r(t);var a=n(58),r=(n(112),n(357),n(190),n(353),n(10),n(193),n(28),n(29),n(360),n(111),n(356)),o=n(351),s={name:"Generator",mixins:[r.a,o.a],data:function(){return{loading:!0,currentNetwork:null,tokenType:"",trx:{hash:"",link:""},transactionStarted:!1,makingTransaction:!1,formDisabled:!1,feeAmount:"0",agreement:"",token:{name:"",symbol:"",decimals:18,cap:"",initialBalance:"",supplyType:"Fixed",accessType:"None",mintable:!1,burnable:!1,operable:!1,tokenRecover:!1,removeCopyright:!1}}},mounted:function(){this.tokenType=this.getParam("tokenType")||"SimpleBEP20",this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{initDapp:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.network.current=e.network.list[e.currentNetwork],t.prev=1,t.next=4,e.initWeb3(e.currentNetwork,!0);case 4:return e.initService(e.currentNetwork),t.next=7,e.loadToken();case 7:t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),e.makeToast("Some errors occurred",t.t0,"danger");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},loadToken:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object.prototype.hasOwnProperty.call(e.tokenList,e.tokenType)||(e.makeToast("Some errors occurred","Selected token type does not exist!","danger"),e.tokenType="SimpleBEP20"),e.initToken(e.tokenType),e.updateTokenDetails(),e.updateSupply(),e.updateCap(),t.prev=5,t.next=8,e.promisify(e.contracts.service.methods.getPrice(e.tokenType).call);case 8:e.feeAmount=t.sent,t.next=15;break;case 11:t.prev=11,t.t0=t.catch(5),console.log(t.t0.message),"mainnet"===e.currentNetwork?(e.makeToast("Warning","We are having an issue with Current Network Provider. Please switch Network or try again later.","warning"),e.feeAmount=e.web3.utils.toWei("0","ether")):e.feeAmount=e.web3.utils.toWei("".concat(e.token.price),"ether");case 15:"mainnet"===e.currentNetwork&&(e.gaSend("ViewContent",e.tokenType,""),e.fbtrack("ViewContent",{content_ids:[e.tokenType],content_type:"product"})),e.loading=!1;case 17:case"end":return t.stop()}}),t,null,[[5,11]])})))()},generateToken:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$refs.observer.validate().then(function(){var t=Object(a.a)(regeneratorRuntime.mark((function t(n){var a,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=35;break}if(e.metamask.installed){t.next=6;break}return e.makeToast("Warning","To create a Token please install MetaMask!","danger"),t.abrupt("return");case 6:if(e.metamask.netId===e.network.current.id){t.next=9;break}return e.makeToast("Warning","Your MetaMask in on the wrong network. Please switch on ".concat(e.network.current.name," and try again!"),"warning"),t.abrupt("return");case 9:return t.prev=9,e.trx.hash="",e.trx.link="",e.formDisabled=!0,e.makingTransaction=!0,"mainnet"===e.currentNetwork&&(e.gaSend("AddToCart",e.tokenType,""),e.fbtrack("AddToCart",{content_ids:[e.tokenType],content_type:"product"})),t.next=17,e.web3Provider.request({method:"eth_requestAccounts"});case 17:return a=new e.web3.eth.Contract(e.contracts.token.abi),r={data:e.contracts.token.bytecode,arguments:e.getDeployArguments()},t.next=21,e.promisify(e.web3.eth.getCoinbase);case 21:return t.t0=t.sent,t.t1=e.feeAmount,o={from:t.t0,value:t.t1,gasPrice:"10000000000"},t.next=26,e.estimateDeployGas(a,r,o);case 26:o.gas=t.sent,a.deploy(r).send(o).on("error",(function(t){console.log(t.message),e.makingTransaction=!1,e.formDisabled=!1,e.makeToast("Error!",t.message,"danger")})).on("transactionHash",(function(t){e.transactionStarted=!0,e.trx.hash=t,e.trx.link="".concat(e.network.current.explorerLink,"/tx/").concat(e.trx.hash),"mainnet"===e.currentNetwork&&(e.gaSend("InitiateCheckout",e.tokenType,e.trx.hash),e.fbtrack("InitiateCheckout"))})).on("receipt",(function(t){e.token.address=t.contractAddress,e.token.link=e.network.current.explorerLink+"/token/"+e.token.address,e.$forceUpdate(),e.makeToast("Well done!","Your Token has been deployed!","success"),"mainnet"===e.currentNetwork&&(e.gaSend("Purchase",e.tokenType,e.token.address),e.fbtrack("Purchase",{value:e.web3.utils.fromWei(e.feeAmount,"ether"),currency:"EUR",content_ids:[e.tokenType],content_type:"product"}))})),t.next=35;break;case 30:t.prev=30,t.t2=t.catch(9),e.makingTransaction=!1,e.formDisabled=!1,e.makeToast("Some error occurred",t.t2.message,"danger");case 35:case"end":return t.stop()}}),t,null,[[9,30]])})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t),e.makingTransaction=!1,e.makeToast("Some error occurred",t.message,"danger")}));case 1:case"end":return t.stop()}}),t)})))()},updateTokenDetails:function(){var e=this,t=this.tokenDetails.find((function(t){return t.name===e.tokenType}));this.token.customizeDecimals=t.customizeDecimals,this.token.verified=t.verified,this.token.supplyType=t.supplyType,this.token.accessType=t.accessType,this.token.mintable=t.mintable,this.token.burnable=t.burnable,this.token.operable=t.operable,this.token.tokenRecover=t.tokenRecover,this.token.removeCopyright=t.removeCopyright,this.token.price=t.price,this.token.gas=this.web3.utils.toBN(t.gas),this.token.decimals=t.customizeDecimals?this.token.decimals:18},updateCap:function(){this.token.cap=["100k","Fixed"].includes(this.token.supplyType)?this.token.initialBalance:this.token.cap},updateSupply:function(){this.token.initialBalance="100k"===this.token.supplyType?1e5:this.token.initialBalance},getDeployArguments:function(){var e=this.token.name,t=this.token.symbol,n=this.web3.utils.toBN(this.token.decimals),a=this.web3.utils.toBN(this.token.cap).mul(this.web3.utils.toBN(Math.pow(10,this.token.decimals))),r=this.web3.utils.toBN(this.token.initialBalance).mul(this.web3.utils.toBN(Math.pow(10,this.token.decimals))),o=[e,t];switch(this.tokenType){case"HelloBEP20":break;case"SimpleBEP20":o.push(r);break;case"StandardBEP20":case"BurnableBEP20":case"UnlimitedBEP20":case"AmazingBEP20":o.push(n),o.push(r);break;case"MintableBEP20":case"CommonBEP20":o.push(n),o.push(a),o.push(r);break;default:throw new Error("Invalid Token Type")}return o.push(this.contracts.service.options.address),o},estimateDeployGas:function(e,t,n){var r=this;return Object(a.a)(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,r.promisify(e.deploy(t).estimateGas,n);case 3:return o=a.sent,a.abrupt("return",r.web3.utils.toBN(o).muln(1.3));case 7:return a.prev=7,a.t0=a.catch(0),console.log(a.t0),a.abrupt("return",r.token.gas);case 11:case"end":return a.stop()}}),a,null,[[0,7]])})))()},addToMetaMask:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.web3Provider.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e.token.address,symbol:e.token.symbol.substr(0,5),decimals:e.token.decimals}}});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()}}},i=n(55),l=Object(i.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-jumbotron",{staticClass:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-400",attrs:{"text-variant":"white text-center wiretap-padding",header:"",fluid:""},scopedSlots:e._u([{key:"lead",fn:function(){return[n("h1",{staticClass:"mt-1 text-center text-4xl font-bold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"},[n("br"),e._v("Create your own Token\n  ")]),n("br"),n("br"),e._v("Ready to create your new token? Type in token name, supply and features you want below!\n            "),n("br"),e._v("\n             This is the easiest and fastest way to create your own BEP20 token on the Binance Smart Chain network."),n("br"),n("br"),e._v(" No coding! No login! You own and control it!\n      "),n("br")]},proxy:!0}])}),e._v(" "),n("b-row",{staticClass:"mx-0",attrs:{id:"token-generator"}},[n("b-col",{staticClass:"mb-3 p-0",attrs:{lg:"12",xl:"10","offset-xl":"1"}},[e.loading?n("div",{staticClass:"text-center p-5"},[n("ui--loader",{attrs:{loading:!0}})],1):e._e(),e._v(" "),e.loading?e._e():n("b-card",{attrs:{"bg-variant":"transparent","border-variant":"0"}},[e.metamask.installed?e._e():n("b-alert",{attrs:{show:"",variant:"warning"}},[n("h3",{staticClass:"alert-heading"},[e._v("Alert")]),e._v(" "),n("p",[e._v("\n                        To use this app please install\n                        "),n("b-link",{attrs:{href:"https://metamask.io/",target:"_blank"}},[e._v("MetaMask")]),e._v(".\n                        Use any other wallet at your own risk. Wallet is needed to transfer ownership and to control your new token.\n                    ")],1)]),e._v(" "),e.makingTransaction||e.transactionStarted?n("b-card",{staticClass:"mt-3",attrs:{header:"Making transaction...","header-bg-variant":"info","header-text-variant":"white"}},[e.trx.hash?n("div",[n("h6",{staticClass:"text-success"},[e._v("Well! Transaction done!")]),e._v("\n                        Transaction Hash:\n                        "),n("a",{attrs:{href:e.trx.link,target:"_blank"}},[n("span",{domProps:{innerHTML:e._s(e.trx.hash)}})]),n("br"),e._v(" "),n("hr"),e._v(" "),e.token.address?n("div",[n("h6",{staticClass:"text-info"},[e._v("Your Token:")]),e._v(" "),n("h5",[e._v(e._s(e.token.name)+" ("+e._s(e.token.symbol)+")")]),e._v(" "),n("h6",[e._v("Address: "+e._s(e.token.address))]),e._v(" "),n("small",{staticClass:"text-muted"},[e._v("Supply: "+e._s(e.token.initialBalance)+" "+e._s(e.token.symbol))]),e._v(" "),n("hr"),e._v(" "),n("b-link",{staticClass:"btn btn-primary my-2",attrs:{href:e.token.link,target:"_blank"}},[n("b-icon-arrow-up-right-circle-fill"),e._v("\n                                View on BscScan\n                            ")],1),e._v(" "),n("b-link",{staticClass:"btn btn-success my-2",on:{click:e.addToMetaMask}},[n("b-icon-plus-circle-fill"),e._v("\n                                Add to MetaMask\n                            ")],1)],1):n("div",[n("h6",[e._v("Retrieving Token.")]),e._v(" "),n("p",[e._v("Please wait...")]),e._v(" "),n("ui--loader",{attrs:{loading:!0}})],1)]):n("div",[n("p",[e._v("Please wait...")]),e._v(" "),n("ui--loader",{attrs:{loading:!0}})],1)]):e._e(),e._v(" "),e.makingTransaction?e._e():n("ValidationObserver",{ref:"observer",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),e.generateToken()}}},[n("fieldset",{attrs:{disabled:e.formDisabled}},[n("b-row",[n("b-col",{attrs:{md:"6",lg:"4"}},[n("b-card",{staticClass:"mt-3",attrs:{header:"Token Details","header-bg-variant":"dark","header-text-variant":"white"}},[n("ValidationProvider",{attrs:{name:"token name",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("b-form-group",{attrs:{description:"Choose a name for your token.",label:"Token Name *","label-for":"tokenName"}},[n("b-form-input",{class:{"is-invalid":a.length>0},attrs:{id:"tokenName",name:"tokenName",placeholder:"Your token name",size:"lg",maxlength:"30"},model:{value:e.token.name,callback:function(t){e.$set(e.token,"name","string"==typeof t?t.trim():t)},expression:"token.name"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:a.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(a[0])+"\n                                            ")])],1)]}}],null,!1,3102910013)}),e._v(" "),n("ValidationProvider",{attrs:{name:"token symbol",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("b-form-group",{attrs:{description:"Choose a symbol for your token (usually 3-5 chars).",label:"Token Symbol *","label-for":"tokenSymbol"}},[n("b-form-input",{class:{"is-invalid":a.length>0},attrs:{id:"tokenSymbol",name:"tokenSymbol",placeholder:"Your token symbol",size:"lg",maxlength:"10"},on:{update:function(t){e.token.symbol=e.token.symbol.toUpperCase()}},model:{value:e.token.symbol,callback:function(t){e.$set(e.token,"symbol","string"==typeof t?t.trim():t)},expression:"token.symbol"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:a.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(a[0])+"\n                                            ")])],1)]}}],null,!1,1266156028)}),e._v(" "),n("ValidationProvider",{attrs:{name:"token Decimals",rules:{required:!0,numeric:!0,min_value:0,max_value:36}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("b-form-group",{attrs:{description:"Insert the decimal precision of your token. If you don't know what to insert, use 18.",label:"Token decimals *","label-for":"tokenDecimals"}},[n("b-form-input",{class:{"is-invalid":a.length>0},attrs:{id:"tokenDecimals",name:"tokenDecimals",placeholder:"Your token decimals",type:"number",disabled:!e.token.customizeDecimals,size:"lg",min:"0",step:"1"},model:{value:e.token.decimals,callback:function(t){e.$set(e.token,"decimals","string"==typeof t?t.trim():t)},expression:"token.decimals"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:a.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(a[0])+"\n                                            ")])],1)]}}],null,!1,1812990632)}),e._v(" "),n("ValidationProvider",{attrs:{name:"token initial supply",rules:{required:!0,numeric:!0,min_value:"Fixed"===e.token.supplyType?1:0,max_value:1e15}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("b-form-group",{attrs:{description:"Insert the initial number of tokens available. Will be put in your account.",label:"Initial Supply *","label-for":"tokenInitialBalance"}},[n("b-form-input",{class:{"is-invalid":a.length>0},attrs:{id:"tokenInitialBalance",name:"tokenInitialBalance",placeholder:"Your token initial supply",type:"number",size:"lg",disabled:"100k"===e.token.supplyType,min:"0",step:"1"},on:{update:e.updateCap},model:{value:e.token.initialBalance,callback:function(t){e.$set(e.token,"initialBalance","string"==typeof t?t.trim():t)},expression:"token.initialBalance"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:a.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(a[0])+"\n                                            ")])],1)]}}],null,!1,1781880985)}),e._v(" "),"Unlimited"!==e.token.supplyType?n("ValidationProvider",{attrs:{name:"token max supply",rules:{required:!0,numeric:!0,min_value:e.token.initialBalance>0?e.token.initialBalance:1,max_value:1e15}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("b-form-group",{attrs:{description:"Insert the maximum number of tokens available.",label:"Total Supply *","label-for":"tokenCap"}},[n("b-form-input",{class:{"is-invalid":a.length>0},attrs:{id:"tokenCap",name:"tokenCap",placeholder:"Your token max supply",type:"number",size:"lg",disabled:["100k","Fixed"].includes(e.token.supplyType),min:"1",step:"1"},model:{value:e.token.cap,callback:function(t){e.$set(e.token,"cap","string"==typeof t?t.trim():t)},expression:"token.cap"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:a.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(a[0])+"\n                                            ")])],1)]}}],null,!1,1465824721)}):e._e()],1)],1),e._v(" "),n("b-col",{attrs:{md:"6",lg:"4"}},[n("b-card",{staticClass:"mt-3",attrs:{header:"Token Features","header-bg-variant":"dark","header-text-variant":"white"}},[n("b-form-group",{attrs:{description:["100k","Fixed","Unlimited","Capped"].join(", "),label:"Supply Type","label-for":"supplyType"}},[n("b-form-select",{attrs:{id:"supplyType",disabled:"",size:"sm"},model:{value:e.token.supplyType,callback:function(t){e.$set(e.token,"supplyType",t)},expression:"token.supplyType"}},e._l(["100k","Fixed","Unlimited","Capped"],(function(t){return n("option",{domProps:{value:t}},[e._v("\n                                                "+e._s(t)+"\n                                            ")])})),0)],1),e._v(" "),n("b-form-group",{attrs:{description:["None","Ownable","Role Based"].join(", "),label:"Access Type","label-for":"accessType"}},[n("b-form-select",{attrs:{id:"accessType",disabled:"",size:"sm"},model:{value:e.token.accessType,callback:function(t){e.$set(e.token,"accessType",t)},expression:"token.accessType"}},e._l(["None","Ownable","Role Based"],(function(t){return n("option",{domProps:{value:t}},[e._v("\n                                                "+e._s(t)+"\n                                            ")])})),0)],1),e._v(" "),n("b-form-group",{attrs:{description:"Your Token Source Code will be automatically verified on BscScan."}},[n("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.verified,callback:function(t){e.$set(e.token,"verified",t)},expression:"token.verified"}},[e._v("\n                                            Verified Source Code\n                                        ")])],1),e._v(" "),n("b-form-group",{attrs:{description:"Remove the link pointing to this page from your contract."}},[n("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.removeCopyright,callback:function(t){e.$set(e.token,"removeCopyright",t)},expression:"token.removeCopyright"}},[e._v("\n                                            Remove Copyright\n                                        ")])],1),e._v(" "),n("b-form-group",{attrs:{description:"Your Token can be burnt."}},[n("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.burnable,callback:function(t){e.$set(e.token,"burnable",t)},expression:"token.burnable"}},[e._v("\n                                            Burnable\n                                        ")])],1),e._v(" "),n("b-form-group",{attrs:{description:"You will be able to generate tokens by minting them."}},[n("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.mintable,callback:function(t){e.$set(e.token,"mintable",t)},expression:"token.mintable"}},[e._v("\n                                            Mintable\n                                        ")])],1),e._v(" "),n("b-form-group",{attrs:{description:"Make a callback on the receiver contract."}},[n("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.operable,callback:function(t){e.$set(e.token,"operable",t)},expression:"token.operable"}},[e._v("\n                                            Operable (ERC1363)\n                                        ")])],1),e._v(" "),n("b-form-group",{attrs:{description:"Recover any BEP20 token sent into the contract for error."}},[n("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.tokenRecover,callback:function(t){e.$set(e.token,"tokenRecover",t)},expression:"token.tokenRecover"}},[e._v("\n                                            Token Recover\n                                        ")])],1)],1)],1),e._v(" "),n("b-col",{attrs:{md:"12",lg:"4"}},[n("b-card",{staticClass:"mt-3",attrs:{header:"Token Type and Network","header-bg-variant":"dark","header-text-variant":"white"}},[n("b-form-group",{attrs:{description:"Choose your Token Type.",label:"Token Type *","label-for":"tokenType"}},[n("b-form-select",{attrs:{id:"tokenType",size:"sm"},on:{input:e.loadToken},model:{value:e.tokenType,callback:function(t){e.tokenType=t},expression:"tokenType"}},e._l(e.tokenList,(function(t,a){return n("option",{domProps:{value:a}},[e._v("\n                                                "+e._s(t.contractName)+"\n                                            ")])})),0)],1),e._v(" "),n("b-form-group",{attrs:{description:"Choose your Network.",label:"Network *","label-for":"network"}},[n("b-form-select",{attrs:{id:"network",size:"sm"},on:{input:e.initDapp},model:{value:e.currentNetwork,callback:function(t){e.currentNetwork=t},expression:"currentNetwork"}},e._l(e.network.list,(function(t,a){return n("option",{domProps:{value:a}},[e._v(e._s(t.name)+"\n                                            ")])})),0)],1),e._v(" "),"mainnet"!==e.currentNetwork?n("b-alert",{attrs:{show:"",variant:"warning"}},[n("strong",[e._v("\n                                            You selected a TEST Network.\n                                        ")]),e._v(" "),n("hr"),e._v("\n                                        To deploy on Main Network you must select Binance Smart Chain.\n                                    ")]):e._e(),e._v(" "),n("b-link",{attrs:{href:"https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain",target:"_blank"}},[n("small",[e._v("How to connect MetaMask to Binance Smart Chain?")])])],1),e._v(" "),n("b-card",{staticClass:"mt-3",attrs:{header:"Agreement","header-bg-variant":"dark","header-text-variant":"white"}},[n("ValidationProvider",{attrs:{name:"Token Agreement",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("b-form-group",{attrs:{"label-for":"tokenAgreement"}},[n("b-form-checkbox",{class:{"is-invalid":a.length>0},attrs:{id:"tokenAgreement",name:"tokenAgreement",value:"accepted","unchecked-value":"",size:"sm"},model:{value:e.agreement,callback:function(t){e.agreement=t},expression:"agreement"}},[n("p",[e._v("\n                                                    I have read, understood and agreed to\n                                                    BEP20 Token Generator's\n                                                    "),n("u",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-terms",modifiers:{"modal-terms":!0}}]},[e._v("Terms of Use")]),e._v(".\n                                                ")])]),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:a.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(a[0])+"\n                                            ")])],1)]}}],null,!1,2263364539)})],1),e._v(" "),n("b-card",{staticClass:"mt-3",attrs:{header:"Transaction","header-bg-variant":"info","header-text-variant":"white","no-body":""}},[n("b-list-group",{staticClass:"payment-box",attrs:{flush:""}},[n("b-list-group-item",{staticClass:"d-flex justify-content-between"},[n("span",[e._v("\n                                                Commission Fee:\n                                                "),n("b-icon-info-circle",{directives:[{name:"b-popover",rawName:"v-b-popover.v-warning.hover.top",value:"Commission will be transferred directly to us through the BSC network as part of your payment. Commission will support BEP20 Token Generator to keep it safe, running and constantly updated.",expression:"\n                                                    'Commission will be transferred directly to us through the ' +\n                                                    'BSC network as part of your payment. ' +\n                                                    'Commission will support BEP20 Token Generator to keep it ' +\n                                                    'safe, running and constantly updated.'",modifiers:{"v-warning":!0,hover:!0,top:!0}}]})],1),e._v(" "),n("b-badge",{attrs:{variant:"success"}},[e._v("\n                                                "+e._s(e.web3.utils.fromWei(e.feeAmount,"ether"))+" BNB\n                                            ")])],1),e._v(" "),n("b-list-group-item",{staticClass:"d-flex justify-content-between"},[n("span",[e._v("\n                                                Gas Fee:\n                                                "),n("b-icon-info-circle",{directives:[{name:"b-popover",rawName:"v-b-popover.v-warning.hover.top",value:"It depends on Gas Limit and on current Gas price average. MetaMask will suggest both. Do not decrease Gas Limit to avoid transaction to fail. If you want, you can decrease Gas Price but your transaction could remain pending for minutes/hours. Read how to calculate right value in our FAQ. Failed transaction can't be refunded.",expression:"\n                                                    'It depends on Gas Limit and on current Gas price average. ' +\n                                                    'MetaMask will suggest both. ' +\n                                                    'Do not decrease Gas Limit to avoid transaction to fail. ' +\n                                                    'If you want, you can decrease Gas Price but your ' +\n                                                    'transaction could remain pending for minutes/hours. ' +\n                                                    'Read how to calculate right value in our FAQ. ' +\n                                                    'Failed transaction can\\'t be refunded.'",modifiers:{"v-warning":!0,hover:!0,top:!0}}]})],1),e._v(" "),n("b-badge",{attrs:{variant:"info"}},[e._v("\n                                                Variable\n                                            ")])],1)],1)],1),e._v(" "),n("b-button",{staticClass:"mt-3 py-3 px-5 text-uppercase",attrs:{variant:"success",size:"lg",block:"",type:"submit"}},[e._v("\n                                    Confirm\n                                ")])],1)],1)],1)])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=l.exports}}]);