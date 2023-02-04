import { IHeroInfo } from '../interface/IInfo';
import { IModel } from '../interface/IModel';

export class Hero implements IModel {
  hp = 100; // 血量
  mp = 0; // 能量
  mpSpeed = 1; // 能量汲取速度
  attack = 0; // 攻击力
  critRate = 0; // 暴击率
  criticalDamage = 1.5; // 暴击伤害
  attackSpeed = 0; // 出手速度
  physicalDefense = 0; // 物理防御
  magicDefense = 0; // 魔法防御
  resistance: { type: string; value: number }[] = []; // 属性抗性

  info: IHeroInfo;

  constructor(params: IHeroInfo) {
    this.info = params;
    this.init();
  }

  private init() {
    const { strength, dexterity, intelligence, vitality } = this.info;
    this.hp += vitality * 5;
    this.mpSpeed += intelligence * 0.05;
    this.attack += strength * 0.5;
    this.critRate += dexterity * 0.01;
    this.attackSpeed += dexterity * 0.1;
    this.magicDefense += intelligence * 0.2;
  }
}
