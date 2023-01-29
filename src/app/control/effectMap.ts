import { Skill } from '../model/skill';
import { Buff } from './buff';
import { HeroControl } from './heroControl';

export type EffectAc = (
  this: Skill,
  source: HeroControl,
  target: HeroControl,
  all: [HeroControl[], HeroControl[]]
) => void | EffectCb;

type EffectCb = (
  this: Buff,
  source: HeroControl,
  target: HeroControl,
  all: [HeroControl[], HeroControl[]]
) => void;

export const EffectMap: {
  [id: string]: EffectAc;
} = {
  '001': function (s, t, all) {
    // 伤害
    s.hero.mp -= this.info.mpCost;
    const damage = this.info.mainValue - t.armCheck();
    t.hero.hp -= damage;
  },
};
