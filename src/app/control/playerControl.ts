import { Hero } from '../model/hero';
import { Player } from '../model/player';
import { HeroControl } from './heroControl';

export class PlayerControl {
  heros: HeroControl[];

  constructor(player: Player) {
    this.heros = new HeroControl(player);
  }
}
