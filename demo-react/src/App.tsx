import React, { Component } from 'react'
import { IonPhaserCe } from '@ion-phaser-ce/react'
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

const game: Phaser.IGameConfig = {
  width: "100%",
  height: "100%",
  renderer: Phaser.AUTO,
  state: MainState
}

class App extends Component {

  state = {
    initialize: false
  }

  initializeGame = () => {
    this.setState({ initialize: true })
  }

  destroy = () => {
    this.setState({ initialize: false })
  }

  render() {
    const { initialize } = this.state
    return (
      <div className="App">
        <header className="App-header">
          { initialize ? (
            <>
              <IonPhaserCe class="game" game={game} initialize={initialize} />
              <div onClick={this.destroy} className="flex destroyButton">
                <a href="#1" className="bttn">Destroy</a>
              </div>
            </>
          ) : (
            <>
              <img src={logo} className="App-logo" alt="logo" />
              <div onClick={this.initializeGame} className="flex">
                <a href="#1" className="bttn">Initialize</a>
              </div>
            </>
          )}
        </header>
      </div>
    );
  }
}

export default App;
