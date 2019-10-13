import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
  namespace: 'ion-phaser-ce',
  plugins: [
    nodePolyfills(),
  ],
  commonjs: {
    namedExports: {
      'phaser-ce': ['Game', 'IGameConfig']
    }
  },
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
  ],
  preamble: 'IonPhaser for Phaser Framework CE (Community Edition) - MIT License'
};
