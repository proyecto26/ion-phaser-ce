import React, { useState, useEffect, useRef } from 'react'
import { IonPhaserCe, GameInstance } from '@ion-phaser-ce/react'
import Phaser from 'phaser-ce'
import logo from './assets/logo.png'

import './App.css'

class MainState extends Phaser.State {
  private helloWorld!: Phaser.Text

  init() {
    this.stage.backgroundColor = '#24252A';
  }
  create() {
    this.helloWorld = this.game.add.text(
      this.game.world.centerX, 
      this.game.world.centerY, 
      "Hello World", { 
        font: "40px Arial", 
        fill: "#ffffff" 
      }
    );
    this.helloWorld.anchor.set(0.5);
  }
  update() {
    this.helloWorld.angle += 1;
  }
} 

const gameConfig: GameInstance = {
  width: "100%",
  height: "100%",
  renderer: Phaser.AUTO,
  state: MainState
}

export default function App () {
  const gameRef = useRef<HTMLIonPhaserCeElement>()
  const [game, setGame] = useState<GameInstance>()
  const [initialize, setInitialize] = useState(false)

  const destroy = () => {
    gameRef.current?.destroy()
    setInitialize(false)
    setGame(undefined)
  }

  useEffect(() => {
    if (initialize) {
      setGame(Object.assign({}, gameConfig))
    }
  }, [initialize])

  return (
    <div className="App">
      <header className="App-header">
        { initialize ? (
          <>
            <IonPhaserCe ref={gameRef} class="game" game={game} initialize={initialize} />
            <div onClick={destroy} className="flex destroyButton">
              <a href="#1" className="bttn">Destroy</a>
            </div>
          </>
        ) : (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <div onClick={() => setInitialize(true)} className="flex">
              <a href="#1" className="bttn">Initialize</a>
            </div>
          </>
        )}
      </header>
    </div>
  );
}
