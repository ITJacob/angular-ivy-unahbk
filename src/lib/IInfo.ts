// info，记录游戏的静态常规信息，用于展示和记录互相间关系
// 可以是写死本地（构建时），也可以是网络请求加载（运行时）

// ====================基类==========================
// info 列表类型
export interface IInfoMap<T extends IInfo> {
  [_id: string]: T;
}

// info 类型的基类
export interface IInfo {
  _id?: string;
  name: string;
  icon?: string;
  desc?: string;
  [key: string]: string | number | string[] | number[];
}

// 策略值，可供英雄装备，消耗战术点
export interface IValuableItem {
  worth?: number; // TODO: 目前暂时不考虑
}

// ====================基类 结束==========================

// 英雄
export interface IHeroInfo extends IInfo {
  optionalOccupations: string; // 可选职业
  bloc: string; // 阵营
  clan: string; // 家族
  ethnicity: string; // 种族
  talent: string; // 英雄的天赋技能
  talentDesc: string; // 英雄的天赋介绍
  talentMapId: string; // 映射的方法id
}

// 技能
export interface ISkillInfo extends IInfo, IValuableItem {
  availableOccupations: string; // 可用职业
  isPassive: string; // 是否被动
  launchTime: string; // 起手时长
  chant: any; // "吟唱"
  conditions: any; // "施法条件"
  cooling: any; // "冷却"
  cost: any; // "消耗"

  target: any; // "目标阵营"
  targetFeature: any; // "目标特征"
  targetNumber: any; // "目标个数"

  mainEffectInfoId: string; // "主效果"
  mainValue: number; // "主效果数值"
  otherEffectInfoIds: string[]; // "次级效果"
  otherValues: number[]; // "次级效果数值"
}

// 装备
export interface IArmInfo extends IInfo, IValuableItem {
  
}

// 饰品
export interface IAccessoryInfo extends IInfo, IValuableItem {
  
}

/*
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
*/
