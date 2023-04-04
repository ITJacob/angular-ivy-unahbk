import { IArmInfo } from "../IInfo";
import { IModel } from "../IModel";


export class Arm implements IModel {
  info: { name: string };

  constructor(params: IArmInfo) {
    this.info = params;
  }
}
