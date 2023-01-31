import { Component, OnInit, ViewChild } from '@angular/core';
import { GameManager } from '../../control/gameManager';
import { Player } from '../../control/player';
import { PackageComponent } from '../package/package.component';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class GameComponent implements OnInit {
  player: Player;
  match: Player;
  @ViewChild('package') package: PackageComponent;

  constructor(private service: GameService) {}
  game: GameManager;

  async ngOnInit() {
    this.game = this.service.game;
    await this.game.init();
    // this.package.random();
  }

  async random() {
    await this.game.start('0', '1');
    this.player = this.game.player;
    this.match = this.game.match;
  }
}
