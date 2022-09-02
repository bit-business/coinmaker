<template>
    <b-navbar type="dark" variant="dark">

        <b-navbar-brand target="_self" href="https://crypto-studio.net/">
    <button type="button" class="btn btn-white">
  <img height="18" width="110" src="/assets/images/headerlogo.svg"></button>
         </b-navbar-brand>

        <b-navbar-nav class="ml-auto justify: center;" style="overflow-x: auto;">
                <b-nav-item to="/create-token/" :active="page === 'Generator'"><button type="button" class="btn btn-link btn-rounded"><img height="18" width="70" src="/assets/images/bsc.png"></button></b-nav-item>
                <b-nav-item target="_self" href="https://polybuilder.crypto-studio.net/"><button type="button" class="btn btn-link btn-rounded"><img height="18" width="70" src="/assets/images/polygon.png"></button></b-nav-item>
                <b-nav-item target="_self" @click="$bvToast.show('my-toast')"><button type="button" class="btn btn-link btn-rounded"><img height="18" width="70" src="/assets/images/ethereumgray.png"></button></b-nav-item>

<b-nav-item> <button type="button" class="btn btn-outline-warning" @click="connectmetamaskbutton" ref="btnToggle" >

                                    Connect</button>
  </b-nav-item>
                <b-toast id="my-toast" variant="info" solid>
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <strong class="mr-auto">ETHEREUM - Coming soon!</strong>
          <small class="text-muted mr-2">1 sec ago</small>
        </div>
      </template>
     Creator for ETHEREUM network is nearly finished. If you need it, please contact us by contact form and we will send you a link to BETA version.
    </b-toast>
       </b-navbar-nav>
    </b-navbar>
</template>
<script type="text/javascript">
  // // vue dapp
  // window.global = window
  // let global = globalThis
  // import process from 'process'
  // window.process = process
  // import buffer from 'buffer'
  // window.Buffer = buffer.Buffer
  // import util from 'util'
  // window.util = util
  // CONNECT TO ETHEREUM NETWORK NODE(S)
  // OPTION 1 "web3"
  // vue web3
  // import Web3 from "web3"
  // import WalletConnectProvider from "@walletconnect/web3-provider"
  // Create WalletConnect Provider
  window.global = window;

  </script>

<script>
  import dapp from '../mixins/dapp';
  import Web3 from 'web3';
 // import WalletConnectProvider from '@walletconnect/web3-provider';

  export default {
    name: 'Header',
    mixins: [
      dapp,
    ],
    props: {
      page: {
        type: String,
        default: null,
      },
    },

    mounted () {
      this.currentNetwork = this.getParam('network') || this.network.default;
      this.initDapp();
    },
    methods: {
      async initDapp () {
    
        this.network.current = this.network.list[this.currentNetwork];
        try {
          await this.initWeb3(this.currentNetwork, true);
          this.initService(this.currentNetwork);
        } catch (e) {
          console.log(e); // eslint-disable-line no-console
          this.makeToast(
            'Some errors occurred',
            e,
            'danger',
          );
          // document.location.href = this.$withBase('/');
        }
      },

      async connectmetamaskbutton () {
        if (this.$refs.btnToggle.innerText === 'Disconnect') {
          this.$refs.btnToggle.innerText = 'Connect';
          this.$refs.btnToggle.className = 'button primary-btn';
          await provider.disconnect();
          this.makeToast(
            'Disconnected',
            'Wallet disconnected!',
            'info',
          );
        }

   
        this.web3.eth.net.getId().then(netId => {
          switch (netId) {
          case 1:
            console.log('This is 1');
            provider.disconnect();
            break;
          case 56:
            console.log('This is the bsc mainnet.');
            this.$refs.btnToggle.innerText = 'Disconnect';
            this.$refs.btnToggle.className = 'button primary-btn';
            this.makeToast(
              'Connected',
              'Wallet connected!',
              'success',
            );
            break;
          case 97:
            console.log('This is the ropsten test network.');
            this.$refs.btnToggle.innerText = 'Disconnect';
            this.$refs.btnToggle.className = 'button primary-btn';
            this.makeToast(
              'Connected',
              'Wallet connected to Binance TEST network!',
              'success',
            );
            break;
          default:
            this.makeToast(
              'Warning',
              `Your Wallet in on the wrong network. Please switch on ${this.network.current.name} and try again!`,
              'warning',
            );
            this.$refs.btnToggle.innerText = 'Connect';
            provider.disconnect();
            //   this.$refs.btnToggle.className = 'btn btn-outline-warning';
            console.log('This is an unknown network.');
          }
        }).catch(error => {
          console.log(error);
        });
      },

    },

  };
</script>
