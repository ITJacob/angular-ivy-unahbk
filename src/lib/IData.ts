export interface IData {
  _id: string;
}

// 用户信息
export interface IUserData extends IData {
  nickname: string;
  heros: IHeroData[];
}

export interface IHeroData {
  heroInfoId: string; // 英雄的初始信息
  occupation: string; // 职业
  level: number;
  worthMax: number; // 策略上限
  attr: {
    strength: number; // 力量
    dexterity: number; // 敏捷
    intelligence: number; // 智力
    vitality: number; // 耐力
  };
  teamPosition: number; // 队伍站位
  skillInfoIds: string[]; // 用户给英雄设置的技能
  armInfoIds: string[]; // 携带的装备
  accessoriesInfoIds: string[]; // 携带的饰品
}
