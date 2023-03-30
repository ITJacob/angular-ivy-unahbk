import { IArmInfo, IHeroInfo, ISkillInfo } from '../interface/IInfo';
import { getInfo, getInfos } from '../mock/mockInfo';
import { Skill } from '../model/skill';
import { Behavior } from './behavior';
import { GameRender } from './gameRender';
import { HeroControl } from './heroControl';
import { IUserData } from './IData';
import { Opreation } from './opreation';

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

  constructor(private userData: IUserData) {}

  init() {}

  beforeRound() {}

  waitOpreations() {
    return new Promise((resolve) => {
      resolve([new Opreation()]);
    });
  }

  addBehavior(hero: HeroControl, skill: Skill) {
    this.behaviors.push(new Behavior(hero, skill));
  }
}
