import { Action } from './action';
import { GameService } from './gameService';
import { Opreation } from './opreation';
import { Player } from './player';

export class GameManager {
  player: Player;
  match: Player;

  opreations: Opreation[] = [];
  actions: Action[] = [];

  constructor(private service: GameService) {}

  async init(userId: string, matchId: string) {
    // 系统初始化
    await this.service.init();
    // get player 信息
    const userData = await this.service.getUserData(userId);
    this.player = new Player(userData);
    // get match 信息
    const matchData = await this.service.getUserData(matchId);
    this.match = new Player(matchData);

    this.newRound();
  }

  private newRound() {
    this.player.beforeRound();
    this.match.beforeRound();
  }

  private endRound() {
    // TODO: check winner
  }

  private beforeStart() {
    this.isPlaying = true;
    // TODO: waiting match operate
    this.behaviors = [...this.player.behaviors, ...this.match.behaviors];
    // TODO: order behaviors
    this.eventBus.next({ type: 'start' });
  }

  start() {
    this.beforeStart();
    this.behaviors.forEach((b) => {
      this.operate(b);
    });
    this.endRound();
    this.newRound();
  }

  async operate(b: Behavior) {
    b.active([this.player.heroControls, this.match.heroControls]);
    b.actor.buffCheck();
  }
}
