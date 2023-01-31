import { Injectable } from '@angular/core';
import { GameManager } from '../../control/gameManager';

@Injectable()
export class GameService {
  game: GameManager;

  constructor() {
    this.game = new GameManager();
  }

}
