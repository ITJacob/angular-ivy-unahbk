import { Skill } from '../model/skill';
import { EffectFunc, EffectMap } from './effectMap';
import { HeroControl } from './heroControl';

export class Behavior {
  effects: EffectFunc[];
  constructor(public actor: HeroControl, private skill: Skill) {
    this.init();
  }

  init() {
    const effectId = this.skill.info.mainEffectInfoId;
    // TODO
    // 暂时默认都是直接伤害
    this.effects = [EffectMap['001']];
  }

  active(all: [HeroControl[], HeroControl[]]) {
    const target = this.findTarget(all);
    // TODO: 应该再出一个工厂类来动态校验可否施法，不应该让heroControl来做
    const checkRes = this.actor.activeCheck(this.skill);
    if (!checkRes) {
      console.log('施法失败');
      return;
    }

    this.effects.forEach((effect) => {
      effect.call(this.skill, this.actor, target, all);
    });
  }

  private findTarget(all: [HeroControl[], HeroControl[]]) {
    // TODO:
    // 目前主打队首
    return all[1][0];
  }
}
