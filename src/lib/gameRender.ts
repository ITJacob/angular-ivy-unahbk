import { Action } from './action';
import { Opreation } from './opreation';
import { Player } from './player';

export interface IGameRenderConstructor {
  new (): GameRender;
}

export abstract class GameRender {
  protected player: Player;
  protected match: Player;

  constructor() {}

  // 渲染战斗双方界面
  abstract init(player: Player, match: Player): Promise<void>;

  // 战斗开始
  abstract start(): Promise<void>;

  // 等待玩家操作
  abstract waitOpreations(): Promise<Opreation[]>;

  // 执行战斗动画
  abstract play(action: Action): Promise<void>;
}
