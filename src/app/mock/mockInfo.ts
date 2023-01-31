import { IHeroInfo, IInfoMap, ISkillInfo } from '../interface/IInfo';
import { random } from '../utils/tools';

const info = {
  HERO: [],
  SKILL: [],
};

export function checkInfo<T>(key: string): Promise<T> {
  if (key === 'SKILL') {
    info['SKILL'] = SkillGen();
  }
  if (key === 'HERO') {
    info['HERO'] = HeroGen();
  }
  return new Promise((res) => {
    setTimeout(() => {
      res(info[key]);
    }, 100);
  });
}

export function getInfo<T>(key: string, id: string): T {
  return info[key][id];
}

export function getInfos<T>(key: string, ids: string[]): T[] {
  const all = info[key];
  return all.sort(() => 0.5 - Math.random()).slice(0, ids.length);

  //return ids.map((i) => info[key][i]);
}

function HeroGen() {
  const result = [];
  let i = 1;
  while (i < 11) {
    const [strength, dexterity, vitality, intelligence] = random(4, 10, 6);
    const heroInfo: IHeroInfo = {
      name: '英雄_' + i,
      desc: '随机介绍····',
      strength,
      dexterity,
      vitality,
      intelligence,
      talent: '',
      talentDesc: '',
      talentMapId: '001',
    };
    result.push(heroInfo);
    i++;
  }
  return result;
}

function SkillGen() {
  const s = localStorage.getItem('skill');
  return s ? JSON.parse(s) : [];
}

// const HERO: IInfoMap<any> = {
//   hero_info_id_0001: {
//     _id: 'hero_info_id_0001',
//     name: 'jacob',
//     icon: '',
//     description: '',
//   },
// };

// const SKILL: IInfoMap<any> = {
//   skill_info_id_0001: {
//     _id: 'skill_info_id_0001',
//     name: '火球术',
//     icon: '',
//     description: '',
//   },
// };
