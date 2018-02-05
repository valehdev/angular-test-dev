import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroListComponent} from './hero-list/hero-list.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {HeroRoutingModule} from './hero-routing.module';


@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule,
  ],
  declarations: [
    HeroDetailComponent,
    HeroListComponent,
    HeroSearchComponent,
  ],
  providers: [HeroService]
})
export class HeroModule {
}
