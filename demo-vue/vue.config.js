var path = require('path')

var phaserModule = path.join(__dirname, '../node_modules/phaser-ce')
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
var pixi = path.join(phaserModule, 'build/custom/pixi.js')
var p2 = path.join(phaserModule, 'build/custom/p2.js')

module.exports = {
  chainWebpack: config => {
    config.resolve
    .extensions
      .merge(['.mjs', '.js', '.jsx', '.vue', '.json', '.wasm'])
      .end()
    .alias
      .set('phaser', phaser)
      .set('pixi', pixi)
      .set('p2', p2);

    config.module
      .rule('phaser')
      .test(/phaser-split\.js$/)
      .use('expose-loader?Phaser')
        .loader('expose-loader?Phaser')
        .end()

    config.module
      .rule('pixi')
      .test(/pixi\.js$/)
      .use('expose-loader?PIXI')
        .loader('expose-loader?PIXI')
        .end()

    config.module
      .rule('p2')
      .test(/p2\.js$/)
      .use('expose-loader?p2')
        .loader('expose-loader?p2')
        .end()
  }
}