import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
  namespace: 'ion-phaser-ce',
  plugins: [
    nodePolyfills(),
  ],
  commonjs: {
    include: 'node_modules/phaser-ce/**',
    namedExports: {
      'phaser-ce': ['Game', 'IGameConfig']
    }
  },
  globalScript: 'src/global/index.ts',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
