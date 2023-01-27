interface IHeroSetting {
  heroId: string;
  level: number;
  teamPosition: number;
  skillIds: string[];
  armIds: string[];
}

export class Player {
  heroSettings: IHeroSetting[];
  // TODO: package...
  constructor(param: any) {
    Object.assign(this, param);
  }
}
