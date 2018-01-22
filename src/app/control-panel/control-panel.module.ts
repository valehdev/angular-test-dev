import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './contents/home/home.component';
import {ControlPanelRoutingModule} from './control-panel-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ControlPanelRoutingModule
  ],
  declarations: [HomeComponent, HomeComponent]
})
export class ControlPanelModule {
}
