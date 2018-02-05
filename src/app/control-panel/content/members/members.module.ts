import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MembersRoutingModule} from './members-routing.module';
import {MembersService} from './members.service';
import {MemberListComponent} from './member-list/member-list.component';

@NgModule({
  imports: [
    CommonModule,
    MembersRoutingModule,
  ],
  declarations: [MemberListComponent],
  providers: [MembersService]
})
export class MembersModule {
}
