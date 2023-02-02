import { HeroControl } from './heroControl';

export class Buff {
  from: HeroControl; // 施法者
  host: HeroControl; // 宿主
  last: number; // 剩下的回合数

  initBuff() {
    // TODO: 初始生效时的方法，这个事一般情况都在effect里直接完成了，所以不太用
  }

  beforeRoundCheck() {
    // TODO: 每回合前的执行回调
  }

  afterRoundCheck() {
    // TODO: 每回合后的执行回调
  }

  endBuff() {
    // TODO: 完毕后的回调
  }
}
