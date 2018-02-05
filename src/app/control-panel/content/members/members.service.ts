import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Members} from './models/members';
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class MembersService {

  private URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) {}

  getMembers(): Observable<Members[]> {
    return this.http.get<Members[]>(this.URL)
      .pipe(
        tap(members => 'fetched'),
        catchError(this.handleError('getMembers', []))
      );
  }

  /** GET member by id. Return `undefined` when id not found */
  getMemberNo404<Data>(id: number): Observable<Members> {
    const url = `${this.URL}/?id=${id}`;
    return this.http.get<Members[]>(url)
      .pipe(
        map(members => members[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;

        }),
        catchError(this.handleError<Members>(`getMember id=${id}`))
      );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
