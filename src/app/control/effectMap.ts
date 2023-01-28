import { Skill } from '../model/skill';
import { HeroControl } from './heroControl';

export type Effect = (
  this: Skill,
  source: HeroControl,
  target: HeroControl,
  all: [HeroControl[], HeroControl[]]
) => void;

export const EffectMap: {
  [id: string]: Effect;
} = {
  '001': function (s, t, all) {
    // 伤害
    s.hero.mp -= this.info.mpCost;
    const damage = this.info.mainValue - t.armCheck();
    t.hero.hp -= damage;
  },
};
