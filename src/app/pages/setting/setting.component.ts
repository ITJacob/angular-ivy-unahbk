import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent {
  async convertFile(e) {
    const file = e.files[0];
    const result = await this.readFile(file);
    const lines = (result as string).split('\r\n');
    const skills = this.getSkills(lines);
    console.log(skills);
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
    const header: any[] = lines[0]
      .split(',')
      .filter((l) => l)
      .map((l) => l.split('-')[1]);
    const content: any[] = lines.slice(1).map((l) => l.split(','));
    return content.map((c) =>
      header.reduce((pre, cur, i) => {
        if (cur) pre[cur] = c[i];
        return pre;
      }, {})
    );
  }
}
