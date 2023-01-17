import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  { path: 'setting', component: SettingComponent },
  { path: '**', component: SettingComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  declarations: [SettingComponent],
  exports: [RouterModule],
})
export class AppRoutingModule {}
