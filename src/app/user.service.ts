import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()

export class UserService {

  private userUrl = 'api/users';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
      .pipe(
        tap(users => this.log(`fetched heroes`)),
        catchError(this.errorHandler('getUsers', []))
      );
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  private errorHandler<T> (operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      
      console.log(error);
      
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);

    }
  }

}
