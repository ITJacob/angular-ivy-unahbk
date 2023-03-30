import { Action } from './action';
import { GameRender } from './gameRender';
import { GameService } from './gameService';
import { Opreation } from './opreation';
import { Player } from './player';

export class GameManager {
  player: Player;
  match: Player;

  opreations: Opreation[] = [];
  actions: Action[] = [];

  constructor(private service: GameService, private render: GameRender) {}

  async init(userId: string, matchId: string) {
    // 系统初始化
    await this.service.init();
    // get player 信息
    const userData = await this.service.getUserData(userId);
    this.player = new Player(userData, this.render);
    // get match 信息
    const matchData = await this.service.getUserData(matchId);
    this.match = new Player(matchData, this.render);
  }

  start() {
    this.player.init();
    this.match.init();
    this.render.start(this.player, this.match);
    this.newRound();
  }

  private async newRound() {
    this.player.beforeRound();
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
