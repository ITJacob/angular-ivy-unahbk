import { BehaviorSubject } from 'rxjs';
import { IUserData } from '../interface/IData';
import { getData } from '../mock/mockData';
import { checkInfo } from '../mock/mockInfo';
import { Behavior } from './behavior';
import { Player } from './player';

export class GameManager {
  eventBus: BehaviorSubject<{ type: string; content?: any }>;
  player: Player;
  match: Player;
  behaviors: Behavior[] = [];
  isPlaying = false;

  constructor() {}

  async init(userId: string, matchId: string) {
    // 初始化所有info信息
    await checkInfo('HERO');
    await checkInfo('SKILL');
    await checkInfo('ARM');
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
