import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      // Axtarış methodun servisdən çağırılması üçün 3 saniyə gözləmə edir
      debounceTime(300),

      // ignore new term if same as previous term
      // əgər eyni açar söz axtarılırsa servisi çağırıb əlavə resurs istifadə etmir
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      // yeni açar söz daxil olduğu təqdir proses başlayır və heroService-ə request gedir.
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}
