import { Component } from '@angular/core';
import 'phaser-ce/build/custom/pixi'
import * as Phaser from 'phaser-ce';

const STATES = {
  FIRST: 'FirstState',
  SECOND: 'SecondState'
}

class CommonState extends Phaser.State {
  helloWorld: Phaser.Text

  init () {
    this.stage.backgroundColor = '#24252A';
  }

  create () {
    this.helloWorld = this.add.text(
      this.game.world.centerX, 
      this.game.world.centerY, 
      "Hello World", { 
        font: "40px Arial", 
        fill: "#ffffff" 
      }
    );
    this.helloWorld.anchor.set(0.5);

    var keyC = this.game.input.keyboard.addKey(Phaser.Keyboard.C);
    keyC.onDown.add(function() {
      this.game.state.start(
        this.state.current === STATES.FIRST ?
          STATES.SECOND : STATES.FIRST
      );
    }, this);
  }

  setAngle (angle: number) {
    this.helloWorld.angle = angle;
  }
}

class FirstState extends CommonState {
  update () {
    this.helloWorld.angle += 1;
  }
}

class SecondState extends CommonState {
  update () {
    this.helloWorld.angle -= 1;
  }
}

class BootState extends Phaser.State {
  create() {
    this.state.add(STATES.FIRST, FirstState, true);
    this.state.add(STATES.SECOND, SecondState, false);

    this.state.start(STATES.FIRST);
  }
}

interface GameInstance extends Phaser.IGameConfig {
  instance: Phaser.Game
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initialize = false
  game: GameInstance = {
    width: "100%",
    height: "100%",
    renderer: Phaser.AUTO,
    scaleMode: Phaser.ScaleManager.EXACT_FIT,
    state: BootState,
    instance: null
  }

  getInstance () {
    return this.game.instance;
  }

  initializeGame () {
    this.initialize = true;
  }

  changeAngle () {
    const instance = this.getInstance();
    const currentState = instance.state.getCurrentState() as CommonState;
    currentState.helloWorld.angle = 0;
  }
}
