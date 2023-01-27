export interface IInfo {
  info: { [key: string]: string | number };
}
export interface IInfoConstructor {
  new (params: IInfo['info']): IInfo;
}
