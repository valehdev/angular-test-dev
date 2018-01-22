import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from '@angular/router';
import {MemberListComponent} from './member-list/member-list.component';
import {MemberEditComponent} from './member-edit/member-edit.component';
import {MemberDetailComponent} from './member-detail/member-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'member-list', pathMatch: 'full'},
  {path: 'member-list', component: MemberListComponent},
  {path: 'member-edit/:id', component: MemberEditComponent},
  {path: 'member-detail/:id', component: MemberDetailComponent},

];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class MembersRoutingModule {
}
