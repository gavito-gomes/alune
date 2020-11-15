module.exports = {
  pwa: {
    name: 'Alune',
    themeColor: '#6664c7',
    msTileColor: '#6664c7',
    manifestOptions: {
      name: 'Alune',
      shortName: 'Alune',
      display: 'standalone',
      background_color: '#FFFFFF',
      description: 'Um planejador e organizador de estudos',
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
      globPatterns: ['dist/*.{js,png,html,css}']
    }
  }
}