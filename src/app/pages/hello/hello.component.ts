import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingService } from '../setting/setting.service';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  skills: Observable<any>;
  constructor(private settingService: SettingService){}
  
  ngOnInit(): void {
    this.skills = this.settingService.getSkills();
  }


}
