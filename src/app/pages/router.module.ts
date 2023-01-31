import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SettingComponent } from './setting/setting.component';
import { GameComponent } from './game/game.component';
import { SettingService } from './setting/setting.service';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { HeroComponent } from './hero/hero.component';
import { PackageComponent } from './package/package.component';
import { ArmsComponent } from './arms/arms.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  { path: '', component: GameComponent },
  { path: 'setting', component: SettingComponent },
  { path: '**', component: GameComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  declarations: [
    PlayerComponent,
    SettingComponent,
    GameComponent,
    SkillsComponent,
    HeroComponent,
    PackageComponent,
    ArmsComponent,
  ],
  providers: [SettingService],
  exports: [RouterModule],
})
export class AppRoutingModule {}
