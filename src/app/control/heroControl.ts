import { Arm } from '../model/arm';
import { Hero } from '../model/hero';
import { Skill } from '../model/skill';
import { Buff } from './buff';

export class HeroControl {
  hero: Hero;
  // 天赋
  // talent: Talent;

  skills: Skill[] = [];
  arms: Arm[] = []; // ((h: HeroControl) => void)[] = []; // 装备
  buffs: Buff[] = []; // ((h: HeroControl) => void)[] = []; // 状态
  teamIndex: number; // 队伍站位

  constructor(
    hero: Hero['info'],
    skills: Skill['info'][],
    arms: Arm['info'][]
  ) {
    this.hero = new Hero(hero);
    // this.initTalent(hero.talentId);
    this.skills = skills.map((s) => new Skill(s));
    this.arms = arms.map((a) => new Arm(a));
  }

  checkSkill(skill: Skill) {
    // TODO:
    // check 英雄当前状态，eg: 晕眩、沉默、吟唱，
    // check 技能的条件是否满足，eg: 装备武器、存在尸体
    return this.hero.mp > skill.info.mpCost;
  }

  initTalent(id: string) {
    // this.talent = new Talent(id);
  }

  armCheck() {
    // this.arms.forEach((arm) => arm(this));
    return 0;
  }

  buffCheck() {
    // this.buffs.forEach((buff) => buff(this));
  }
}
