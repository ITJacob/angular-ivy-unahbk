import { IInfo } from "./IInfo";

export interface IModel {
  info: IInfo;
}
export interface IModelConstructor {
  new (params: IModel['info']): IModel;
}
