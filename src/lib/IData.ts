export interface IData {
  _id: string;
}

// 用户信息
export interface IUserData extends IData {
  nickname: string;
  heros: {
    level: number;
    teamPosition: number;
    heroInfoId: string; // 英雄的初始信息
    skillInfoIds: string[]; // 用户给英雄设置的技能
    armInfoIds: string[]; // 携带的装备
  }[];
}
