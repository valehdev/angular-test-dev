import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MemberListComponent} from './contents/member-list/member-list.component';
import {MemberDetailComponent} from './contents/member-detail/member-detail.component';
import {MemberEditComponent} from './contents/member-edit/member-edit.component';
import {MembersComponent} from './members.component';

const routes: Routes = [
  {
    path: '',
    component: MembersComponent,
    children: [
      {path: '', redirectTo: 'members', pathMatch: 'full'},
      {path: 'members', component: MemberListComponent},
      {path: 'members/detail/:id', component: MemberDetailComponent},
      {path: 'members/edit/:id', component: MemberEditComponent},
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
export class MemberRoutingModule {
}
