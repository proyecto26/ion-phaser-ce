import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'ion-phaser-ce',
  commonjs: {
    namedExports: {
      'phaser-ce': ['Game', 'IGameConfig']
    }
  },
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@ion-phaser-ce/core',
      proxiesFile: './react/src/components.ts'
    }),
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
