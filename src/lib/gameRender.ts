import { Player } from './player';

export interface IGameRenderConstructor {
  new (): GameRender;
}

export abstract class GameRender {
  protected player: Player;
  protected match: Player;

  /**
   * 初始化所有info信息
   * await checkInfo('HERO');
   * await checkInfo('SKILL');
   * await checkInfo('ARM');
   */
  constructor() {}

  // 渲染战斗双方界面
  abstract init(player: Player, match: Player): Promise<void>;

  // 战斗开始
  abstract start(): void;
}
