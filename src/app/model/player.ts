import { getData } from '../mock/mockData';
import { Arm } from './arm';
import { Hero } from './hero';
import { Skill } from './skill';

export interface ISettingData {
  level: number;
  teamPosition: number;
  heroInfo: Hero['info'];
  skillInfos: Skill['info'][];
  armInfos: Arm['info'][];
}

export class Player {
  settings: ISettingData[];
  // TODO: package...
  constructor(private id: string) {}

  async fetch() {
    this.settings = await getData('PLAYER_SETTING', this.id);
  }
}
