import { IAccessoryInfo } from '../IInfo';
import { IModel } from '../IModel';


export class Accessory implements IModel {
  info: { name: string };

  constructor(params: IAccessoryInfo) {
    this.info = params;
  }
}
