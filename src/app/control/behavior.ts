import { Skill } from '../model/skill';
import { EffectFunc, EffectMap } from './effectMap';
import { HeroControl } from './heroControl';

export class Behavior {
  effects: EffectFunc[];
  constructor(
    private actor: HeroControl,
    private skill: Skill,
    private all: [HeroControl[], HeroControl[]]
  ) {
    this.init();
  }

  init() {
    const effectId = this.skill.info.mainEffectInfoId;
    // TODO
    // 暂时默认都是直接伤害
    this.effects = [EffectMap['001']];
  }

  active() {
    // if (!this.check(this.skill)) {
    //   return false;
    // }
    const target = this.findTarget(this.all);

    this.effects.forEach((effect) => {
      effect.call(this.skill, this.actor, target, this.all);
    });
  }

  private findTarget(all: [HeroControl[], HeroControl[]]) {
    // TODO:
    // 目前主打队首
    return all[1][0];
  }
}
