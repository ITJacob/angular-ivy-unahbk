import { IUserData } from '../interface/IData';
import { IArmInfo, IHeroInfo, ISkillInfo } from '../interface/IInfo';
import { getData } from '../mock/mockData';
import { checkInfo, getInfo, getInfos } from '../mock/mockInfo';
import { ISetting, Player } from './player';

export class GameManager {
  player: Player;
  match: Player;

  constructor() {}

  async init() {
    // 初始化所有info信息
    await checkInfo('HERO');
    await checkInfo('SKILL');
    await checkInfo('ARM');
  }

  private newPlayer(heros: IUserData['heros']) {
    const setting: ISetting[] = heros.map(
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

  async start(userId: string, matchId: string) {
    // get player 信息
    const userData = await getData<IUserData>('USER', userId);
    this.player = this.newPlayer(userData.heros);
    // get match 信息
    const matchData = await getData<IUserData>('USER', matchId);
    this.match = this.newPlayer(matchData.heros);
  }
}
