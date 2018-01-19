import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MembersComponent} from './members.component';
import {MemberService} from './services/member.service';
import {MemberRoutingModule} from './member-routing.module';
import {RouterModule} from '@angular/router';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberListComponent } from './member-list/member-list.component';


@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule,
    RouterModule,
  ],
  declarations: [MembersComponent, MemberDetailComponent, MemberEditComponent, MemberListComponent],
  providers: [MemberService]
})
export class MemberModule {
}
