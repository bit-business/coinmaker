import config from '../config';
import utils from './utils';

import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js';

import HelloBEP20 from '../abi/token/HelloBEP20.json';
import SimpleBEP20 from '../abi/token/SimpleBEP20.json';
import StandardBEP20 from '../abi/token/StandardBEP20.json';
import BurnableBEP20 from '../abi/token/BurnableBEP20.json';
import MintableBEP20 from '../abi/token/MintableBEP20.json';
import CommonBEP20 from '../abi/token/CommonBEP20.json';
import UnlimitedBEP20 from '../abi/token/UnlimitedBEP20.json';
import AmazingBEP20 from '../abi/token/AmazingBEP20.json';

import ServiceReceiverArtifact from '../abi/service/ServiceReceiver.json';

const global = globalThis;

// import Web3ModalMixin from '../mixins/web3modalmixin';
// import web3 from 'web3/dist/web3.min.js'
if (typeof window !== 'undefined') {
  const Web3 = require('web3/dist/web3.min.js');
  let web3 = new Web3();
  const provider = new WalletConnectProvider({
    infuraId: 'bcd0880dd3d14b5abb743a63ce403e36',

    rpc: {
      97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      56: 'https://bsc-dataseed1.binance.org/',
    },
    bridge: 'https://bridge.walletconnect.org',
  });
  web3 = new Web3(provider);
}

export default {
  mixins: [
    utils,
  //  Web3ModalMixin,
  ],
  data () {
    return {
      web3: null,
      web3Provider: null,
      metamask: {
        installed: false,
        netId: null,
      },
      network: {
        default: config.defaultNetwork,
        current: null,
        map: {
          56: 'mainnet',
          97: 'testnet',
        },
        list: {
          mainnet: {
            web3Provider: 'https://bsc-dataseed.binance.org/',
            explorerLink: 'https://bscscan.com',
            id: 56,
            name: 'Binance Smart Chain',
          },
          testnet: {
            web3Provider: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
            explorerLink: 'https://testnet.bscscan.com',
            id: 97,
            name: 'Binance Smart Chain - Testnet',
          },
        },
      },
      serviceReceiver: config.serviceReceiver,
      tokenList: {
        HelloBEP20,
        SimpleBEP20,
        StandardBEP20,
        BurnableBEP20,
        MintableBEP20,
        CommonBEP20,
        UnlimitedBEP20,
        AmazingBEP20,
      },
      contracts: {
        token: null,
        service: null,
      },
    };
  },
  methods: {
    async connectWeb3 () {
      this.web3Provider = await web3Modal.connect();

      this.web3Provider.on('connect', async (chainId) => {
        this.web3Account = (await this.web3.eth.getAccounts())[0];
        this.web3Chain = chainId;
        this.$emit('Web3Connect');
      })   },

    async initWeb3 (network, checkWeb3) {
      if (global === undefined) {
        const global = globalThis;
      }
      if (!Object.prototype.hasOwnProperty.call(this.network.list, network)) {
        throw new Error(
          `Failed initializing network ${network}. Allowed values are ${Object.keys(this.network.list)}.`,
        );
      }

      if (checkWeb3 && (typeof window.ethereum !== 'undefined') && (typeof window !== 'undefined') && (typeof global !== 'undefined')) {
        console.log('injected bsc'); // eslint-disable-line no-console


        
        this.web3Provider = window.ethereum;

        this.web3 = new Web3(this.web3Provider);
        this.metamask.installed = this.web3Provider.isMetaMask;

        const netId = await this.promisify(this.web3.eth.getChainId);
        this.metamask.netId = netId;

        if (netId !== this.network.list[network].id) {
          this.network.current = this.network.list[this.network.map[netId]];
          await this.initWeb3(network, false);
        }
      } else {
        console.log('provided bsc'); // eslint-disable-line no-console
        this.network.current = this.network.list[network];
        this.web3Provider = new Web3.providers.HttpProvider(this.network.list[network].web3Provider);
        this.web3 = new Web3(this.web3Provider);
      }
    },
    initService (network) {
      this.contracts.service = new this.web3.eth.Contract(
        ServiceReceiverArtifact.abi,
        this.serviceReceiver[network],
      );
    },
    initToken (tokenType) {
      this.contracts.token = this.tokenList[tokenType];
      this.contracts.token.stringifiedAbi = JSON.stringify(this.contracts.token.abi);
    },
  },
};
