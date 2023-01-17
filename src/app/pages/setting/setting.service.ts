import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class SettingService {

  private skills = new Subject();

  constructor() {
  }

  getSkills() {
    return this.skills;
  }

  setSkills(skill) {
    this.skills.next(skill);
  }
}