import { IUserData } from '../interface/IData';
import { getData } from '../mock/mockData';
import { checkInfo } from '../mock/mockInfo';
import { Skill } from '../model/skill';
import { Behavior } from './behavior';
import { HeroControl } from './heroControl';
import { Player } from './player';

export class GameManager {
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

    this.newRound();
  }

  private newRound() {
    this.player.beforeRound();
    this.match.beforeRound();
  }

  private endRound() {
    // TODO: check winner
    this.isPlaying = false;
  }

  private beforeStart() {
    this.isPlaying = true;
    // TODO: waiting match operate
    this.behaviors = [...this.player.behaviors, ...this.match.behaviors];
    // TODO: order behaviors
  }

  start() {
    this.beforeStart();
    this.behaviors.forEach((b) => {
      b.active([this.player.heroControls, this.match.heroControls]);
      b.actor.buffCheck();
    });
    this.endRound();
    this.newRound();
  }
}
