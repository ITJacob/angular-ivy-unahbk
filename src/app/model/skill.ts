import { ISkillInfo } from '../interface/IInfo';
import { IModel } from '../interface/IModel';

export class Skill implements IModel {
  info: ISkillInfo;

  constructor(params: ISkillInfo) {
    this.info = params;
  }
}
