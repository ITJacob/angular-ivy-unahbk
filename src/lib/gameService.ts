export abstract class GameService {
  /**
   * 初始化所有info信息
   * await checkInfo('HERO');
   * await checkInfo('SKILL');
   * await checkInfo('ARM');
   */
  abstract init(): Promise<void>;
}
