import { IUserData } from '../interface/IData';
import { getData } from '../mock/mockData';
import { checkInfo } from '../mock/mockInfo';
import { Action } from './Action';
import { Behavior } from './behavior';
import { GameService } from './gameService';
import { Player } from './player';

export class GameManager {
  service: GameService;
  player: Player;
  match: Player;
  behaviors: Behavior[] = [];
  actions: Action[] = [];

  constructor(service: GameService) {
    this.service = service;
  }

  async init(userId: string, matchId: string) {
    await this.service.init();
    // get player 信息
    const userData = await getData<IUserData>('USER', userId);
    this.player = new Player(userData.heros);
    // get match 信息
    const matchData = await getData<IUserData>('USER', matchId);
    this.match = new Player(matchData.heros);
    this.eventBus = new BehaviorSubject({ type: 'start' });
    this.newRound();
  }

  private newRound() {
    this.player.beforeRound();
    this.match.beforeRound();
    this.eventBus.next({ type: 'newRound' });
  }

  private endRound() {
    // TODO: check winner
    this.isPlaying = false;
    this.eventBus.next({ type: 'endRound' });
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
