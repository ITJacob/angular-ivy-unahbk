import { HeroControl } from './heroControl';
import { IUserData } from './IData';

export class Player {
  heroControls: HeroControl[] = [];

  constructor(private userData: IUserData) {
    this.init();
  }

  // 初始化英雄
  private init() {}

  // 系统操作判断
  beforeRound() {}

}
