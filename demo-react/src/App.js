/**
 * @flow
 */

import React, { Component } from 'react'
import { IonPhaser } from '@ion-phaser-ce/react'
import Phaser from 'phaser-ce'
import logo from './assets/logo.png'

import './App.css'

class App extends Component {

  state = {
    unmounted: false,
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
          this.helloWorld = this.game.add.text(
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

  initializeGame = () => {
    this.setState({ initialize: true })
  }

  destroy = () => {
    this.setState({ unmounted: true })
  }

  render() {
    const { initialize, game, unmounted } = this.state
    return (
      <div className="App">
        <header className="App-header">
          { !initialize &&
            <React.Fragment>
              <img src={logo} className="App-logo" alt="logo" />
              <div onClick={this.initializeGame} className="flex">
                <a href="#1" className="bttn">Initialize</a>
              </div>
            </React.Fragment>
          }
          { !unmounted && <IonPhaser class="game" game={game} initialize={initialize} /> }
          { initialize && !unmounted &&
            <div onClick={this.destroy} className="flex destroyButton">
              <a href="#1" className="bttn">Destroy</a>
            </div>
          }
        </header>
      </div>
    );
  }
}

export default App;
