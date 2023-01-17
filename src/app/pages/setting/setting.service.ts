import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SettingService {
  private skills: BehaviorSubject<any[]>;

  constructor() {
    const s = localStorage.getItem('skills');
    const preSkills = s ? JSON.parse(s) : [];

    this.skills = new BehaviorSubject(preSkills);
  }

  getSkills() {
    return this.skills;
  }

  setSkills(skills) {
    localStorage.setItem('skills', JSON.stringify(skills));
    this.skills.next(skills);
  }
}
