import { IUserData } from '../interface/IData';
import { IArmInfo, IHeroInfo, ISkillInfo } from '../interface/IInfo';
import { getInfo, getInfos } from '../mock/mockInfo';
import { Skill } from '../model/skill';
import { Behavior } from './behavior';
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
  behaviors: Behavior[] = [];

  constructor(private herosData: IUserData['heros']) {
    this.init();
  }

  private init() {
    const settings: ISetting[] = this.herosData.map(
      ({ level, teamPosition, heroInfoId, skillInfoIds, armInfoIds }) => ({
        level,
        teamPosition,
        heroInfo: getInfo<IHeroInfo>('HERO', heroInfoId),
        skillInfos: getInfos<ISkillInfo>('SKILL', skillInfoIds),
        armInfos: getInfos<IArmInfo>('ARM', armInfoIds),
      })
    );
    settings.forEach(({ heroInfo, skillInfos, armInfos }) => {
      this.heroControls.push(new HeroControl(heroInfo, skillInfos, armInfos));
    });
  }

  beforeRound() {
    this.heroControls.forEach((h) => {
      h.hero.mp += h.hero.mpSpeed;
    });
  }

  addBehavior(hero: HeroControl, skill: Skill) {
    this.behaviors.push(
      new Behavior(hero, skill)
    );
  }
}
