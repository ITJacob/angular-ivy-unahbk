export class Hero {
  name: string; // 名称
  hp: number = 300; // 血量
  mp: number = 0; // 能量
  // 属性：
  strength: number; // 力量
  dexterity: number; // 敏捷
  vitality: number; // 耐力
  intelligence: number; // 智力

  talent: any; // 天赋

  constructor(params: any) {
    Object.assign(this, params);
  }
}
