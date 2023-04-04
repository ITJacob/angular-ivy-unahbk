import { Buff } from 'src/app/control/buff';

import { IHeroData } from './IData';
import { Accessory } from './model/accessory';
import { Arm } from './model/arm';
import { Hero } from './model/hero';
import { Skill } from './model/skill';

export class HeroControl {
  hero: Hero;
  // 天赋
  // talent: Talent;

  skills: Skill[] = [];
  arms: Arm[] = []; // ((h: HeroControl) => void)[] = []; // 装备
  accessories: any[] = []; // 饰品

  buffs: Buff[] = []; // ((h: HeroControl) => void)[] = []; // 状态
  teamIndex: number; // 队伍站位

  constructor(private data: IHeroData) {
    this.hero = new Hero(data.attr);
    // this.initTalent(hero.talentId);
    this.skills = data.skillInfos.map((s) => new Skill(s));
    this.arms = data.armInfos.map((a) => new Arm(a));
    this.accessories = data.accessoryInfos.map((a) => new Accessory(a));
  }

  skillCheck(skill: Skill) {
    // TODO:
    // check 英雄当前状态，eg: 晕眩、沉默、吟唱，
    // check 技能的条件是否满足，eg: 装备武器、存在尸体
    return this.hero.mp > skill.info.mpCost;
  }

  initTalent(id: string) {
    // this.talent = new Talent(id);
  }

  activeCheck(skill: Skill) {
    // TODO: 轮到出手执行时，判断是否能行动
    return this.skillCheck(skill);
  }

  armCheck() {
    // this.arms.forEach((arm) => arm(this));
    return 0;
  }

  buffCheck() {
    // this.buffs.forEach((buff) => buff(this));
  }
}
