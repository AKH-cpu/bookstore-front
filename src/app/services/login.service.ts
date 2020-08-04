import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private url = `${environment.api_url}/users/login`;

  constructor(private http: HttpClient) {
  }

  login(data: { email: string, password: string }) {
    return this.http.post<any>('http://localhost:8090/users/login', data)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }


}
