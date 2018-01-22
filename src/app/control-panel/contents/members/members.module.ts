import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberListComponent } from './member-list/member-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MemberDetailComponent, MemberEditComponent, MemberListComponent]
})
export class MembersModule { }
