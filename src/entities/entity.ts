export abstract class Entity {
  constructor(
      scene: Phaser.Scene, position: Phaser.Geom.Point, asset_name: string) {
    this.position = position;
    this.scene = scene;
    this.sprite = scene.physics.add.sprite(position.x, position.y, asset_name);
  }

  sprite: Phaser.Physics.Arcade.Sprite;
  position: Phaser.Geom.Point;
  scene: Phaser.Scene;

  tick() {
    // console.log('Test tick');
    // Do nothing by default
  }
};