import { Arm } from '../model/arm';
import { Buff } from '../model/buff';
import { Hero } from '../model/hero';
import { Skill } from '../model/skill';
import { Talent } from '../model/talent';

export class HeroControl {
  hero: Hero;
  // 天赋
  talent: Talent;

  skills: Skill[] = [];
  arms: Arm[] = []; // ((h: HeroControl) => void)[] = []; // 装备
  buffs: Buff[] = []; // ((h: HeroControl) => void)[] = []; // 状态
  teamIndex: number; // 队伍站位

  constructor(params: any) {
    this.hero = new Hero(params);
    this.initTalent(params.talentId);
  }

  initTalent(id: string) {
    this.talent = new Talent(id);
  }

  armCheck() {
    // this.arms.forEach((arm) => arm(this));
  }

  buffCheck() {
    // this.buffs.forEach((buff) => buff(this));
  }
}
