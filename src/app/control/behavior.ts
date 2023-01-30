import { Skill } from '../model/skill';
import { EffectFunc, EffectMap } from './effectMap';
import { HeroControl } from './heroControl';

export class Behavior {
  skill: Skill;
  effects: EffectFunc[];
  constructor(public actor: HeroControl) {}

  checkActive(skill: Skill) {
    // TODO:
    // check 英雄当前状态，eg: 晕眩、沉默、吟唱，
    // check 技能的条件是否满足，eg: 装备武器、存在尸体
    return this.actor.hero.mp > skill.info.mpCost;
  }

  setBehave(skill: Skill) {
    this.skill = skill;

    // TODO
    // 暂时默认都是直接伤害
    this.effects = [EffectMap['001']];
  }

  active(target: HeroControl, all: [HeroControl[], HeroControl[]]) {
    if (!this.checkActive(this.skill)) {
      return false;
    }

    this.effects.forEach((effect) => {
      effect.call(this.skill, this.actor, target, all);
    });
  }
}
