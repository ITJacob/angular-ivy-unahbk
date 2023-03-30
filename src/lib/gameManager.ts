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
  actions: Action[] = [];

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

    // TODO: Here!!!

    const ops = await this.player.waitOpreations();
    this.service;
  }

  private endRound() {
    // TODO: check winner
    this.newRound();
  }

  private beforeStart() {
    // TODO: waiting match operate
    this.opreations = [...this.player.behaviors, ...this.match.behaviors];
    // TODO: order behaviors
  }

  go() {
    this.beforeStart();
    this.opreations.forEach((b) => {
      this.operate(b);
    });
    this.endRound();
  }

  async operate(b: Behavior) {
    b.active([this.player.heroControls, this.match.heroControls]);
    b.actor.buffCheck();
  }
}
