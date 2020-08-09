import {Component, OnInit} from '@angular/core';

import {LanguageService} from '../../controller/services/language.service';
import {Observable} from 'rxjs';
import {Language} from '../../controller/models/language';
import {Category} from '../../controller/models/category';
import {CategoryService} from '../../controller/services/category.service';
import {SubCategoryService} from '../../controller/services/sub-category.service';
import {SubCategory} from '../../controller/models/sub-category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories: Category[] = [];

  constructor(private languageService: LanguageService,
              private categoryService: CategoryService) {
  }

  get languages(): Array<Language> {
    return this.languageService.languages;

  }

  ngOnInit(): void {
    this.findAllLanguages();
    this.findAllCategories();


  }

  findAllLanguages() {
    return this.languageService.findAll();
  }

  findAllCategories() {
    this.categoryService.findAll().subscribe(
      res => this.categories = res
    );
  }

}
