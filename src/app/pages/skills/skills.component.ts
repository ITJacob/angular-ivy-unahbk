import { Component, Input, OnInit } from '@angular/core';
import { HeroControl } from '../../control/heroControl';
import { Skill } from '../../model/skill';
import { SettingService } from '../setting/setting.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class SkillsComponent implements OnInit {
  @Input() control: HeroControl;

  selected: Skill;
  constructor() {}

  ngOnInit(): void {
  }

  active(skill: any) {
    console.log('准备施法：', skill.name);
  }

  random() {}
}
