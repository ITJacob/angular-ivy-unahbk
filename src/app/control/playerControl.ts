import { Player } from '../model/player';
import { HeroControl } from './heroControl';

export class PlayerControl {
  heroControls: HeroControl[] = [];

  constructor(player: Player) {
    this.init(player);
  }

  init(player: Player) {
    player.settings.forEach(({heroInfo, skillInfos, armInfos}) => {
      this.heroControls.push(new HeroControl(heroInfo, skillInfos, armInfos));
    })
  }
}
