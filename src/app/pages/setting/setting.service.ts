import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SettingService {
  private setting = {
    skill: new BehaviorSubject([]),
    hero: new BehaviorSubject([]),
    arm: new BehaviorSubject([]),
    item: new BehaviorSubject([]),
  };

  constructor() {
    Object.keys(this.setting).forEach((key) => {
      const s = localStorage.getItem(key);
      if (s) {
        const pre = JSON.parse(s);
        this.setting[key].next(pre);
      }
    });
  }

  getConfig(key: keyof SettingService['setting']) {
    return this.setting[key];
  }

  setConfig(key: keyof SettingService['setting'], cfg: any) {
    localStorage.setItem(key, JSON.stringify(cfg));
    this.setting[key].next(cfg);
  }
}
