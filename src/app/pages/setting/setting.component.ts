import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent {
  convertFile(e) {
    const reader = new FileReader();
    const file = e.files[0];

    reader.readAsText(file);
    reader.onloadend = () => {
      console.log(reader.result);
    };
  }
}
