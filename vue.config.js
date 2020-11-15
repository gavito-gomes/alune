module.exports = {
  pwa: {
    name: 'Alune',
    themeColor: '#4E6BAE',
    msTileColor: '#4E6BAE',
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