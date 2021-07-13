import 'phaser';
import { GameConfig } from './config';

class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
    console.log('hola a todos');
  }
}

window.addEventListener('load', () => {
  new Game(GameConfig);
});
