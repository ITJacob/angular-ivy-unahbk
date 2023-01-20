import { Hero } from '../model/hero';

export class HeroControl {
  hero: Hero;

  arms: ((h: HeroControl) => void)[] = []; // 装备
  buffs: ((h: HeroControl) => void)[] = []; // 状态

  constructor(params: any) {
    this.hero = new Hero(params);
  }

  armCheck() {
    this.arms.forEach((arm) => arm(this));
  }

  buffCheck() {
    this.buffs.forEach((buff) => buff(this));
  }
}
