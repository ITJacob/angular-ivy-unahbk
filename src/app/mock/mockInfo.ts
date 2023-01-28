import { IHeroInfo, IInfoList, ISkillInfo } from '../interface/IInfo';

export function getInfo<T>(key: string): Promise<T> {
  return new Promise((res) => {
    setTimeout(() => {
      res(info[key]);
    }, 1000);
  });
}

const HERO: IInfoList<IHeroInfo> = {
  hero_info_id_0001: {
    _id: 'hero_info_id_0001',
    talentInfoId: '1',
    groupInfoIds: ['1'],
    name: 'jacob',
    icon: '',
    description: '',
  },
  hero_info_id_0002: {
    _id: 'hero_info_id_0002',
    talentInfoId: '2',
    groupInfoIds: ['1'],
    name: 'ivy',
    icon: '',
    description: '',
  },
};

const SKILL: IInfoList<ISkillInfo> = {
  skill_info_id_0001: {
    _id: 'skill_info_id_0001',
    groupInfoId: '1',
    buffInfoIds: ['1'],
    name: '火球术',
    icon: '',
    description: '',
    value: 1,
  },
};

const info = {
  HERO,
  SKILL,
};
