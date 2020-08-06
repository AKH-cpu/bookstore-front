import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8090/users/login';


  constructor(private http: HttpClient) {
  }

  login(data: { email: string, password: string }) {

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post(this.url, data)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }


}
