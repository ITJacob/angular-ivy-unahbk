import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @ViewChild('hero') hero: HeroComponent;
  @ViewChild('skills') skills: SkillsComponent;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  random() {
    this.hero.random();
    this.skills.random();
  }
}
