import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SettingComponent } from './setting/setting.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  { path: '', component: SettingComponent },
  { path: 'setting', component: SettingComponent },
  { path: '**', component: SettingComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  declarations: [SettingComponent, HelloComponent],
  exports: [RouterModule],
})
export class AppRoutingModule {}
