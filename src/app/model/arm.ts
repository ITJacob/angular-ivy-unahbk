import { IModel } from '../interface/IModel';

export class Arm implements IModel {
  info: { name: string };
  
  constructor(params: Arm['info']) {
    this.info = params;
  }
}
