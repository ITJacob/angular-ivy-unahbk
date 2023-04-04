import { IHeroData } from "../IData";
import { EFFECT_ATTR } from "../config";


export class Hero {
  hp = 100; // 血量
  mp = 0; // 能量
  mpSpeed = 1; // 能量汲取速度
  attack = 0; // 攻击力
  critRate = 0; // 暴击率
  criticalDamage = 1.5; // 暴击伤害
  attackSpeed = 1; // 出手速度
  defense = 0; // 物理防御

  attrDamageIncrease: { type: EFFECT_ATTR; value: number }[] = [
    { type: EFFECT_ATTR.fire, value: 1 }, // 火
    { type: EFFECT_ATTR.water, value: 1 }, // 水
    { type: EFFECT_ATTR.earth, value: 1 }, // 土
    { type: EFFECT_ATTR.wood, value: 1 }, // 木
    { type: EFFECT_ATTR.wind, value: 1 }, // 风
    { type: EFFECT_ATTR.thunder, value: 1 }, // 雷
    { type: EFFECT_ATTR.glory, value: 1 }, // 圣光、荣耀
    { type: EFFECT_ATTR.death, value: 1 }, // 死亡
    { type: EFFECT_ATTR.phantom, value: 1 }, // 幻影
    { type: EFFECT_ATTR.poison, value: 1 }, // 毒
  ]; // 属性伤害增幅
  attrDamageResistance: { type: EFFECT_ATTR; value: number }[] = []; // 属性抗性

  effectHitRateIncrease: { type: string; value: number }[] = []; // 效果命中增幅
  effectHitRateResistance: { type: string; value: number }[] = []; // 效果命中抵抗

  constructor(private attr: IHeroData['attr']) {
    this.init();
  }

  private init() {
    const { strength, dexterity, intelligence, vitality } = this.attr;
    this.hp += vitality * 5;
    this.mpSpeed += intelligence * 0.05;
    this.attack += strength * 0.5;
    this.critRate += dexterity * 0.02;
    this.attackSpeed += dexterity * 0.05;
    this.attrDamageResistance = [
      { type: EFFECT_ATTR.fire, value: intelligence * 0.1 }, // 火
      { type: EFFECT_ATTR.water, value: intelligence * 0.1 }, // 水
      { type: EFFECT_ATTR.earth, value: intelligence * 0.1 }, // 土
      { type: EFFECT_ATTR.wood, value: intelligence * 0.1 }, // 木
      { type: EFFECT_ATTR.wind, value: intelligence * 0.1 }, // 风
      { type: EFFECT_ATTR.thunder, value: intelligence * 0.1 }, // 雷
      { type: EFFECT_ATTR.glory, value: intelligence * 0.1 }, // 圣光、荣耀
      { type: EFFECT_ATTR.death, value: intelligence * 0.1 }, // 死亡
      { type: EFFECT_ATTR.phantom, value: intelligence * 0.1 }, // 幻影
    ];
  }
}
