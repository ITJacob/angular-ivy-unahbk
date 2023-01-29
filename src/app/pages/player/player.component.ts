import { Component, Input, OnInit } from '@angular/core';
import { PlayerControl } from '../../control/playerControl';
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
    this.player = new PlayerControl('test');
  }

  async random() {
    await this.player.init();
  }

  setTarget(t: HeroControl) {}
}
