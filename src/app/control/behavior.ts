import { Skill } from '../model/skill';
import { HeroControl } from './heroControl';

export class Behavior {
  constructor(public actor: HeroControl, public skill: Skill) {
    this.init();
  }

  init() {}

  active(all: [HeroControl[], HeroControl[]]) {
    const target = this.findTarget(all);
    // TODO: 应该再出一个工厂类来动态校验可否施法，不应该让heroControl来做
    const checkRes = this.actor.activeCheck(this.skill);
    if (!checkRes) {
      console.log('施法失败');
      return;
    }

    this.skill.effects.forEach((effect) => {
      effect.call(this.skill, this.actor, target, all);
    });
  }

  private findTarget(all: [HeroControl[], HeroControl[]]) {
    // TODO:
    // 目前主打队首
    return all[1][0];
  }
}
