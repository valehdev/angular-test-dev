import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';
import {Member} from '../models/member';
import {MessageService} from '../../message.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class MemberService {

  private memberUrl = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  /**
   *
   * @returns {Observable<Member[]>}
   */
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.memberUrl).pipe(
      tap(members => this.log(`fetched members`)),
      catchError(this.handleError('getMembers', []))
    );
  }

  /**
   * @returns {Observable<Member>}
   */

  getMember(id: number): Observable<Member> {
    const url = `${this.memberUrl}/${id}`;
    return this.http.get<Member>(url).pipe(
      tap(_ => this.log(`fetched member id=${id}`)),
      catchError(this.handleError<Member>(`getMember id=${id}`))
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
