import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Language} from '../models/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private url = 'http://localhost:8090/languages';

  // tslint:disable-next-line:variable-name
  private _languages: Array<Language>;


  get languages(): Array<Language> {
    if (this._languages == null) {
      this._languages = new Array<Language>();
    }
    return this._languages;
  }

  set languages(value: Array<Language>) {
    this._languages = value;
  }

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<Array<Language>>(this.url).subscribe(
      data => {
        this._languages = data;
        console.log(this.languages);
      }
    );
  }
}
