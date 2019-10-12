import { Component, Prop, Watch, Element, Method } from '@stencil/core'
import Phaser, { Game } from 'phaser-ce'
import { GameInstance } from '../models'

@Component({
  tag: 'ion-phaser-ce',
  styleUrl: 'ion-phaser.css',
  shadow: false
})
export class IonPhaser {
  /**
   * The configuration of the game
   */
  @Prop({
    mutable: true,
    reflectToAttr: true
  }) game: GameInstance

  /**
   * To initialize the plugin manually
   */
  @Prop() initialize: boolean = true

  @Watch('initialize')
  onInitialize(initialize: boolean) {
    if (initialize && !this.getGameInstance()) {
      this.initializeGame()
    }
  }

  /**
   * Get the Phaser game instance
   */
  @Method()
  async getInstance(): Promise<Game> {
    return this.getGameInstance()
  }

  /**
   * Destroy the Phaser game instance
   */
  @Method()
  async destroy(): Promise<void> {
    if (this.getGameInstance()) {
      this.game.instance.destroy()
      this.game.instance = null
    }
  }

  @Element() el: HTMLElement

  initializeGame = () => {
    console.log('initialize')
    if(!this.game){
      throw new Error("The configuration of the game is required")
    }
    if(this.game.instance){
      throw new Error("A Phaser game already exist")
    }

    this.game.parent = this.game.parent || this.el
    this.game.instance = new Phaser.Game(this.game)

    console.log(this.game.instance)
  }

  componentWillLoad() {
    if (!this.getGameInstance() && this.initialize) {
      this.initializeGame()
    }
  }

  componentDidUnload() {
    this.destroy()
  }

  getGameInstance() {
    return this.game && this.game.instance
  }
}