module.exports = {
  chainWebpack: (config) => {
    config.resolve
    .alias
      .set('phaser', 'phaser-ce/build/custom/phaser-split.js')
      .set('pixi', 'phaser-ce/build/custom/pixi.js')
      .set('p2', 'phaser-ce/build/custom/p2.js')

    config.module
      .rule('phaser')
      .test(/phaser-split\.js$/)
      .use('expose-loader?Phaser')
        .loader('expose-loader')
        .options({
          exposes: {
            globalName: "Phaser",
            override: true,
          }
        })
        .end()

    config.module
      .rule('pixi')
      .test(/pixi\.js$/)
      .use('expose-loader?PIXI')
        .loader('expose-loader')
        .options({
          exposes: {
            globalName: "PIXI",
            override: true,
          }
        })
        .end()

    config.module
      .rule('p2')
      .test(/p2\.js$/)
      .use('expose-loader?p2')
        .loader('expose-loader')
        .options({
          exposes: {
            globalName: "p2",
            override: true,
          }
        })
        .end()
  }
}