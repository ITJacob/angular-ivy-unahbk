import { getInfo } from "../mock/mockInfo";
import { Arm } from "./arm";
import { Hero } from "./hero";
import { Skill } from "./skill";

interface ISetting {
  level: number;
  teamPosition: number;
  heroInfo: Hero['info'];
  skillInfos: Skill['info'][];
  armInfos: Arm['info'][];
}

export class Player {
  settings: ISetting[];
  // TODO: package...
  constructor(private id: string) {
  }

  async init() {
    this.settings = await getInfo(this.id);
  }
}
