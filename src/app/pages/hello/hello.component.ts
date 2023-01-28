import { Component, OnInit, ViewChild } from '@angular/core';
import { ArmsComponent } from '../arms/arms.component';
import { HeroComponent } from '../hero/hero.component';
import { PackageComponent } from '../package/package.component';
import { PlayerComponent } from '../player/player.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @ViewChild('player') player: PlayerComponent;
  @ViewChild('enemy') enemy: PlayerComponent;
  @ViewChild('package') package: PackageComponent;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  random() {
    this.player.random();
    this.enemy.random();
    this.package.random();
  }
}
