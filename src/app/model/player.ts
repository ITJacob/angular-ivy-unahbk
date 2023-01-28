import { Hero } from "./hero";

interface ISetting {
  heroId: string;
  heroInfo: Hero['info'];
  level: number;
  teamPosition: number;
  skillIds: string[];
  armIds: string[];
}

export class Player {
  heroSettings: ISetting[];
  // TODO: package...
  constructor(private id: string) {
  }
}
