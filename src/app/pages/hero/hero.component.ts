import { Component, Input, OnInit } from '@angular/core';
import { HeroControl } from '../../control/heroControl';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HeroComponent implements OnInit {
  @Input() control: HeroControl;

  constructor() {}

  ngOnInit(): void {}
}
