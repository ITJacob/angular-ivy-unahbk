import { IUserData } from '../interface/IData';
import { IArmInfo, IHeroInfo, ISkillInfo } from '../interface/IInfo';
import { getData } from '../mock/mockData';
import { checkInfo, getInfo, getInfos } from '../mock/mockInfo';
import { Skill } from '../model/skill';
import { Behavior } from './behavior';
import { HeroControl } from './heroControl';
import { ISetting, Player } from './player';

export class GameManager {
  player: Player;
  match: Player;
  behaviors: Behavior[] = [];

  constructor() {}

  async init(userId: string, matchId: string) {
    // 初始化所有info信息
    await checkInfo('HERO');
    await checkInfo('SKILL');
    await checkInfo('ARM');
    // get player 信息
    const userData = await getData<IUserData>('USER', userId);
    this.player = this.newPlayer(userData.heros);
    // get match 信息
    const matchData = await getData<IUserData>('USER', matchId);
    this.match = this.newPlayer(matchData.heros);
  }

  private newPlayer(herosData: IUserData['heros']) {
    const setting: ISetting[] = herosData.map(
      ({ level, teamPosition, heroInfoId, skillInfoIds, armInfoIds }) => ({
        level,
        teamPosition,
        heroInfo: getInfo<IHeroInfo>('HERO', heroInfoId),
        skillInfos: getInfos<ISkillInfo>('SKILL', skillInfoIds),
        armInfos: getInfos<IArmInfo>('ARM', armInfoIds),
      })
    );
    return new Player(setting);
  }

  beforeRound(){}

  afterRound(){}

  addBehavior(hero: HeroControl, skill: Skill) {
    this.behaviors.push(
      new Behavior(hero, skill, [
        this.player.heroControls,
        this.match.heroControls,
      ])
    );
  }

  private beforeStart() {
    // TODO: order behaviors
  }
  
  start() {
    this.beforeStart();
    this.behaviors.forEach((b) => {
      b.active();
      b.actor.buffCheck();
    });
  }
}
