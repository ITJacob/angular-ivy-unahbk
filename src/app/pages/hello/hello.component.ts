import { Component, OnInit, ViewChild } from '@angular/core';
import { GameManager } from '../../control/gameManager';
import { Player } from '../../control/player';
import { PackageComponent } from '../package/package.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  player: Player;
  match: Player;
  @ViewChild('package') package: PackageComponent;

  game: GameManager;

  async ngOnInit() {
    this.game = new GameManager();
    await this.game.init();
    // this.package.random();
  }

  async random() {
    await this.game.start('0', '1');
    this.player = this.game.player;
    this.match = this.game.match;
  }
}
