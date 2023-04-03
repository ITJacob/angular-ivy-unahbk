import { Action } from './action';
import { GameRender, IGameRenderConstructor } from './gameRender';
import { GameService, IGameServiceConstructor } from './gameService';
import { Opreation } from './opreation';
import { Player } from './player';

export class GameManager {
  private service: GameService;
  private render: GameRender;
  player: Player;
  match: Player;

  opreations: Opreation[] = [];

  constructor(
    s: IGameServiceConstructor,
    r: IGameRenderConstructor,
    gameId: string
  ) {
    this.service = new s(gameId);
    this.render = new r();
  }

  async init() {
    // get player 信息
    const [playerData, matchData] = await this.service.getGameData();

    this.player = new Player(playerData);
    this.match = new Player(matchData);

    // 界面初始化
    await this.render.init(this.player, this.match);
  }

  start() {
    this.player.init();
    this.match.init();
    this.render.start();
    this.newRound();
  }

  private async newRound() {
    this.player.beforeRound();

    // 玩家点 准备就绪 后执行
    const ops = await this.render.waitOpreations();
    await this.service.uploadOpreations(ops);
    // 循环遍历，获得对战双方的操作
    this.opreations = await this.service.getAllOpreations();
    // 进入执行阶段
    this.fight();
  }

  private beforeStart() {
    // buff check
  }

  private async fight() {
    this.beforeStart();

    for await (const opt of this.opreations) {
      await this.operate(opt);
    }

    this.endRound();
  }

  private async operate(opt: Opreation) {
    const action = new Action(opt);
    action.active(this.player, this.match);
    await this.render.play(action);
  }

  private endRound() {
    // TODO: check winner
    this.newRound();
  } 
}
