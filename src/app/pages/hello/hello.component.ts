import { Component, OnInit, ViewChild } from '@angular/core';
import { GameManager } from '../../control/gameManager';
import { PackageComponent } from '../package/package.component';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @ViewChild('player') player: PlayerComponent;
  @ViewChild('enemy') enemy: PlayerComponent;
  @ViewChild('package') package: PackageComponent;

  game: GameManager;

  async ngOnInit() {
    this.game = new GameManager();
    await this.game.init();
    // this.package.random();
  }

  async random() {
    this.game.start('0', '1');
  }
}
