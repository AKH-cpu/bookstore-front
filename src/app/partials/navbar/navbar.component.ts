import {Component, OnInit} from '@angular/core';

import {LanguageService} from '../../controller/services/language.service';
import {Observable} from 'rxjs';
import {Language} from '../../controller/models/language';
import {Category} from '../../controller/models/category';
import {CategoryService} from '../../controller/services/category.service';
import {SubCategoryService} from '../../controller/services/sub-category.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  visible: boolean;
  viewedPage: string;


  constructor(private languageService: LanguageService,
              private categoryService: CategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.visible = true;
  }

  get languages(): Array<Language> {
    return this.languageService.languages;

  }


  categories: Category[] = [];


  ngOnInit(): void {
    this.init();
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

  init() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
      )
      .pipe(
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data),
      )
      .subscribe(event => {
        this.showNavBar(event.navbar);
      });

  }


  showNavBar(event) {
    if (event === false) {
      this.visible = false;
    } else if (event === true) {
      this.visible = true;
    } else {
      this.visible = this.visible;
    }

  }
}
