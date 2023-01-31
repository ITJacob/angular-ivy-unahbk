import { IUserData } from '../interface/IData';

export function getData<T>(key: string, id: string): Promise<T> {
  return new Promise((res) => {
    setTimeout(() => {
      res(data[key](id));
    }, 100);
  });
}

function USER(_id: string) {
  const heros = [];
  let i = 0;
  while (i < 5) {
    const s = {
      level: 0,
      teamPosition: i + 1,
      heroInfoId: Number(_id) * 5 + i,
      skillInfoIds: new Array(5),
      armInfoIds: new Array(5),
    };

    heros.push(s);
    i++;
  }
  return {
    nickname: '玩家' + _id,
    heros,
  } as IUserData;
}

// const HERO: IHeroDataList = {
//   hero_data_id_0001: {
//     _id: 'hero_data_id_0001',
//     heroInfoId: '',
//     skillInfoIds: [''],
//     equipmentInfoId: '',
//     goodsInfoId: '',
//   },
//   hero_data_id_0002: {
//     _id: 'hero_data_id_0002',
//     heroInfoId: '',
//     skillInfoIds: [''],
//     equipmentInfoId: '',
//     goodsInfoId: '',
//   },
// };

const data = {
  // HERO,
  USER,
};
