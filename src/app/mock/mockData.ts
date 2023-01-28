import { IHeroDataList } from '../interface/IData';
import { ISetting } from '../model/player';
import { random } from '../utils/tools';

export function getData<T>(key: string, id: string): Promise<T> {
  return new Promise((res) => {
    setTimeout(() => {
      res(data[key](id));

    }, 100);
  });
}

const PLAYER_SETTING = function (_id: string) {
  const result: ISetting[] = [];
  let i = 1;
  while (i < 6) {
    const [strength, dexterity, vitality, intelligence] = random(4, 10, 6);
    const heroInfo = {
      name: '英雄_' + i,
      desc: '随机介绍····',
      strength, dexterity, vitality, intelligence,
      talentId: '001',
    };
    const s: ISetting = {
      level: 0,
      teamPosition: i,
      heroInfo,
      skillInfos: [],
      armInfos: []
    }

    result.push(s);
    i++;
  }
  return result
}

const HERO: IHeroDataList = {
  hero_data_id_0001: {
    _id: 'hero_data_id_0001',
    heroInfoId: '',
    skillInfoIds: [''],
    equipmentInfoId: '',
    goodsInfoId: '',
  },
  hero_data_id_0002: {
    _id: 'hero_data_id_0002',
    heroInfoId: '',
    skillInfoIds: [''],
    equipmentInfoId: '',
    goodsInfoId: '',
  },
};

const data = {
  // HERO,
  PLAYER_SETTING
};
