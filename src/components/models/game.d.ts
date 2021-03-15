import { Game, IGameConfig } from 'phaser-ce';

export interface GameInstance extends IGameConfig {
  instance?: Game
}