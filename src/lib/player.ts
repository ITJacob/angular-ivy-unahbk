import { IArmInfo, IHeroInfo, ISkillInfo } from '../interface/IInfo';
import { getInfo, getInfos } from '../mock/mockInfo';
import { Skill } from '../model/skill';
import { Behavior } from './behavior';
import { GameRender } from './gameRender';
import { HeroControl } from './heroControl';
import { IUserData } from './IData';

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

  constructor(private userData: IUserData, private render: GameRender) {
    this.init();
  }

  init() {
    const settings: ISetting[] = this.userData.heros.map(
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
    this.behaviors = [];
    this.heroControls.forEach((h) => {
      h.hero.mp += h.hero.mpSpeed;
    });
  }

  addBehavior(hero: HeroControl, skill: Skill) {
    this.behaviors.push(new Behavior(hero, skill));
  }
}
