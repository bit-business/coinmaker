(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{263:function(e,t,n){"use strict";t.a={data:()=>({tokenDetails:[{name:"HelloBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!1,supplyType:"100k",accessType:"Ownable",mintable:!1,burnable:!1,operable:!1,tokenRecover:!1,removeCopyright:!1,originalPrice:0,price:0,gas:1330639},{name:"SimpleBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!1,supplyType:"Fixed",accessType:"Ownable",mintable:!1,burnable:!1,operable:!1,tokenRecover:!1,removeCopyright:!1,originalPrice:.5,price:.015,gas:1333276},{name:"StandardBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Fixed",accessType:"Ownable",mintable:!1,burnable:!1,operable:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:.75,price:.05,gas:1260139},{name:"BurnableBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Fixed",accessType:"Ownable",mintable:!1,burnable:!0,operable:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:.1,price:.1,gas:1444650},{name:"MintableBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Capped",accessType:"Ownable",mintable:!0,burnable:!1,operable:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:1,price:.1,gas:1524151},{name:"CommonBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Capped",accessType:"Ownable",mintable:!0,burnable:!0,operable:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:1.25,price:.15,gas:1708581},{name:"UnlimitedBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Unlimited",accessType:"Ownable",mintable:!0,burnable:!0,operable:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:1.5,price:.3,gas:1637163},{name:"AmazingBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Unlimited",accessType:"Ownable",mintable:!0,burnable:!0,operable:!0,tokenRecover:!0,removeCopyright:!0,originalPrice:2,price:.5,gas:2254686}]})}},397:function(e,t){},406:function(e,t){},408:function(e,t){},419:function(e,t){},639:function(e,t,n){"use strict";n.r(t);n(93);var a=n(283),s=n(263),o=n(269),i=n.n(o);if("undefined"!=typeof window){n(247)}if("undefined"!=typeof window){new(n(247))(new i.a({infuraId:"bcd0880dd3d14b5abb743a63ce403e36",injected:{display:{logo:"data:image/gif;base64,INSERT_BASE64_STRING",name:"Injected",description:"Connect with the provider in your Browser"},package:null},walletconnect:{package:i.a,options:{infuraId:"bcd0880dd3d14b5abb743a63ce403e36"}},rpc:{97:"https://data-seed-prebsc-1-s1.binance.org:8545/",56:"https://bsc-dataseed1.binance.org/"},bridge:"https://bridge.walletconnect.org",qrcodeModalOptions:{desktopLinks:["ledger","tokenary","wallet","wallet 3","secuX","ambire","wallet3","apolloX","zerion","sequence","punkWallet","kryptoGO","nft","riceWallet","vision","keyring"],mobileLinks:["rainbow","metamask","argent","trust","imtoken","pillar"]}}))}else{const e=n(390),t=new e.providers.HttpProvider("https://mainnet.infura.io/v3/bcd0880dd3d14b5abb743a63ce403e36");new e(t)}let r=0;var l={name:"Generator",mixins:[a.a,s.a],data:()=>({loading:!0,currentNetwork:null,tokenType:"",trx:{hash:"",link:""},transactionStarted:!1,makingTransaction:!1,formDisabled:!1,feeAmount:"0",agreement:"",token:{name:"",symbol:"",decimals:18,cap:"",initialBalance:"",supplyType:"Fixed",accessType:"None",mintable:!1,burnable:!1,operable:!1,tokenRecover:!1,removeCopyright:!1}}),mounted(){this.tokenType=this.getParam("tokenType")||"SimpleBEP20",this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{async initDapp(){this.network.current=this.network.list[this.currentNetwork];try{await this.initWeb3(this.currentNetwork,!0),this.initService(this.currentNetwork),await this.loadToken()}catch(e){console.log(e),this.makeToast("Some errors occurred",e,"danger")}},async loadToken(){Object.prototype.hasOwnProperty.call(this.tokenList,this.tokenType)||(this.makeToast("Some errors occurred","Selected token type does not exist!","danger"),this.tokenType="SimpleBEP20"),this.initToken(this.tokenType),this.updateTokenDetails(),this.updateSupply(),this.updateCap();try{this.feeAmount=await this.promisify(this.contracts.service.methods.getPrice(this.tokenType).call)}catch(e){console.log(e.message),"mainnet"===this.currentNetwork?(this.makeToast("Warning","We are having an issue with Current Network Provider. Please switch Network or try again later.","warning"),this.feeAmount=this.web3.utils.toWei("0","ether")):this.feeAmount=this.web3.utils.toWei(""+this.token.price,"ether")}"mainnet"===this.currentNetwork&&(this.gaSend("ViewContent",this.tokenType,""),this.fbtrack("ViewContent",{content_ids:[this.tokenType],content_type:"product"})),this.loading=!1},async connectmetamaskbutton(){if("Connected"===this.$refs.btnToggle.innerText&&(this.$refs.btnToggle.innerText="Connect",this.$refs.btnToggle.className="button primary-btn","undefined"!=typeof window&&provider.disconnect(),this.makeToast("Disconnected","Wallet disconnected","info")),"undefined"!=typeof window){console.log("Tenabke1");const e=new i.a({infuraId:"bcd0880dd3d14b5abb743a63ce403e36",rpc:{97:"https://data-seed-prebsc-1-s1.binance.org:8545/",56:"https://bsc-dataseed1.binance.org/"},bridge:"https://bridge.walletconnect.org"});e.enable(),e.getAccount,console.log("Tenabke12");new(n(247))(e);this.web3.eth.net.getId().then(e=>{switch(e){case 1:if(console.log("This is 1"),"undefined"!=typeof window){new i.a({infuraId:"bcd0880dd3d14b5abb743a63ce403e36",rpc:{97:"https://data-seed-prebsc-1-s1.binance.org:8545/",56:"https://bsc-dataseed1.binance.org/"},bridge:"https://bridge.walletconnect.org"}).disconnect()}break;case 56:console.log("This is the bsc mainnet."),this.$refs.btnToggle.innerText="Connected",this.$refs.btnToggle.className="button primary-btn",this.makeToast("Connected","Wallet connected!","success");break;case 97:console.log("This is the ropsten test network."),this.$refs.btnToggle.innerText="Connected",this.$refs.btnToggle.className="button primary-btn",this.makeToast("Connected","Wallet connected to Binance TEST network!","success");break;default:if(this.makeToast("Warning",`Your Wallet in on the wrong network. Please switch on ${this.network.current.name} and try again!`,"warning"),this.$refs.btnToggle.innerText="Connect","undefined"!=typeof window){new i.a({infuraId:"bcd0880dd3d14b5abb743a63ce403e36",rpc:{97:"https://data-seed-prebsc-1-s1.binance.org:8545/",56:"https://bsc-dataseed1.binance.org/"},bridge:"https://bridge.walletconnect.org"}).disconnect()}console.log("This is an unknown network.")}}).catch(e=>{console.log(e)})}},async generateTokenprovjera(){if("undefined"!=typeof window){const e=new i.a({infuraId:"bcd0880dd3d14b5abb743a63ce403e36",injected:{display:{logo:"data:image/gif;base64,INSERT_BASE64_STRING",name:"Injected",description:"Connect with the provider in your Browser"},package:null},walletconnect:{package:i.a,options:{infuraId:"bcd0880dd3d14b5abb743a63ce403e36"}},rpc:{97:"https://data-seed-prebsc-1-s1.binance.org:8545/",56:"https://bsc-dataseed1.binance.org/"},bridge:"https://bridge.walletconnect.org",qrcodeModalOptions:{desktopLinks:["ledger","tokenary","wallet","wallet 3","secuX","ambire","wallet3","apolloX","zerion","sequence","punkWallet","kryptoGO","nft","riceWallet","vision","keyring"],mobileLinks:["rainbow","metamask","argent","trust","imtoken","pillar"]}}),t=new Web3(e);await e.enable(),t.eth.getChainId().then(async e=>{e&&(r=e,console.log(r),56===r||97===r?this.generateToken():this.makeToast("WRONG NETWORK",`Please change your network on wallet to ${this.network.current.name}!`,"warning"))}).catch(e=>{})}},async generateToken(){if("undefined"!=typeof window){new i.a({infuraId:"bcd0880dd3d14b5abb743a63ce403e36",rpc:{97:"https://data-seed-prebsc-1-s1.binance.org:8545/",56:"https://bsc-dataseed1.binance.org/"},bridge:"https://bridge.walletconnect.org"}).enable()}this.$refs.observer.validate().then(async e=>{if(e)try{if(this.trx.hash="",this.trx.link="",this.formDisabled=!0,this.makingTransaction=!0,this.web3.eth.net.getId().then(e=>{switch(e){case 1:this.makeToast("Warning",`Your Wallet in on the wrong network. Please switch on ${this.network.current.name} and try again!`,"warning");break;case 56:console.log("This is the bsc mainnet."),this.gaSend("AddToCart",this.tokenType,""),this.fbtrack("AddToCart",{content_ids:[this.tokenType],content_type:"product"});break;case 97:console.log("This is the bsc test network.");break;default:console.log("This is an unknown network."),this.makeToast("Warning",`Your Wallet in on the wrong network. Please switch on ${this.network.current.name} and try again!`,"warning")}}).catch(e=>{console.log(e)}),"undefined"!=typeof window){const e=new i.a({infuraId:"bcd0880dd3d14b5abb743a63ce403e36",injected:{display:{logo:"data:image/gif;base64,INSERT_BASE64_STRING",name:"Injected",description:"Connect with the provider in your Browser"},package:null},walletconnect:{package:i.a,options:{infuraId:"bcd0880dd3d14b5abb743a63ce403e36"}},rpc:{97:"https://data-seed-prebsc-1-s1.binance.org:8545/",56:"https://bsc-dataseed1.binance.org/"},bridge:"https://bridge.walletconnect.org",qrcodeModalOptions:{desktopLinks:["ledger","tokenary","wallet","wallet 3","secuX","ambire","wallet3","apolloX","zerion","sequence","punkWallet","kryptoGO","nft","riceWallet","vision","keyring"],mobileLinks:["rainbow","metamask","argent","trust","imtoken","pillar"]}});web3=new Web3(e),await e.enable()}const e=new web3.eth.Contract(this.contracts.token.abi),t={data:this.contracts.token.bytecode,arguments:this.getDeployArguments()},n={from:await this.promisify(web3.eth.getCoinbase),value:this.feeAmount,gasPrice:"10000000000"};n.gas=await this.estimateDeployGas(e,t,n),e.deploy(t).send(n).on("error",e=>{console.log(e.message),this.makingTransaction=!1,this.formDisabled=!1,this.makeToast("Error!",e.message,"danger")}).on("transactionHash",e=>{this.transactionStarted=!0,this.trx.hash=e,this.trx.link=`${this.network.current.explorerLink}/tx/${this.trx.hash}`,this.web3.eth.net.getId().then(e=>{switch(e){case 1:console.log("This is 1");break;case 56:console.log("This is the bsc mainnet."),this.gaSend("InitiateCheckout",this.tokenType,this.trx.hash),this.fbtrack("InitiateCheckout");break;default:console.log("This is an unknown network.")}}).catch(e=>{console.log(e)})}).on("receipt",e=>{this.token.address=e.contractAddress,this.token.link=this.network.current.explorerLink+"/token/"+this.token.address,this.$forceUpdate(),this.makeToast("Well done!","Your Token has been deployed!","success"),this.web3.eth.net.getId().then(e=>{switch(e){case 56:console.log("This is the bsc mainnet."),this.gaSend("Purchase",this.tokenType,this.token.address),this.fbtrack("Purchase",{value:web3.utils.fromWei(this.feeAmount,"ether"),currency:"EUR",content_ids:[this.tokenType],content_type:"product"});break;default:console.log("This is an unknown network.")}}).catch(e=>{console.log(e)})})}catch(e){this.makingTransaction=!1,this.formDisabled=!1,this.makeToast("Some error occurred",e.message,"danger")}}).catch(e=>{console.log(e),this.makingTransaction=!1,this.makeToast("Some error occurred",e.message,"danger")})},updateTokenDetails(){const e=this.tokenDetails.find(e=>e.name===this.tokenType);if("undefined"!=typeof window){const e=new i.a({infuraId:"bcd0880dd3d14b5abb743a63ce403e36",rpc:{97:"https://data-seed-prebsc-1-s1.binance.org:8545/",56:"https://bsc-dataseed1.binance.org/"},bridge:"https://bridge.walletconnect.org"});new(n(247))(e)}this.token.customizeDecimals=e.customizeDecimals,this.token.verified=e.verified,this.token.supplyType=e.supplyType,this.token.accessType=e.accessType,this.token.mintable=e.mintable,this.token.burnable=e.burnable,this.token.operable=e.operable,this.token.tokenRecover=e.tokenRecover,this.token.removeCopyright=e.removeCopyright,this.token.price=e.price,this.token.gas=this.web3.utils.toBN(e.gas),this.token.decimals=e.customizeDecimals?this.token.decimals:18},updateCap(){this.token.cap=["100k","Fixed"].includes(this.token.supplyType)?this.token.initialBalance:this.token.cap},updateSupply(){this.token.initialBalance="100k"===this.token.supplyType?1e5:this.token.initialBalance},getDeployArguments(){if("undefined"!=typeof window){const e=new i.a({infuraId:"bcd0880dd3d14b5abb743a63ce403e36",rpc:{97:"https://data-seed-prebsc-1-s1.binance.org:8545/",56:"https://bsc-dataseed1.binance.org/"},bridge:"https://bridge.walletconnect.org"});new(n(247))(e)}const e=this.token.name,t=this.token.symbol,a=this.web3.utils.toBN(this.token.decimals),s=this.web3.utils.toBN(this.token.cap).mul(this.web3.utils.toBN(Math.pow(10,this.token.decimals))),o=this.web3.utils.toBN(this.token.initialBalance).mul(this.web3.utils.toBN(Math.pow(10,this.token.decimals))),r=[e,t];switch(this.tokenType){case"HelloBEP20":break;case"SimpleBEP20":r.push(o);break;case"StandardBEP20":case"BurnableBEP20":case"UnlimitedBEP20":case"AmazingBEP20":r.push(a),r.push(o);break;case"MintableBEP20":case"CommonBEP20":r.push(a),r.push(s),r.push(o);break;default:throw new Error("Invalid Token Type")}return r.push(this.contracts.service.options.address),r},async estimateDeployGas(e,t,a){try{const s=await this.promisify(e.deploy(t).estimateGas,a);if("undefined"!=typeof window){const e=new i.a({infuraId:"bcd0880dd3d14b5abb743a63ce403e36",rpc:{97:"https://data-seed-prebsc-1-s1.binance.org:8545/",56:"https://bsc-dataseed1.binance.org/"},bridge:"https://bridge.walletconnect.org"});new(n(247))(e)}return this.web3.utils.toBN(s).muln(1.3)}catch(e){return console.log(e),this.token.gas}},async addToMetaMask(){try{if("undefined"!=typeof window){new i.a({infuraId:"bcd0880dd3d14b5abb743a63ce403e36",rpc:{97:"https://data-seed-prebsc-1-s1.binance.org:8545/",56:"https://bsc-dataseed1.binance.org/"},bridge:"https://bridge.walletconnect.org"});await this.provider.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:this.token.address,symbol:this.token.symbol.substr(0,5),decimals:this.token.decimals}}})}}catch(e){console.log(e)}}}},c=n(15),d=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("section",{staticClass:"hero is-bold"},[t("div",{staticClass:"hero-body"},[t("div",{staticClass:"container"},[t("div",{staticClass:"columns is-vcentered"},[t("div",{staticClass:"column is-5 is-offset-1 landing-caption"},[t("h1",{staticClass:"title is-1 is-bold is-spaced"},[e._v("\n                       Welcome to your Crypto Coin Builder\n                    ")]),e._v(" "),t("h2",{staticClass:"subtitle is-5 is-muted"},[e._v("Ready to create your new coin on Binance Smart Network? Type in token name, supply and features you want below! No coding! No login! You own it! ")]),e._v(" "),t("div",{staticClass:"button-wrap"},[t("button",{ref:"btnToggle",staticClass:"button cta is-rounded secondary-btn raised",on:{click:e.connectmetamaskbutton}},[t("img",{attrs:{height:"40",width:"130",src:"/assets/images/metamask.svg"}}),e._v("| Connect\n                        ")])])]),e._v(" "),e._m(0)])])])]),e._v(" "),t("b-row",{staticClass:"mx-0",attrs:{id:"token-generator"}},[t("b-col",{staticClass:"mb-3 p-0",attrs:{lg:"12",xl:"10","offset-xl":"1"}},[e.loading?t("div",{staticClass:"text-center p-5"},[t("ui--loader",{attrs:{loading:!0}})],1):e._e(),e._v(" "),e.loading?e._e():t("b-card",{attrs:{"bg-variant":"transparent","border-variant":"0"}},[e.makingTransaction||e.transactionStarted?t("b-card",{staticClass:"mt-3",attrs:{header:"Making transaction...","header-bg-variant":"info","header-text-variant":"white"}},[e.trx.hash?t("div",[t("h6",{staticClass:"text-success"},[e._v("Well! Transaction done!")]),e._v("\n                            Transaction Hash:\n                            "),t("a",{attrs:{href:e.trx.link,target:"_blank"}},[t("span",{domProps:{innerHTML:e._s(e.trx.hash)}})]),t("br"),e._v(" "),t("hr"),e._v(" "),e.token.address?t("div",[t("h6",{staticClass:"text-info"},[e._v("Your Token:")]),e._v(" "),t("h5",[e._v(e._s(e.token.name)+" ("+e._s(e.token.symbol)+")")]),e._v(" "),t("h6",[e._v("Address: "+e._s(e.token.address))]),e._v(" "),t("small",{staticClass:"text-muted"},[e._v("Supply: "+e._s(e.token.initialBalance)+" "+e._s(e.token.symbol))]),e._v(" "),t("hr"),e._v(" "),t("b-link",{staticClass:"btn btn-primary my-2",attrs:{href:e.token.link,target:"_blank"}},[t("b-icon-arrow-up-right-circle-fill"),e._v("\n                                    View on BscScan\n                                ")],1),e._v(" "),t("b-link",{staticClass:"btn btn-success my-2",on:{click:e.addToMetaMask}},[t("b-icon-plus-circle-fill"),e._v("\n                                    Add to MetaMask\n                                ")],1)],1):t("div",[t("h6",[e._v("Retrieving Token.")]),e._v(" "),t("p",[e._v("Please wait...")]),e._v(" "),t("ui--loader",{attrs:{loading:!0}})],1)]):t("div",[t("p",[e._v("Please wait...")]),e._v(" "),t("ui--loader",{attrs:{loading:!0}})],1)]):e._e(),e._v(" "),e.makingTransaction?e._e():t("ValidationObserver",{ref:"observer",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),e.generateTokenprovjera()}}},[t("fieldset",{attrs:{disabled:e.formDisabled}},[t("b-row",[t("b-col",{attrs:{md:"6",lg:"4"}},[t("b-card",{staticClass:"mt-3",attrs:{header:"Token Details","header-bg-variant":"dark","header-text-variant":"white"}},[t("ValidationProvider",{attrs:{name:"token name",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function({errors:n}){return[t("b-form-group",{attrs:{description:"Choose a name for your token.",label:"Token Name *","label-for":"tokenName"}},[t("b-form-input",{class:{"is-invalid":n.length>0},attrs:{id:"tokenName",name:"tokenName",placeholder:"Your token name",size:"lg",maxlength:"30"},model:{value:e.token.name,callback:function(t){e.$set(e.token,"name","string"==typeof t?t.trim():t)},expression:"token.name"}}),e._v(" "),t("small",{directives:[{name:"show",rawName:"v-show",value:n.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                    "+e._s(n[0])+"\n                                                ")])],1)]}}],null,!1,1135047485)}),e._v(" "),t("ValidationProvider",{attrs:{name:"token symbol",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function({errors:n}){return[t("b-form-group",{attrs:{description:"Choose a symbol for your token (usually 3-5 chars).",label:"Token Symbol *","label-for":"tokenSymbol"}},[t("b-form-input",{class:{"is-invalid":n.length>0},attrs:{id:"tokenSymbol",name:"tokenSymbol",placeholder:"Your token symbol",size:"lg",maxlength:"10"},on:{update:function(t){e.token.symbol=e.token.symbol.toUpperCase()}},model:{value:e.token.symbol,callback:function(t){e.$set(e.token,"symbol","string"==typeof t?t.trim():t)},expression:"token.symbol"}}),e._v(" "),t("small",{directives:[{name:"show",rawName:"v-show",value:n.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                    "+e._s(n[0])+"\n                                                ")])],1)]}}],null,!1,1208143612)}),e._v(" "),t("ValidationProvider",{attrs:{name:"token Decimals",rules:{required:!0,numeric:!0,min_value:0,max_value:36}},scopedSlots:e._u([{key:"default",fn:function({errors:n}){return[t("b-form-group",{attrs:{description:"Insert the decimal precision of your token. If you don't know what to insert, use 18.",label:"Token decimals *","label-for":"tokenDecimals"}},[t("b-form-input",{class:{"is-invalid":n.length>0},attrs:{id:"tokenDecimals",name:"tokenDecimals",placeholder:"Your token decimals",type:"number",disabled:!e.token.customizeDecimals,size:"lg",min:"0",step:"1"},model:{value:e.token.decimals,callback:function(t){e.$set(e.token,"decimals","string"==typeof t?t.trim():t)},expression:"token.decimals"}}),e._v(" "),t("small",{directives:[{name:"show",rawName:"v-show",value:n.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                    "+e._s(n[0])+"\n                                                ")])],1)]}}],null,!1,3096369064)}),e._v(" "),t("ValidationProvider",{attrs:{name:"token initial supply",rules:{required:!0,numeric:!0,min_value:"Fixed"===e.token.supplyType?1:0,max_value:1e15}},scopedSlots:e._u([{key:"default",fn:function({errors:n}){return[t("b-form-group",{attrs:{description:"Insert the initial number of tokens available. Will be put in your account.",label:"Initial Supply *","label-for":"tokenInitialBalance"}},[t("b-form-input",{class:{"is-invalid":n.length>0},attrs:{id:"tokenInitialBalance",name:"tokenInitialBalance",placeholder:"Your token initial supply",type:"number",size:"lg",disabled:"100k"===e.token.supplyType,min:"0",step:"1"},on:{update:e.updateCap},model:{value:e.token.initialBalance,callback:function(t){e.$set(e.token,"initialBalance","string"==typeof t?t.trim():t)},expression:"token.initialBalance"}}),e._v(" "),t("small",{directives:[{name:"show",rawName:"v-show",value:n.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                    "+e._s(n[0])+"\n                                                ")])],1)]}}],null,!1,4209509785)}),e._v(" "),"Unlimited"!==e.token.supplyType?t("ValidationProvider",{attrs:{name:"token max supply",rules:{required:!0,numeric:!0,min_value:e.token.initialBalance>0?e.token.initialBalance:1,max_value:1e15}},scopedSlots:e._u([{key:"default",fn:function({errors:n}){return[t("b-form-group",{attrs:{description:"Insert the maximum number of tokens available.",label:"Total Supply *","label-for":"tokenCap"}},[t("b-form-input",{class:{"is-invalid":n.length>0},attrs:{id:"tokenCap",name:"tokenCap",placeholder:"Your token max supply",type:"number",size:"lg",disabled:["100k","Fixed"].includes(e.token.supplyType),min:"1",step:"1"},model:{value:e.token.cap,callback:function(t){e.$set(e.token,"cap","string"==typeof t?t.trim():t)},expression:"token.cap"}}),e._v(" "),t("small",{directives:[{name:"show",rawName:"v-show",value:n.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                    "+e._s(n[0])+"\n                                                ")])],1)]}}],null,!1,344580817)}):e._e()],1)],1),e._v(" "),t("b-col",{attrs:{md:"6",lg:"4"}},[t("b-card",{staticClass:"mt-3",attrs:{header:"Token Features","header-bg-variant":"dark","header-text-variant":"white"}},[t("b-form-group",{attrs:{description:"It changes Features below depending on your selection",label:"Choose Features *","label-for":"tokenType"}},[t("b-form-select",{staticStyle:{"font-weight":"bold"},attrs:{id:"tokenType",size:"sm"},on:{input:e.loadToken},model:{value:e.tokenType,callback:function(t){e.tokenType=t},expression:"tokenType"}},e._l(e.tokenList,(function(n,a){return t("option",{domProps:{value:a}},[e._v("\n                                                    "+e._s(n.contractName)+"\n                                                ")])})),0)],1),e._v(" "),t("b-form-group",{attrs:{description:["100k","Fixed","Unlimited","Capped"].join(", "),label:"Supply Type","label-for":"supplyType"}},[t("b-form-select",{attrs:{id:"supplyType",disabled:"",size:"sm"},model:{value:e.token.supplyType,callback:function(t){e.$set(e.token,"supplyType",t)},expression:"token.supplyType"}},e._l(["100k","Fixed","Unlimited","Capped"],(function(n){return t("option",{domProps:{value:n}},[e._v("\n                                                    "+e._s(n)+"\n                                                ")])})),0)],1),e._v(" "),t("b-form-group",{attrs:{description:["None","Ownable","Role Based"].join(", "),label:"Access Type","label-for":"accessType"}},[t("b-form-select",{attrs:{id:"accessType",disabled:"",size:"sm"},model:{value:e.token.accessType,callback:function(t){e.$set(e.token,"accessType",t)},expression:"token.accessType"}},e._l(["None","Ownable","Role Based"],(function(n){return t("option",{domProps:{value:n}},[e._v("\n                                                    "+e._s(n)+"\n                                                ")])})),0)],1),e._v(" "),t("b-form-group",{attrs:{description:"Your Token Source Code will be automatically verified on BscScan."}},[t("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.verified,callback:function(t){e.$set(e.token,"verified",t)},expression:"token.verified"}},[e._v("\n                                                Verified Source Code\n                                            ")])],1),e._v(" "),t("b-form-group",{attrs:{description:"Remove the link pointing to this page from your contract."}},[t("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.removeCopyright,callback:function(t){e.$set(e.token,"removeCopyright",t)},expression:"token.removeCopyright"}},[e._v("\n                                                Remove Copyright\n                                            ")])],1),e._v(" "),t("b-form-group",{attrs:{description:"Your Token can be burnt."}},[t("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.burnable,callback:function(t){e.$set(e.token,"burnable",t)},expression:"token.burnable"}},[e._v("\n                                                Burnable\n                                            ")])],1),e._v(" "),t("b-form-group",{attrs:{description:"You will be able to generate tokens by minting them."}},[t("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.mintable,callback:function(t){e.$set(e.token,"mintable",t)},expression:"token.mintable"}},[e._v("\n                                                Mintable\n                                            ")])],1),e._v(" "),t("b-form-group",{attrs:{description:"Make a callback on the receiver contract."}},[t("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.operable,callback:function(t){e.$set(e.token,"operable",t)},expression:"token.operable"}},[e._v("\n                                                Operable (ERC1363)\n                                            ")])],1),e._v(" "),t("b-form-group",{attrs:{description:"Recover any BEP20 token sent into the contract for error."}},[t("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.tokenRecover,callback:function(t){e.$set(e.token,"tokenRecover",t)},expression:"token.tokenRecover"}},[e._v("\n                                                Token Recover\n                                            ")])],1)],1)],1),e._v(" "),t("b-col",{attrs:{md:"12",lg:"4"}},[t("b-card",{staticClass:"mt-3",attrs:{header:"Token Network","header-bg-variant":"dark","header-text-variant":"white"}},[t("b-form-group",{attrs:{description:"Choose your Network.",label:"Network *","label-for":"network"}},[t("b-form-select",{staticStyle:{"font-weight":"bold"},attrs:{id:"network",size:"sm"},on:{input:e.initDapp},model:{value:e.currentNetwork,callback:function(t){e.currentNetwork=t},expression:"currentNetwork"}},e._l(e.network.list,(function(n,a){return t("option",{domProps:{value:a}},[e._v(e._s(n.name)+"\n                                                ")])})),0)],1),e._v(" "),"mainnet"!==e.currentNetwork?t("b-alert",{attrs:{show:"",variant:"warning"}},[t("strong",[e._v("\n                                                You selected a TEST Network.\n                                            ")]),e._v(" "),t("hr"),e._v("\n                                            To deploy on Main Network you must select Binance Smart Chain.\n                                        ")]):e._e(),e._v(" "),t("b-link",{attrs:{href:"https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain",target:"_blank"}},[t("small",[e._v("How to connect MetaMask to Binance Smart Chain?")])])],1),e._v(" "),t("b-card",{staticClass:"mt-3",attrs:{header:"Agreement","header-bg-variant":"dark","header-text-variant":"white"}},[t("ValidationProvider",{attrs:{name:"Token Agreement",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function({errors:n}){return[t("b-form-group",{attrs:{"label-for":"tokenAgreement"}},[t("b-form-checkbox",{class:{"is-invalid":n.length>0},attrs:{id:"tokenAgreement",name:"tokenAgreement",value:"accepted","unchecked-value":"",size:"sm"},model:{value:e.agreement,callback:function(t){e.agreement=t},expression:"agreement"}},[t("p",[e._v("\n                                                        I have read, understood and agreed to\n                                                        Crypto-Studio's\n                                                        "),t("u",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-terms",modifiers:{"modal-terms":!0}}]},[e._v("Terms of Use")]),e._v(". We only provide service of creating token. You are owner of the token and control it.\n                                                    ")])]),e._v(" "),t("small",{directives:[{name:"show",rawName:"v-show",value:n.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                    "+e._s(n[0])+"\n                                                ")])],1)]}}],null,!1,4172225709)})],1),e._v(" "),t("b-card",{staticClass:"mt-3",attrs:{header:"Blockchain Transaction","header-bg-variant":"info","header-text-variant":"white","no-body":""}},[t("b-list-group",{staticClass:"payment-box",attrs:{flush:""}},[t("b-list-group-item",{staticClass:"d-flex justify-content-between"},[t("span",[e._v("\n                                                    Commission Fee:\n                                                    "),t("b-icon-info-circle",{directives:[{name:"b-popover",rawName:"v-b-popover.v-warning.hover.top",value:"Commission will be transferred directly to us through the BSC network as part of your payment. Commission will support our website to keep it safe, running and constantly updated.",expression:"\n                                                        'Commission will be transferred directly to us through the ' +\n                                                        'BSC network as part of your payment. ' +\n                                                        'Commission will support our website to keep it ' +\n                                                        'safe, running and constantly updated.'",modifiers:{"v-warning":!0,hover:!0,top:!0}}]})],1),e._v(" "),t("b-badge",{attrs:{variant:"success"}},[e._v("\n                                                    "+e._s(e.web3.utils.fromWei(e.feeAmount,"ether"))+" BNB\n                                                ")])],1),e._v(" "),t("b-list-group-item",{staticClass:"d-flex justify-content-between"},[t("span",[e._v("\n                                                    Gas Fee:\n                                                    "),t("b-icon-info-circle",{directives:[{name:"b-popover",rawName:"v-b-popover.v-warning.hover.top",value:"It depends on Gas Limit and on current Gas price average. MetaMask will suggest both. Do not decrease Gas Limit to avoid transaction to fail. If you want, you can decrease Gas Price but your transaction could remain pending for minutes/hours. Read how to calculate right value in our FAQ. Failed transaction can't be refunded.",expression:"\n                                                        'It depends on Gas Limit and on current Gas price average. ' +\n                                                        'MetaMask will suggest both. ' +\n                                                        'Do not decrease Gas Limit to avoid transaction to fail. ' +\n                                                        'If you want, you can decrease Gas Price but your ' +\n                                                        'transaction could remain pending for minutes/hours. ' +\n                                                        'Read how to calculate right value in our FAQ. ' +\n                                                        'Failed transaction can\\'t be refunded.'",modifiers:{"v-warning":!0,hover:!0,top:!0}}]})],1),e._v(" "),t("b-badge",{attrs:{variant:"info"}},[e._v("\n                                                    ~0.012 BNB (~2$)\n                                                ")])],1)],1)],1),e._v(" "),t("b-button",{staticClass:"mt-3 py-3 px-5",attrs:{variant:"success",size:"lg",block:"",type:"submit"}},[e._v("\n                                        Create Token\n                                    ")])],1)],1)],1)])],1)],1)],1)],1)}),[function(){var e=this._self._c;return e("div",{staticClass:"column is-5"},[e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:"/assets/images/illustrations/worker.svg",alt:"Woman at laptop creating crypto coin."}})])])}],!1,null,null,null);t.default=d.exports}}]);