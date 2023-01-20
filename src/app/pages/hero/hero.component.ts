import { Component, OnInit } from '@angular/core';
import { HeroControl } from '../../control/heroControl';
import { Hero } from '../../model/hero';
import { random } from '../../utils/tools';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HeroComponent implements OnInit {
  hero: Hero = {} as any;

  constructor() {}

  ngOnInit(): void {}

  random() {
    const [strength, dexterity, vitality, intelligence] = random(4, 10, 6);
    const control = new HeroControl({
      name: '小莉',
      desc: '',
      strength,
      dexterity,
      vitality,
      intelligence,
      talentId: '1',
    });
    this.hero = control.hero;
    console.log(this.hero);
  }
}
