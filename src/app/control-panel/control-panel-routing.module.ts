import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ControlPanelComponent} from './control-panel.component';
import {HomeComponent} from './contents/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ControlPanelComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'members', loadChildren: './contents/members/members.module#MembersModule'},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ControlPanelRoutingModule {
}
