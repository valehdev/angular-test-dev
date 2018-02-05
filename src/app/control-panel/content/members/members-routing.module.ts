import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {MemberListComponent} from './member-list/member-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'member-list', pathMatch: 'full'},
  {path: 'member-list', component: MemberListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class MembersRoutingModule {
}
