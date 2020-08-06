import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'http://localhost:8090/users';

  constructor(private http: HttpClient) {
  }

  register(data: { name: string, email: string, password: string }) {
    return this.http.post(this.url, data);
  }
}
