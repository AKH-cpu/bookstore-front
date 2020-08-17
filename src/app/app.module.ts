import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './partials/navbar/navbar.component';
import {PageNotFoundComponent} from './partials/page-not-found/page-not-found.component';
import {FooterComponent} from './partials/footer/footer.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {SliderComponent} from './partials/slider/slider.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { BooksComponent } from './components/books/books.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { ReadingComponent } from './svg/reading/reading.component';
import { CategoriesComponent } from './components/categories/categories.component';
import {AdminModule} from './admin/admin.module';
import {AdminRoutingModule} from './admin/admin-routing.module';
import { BestsellersComponent } from './components/books/bestsellers/bestsellers.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    FooterComponent,
    SliderComponent,
    LoginComponent,
    RegisterComponent,
    BooksComponent,
    LanguagesComponent,
    ReadingComponent,
    CategoriesComponent,
    BestsellersComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    AdminRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// {
// provide: HTTP_INTERCEPTORS,
// useClass: JwtInterceptor,
// multi: true
// }
