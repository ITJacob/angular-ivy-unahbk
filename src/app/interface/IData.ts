// data，记录用户的数据，用户登录后获取

export interface IDataMap<T extends IData> {
  [_id: string]: T;
}

export interface IData {
  _id: string;
  [key: string]: string | number | string[] | number[];
}

// 用户信息
export interface IUserData extends IData {
  nickname: string;
}

export interface IHeroData extends IData {
  level: number;
  teamPosition: number;
  heroInfoId: string; // 英雄的初始信息
  skillInfoIds: string[]; // 用户给英雄设置的技能
  armInfoIds: string[]; // 携带的装备
}

// 用户的英雄数据，也是后端的表结构
export interface IHeroDataMap extends IDataMap<IHeroData> {}

// 用户设置的队伍
export interface ITeamData {
  _id: string;
  primary: boolean;
  order: number;
  name: string;
  heroDataIds: string[];
}
