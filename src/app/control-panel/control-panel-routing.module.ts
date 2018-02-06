import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ControlPanelComponent} from './control-panel.component';
import {MemberListComponent} from './content/members/member-list/member-list.component';
import {MembersModule} from './content/members/members.module';
import {HomeComponent} from './content/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ControlPanelComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'member-list', loadChildren: './content/members/members.module#MembersModule'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule],
})
export class ControlPanelRoutingModule {
}
