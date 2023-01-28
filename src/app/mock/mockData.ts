import { IHeroDataList } from '../interface/IData';

export function getData<T>(key: string, id?: string): Promise<T> {
  return new Promise((res) => {
    setTimeout(() => {
      res(id ? data[key][id] : data[key]);
    }, 1000);
  });
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
  HERO,
};
