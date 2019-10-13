import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';
import commonjs from 'rollup-plugin-commonjs';

// import path from 'path';
// const phaserModule = path.join(__dirname, './node_modules/phaser-ce/');
// const pixi = path.resolve(phaserModule, 'phaser-ce/build/custom/pixi');
// const p2 = path.resolve(phaserModule, 'phaser-ce/build/custom/p2');

export default {
  input: 'dist-transpiled/index.js',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true,
      globals: {
        'phaser-ce/build/custom/pixi': 'PIXI',
        'phaser-ce/build/custom/p2': 'p2'
      }
    },
    {
      file: 'dist/index.js',
      format: 'commonjs',
      preferConst: true,
      sourcemap: true,
      globals: {
        'phaser-ce/build/custom/pixi': 'PIXI',
        'phaser-ce/build/custom/p2': 'p2'
      }
    }
  ],
  external: [
    '@ion-phaser-ce/core',
    '@ion-phaser-ce/core/loader',
    'react',
    'tslib',
    'phaser-ce/build/custom/pixi',
    'phaser-ce/build/custom/p2',
    'phaser-ce'
  ],
  plugins: [
    resolve(),
    commonjs(),
    sourcemaps()
  ]
};