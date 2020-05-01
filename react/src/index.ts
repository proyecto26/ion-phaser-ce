import Phaser from 'phaser-ce';

export * from './components';

export interface GameInstance extends Phaser.IGameConfig {
  instance?: Phaser.Game;
}