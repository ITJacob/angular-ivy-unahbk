import { IUserData } from './IData';
import { Opreation } from './opreation';

export interface IGameServiceConstructor {
  new (gameId: string): GameService;
}

export abstract class GameService {
  // 用户id
  protected userId: string;

  // 游戏对局的id
  constructor(protected gameId: string) {}

  // 获取用户数据
  abstract getGameData(): Promise<[IUserData, IUserData]>;

  // 同步己方操作
  abstract updateOpreations(ops: Opreation[]): Promise<boolean>;

  // 获取操作列表
  abstract getAllOpreations(): Promise<Opreation[]>;
}
