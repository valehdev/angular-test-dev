import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MemberListComponent} from './member-list/member-list.component';
import {MemberDetailComponent} from './member-detail/member-detail.component';
import {MemberEditComponent} from './member-edit/member-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: MemberListComponent},
  {path: 'detail/:id', component: MemberDetailComponent},
  {path: 'edit/:id', component: MemberEditComponent}
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
