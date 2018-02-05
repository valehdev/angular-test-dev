import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HeroListComponent} from './hero-list/hero-list.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';

const routes: Routes = [
  {path: '', redirectTo: 'hero-list', pathMatch: 'full'},
  {path: 'hero-list', component: HeroListComponent},
  {path: 'hero-detail/:id', component: HeroDetailComponent},
  {path: 'hero-search', component: HeroSearchComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class HeroRoutingModule {
}
