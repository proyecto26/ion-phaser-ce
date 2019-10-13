import PIXI from 'phaser-ce/build/custom/pixi'
import p2 from 'phaser-ce/build/custom/p2'

declare const PIXI: any;
declare const p2: any;

export default () => {
  const win = window;
  (win as any).PIXI = (win as any).PIXI || PIXI;
  (win as any).p2 = (win as any).p2 || p2;
}