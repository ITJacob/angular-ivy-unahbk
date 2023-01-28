// data，记录用户的数据，用户登录后获取

// 用户信息
export interface IUserData {
  nickname: string;
}

// 用户的英雄数据，也是后端的表结构
export interface IHeroDataList {
  [_id: string]: IHeroData;
}

export interface IHeroData {
  _id: string;
  heroInfoId: string;
  skillInfoIds: string[]; // 用户给英雄设置的技能
  equipmentInfoId: string; // 携带的装备
  goodsInfoId: string; // 携带的物品
}

// 用户设置的队伍
export interface ITeamData {
  _id: string;
  primary: boolean;
  order: number;
  name: string;
  heroDataIds: string[];
}
