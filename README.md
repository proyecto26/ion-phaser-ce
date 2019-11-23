![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-brightgreen.svg)](https://github.com/proyecto26/ion-phaser-ce/graphs/commit-activity)
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![TotalDownloads][total-downloads-image]][npm-url]
[![Twitter Follow][twitter-image]][twitter-url]

[npm-image]:http://img.shields.io/npm/v/@ion-phaser-ce/core.svg
[npm-url]:https://npmjs.org/package/@ion-phaser-ce/core
[downloads-image]:http://img.shields.io/npm/dm/@ion-phaser-ce/core.svg
[total-downloads-image]:http://img.shields.io/npm/dt/@ion-phaser-ce/core.svg?label=total%20downloads
[twitter-image]:https://img.shields.io/twitter/follow/jdnichollsc.svg?style=social&label=Follow%20me
[twitter-url]:https://twitter.com/jdnichollsc


# IonPhaser CE (Community Edition)
Web Component built with **[Stencil.js](https://github.com/ionic-team/stencil)** to integrate **[Phaser CE (Community Edition)](https://github.com/photonstorm/phaser-ce)** with any other framework.
<p align="center">
  <img width="600px" alt="IonPhaser" src="./img/ionphaser.jpg">
</p>
<p align="center">Inspired by the old <a href="https://github.com/jdnichollsc/IonPhaser">IonPhaser directive</a></p>

## Demo

Do you want to see this web component in action? Visit https://codepen.io/jdnichollsc/full/NWWxezM yay! 🎉
- Flappy Bird: https://codepen.io/jdnichollsc/full/jOOWXJQ
- Like Thor: https://codepen.io/jdnichollsc/full/gOOroMr

## IonPhaser 3
Looking for [Phaser Framework 3](https://github.com/photonstorm/phaser)? Check [here](https://github.com/proyecto26/ion-phaser)!

## Getting Started

### Packages

| Project | Package | Version | Links |
| ------- | ------- | ------- |:-----:|
| **Core** | [`@ion-phaser-ce/core`](https://www.npmjs.com/package/@ion-phaser-ce/core) | [![version](https://img.shields.io/npm/v/@ion-phaser-ce/core/latest.svg)](https://www.npmjs.com/package/@ion-phaser-ce/core) | [`README.md`](./README.md)
| **React** | [`@ion-phaser-ce/react`](https://www.npmjs.com/package/@ion-phaser-ce/react) | [![version](https://img.shields.io/npm/v/@ion-phaser-ce/react/latest.svg)](https://www.npmjs.com/package/@ion-phaser-ce/react) | [`README.md`](react/README.md)

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/@ion-phaser-ce/core@1.0.2/dist/ionphaser.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install @ion-phaser-ce/core --save`
- Put a script tag similar to this `<script src='node_modules/@ion-phaser-ce/core/dist/ion-phaser-ce.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install @ion-phaser-ce/core --save`
- Add an import to the npm packages `import @ion-phaser-ce/core;`
- Then you can use the element anywhere in your template, JSX, html etc

## Usage
Simply add this tag wherever you want in your project:
```html
<ion-phaser-ce [game]="game"></ion-phaser-ce>
```

These properties are available on the component:
- [_game_](#configuration) (**required**)
- **initialize** (optional)

# Framework integrations

## Angular

Using `ion-phaser-ce` component within an Angular project:

### Including the Custom Elements Schema

Including the `CUSTOM_ELEMENTS_SCHEMA` in the module allows the use of Web Components in the HTML files. Here is an example of adding it to `AppModule`:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

The `CUSTOM_ELEMENTS_SCHEMA` needs to be included in any module that uses **IonPhaser**.

### Calling defineCustomElements

**IonPhaser** component includes a function used to load itself in the application window object. That function is called `defineCustomElements()` and needs to be executed once during the bootstrapping of your application. One convenient place to add it is in the `main.ts` file as follows:

```tsx
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements as defineIonPhaser } from '@ion-phaser-ce/core/loader';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineIonPhaser(window);
```

### Using IonPhaser in an Angular component

```html
<ion-phaser-ce
  [game]="game"
  [initialize]="initialize"
></ion-phaser-ce>
```

```ts
public game = {
  alignH?: boolean;
  alignV?: boolean;
  antialias?: boolean;
  backgroundColor?: number | string;
  canvas?: HTMLCanvasElement;
  canvasId?: string;
  canvasStyle?: string;
  crisp?: boolean;
  disableVisibilityChange?: boolean;
  disableStart?: boolean;
  enableDebug?: boolean;
  failIfMajorPerformanceCaveat?: boolean;
  forceSetTimeOut?: boolean;
  fullScreenScaleMode?: number;
  fullScreenTarget?: HTMLElement;
  height?: number | string;
  keyboard?: boolean;
  maxPointers?: number;
  mouse?: boolean;
  mouseWheel?: boolean;
  mspointer?: boolean;
  multiTexture?: boolean;
  parent?: HTMLElement | string;
  physicsConfig?: any;
  pointerLock?: boolean;
  preserveDrawingBuffer?: boolean;
  renderer?: number;
  resolution?: number;
  roundPixels?: boolean;
  scaleH?: number;
  scaleMode?: number;
  scaleV?: number
  seed?: number;
  state?: any;
  touch?: boolean;
  transparent?: boolean;
  trimH?: number;
  trimV?: number;
  width?: number | string;
  instance: Game // It's created internally when the game is initialized
};

public initialize: boolean;

constructor(private api : ApiService){}

initializeGame() {
  this.game = {
    width: "100%",
    height: "100%",
    renderer: Phaser.AUTO,
    state: {}
  }
  this.initialize = true
}

getInstance(){
  return this.game.instance
}
```

[_from stencil documentation_](https://github.com/ionic-team/stencil-site/blob/master/src/docs/framework-integration/angular.md)

## React

### Specific Wrapper
When using a wrapper component, It's not necessary to access the reference directly to configure the game. More details [here](./react/README.md).
```tsx
import React, { Component } from 'react'
import Phaser from 'phaser-ce'
import { IonPhaser } from '@ion-phaser-ce/react'

class App extends Component {
  state = {
    initialize: false,
    game: {
      width: "100%",
      height: "100%",
      renderer: Phaser.AUTO,
      state: {}
    }
  }
  render() {
    const { initialize, game } = this.state
    return (
      <IonPhaser game={game} initialize={initialize} />
    )
  }
}
```

### Web Component
Other option is using the web component directly: 

```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import { defineCustomElements as defineIonPhaser } from '@ion-phaser-ce/core/loader'
import Phaser from 'phaser-ce'

const game = {
  width: "100%",
  height: "100%",
  renderer: Phaser.AUTO,
  state: {}
}

ReactDOM.render(<ion-phaser-ce ref={el => el.game = game} />, document.getElementById('root'));

defineIonPhaser(window);
```

[_from stencil documentation_](https://github.com/ionic-team/stencil-site/blob/master/src/docs/framework-integration/react.md)

## Vue

In order to use the `ion-phaser-ce` Web Component inside of a Vue application, it should be modified to define the custom elements and to inform the Vue compiler which elements to ignore during compilation. This can all be done within the `main.js` file as follows:

```tsx
import Vue from 'vue';
import { defineCustomElements as defineIonPhaser } from '@ion-phaser-ce/core/loader'

import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/ion-\w*/];

// Bind the IonPhaser custom element to the window object
defineIonPhaser(window);

new Vue({
  render: h => h(App)
}).$mount('#app');
```

### Using IonPhaser in a Vue component

```vue
<template>
  <ion-phaser-ce
    v-bind:game.prop="game"
    v-bind:initialize.prop="initialize"
  />
</template>

<script>
import Phaser from 'phaser-ce'
export default {
  name: 'HelloWorld',
  data() {
    return {
      initialize: false,
      game: {
        width: "100%",
        height: "100%",
        renderer: Phaser.AUTO,
        state: {
          init: function() {
            this.stage.backgroundColor = '#24252A';
          },
          create: function() {
            this.helloWorld = this.add.text(
              this.game.world.centerX,
              this.game.world.centerY,
              "Hello World", { 
                font: "40px Arial", 
                fill: "#ffffff" 
              }
            );
            this.helloWorld.anchor.set(0.5);
          },
          update: function() {
            this.helloWorld.angle += 1;
          }
        }
      }
    }
  }
}
</script>
```

[_from stencil documentation_](https://github.com/ionic-team/stencil-site/blob/master/src/docs/framework-integration/vue.md)

## Supporting 🍻
I believe in Unicorns 🦄
Support [me](http://www.paypal.me/jdnichollsc/2), if you do too.

## Security contact information 🚨
To report a security vulnerability, please use the [Tidelift security contact](https://tidelift.com/security). Tidelift will coordinate the fix and disclosure.

## Happy coding 💯
Made with ❤️

<img width="150px" src="https://avatars0.githubusercontent.com/u/28855608?s=200&v=4" align="right">
