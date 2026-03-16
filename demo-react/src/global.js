// phaser-ce requires PIXI and p2 as globals before phaser-split loads
// Dynamic imports ensure correct execution order
export async function initPhaser() {
  const PIXI = await import('phaser-ce/build/custom/pixi');
  window.PIXI = PIXI.default || PIXI;

  const p2 = await import('phaser-ce/build/custom/p2');
  window.p2 = p2.default || p2;

  const Phaser = await import('phaser-ce/build/custom/phaser-split');
  window.Phaser = Phaser.default || Phaser;
}
