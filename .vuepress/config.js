const vars = require('./.env.json');


module.exports = {

  chainWebpack (config) {
    config.resolve.alias.set('vue', 'vue/dist/vue.common.js');
   
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
 // ['script', { src: 'https://uploads.codesandbox.io/uploads/user/68052bd8-43d7-466a-af1e-bb0ab2bd3a40/F6-W-web3.min.js' }],
  //['script', { src: 'https://cdn.jsdelivr.net/npm/@walletconnect/web3-provider@1.7.8/dist/umd/index.min.js' }],

    ['script',
      {
        src: 'https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1', // eslint-disable-line max-len
        defer: true,
      },
    ],
  ],
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
