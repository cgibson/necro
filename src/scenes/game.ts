import * as Entities from '../entities';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Phaser.Scene {
  private square: Phaser.GameObjects.Rectangle&
      {body: Phaser.Physics.Arcade.Body};

  constructor() {
    super(sceneConfig);
  }

  player: Entities.Player;

  // Logging nonsense
  _text: Phaser.GameObjects.Text;
  _logged_text: Array<string>;

  public preload() {
    this.load.image('test', 'assets/images/test_entity.png');
  }

  public create() {
    this.player = new Entities.Player(this, new Phaser.Geom.Point(50, 50));
    var style = {
      font: '15px Arial',
      fill: '#fff',
      align: 'left',  // the alignment of the text is independent of the bounds,
                      // try changing to 'center' or 'right'
      boundsAlignH: 'left',
      boundsAlignV: 'top',
      wordWrap: true,
      wordWrapWidth: 400
    };

    // Logging nonsense
    this._logged_text = new Array<string>();
    this._text = this.add.text(400, 16, '', style);
    this._text.setResolution(2);
    this._text.setWordWrapWidth(500);  // setTextBounds(16, 16, 768, 568);
    this.log('Game started');
  }

  log(text: string) {
    this._logged_text.push(text);
    if (this._logged_text.length > 20) {
      this._logged_text.shift();
    }
    this._text.setText(this._logged_text.join('\n'));
  }

  public update() {
    // All elements should tick first
    this.player.tick();

    const cursorKeys = this.input.keyboard.createCursorKeys();

    if (cursorKeys.up.isDown) {
      this.player.goUp();
    } else if (cursorKeys.down.isDown) {
      this.player.goDown();
    }

    if (cursorKeys.right.isDown) {
      this.player.goRight();
    } else if (cursorKeys.left.isDown) {
      this.player.goLeft()
    }
  }
}