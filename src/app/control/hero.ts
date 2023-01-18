export class Hero {
  hp = 100; // 血量
  mp = 0; // 能量
  mpSpeed = 1; // 能量汲取速度
  attack = 0; // 攻击力
  critRate = 0; // 暴击率
  criticalDamage = 1.5; // 暴击伤害
  attackSpeed = 0; // 出手速度
  physicalDefense = 0; // 物理防御
  magicDefense = 0; // 魔法防御
  attributeResistance: { type: string; value: number }[] = []; // 属性抵抗

  arms: ((h: Hero) => void)[] = []; // 装备
  buffs: ((h: Hero) => void)[] = []; // 状态

  // 属性：
  name: string; // 名称
  strength: number; // 力量
  dexterity: number; // 敏捷
  intelligence: number; // 智力
  vitality: number; // 耐力

  // 天赋
  talent: any;

  constructor(params: any) {
    Object.assign(this, params);
    this.init();
  }

  init() {
    this.hp += this.vitality * 5;
    this.mpSpeed += this.intelligence * 0.05;
    this.attack += this.strength * 0.5;
    this.critRate += this.dexterity * 0.01;
    this.attackSpeed += this.dexterity * 0.1;
    // this.physicalDefense += this.vitality * 2;
    this.magicDefense += this.intelligence * 0.2;
  }

  armCheck() {
    this.arms.forEach((arm) => arm(this));
  }

  buffCheck() {
    this.buffs.forEach((buff) => buff(this));
  }
}
