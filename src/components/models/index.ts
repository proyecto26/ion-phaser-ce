
import Phaser from 'phaser-ce';

export interface GameInstance extends Phaser.IGameConfig {
  instance?: Phaser.Game
}