import { Component, OnInit, ViewChild } from '@angular/core';
import { ArmsComponent } from '../arms/arms.component';
import { HeroComponent } from '../hero/hero.component';
import { PackageComponent } from '../package/package.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @ViewChild('hero') hero: HeroComponent;
  @ViewChild('arms') arms: ArmsComponent;
  @ViewChild('package') package: PackageComponent;
  @ViewChild('skills') skills: SkillsComponent;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  random() {
    this.hero.random();
    this.arms.random();
    this.package.random();
    this.skills.random();
  }
}
