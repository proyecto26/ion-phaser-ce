import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'dist-transpiled/index.js',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true
    },
    {
      file: 'dist/index.js',
      format: 'commonjs',
      preferConst: true,
      sourcemap: true
    }
  ],
  external: [
    '@ion-phaser-ce/core',
    '@ion-phaser-ce/core/loader',
    'react',
    'tslib',
    'phaser-ce'
  ],
  plugins: [
    resolve(),
    commonjs(),
    sourcemaps()
  ]
};