import { IArmInfo } from '../interface/IInfo';
import { IModel } from '../interface/IModel';

export class Arm implements IModel {
  info: { name: string };

  constructor(params: IArmInfo) {
    this.info = params;
  }
}
