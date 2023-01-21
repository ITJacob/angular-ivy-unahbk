import { Hero } from '../model/hero';
import { Skill } from '../model/skill';

export class SkillControl {
  skill: Skill;
  constructor(id: string, private owner: Hero) {
    this.skill = new Skill(id);
  }

  canActive() {
    return this.owner.mp > this.skill.mpCost;
  }

  active(source: Hero, target: Hero, all: [Hero[], Hero[]]) {}
}
