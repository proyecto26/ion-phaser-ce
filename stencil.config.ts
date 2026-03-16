import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'ion-phaser-ce',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@ion-phaser-ce/core',
      proxiesFile: './react/src/components.ts',
      outDir: './react/src',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
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
