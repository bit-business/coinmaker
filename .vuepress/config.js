const vars = require('./.env.json');
// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
if (typeof window !== 'undefined') {
  const web3 = require('web3/dist/web3.min.js');
}

module.exports = {

  target: 'node', // Or "async-node"
  mode: 'production', /* or "development", or "none" */
  chainWebpack (config) {
    config.resolve.alias.set('vue', 'vue/dist/vue.common.js');
    // config.plugin('polyfills').use(NodePolyfillPlugin);
  },
  description: 'Create your own crypto coin. BNB Smart Contracts in minutes. The easiest and fastest way to create your own BEP20 token on the Binance Smart Chain network. No coding skills are required.',
  base: '/',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://crypto-studio.net/assets/images/bep20-token-generator.png' }], // eslint-disable-line max-len
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:image', content: 'https://crypto-studio.net/assets/images/bep20-token-generator.png' }], // eslint-disable-line max-len
    // ['script', { src: '/dist/web3.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js' }],
    //  ['script', { src: 'https://cdn.jsdelivr.net/npm/@walletconnect/web3-provider@1.7.8/dist/umd/index.min.js' }],

    ['script',
      {
        src: 'https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1', // eslint-disable-line max-len
        defer: true,
      },
    ],
  ],
  // define: { global: 'globalThis' },
  plugins: [
    ['@vuepress/google-analytics', {
      ga: vars.gaId,
    }],
    ['vuepress-plugin-facebook-pixel', {
      pixelId: vars.fbPixelId,
    }],

  ],
  defaultNetwork: vars.defaultNetwork,
  serviceReceiver: vars.serviceReceiver,
};
