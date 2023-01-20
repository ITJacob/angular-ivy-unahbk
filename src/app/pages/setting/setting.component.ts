import { Component, VERSION } from '@angular/core';
import { SettingService } from './setting.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent {
  constructor(private service: SettingService) {}

  async convertFile(e) {
    const file = e.files[0];
    if (!file) return;
    const result = await this.readFile(file);
    const lines = (result as string).split('\r\n');
    const { skills, header } = this.getSkills(lines);
    console.log(header);
    this.service.setSkills(skills);
  }

  readFile(file) {
    return new Promise((res) => {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onloadend = () => {
        res(reader.result);
      };
    });
  }

  getSkills(lines) {
    const header = {};
    const keys: any[] = lines[0]
      .split(',')
      .filter((l) => l)
      .map((l) => {
        const [v, k] = l.split('-');
        header[k] = v;
        return k;
      });
    const content: any[] = lines
      .slice(1)
      .map((l) => l.split(','))
      .filter((l) => l[0]);
    const skills = content.map((c) =>
      keys.reduce((pre, cur, i) => {
        if (cur) pre[cur] = c[i];
        return pre;
      }, {})
    );
    return { skills, header };
  }
}
