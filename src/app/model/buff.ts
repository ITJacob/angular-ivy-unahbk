import { IModel } from '../interface/IModel';

export class Buff implements IModel {
  info: { [key: string]: string | number };
}
