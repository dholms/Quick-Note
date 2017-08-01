module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.js',
    'dist/**.css',
    'dist/**.ico',
    'dist/**.json',
    'dist/assets/icons/*',
    'https://fonts.googleapis.com/icon?family=Material+Icons'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: /node-hnapi\.herokuapp\.com/,
    handler: 'networkFirst'
  }]
};
