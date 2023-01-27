import { Skill } from '../model/skill';
import { HeroControl } from './heroControl';

export class SkillControl {
  owner: HeroControl;
  skill: Skill;
  effect: Effect[];
  constructor(id: string, owner: HeroControl) {
    this.owner = owner;
    this.skill = new Skill(id);
    this.initEffect();
  }

  initEffect() {
    // TODO
    this.effect = [EffectMap['001'].bind(this)];
  }

  canActive() {
    return this.owner.hero.mp > this.skill.mpCost;
  }

  // canBeTargeted(target: HeroControl) {
  //   return true;
  // }

  active(target: HeroControl, all: [HeroControl[], HeroControl[]]) {}
}

type Effect = (
  this: SkillControl,
  target: HeroControl,
  all: [HeroControl[], HeroControl[]]
) => void;

const EffectMap: {
  [id: string]: Effect;
} = {
  '001': function (t, all) {
    // 伤害
    const damage = this.skill.mainValue - t.armCheck();
    t.hero.hp -= damage;
  },
};
