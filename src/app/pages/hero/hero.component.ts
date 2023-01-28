import { Component, Input, OnInit } from '@angular/core';
import { HeroControl } from '../../control/heroControl';
import { Hero } from '../../model/hero';
import { random } from '../../utils/tools';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero = {} as any;

  constructor() {}

  ngOnInit(): void {}

}
