import { IModel } from '../interface/IModel';

export class Arm implements IModel {
  info: { [key: string]: string | number };
  
  constructor(params: Arm['info']) {
    this.info = params;
  }
}
