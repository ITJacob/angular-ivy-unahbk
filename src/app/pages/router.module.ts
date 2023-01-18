import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SettingComponent } from './setting/setting.component';
import { HelloComponent } from './hello/hello.component';
import { SettingService } from './setting/setting.service';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { HeroComponent } from './hero/hero.component';
import { PackageComponent } from './package/package.component';
import { ArmsComponent } from './arms/arms.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'setting', component: SettingComponent },
  { path: '**', component: HelloComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  declarations: [
    SettingComponent,
    HelloComponent,
    SkillsComponent,
    HeroComponent,
    PackageComponent,
    ArmsComponent,
  ],
  providers: [SettingService],
  exports: [RouterModule],
})
export class AppRoutingModule {}
