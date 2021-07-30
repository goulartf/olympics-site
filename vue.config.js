module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
      ? '/olympics-site/'
      : '/',
  pwa: {
    name: 'Ver Olimpiadas',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: 'dev/sw.js',
    //   // ...other Workbox options...
    // },
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: 'img/icons/favicon.ico',
      msTileImage: 'img/icons/favicon.ico'
    }
  }
}
