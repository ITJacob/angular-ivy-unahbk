import { Component, OnInit } from '@angular/core';
import { HeroControl } from '../../control/heroControl';
import { random } from '../../utils/tools';

@Component({
  selector: 'app-enemies',
  templateUrl: './enemies.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class EnemiesComponent implements OnInit {
  enemies: HeroControl[] = [];

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.random();
  }
  random() {
    let i = 4;
    while (i) {
      const [strength, dexterity, vitality, intelligence] = random(4, 10, 6);
      const control = new HeroControl({
        name: '敌军' + i,
        desc: '',
        strength,
        dexterity,
        vitality,
        intelligence,
        talentId: '1',
      });
      this.enemies.push(control);
      i--;
    }
  }
  setTarget(t: HeroControl) {}
}
