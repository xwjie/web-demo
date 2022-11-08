
module.exports = {
  retainLines: process.env.NODE_ENV !== 'production',
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',//可支持 module.exports 与 import 混搭使用
        useBuiltIns: 'entry',
        exclude: ['transform-typeof-symbol']
      }
    ]
  ],
  plugins:["./babel-plugin-replaceN2M"]
}
