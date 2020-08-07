import {Component, OnInit} from '@angular/core';

import {LanguageService} from '../../controller/services/language.service';
import {Observable} from 'rxjs';
import {Language} from '../../controller/models/language';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.findAllLanguages();
  }

  get languages(): Array<Language> {
    return this.languageService.languages;

  }

  findAllLanguages() {
    return this.languageService.findAll();
  }

}
