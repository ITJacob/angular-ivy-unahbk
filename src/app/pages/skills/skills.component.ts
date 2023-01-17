import { Component, OnInit } from '@angular/core';
import { SettingService } from '../setting/setting.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class SkillsComponent implements OnInit {
  skills = [];
  selected = [];
  constructor(private settingService: SettingService) {}

  ngOnInit(): void {
    this.settingService.getSkills().subscribe((res) => {
      this.skills = res;
    });
  }

  random() {
    this.selected = [];
    let i = 5;
    while (i) {
      const index = Math.floor(Math.random() * this.skills.length);
      this.selected.push(this.skills[index]);
      i--;
    }
  }
}
