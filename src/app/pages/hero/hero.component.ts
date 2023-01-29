import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';

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
