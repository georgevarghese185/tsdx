module.exports = {
  presets: [
    // ensure Babel presets are merged and applied
    './test-babel-preset'
  ],
  plugins: [
    'styled-components',
   ['@babel/plugin-transform-runtime', { helpers: false }],
  ]
}
