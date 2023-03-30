import { Player } from './player';

export abstract class GameRender {
  // 渲染界面
  abstract start(player: Player, match: Player): void;
}
