import {game} from '../main'

import {Entity} from './entity';

export class Player extends Entity {
  constructor(scene: Phaser.Scene, position: Phaser.Geom.Point) {
    super(scene, position, 'test');
  }

  goUp() {
    this.sprite.setVelocityY(-500);
  }

  goDown() {
    this.sprite.setVelocityY(500);
  }

  goLeft() {
    this.sprite.setVelocityX(-500);
  }

  goRight() {
    this.sprite.setVelocityX(500);
  }

  tick() {
    // Arrest any movement by the player
    this.sprite.setVelocity(0, 0);
  }
}