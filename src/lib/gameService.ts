import { IUserData } from './IData';
import { Player } from './player';

export abstract class GameService {
  /**
   * 初始化所有info信息
   * await checkInfo('HERO');
   * await checkInfo('SKILL');
   * await checkInfo('ARM');
   */
  abstract init(): Promise<void>;

  // 获取用户数据
  abstract getUserData(id: string): Promise<IUserData>;
}
