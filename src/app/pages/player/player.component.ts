import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../control/player';
import { HeroControl } from '../../control/heroControl';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  @Input() team: string;
  @Input() player: Player;

  ngOnInit() {
  }

  setTarget(t: HeroControl) {}
}
