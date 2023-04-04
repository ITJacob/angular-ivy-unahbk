import { EffectFunc, EffectMap } from '../control/effectMap';
import { ISkillInfo } from '../IInfo';
import { IModel } from '../IModel';


export class Skill implements IModel {
  
  info: ISkillInfo;
  effects: EffectFunc[];

  constructor(params: ISkillInfo) {
    this.info = params;
    this.init();
  }

  private init() {
    const effectId = this.info.mainEffectInfoId;
    // TODO
    // 暂时默认都是直接伤害
    this.effects = [EffectMap['001']];
  }
}
