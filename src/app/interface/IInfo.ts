// info，记录游戏的静态常规信息，用于展示和记录互相间关系
// 可以是写死本地（构建时），也可以是网络请求加载（运行时）

// ====================基类==========================
// info 列表类型
export interface IInfoList<T extends IInfo> {
  [_id: string]: T;
}

// info 类型的基类
export interface IInfo {
  _id?: string;
  name: string;
  icon?: string;
  description?: string;
  [key: string]: string | number | string[];
}

// 有价值的物品，可供英雄装备，消耗战术点
export interface IValuableItem {
  value: number;
}

// ====================基类 结束==========================

// 游戏逻辑层面的静态常规属性，
export interface ICommonInfo {
  version: string;
  HERO: {
    health: number; // 生命槽值
    energy: number; // 能量槽值
    valueLimit: number; // 战术点限制
    skillAccount: number; // 可装备的技能数
  };
}

// 阵营
export interface IGroupInfo extends IInfo {
  skillInfoIds: string[]; // 包含的技能列表
  equipmentInfoIds: string[]; // 包含的装备列表
}

// 英雄
export interface IHeroInfo extends IInfo {
  talentInfoId: string; // 英雄的天赋技能
  groupInfoIds: string[]; // 英雄归属的阵营
}

// 技能
export interface ISkillInfo extends IInfo, IValuableItem {
  groupInfoId: string; // 所属的阵营
  buffInfoIds: string[]; // 可产生的状态
}

// 状态，战斗时会附加在战斗单位上。
export interface IBuffInfo extends IInfo {}

// 天赋
export interface ITalentInfo extends IInfo, IValuableItem {}

// 装备
export interface IEquipmentInfo extends IInfo, IValuableItem {
  groupInfoId: string; // 所属的阵营
}

// 物品
export interface IGoodsInfo extends IInfo, IValuableItem {}
