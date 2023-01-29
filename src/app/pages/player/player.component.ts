import { Component, Input, OnInit } from '@angular/core';
import { PlayerControl } from '../../control/playerControl';
import { Player } from '../../model/player';
import { HeroControl } from '../../control/heroControl';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  @Input() team: string;
  player: PlayerControl;

  ngOnInit() {
    this.random();
  }

  async random() {
    const p = new Player('test');
    await p.init();
    this.player = new PlayerControl(p);
  }

  setTarget(t: HeroControl) {}
}
