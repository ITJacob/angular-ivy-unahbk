import { IInfo } from '../interface/IInfo';

export class Buff implements IInfo {
  info: { [key: string]: string | number };
}
