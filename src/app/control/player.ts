import { IArmInfo, IHeroInfo, ISkillInfo } from '../interface/IInfo';
import { HeroControl } from './heroControl';

export interface ISetting {
  level: number;
  teamPosition: number;
  heroInfo: IHeroInfo;
  skillInfos: ISkillInfo[];
  armInfos: IArmInfo[];
}

export class Player {
  heroControls: HeroControl[] = [];

  constructor(private settings: ISetting[]) {
    this.init();
  }

  private init() {
    this.settings.forEach(({ heroInfo, skillInfos, armInfos }) => {
      this.heroControls.push(new HeroControl(heroInfo, skillInfos, armInfos));
    });
  }
}
