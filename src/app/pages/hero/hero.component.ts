import { Component, OnInit } from '@angular/core';
import { Hero } from '../../control/hero';
import { random } from '../../utils/tools';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HeroComponent implements OnInit {
  hero: any = {};
  arms: any[] = [];
  package: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  random() {
    const [strength, dexterity, vitality, intelligence] = random(4, 10, 6);
    this.hero = new Hero({
      name: '小莉',
      strength,
      dexterity,
      vitality,
      intelligence,
    });
    console.log(this.hero);
  }
}
