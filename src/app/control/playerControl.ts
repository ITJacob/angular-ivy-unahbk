import { Player } from '../model/player';
import { HeroControl } from './heroControl';

export class PlayerControl {
  player: Player;
  heroControls: HeroControl[] = [];

  constructor(playerId: string) {
    this.player = new Player(playerId);
  }

  async init() {
    await this.player.fetch();
    this.player.settings.forEach(({ heroInfo, skillInfos, armInfos }) => {
      this.heroControls.push(new HeroControl(heroInfo, skillInfos, armInfos));
    });
  }
}
