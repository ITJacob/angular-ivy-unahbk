import { Component } from '@angular/core';
import { getHeader, readFile } from '../../utils/fileProcess';
import { SettingService } from './setting.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent {
  constructor(private service: SettingService) {}

  async convertFile(type: string, e) {
    const file: Blob = e.files[0];
    if (!file) return;
    const result = await readFile(file);

    switch (type) {
      case 'skill':
        this.setSkills(result);
      case 'skillEnum':
        this.showSkillsEnum(result);
    }
  }

  setSkills(lines: string[][]) {
    const { header, content, desc } = getHeader(lines);
    const skills = content.map((c) =>
      header.reduce((pre, cur, i) => {
        if (cur) pre[cur] = c[i];
        return pre;
      }, {})
    );
    this.service.setConfig('skill', skills);
  }

  showSkillsEnum(lines: string[][]) {
    const { header, content, desc } = getHeader(lines);
    const skillEnum = {};
    content.forEach((line) => {
      line.forEach((item, index) => {
        if (!item) return;
        const key = header[index];
        skillEnum[key] = skillEnum[key] ? skillEnum[key].concat(item) : [item];
      });
    });
    console.log(skillEnum);
  }
}
