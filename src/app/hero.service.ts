import { Injectable } from '@angular/core'; 
// Dependency Injection (DI) service-in ona uyğun componentlərdə təkrar istifadəsi üçün şərait yaradır.
// Bu təkrar yüklənmənin qarşısını almaq bir növ DRY (özünü təkrar etməmək) üçün yazılmış bir dizayn paterndir
// (ardı) və angularda təkrarçılığın qarşısını almaqdan ötrü bu dizayn paternini istifadə edir

import { HttpClient, HttpHeaders } from '@angular/common/http'; // HTTP vasitəsi ilə serverə istək göndərib cavab ala bilir.

// Qeyd: HTTP hər zaman sadəcə bir sorğu göndərib və bir cavab alırsan
// Qeyd2: HttpClient.get method-u default olaraq JSON obyekti qaytarmır service-də HTTP header manual olaraq qeyd edilməlidir.

import { Observable } from 'rxjs/Observable'; 
// Dataların sinxron işləməsi üçün bir kitabxanadır
// İş prinsipi HTTP üzərindən gələn dataları tam şəkildə emal edir və səhifənin yüklənməsini end user üçün təmin edir.
// Buda o deməkdir asinxron mühitə malik dilin sinxron işləməsi üçün şərait yaradır.

import { of } from 'rxjs/observable/of'; // mock-heroes fake dataların toplusu olan məlumatları array kimi qaytarır. Sinxronluğu təmin edərək
// amma bu real app-də istifadə olunmur.


import { catchError, map, tap } from 'rxjs/operators'; // error-ların idarə olunması üçün methodlar..
// Observable məlumatı remote bazadan çəkərkən hər hansı bir səhvlik yaranarsa bu səhvi idarə etmək üçün catchError vasitəsilə olur
// catchError tək başına istənilən nəticəni vermir əlavə errorHandler vasitəsilə ng-app errorlarını düzgün təyin edib vaxt qazanmaq olur
 

import { Hero } from './hero'; // Hero modeli hansı ki hero tabledakı sütunların data tiplərinin təyin olduğu hissə.
import { MessageService } from './message.service'; // istifadəçi yönümlü log mesajların üçün yazılmış bütün componentlərdə istifadə olunan servis


const httpOptions = { 
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// HttpClient.get method-u default olaraq JSON obyekti qaytarmır service-də HTTP header manual olaraq qeyd edilməlidir.

@Injectable() // Servis DI ilə təkrar istifadəyə açıq olduğunu elan edir..

export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /** PUT: update the hero on the server */
  updateHero (hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
