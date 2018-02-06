import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlPanelRoutingModule} from './control-panel-routing.module';
import {ControlPanelService} from './control-panel.service';
import {MemberListComponent} from './content/members/member-list/member-list.component';
import { HomeComponent } from './content/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    ControlPanelRoutingModule
  ],
  declarations: [MemberListComponent, HomeComponent],
  providers: [ControlPanelService]
})
export class ControlPanelModule {
}
