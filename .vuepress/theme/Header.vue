<template>
    <b-navbar type="dark" variant="dark">

        <b-navbar-brand target="_self" href="https://crypto-studio.net/">
       <button type="button" class="btn btn-dark">
<b-icon-menu-button-wide-fill></b-icon-menu-button-wide-fill></button>
        </b-navbar-brand>

       <b-navbar-nav class="ml-auto" style="overflow-x: auto;">>
                <b-nav-item to="/create-token/" :active="page === 'Generator'"><button type="button" class="btn btn-outline-secondary"><img height="21" width="75" src="/assets/images/bsc.png"></button></b-nav-item>
                <b-nav-item target="_self" href="https://polygon.crypto-studio.net/"><button type="button" class="btn btn-outline-secondary"><img height="21" width="75" src="/assets/images/polygon.png"></button></b-nav-item>
                <b-nav-item target="_self" @click="$bvToast.show('my-toast')"><button type="button" class="btn btn-outline-secondary"><img height="21" width="75" src="/assets/images/ethereumgray.png"></button></b-nav-item>
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

<script>
  import dapp from '../mixins/dapp';
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
        try {
          await this.web3Provider.request({ method: 'eth_requestAccounts' });
        } catch (e) {
          this.show = !this.show;
          this.$refs.btnToggle.innerText = 'Connect';
          this.$refs.btnToggle.className = 'btn btn-outline-warning';
        }

        if (!this.metamask.installed) {
          this.makeToast(
            'No Wallet',
            'To create a Token you need to install MetaMask!',
            'warning',
          );
        } else {
          if (this.metamask.netId === 56 || this.metamask.netId === 97) {
            this.$refs.btnToggle.innerText = 'Connected';
            this.$refs.btnToggle.className = 'btn btn-success';
          } else {
            this.makeToast(
              'Warning',
              `Your MetaMask in on the wrong network. Please switch on ${this.network.current.name} and try again!`,
              'warning',
            );
            this.$refs.btnToggle.innerText = 'Connect';
            this.$refs.btnToggle.className = 'btn btn-outline-warning';
          }
        }
        ethereum.on('chainChanged', () => {
          document.location.reload();
        });
      },

    },

  };
</script>
