export class Skill {
  chant: any; // "吟唱"
  conditions: any; // "施法条件"
  cooling: any; // "冷却"
  desc: any; // "介绍"
  mainAttr: any; // "效果属性"
  mainEffect: any; // "效果"
  mainValue: any; // "效果数值"
  mpCost: any; // "消耗"
  name: any; // "名称"
  secAttr: any; // "次级效果属性"
  secEffect: any; // "次级效果"
  secValue: any; // "次级效果数值"
  speed: any; // "施法速度"
  target: any; // "目标阵营"
  targetFeature: any; // "目标特征"
  targetNumber: any; // "目标个数"
  worth: any; // "战术值"

  constructor(params: any) {
    Object.assign(this, params);
  }
}
