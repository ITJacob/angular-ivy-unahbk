export interface IModel {
  info: { [key: string]: string | number };
}
export interface IModelConstructor {
  new (params: IModel['info']): IModel;
}
