# IonPhaser CE for React

## Introduction
React specific wrapper for [ion-phaser-ce](https://github.com/proyecto26/ion-phaser-ce) component.

## Why?
*Most people who use React don’t use [Web Components](https://reactjs.org/docs/web-components.html)* and there're some limitations handling data with [Custom Components](https://custom-elements-everywhere.com/) from React.
Thus, this **React component** was created not to need to reference their **Custom Elements** using a **ref** and manually attach the **game**, this makes working with [IonPhaser CE](https://github.com/proyecto26/ion-phaser-ce) not cumbersome 👍🏻

## Usage

- Import Phaser CE dependencies before, check the example [here](https://github.com/proyecto26/ion-phaser-ce/blob/master/demo-react/src/global.js):

```js
window.PIXI = require('phaser-ce/build/custom/pixi');
window.p2 = require('phaser-ce/build/custom/p2');
window.Phaser = require('phaser-ce/build/custom/phaser-split');
```

- Using the **IonPhaserCe** component:

```tsx
import React, { useRef, useState } from 'react'
import Phaser from 'phaser-ce'
import { IonPhaserCe } from '@ion-phaser-ce/react'

const game = {
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

export default function App () {
  const gameRef = useRef(null)
  // Call `setInitialize` when you want to initialize your game! :)
  const [initialize, setInitialize] = useState(false)
  const destroy = () => {
    if (gameRef.current) {
      gameRef.current.destroy()
    }
    setInitialize(false)
  }
  return (
    <>
      <IonPhaserCe ref={gameRef} game={game} initialize={initialize} />
      <button onClick={() => setInitialize(true)}>Initialize</button>
      <button onClick={destroy}>Destroy</button>
    </>
  )
}
```


## Supporting 🍻
I believe in Unicorns 🦄
Support [me](http://www.paypal.me/jdnichollsc/2), if you do too.
[Professionally supported @ion-phaser-ce/react is coming soon](https://tidelift.com/subscription/pkg/npm--ion-phaser-react?utm_source=npm--ion-phaser-react&utm_medium=referral&utm_campaign=readme)

## Happy coding 💯
Made with ❤️

<img width="150px" src="https://avatars0.githubusercontent.com/u/28855608?s=200&v=4" align="right">
